// Email Pazarlama - Admin Panel Modülü (Supabase veri + Vercel API gönderim)
// Tablolar: marketing_settings, marketing_stats, marketing_leads, marketing_log
// Gönderim: /api/marketing (test/anlık) ve /api/marketing-cron (zamanlanmış)

(function () {
    'use strict';

    let mkLeads = [];

    const GENERIC_DOMAINS = new Set([
        'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com',
        'yandex.com', 'yandex.com.tr', 'mail.com', 'live.com', 'msn.com',
        'mynet.com', 'windowslive.com', 'gmx.com', 'protonmail.com', 'proton.me'
    ]);

    const DEFAULT_BODY = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#222;line-height:1.7;max-width:580px">
<p>{Merhaba|İyi günler},</p>
<p>Girişim Makina'dan yazıyorum. Gıda üretim ve paketleme makinaları üretiyoruz;
{{firma}} olarak faaliyet alanınızı görünce {yazmak istedim|iletişime geçmek istedim}.</p>
<p>Gofret, bar, çikolata kaplama hatlarından flow-pack ve VFFS paketleme makinalarına kadar
anahtar teslim çözümler sunuyoruz. {30'dan fazla ülkeye|Dünya genelinde 30+ ülkeye} kurulum yaptık.</p>
<p>Üretim hattınızla ilgili bir ihtiyacınız olursa {memnuniyetle görüşürüz|detayları konuşabiliriz}.
Web sitemizden makinalarımıza göz atabilirsiniz.</p>
<p>{Saygılarımla|İyi çalışmalar},<br>
<strong>Girişim Makina</strong><br>
<a href="https://girisimmak.com">girisimmak.com</a><br>
Tel/WhatsApp: +90 546 879 29 27</p>
<p style="font-size:12px;color:#888;margin-top:24px">Not: İletişim adresinizi web sitenizden aldık.
Bu tarz maillerle ilgilenmiyorsanız "çıkar" diye yanıtlamanız yeterli, bir daha yazmayız.</p>
</div>`;

    const DEFAULT_BODY_GENERIC = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#222;line-height:1.7;max-width:580px">
<p>{Merhaba|İyi günler},</p>
<p>Girişim Makina'dan yazıyorum. {Gıda üretim ve paketleme makinaları üretiyoruz|Gıda sektörü için üretim ve paketleme hatları kuruyoruz}.</p>
<p>Gofret, bar, çikolata kaplama hatlarından flow-pack ve VFFS paketleme makinalarına kadar
anahtar teslim çözümler sunuyoruz. {30'dan fazla ülkeye|Dünya genelinde 30+ ülkeye} kurulum yaptık.</p>
<p>Üretim hattı veya paketleme makinası ihtiyacınız olursa {memnuniyetle görüşürüz|detayları konuşabiliriz}.</p>
<p>{Saygılarımla|İyi çalışmalar},<br>
<strong>Girişim Makina</strong><br>
<a href="https://girisimmak.com">girisimmak.com</a><br>
Tel/WhatsApp: +90 546 879 29 27</p>
<p style="font-size:12px;color:#888;margin-top:24px">Bu tarz maillerle ilgilenmiyorsanız "çıkar" diye yanıtlamanız yeterli, bir daha yazmayız.</p>
</div>`;

    function el(id) { return document.getElementById(id); }
    function sb() { return window._supabaseClient; }
    function ready() { return !!sb(); }

    function esc(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    function toast(msg, type) {
        if (typeof showToast === 'function') showToast(msg, type);
        else console.log('[' + type + '] ' + msg);
    }
    function isGenericEmail(email) {
        const dom = String(email || '').toLowerCase().split('@')[1];
        return !dom || GENERIC_DOMAINS.has(dom);
    }

    async function authToken() {
        const { data } = await sb().auth.getSession();
        return data && data.session ? data.session.access_token : null;
    }

    async function apiPost(payload) {
        const token = await authToken();
        if (!token) throw new Error('Oturum bulunamadı — panele tekrar giriş yapın');
        const res = await fetch('/api/marketing', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify(payload)
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || ('HTTP ' + res.status));
        return data;
    }

    // --- Veri yükleme ---
    window.loadMarketingData = async function () {
        if (!ready()) { toast('Supabase bağlantısı yok', 'error'); return; }
        try {
            const [settingsRes, statsRes, leadsRes] = await Promise.all([
                sb().from('marketing_settings').select('data').eq('id', 1).maybeSingle(),
                sb().from('marketing_stats').select('*').eq('id', 1).maybeSingle(),
                sb().from('marketing_leads').select('*').order('created_at', { ascending: false }).limit(2000)
            ]);

            const s = (settingsRes.data && settingsRes.data.data) || {};
            el('mkEnabled').checked = !!s.enabled;
            el('mkDailyLimit').value = s.dailyLimit || 30;
            el('mkStartHour').value = (s.startHour != null) ? s.startHour : 9;
            el('mkEndHour').value = (s.endHour != null) ? s.endHour : 18;
            el('mkWeekendsOff').checked = (s.weekendsOff !== false);
            const accounts = s.accounts || [];
            for (let i = 0; i < 3; i++) {
                const a = accounts[i] || {};
                el('mkAcc' + i + 'User').value = a.smtpUser || '';
                el('mkAcc' + i + 'Pass').value = a.smtpPass || '';
                el('mkAcc' + i + 'Host').value = a.smtpHost || '';
                el('mkAcc' + i + 'Port').value = a.smtpPort || 465;
                el('mkAcc' + i + 'FromName').value = a.fromName || 'Girişim Makina';
                el('mkAcc' + i + 'ReplyTo').value = a.replyTo || '';
            }
            el('mkCc').value = s.cc || '';
            el('mkSubject').value = s.subject || '{{firma}} için üretim ve paketleme hattı çözümleri';
            el('mkBody').value = s.bodyHtml || DEFAULT_BODY;
            el('mkSubjectGeneric').value = s.subjectGeneric || 'Gıda üretim ve paketleme makinaları hakkında';
            el('mkBodyGeneric').value = s.bodyGenericHtml || DEFAULT_BODY_GENERIC;

            mkLeads = leadsRes.data || [];
            const stats = statsRes.data || {};
            const todayKey = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul' }).format(new Date());
            el('mkStatTotal').textContent = mkLeads.length;
            el('mkStatPending').textContent = mkLeads.filter(l => l.status === 'pending').length;
            el('mkStatSent').textContent = mkLeads.filter(l => l.status === 'sent').length;
            el('mkStatToday').textContent = (stats.date_key === todayKey) ? (stats.sent_today || 0) : 0;

            renderMarketingLeads();
        } catch (e) {
            console.error('[Marketing] Yükleme hatası:', e);
            toast('Veriler yüklenemedi: ' + e.message, 'error');
        }
    };

    // --- Ayarları kaydet ---
    window.saveMarketingSettings = async function () {
        if (!ready()) { toast('Supabase bağlantısı yok', 'error'); return; }
        const data = {
            enabled: el('mkEnabled').checked,
            dailyLimit: parseInt(el('mkDailyLimit').value, 10) || 30,
            perRun: 1,
            startHour: parseInt(el('mkStartHour').value, 10) || 9,
            endHour: parseInt(el('mkEndHour').value, 10) || 18,
            weekendsOff: el('mkWeekendsOff').checked,
            accounts: [0, 1, 2].map(i => ({
                smtpUser: el('mkAcc' + i + 'User').value.trim(),
                smtpPass: el('mkAcc' + i + 'Pass').value,
                smtpHost: el('mkAcc' + i + 'Host').value.trim(),
                smtpPort: parseInt(el('mkAcc' + i + 'Port').value, 10) || 465,
                fromName: el('mkAcc' + i + 'FromName').value.trim() || 'Girişim Makina',
                replyTo: el('mkAcc' + i + 'ReplyTo').value.trim()
            })).filter(a => a.smtpUser && a.smtpHost),
            cc: el('mkCc').value.trim(),
            subject: el('mkSubject').value.trim(),
            bodyHtml: el('mkBody').value,
            subjectGeneric: el('mkSubjectGeneric').value.trim(),
            bodyGenericHtml: el('mkBodyGeneric').value
        };
        try {
            const { error } = await sb().from('marketing_settings')
                .upsert({ id: 1, data: data, updated_at: new Date().toISOString() });
            if (error) throw error;
            toast('Email pazarlama ayarları kaydedildi', 'success');
        } catch (e) {
            console.error('[Marketing] Kaydetme hatası:', e);
            toast('Kaydedilemedi: ' + (e.message || e), 'error');
        }
    };

    // --- Toplu lead ekleme ---
    window.importMarketingLeads = async function () {
        if (!ready()) { toast('Supabase bağlantısı yok', 'error'); return; }
        const raw = el('mkBulkLeads').value.trim();
        if (!raw) { toast('Eklenecek lead girilmedi', 'warning'); return; }

        const existing = new Set(mkLeads.map(l => (l.email || '').toLowerCase()));
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const rows = [];
        let skipped = 0, invalid = 0;

        for (const line of raw.split('\n')) {
            if (!line.trim()) continue;
            const parts = line.split(',').map(p => p.trim());
            const email = (parts[0] || '').toLowerCase();
            if (!emailRe.test(email)) { invalid++; continue; }
            if (existing.has(email)) { skipped++; continue; }
            existing.add(email);
            rows.push({
                email: email,
                company: parts[1] || '',
                name: parts[2] || '',
                website: parts[3] || '',
                status: 'pending',
                created_by: (currentUser && currentUser.email) || null
            });
        }

        if (!rows.length) {
            toast(`Yeni lead eklenmedi (${skipped} zaten kayıtlı, ${invalid} geçersiz)`, 'warning');
            return;
        }
        try {
            const { error } = await sb().from('marketing_leads').insert(rows);
            if (error) throw error;
            el('mkBulkLeads').value = '';
            toast(`${rows.length} lead eklendi${skipped ? `, ${skipped} zaten kayıtlıydı` : ''}${invalid ? `, ${invalid} geçersiz` : ''}`, 'success');
            loadMarketingData();
        } catch (e) {
            toast('Lead eklenemedi: ' + (e.message || e), 'error');
        }
    };

    // --- Lead tablosu ---
    window.renderMarketingLeads = function () {
        const tbody = el('mkLeadTableBody');
        if (!tbody) return;
        const filter = el('mkLeadFilter').value;
        const search = el('mkLeadSearch').value.toLowerCase().trim();

        let rows = mkLeads;
        if (filter) rows = rows.filter(l => l.status === filter);
        if (search) rows = rows.filter(l =>
            (l.email || '').toLowerCase().includes(search) ||
            (l.company || '').toLowerCase().includes(search));

        if (!rows.length) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:#888;">Kayıt yok</td></tr>';
            return;
        }

        const badge = {
            pending: '<span class="status-badge pending">Bekliyor</span>',
            sent: '<span class="status-badge complete">Gönderildi</span>',
            failed: '<span class="status-badge error">Hata</span>',
            excluded: '<span class="status-badge">Hariç</span>'
        };

        tbody.innerHTML = rows.slice(0, 800).map(l => {
            const variant = (isGenericEmail(l.email) || !(l.company || '').trim()) ? 'Generic' : 'Kurumsal';
            const sentAt = l.sent_at ? new Date(l.sent_at).toLocaleDateString('tr-TR') : '-';
            const err = l.status === 'failed' && l.error ? ` title="${esc(l.error)}"` : '';
            const from = l.sent_from ? ` <small style="color:#888;">(${esc(String(l.sent_from).split('@')[0])})</small>` : '';
            return `<tr>
                <td>${esc(l.email)}</td>
                <td>${esc(l.company) || '<span style="color:#aaa;">-</span>'}</td>
                <td>${variant}</td>
                <td${err}>${badge[l.status] || esc(l.status)}</td>
                <td>${sentAt}${from}</td>
                <td class="mk-actions">
                    ${l.status === 'pending' ? `<button class="btn btn-sm btn-outline" onclick="marketingSendNow('${l.id}')" title="Şimdi gönder"><i class="fas fa-paper-plane"></i></button>` : ''}
                    ${l.status === 'pending' ? `<button class="btn btn-sm btn-outline" onclick="marketingSetStatus('${l.id}','excluded')" title="Hariç tut"><i class="fas fa-ban"></i></button>` : ''}
                    ${(l.status === 'excluded' || l.status === 'failed') ? `<button class="btn btn-sm btn-outline" onclick="marketingSetStatus('${l.id}','pending')" title="Tekrar kuyruğa al"><i class="fas fa-redo"></i></button>` : ''}
                    <button class="btn btn-sm btn-danger" onclick="marketingDeleteLead('${l.id}')" title="Sil"><i class="fas fa-trash"></i></button>
                </td>
            </tr>`;
        }).join('');
    };

    window.marketingSetStatus = async function (id, status) {
        try {
            const { error } = await sb().from('marketing_leads').update({ status }).eq('id', id);
            if (error) throw error;
            const lead = mkLeads.find(l => l.id === id);
            if (lead) lead.status = status;
            renderMarketingLeads();
        } catch (e) { toast('Güncellenemedi: ' + (e.message || e), 'error'); }
    };

    window.marketingDeleteLead = async function (id) {
        if (!confirm('Bu lead silinsin mi?')) return;
        try {
            const { error } = await sb().from('marketing_leads').delete().eq('id', id);
            if (error) throw error;
            mkLeads = mkLeads.filter(l => l.id !== id);
            renderMarketingLeads();
        } catch (e) { toast('Silinemedi: ' + (e.message || e), 'error'); }
    };

    window.marketingSendNow = async function (leadId) {
        if (!confirm('Bu lead\'e ŞİMDİ mail gönderilsin mi?')) return;
        try {
            toast('Gönderiliyor...', 'info');
            const r = await apiPost({ action: 'sendNow', leadId });
            toast('Mail gönderildi' + (r.sentFrom ? ' (' + r.sentFrom + ')' : ''), 'success');
            loadMarketingData();
        } catch (e) { toast('Gönderilemedi: ' + e.message, 'error'); }
    };

    window.sendMarketingTest = async function () {
        const to = el('mkTestEmail').value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) { toast('Geçerli bir test adresi girin', 'warning'); return; }

        const resultBox = el('mkTestResult');
        const btn = el('mkTestBtn');
        btn.disabled = true;
        resultBox.style.display = 'block';
        resultBox.style.background = '#fff8e1';
        resultBox.style.color = '#8a6d3b';
        resultBox.textContent = 'Test maili gönderiliyor... (ayarları kaydettiyseniz)';

        try {
            const r = await apiPost({
                action: 'test',
                to: to,
                variant: el('mkTestVariant').value,
                accountIndex: el('mkTestAccount').value === '' ? null : parseInt(el('mkTestAccount').value, 10)
            });
            resultBox.style.background = '#e8f5e9';
            resultBox.style.color = '#2e7d32';
            resultBox.textContent = '✓ Test maili gönderildi: ' + to + (r.sentFrom ? ' (gönderen: ' + r.sentFrom + ')' : '');
        } catch (e) {
            resultBox.style.background = '#ffebee';
            resultBox.style.color = '#c62828';
            resultBox.textContent = '✗ Gönderilemedi: ' + e.message;
        } finally {
            btn.disabled = false;
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const navItem = document.querySelector('.sidebar-nav li[data-section="marketing"]');
        if (navItem) navItem.addEventListener('click', () => loadMarketingData());
    });
})();
