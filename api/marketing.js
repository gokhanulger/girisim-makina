// Admin panel istekleri: test maili ve tek lead'e anlık gönderim
// Yetki: panelde oturum açmış kullanıcının Supabase JWT'si (Authorization: Bearer)

import { getSettings, sendToLead, logSend, rest, verifyUser } from './_marketing.js';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const user = await verifyUser(req);
        if (!user) return res.status(401).json({ error: 'Oturum doğrulanamadı — panele tekrar giriş yapın' });

        const { action, to, variant, accountIndex, leadId } = req.body || {};
        const settings = await getSettings();
        const accIdx = (accountIndex != null && accountIndex !== '') ? Number(accountIndex) : null;

        if (action === 'test') {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to || '')) {
                return res.status(400).json({ error: 'Geçerli bir test adresi girin' });
            }
            const sampleLead = {
                email: to,
                company: variant === 'generic' ? '' : 'Örnek Firma A.Ş.',
                name: variant === 'generic' ? '' : 'Örnek İsim',
                website: 'https://ornek-firma.com'
            };
            const { info, account } = await sendToLead(settings, sampleLead, variant || 'personal', accIdx);
            await logSend({ type: 'test', email: to, from_email: account.smtpUser, status: 'sent' });
            return res.status(200).json({ ok: true, sentFrom: account.smtpUser, messageId: info.messageId || null });
        }

        if (action === 'sendNow') {
            if (!leadId) return res.status(400).json({ error: 'leadId gerekli' });
            const leads = await rest(`marketing_leads?id=eq.${encodeURIComponent(leadId)}`);
            const lead = leads && leads[0];
            if (!lead) return res.status(404).json({ error: 'Lead bulunamadı' });

            const { info, account } = await sendToLead(settings, lead, null, accIdx);
            await rest(`marketing_leads?id=eq.${encodeURIComponent(leadId)}`, {
                method: 'PATCH',
                headers: { Prefer: 'return=minimal' },
                body: JSON.stringify({
                    status: 'sent',
                    sent_at: new Date().toISOString(),
                    sent_from: account.smtpUser,
                    message_id: info.messageId || null,
                    error: null
                })
            });
            await logSend({ type: 'manual', lead_id: lead.id, email: lead.email, company: lead.company || '', from_email: account.smtpUser, status: 'sent' });
            return res.status(200).json({ ok: true, sentFrom: account.smtpUser });
        }

        return res.status(400).json({ error: 'Bilinmeyen action' });
    } catch (e) {
        console.error('marketing:', e);
        return res.status(500).json({ error: String(e.message || e) });
    }
}
