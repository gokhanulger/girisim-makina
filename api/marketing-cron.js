// Zamanlanmış kampanya gönderimi
// Supabase pg_cron tarafından 15 dakikada bir çağrılır (supabase/marketing-setup.sql)
// Yetki: Authorization: Bearer <CRON_SECRET>

import { getSettings, sendToLead, logSend, rest, istanbulParts, validAccounts } from './_marketing.js';

export default async function handler(req, res) {
    const secret = process.env.CRON_SECRET;
    const auth = req.headers.authorization || '';
    if (!secret || auth !== `Bearer ${secret}`) {
        return res.status(401).json({ error: 'Yetkisiz' });
    }

    try {
        const settings = await getSettings();
        if (!settings.enabled) return res.status(200).json({ skipped: 'kampanya kapalı' });

        const { dateKey, hour, weekday } = istanbulParts();
        if (hour < settings.startHour || hour >= settings.endHour) {
            return res.status(200).json({ skipped: 'saat aralığı dışı' });
        }
        if (settings.weekendsOff && (weekday === 'Sat' || weekday === 'Sun')) {
            return res.status(200).json({ skipped: 'hafta sonu' });
        }

        const statsRows = await rest('marketing_stats?id=eq.1');
        const stats = (statsRows && statsRows[0]) || {};
        const sentToday = stats.date_key === dateKey ? (stats.sent_today || 0) : 0;
        if (sentToday >= settings.dailyLimit) {
            return res.status(200).json({ skipped: 'günlük limit doldu', sentToday });
        }

        validAccounts(settings); // hesap tanımlı değilse net hata ver

        const batchSize = Math.min(Number(settings.perRun) || 1, settings.dailyLimit - sentToday);
        const leads = await rest(`marketing_leads?status=eq.pending&order=created_at.asc&limit=${batchSize}`);
        if (!leads || !leads.length) return res.status(200).json({ skipped: 'bekleyen lead yok' });

        const results = [];
        let sentCount = 0;
        for (const lead of leads) {
            try {
                const { info, account } = await sendToLead(settings, lead);
                await rest(`marketing_leads?id=eq.${lead.id}`, {
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
                await logSend({ type: 'campaign', lead_id: lead.id, email: lead.email, company: lead.company || '', from_email: account.smtpUser, status: 'sent' });
                sentCount++;
                results.push({ email: lead.email, status: 'sent', from: account.smtpUser });
            } catch (e) {
                const errMsg = String(e.message || e).slice(0, 500);
                await rest(`marketing_leads?id=eq.${lead.id}`, {
                    method: 'PATCH',
                    headers: { Prefer: 'return=minimal' },
                    body: JSON.stringify({ status: 'failed', error: errMsg })
                });
                await logSend({ type: 'campaign', lead_id: lead.id, email: lead.email, company: lead.company || '', status: 'failed', error: errMsg });
                results.push({ email: lead.email, status: 'failed', error: errMsg });
            }
        }

        if (sentCount > 0) {
            await rest('marketing_stats', {
                method: 'POST',
                headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
                body: JSON.stringify({
                    id: 1,
                    date_key: dateKey,
                    sent_today: sentToday + sentCount,
                    total_sent: (stats.total_sent || 0) + sentCount,
                    last_run_at: new Date().toISOString()
                })
            });
        }

        return res.status(200).json({ sent: sentCount, results });
    } catch (e) {
        console.error('marketing-cron:', e);
        return res.status(500).json({ error: String(e.message || e) });
    }
}
