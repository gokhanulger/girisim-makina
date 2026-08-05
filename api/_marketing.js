// Email pazarlama - ortak yardımcılar (route değil, Vercel _ önekli dosyaları yayınlamaz)
// Veri: Supabase (PostgREST üzerinden), gönderim: nodemailer (SMTP)

import nodemailer from 'nodemailer';

export const SUPABASE_URL = process.env.SUPABASE_URL || 'https://yvptjiowxqllxfzlkosy.supabase.co';
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cHRqaW93eHFsbHhmemxrb3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NTQxMTksImV4cCI6MjA4NTAzMDExOX0.9soLQNOJZEpQx__vhJEQzB9SBImPi-ccceB-23WNWAQ';

const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function serviceHeaders() {
    if (!SERVICE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY tanımlı değil (Vercel env)');
    return {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json'
    };
}

export async function rest(path, options = {}) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
        ...options,
        headers: { ...serviceHeaders(), ...(options.headers || {}) }
    });
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`Supabase ${options.method || 'GET'} ${path}: ${res.status} ${body.slice(0, 300)}`);
    }
    if (res.status === 204) return null;
    const text = await res.text();
    return text ? JSON.parse(text) : null;
}

// Panelden gelen istekteki Supabase oturumunu doğrula (sadece giriş yapmış adminler)
export async function verifyUser(req) {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
    if (!token) return null;
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${token}` }
    });
    if (!res.ok) return null;
    const user = await res.json();
    return user && user.email ? user : null;
}

export const DEFAULT_SETTINGS = {
    enabled: false,
    dailyLimit: 30,
    perRun: 1,
    startHour: 9,
    endHour: 18,
    weekendsOff: true,
    accounts: [],
    cc: '',
    subject: '',
    bodyHtml: '',
    subjectGeneric: '',
    bodyGenericHtml: ''
};

export async function getSettings() {
    const rows = await rest('marketing_settings?id=eq.1&select=data');
    return { ...DEFAULT_SETTINGS, ...((rows && rows[0] && rows[0].data) || {}) };
}

const GENERIC_DOMAINS = new Set([
    'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com',
    'yandex.com', 'yandex.com.tr', 'mail.com', 'live.com', 'msn.com',
    'mynet.com', 'windowslive.com', 'gmx.com', 'protonmail.com', 'proton.me'
]);

export function isGenericEmail(email) {
    const dom = String(email || '').toLowerCase().split('@')[1];
    return !dom || GENERIC_DOMAINS.has(dom);
}

export function istanbulParts() {
    const now = new Date();
    return {
        dateKey: new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul' }).format(now),
        hour: parseInt(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Istanbul', hour: '2-digit', hour12: false }).format(now), 10),
        weekday: new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Istanbul', weekday: 'short' }).format(now)
    };
}

// Spintax: {a|b|c} → rastgele seçim; {{degisken}} kalıplarına dokunmaz
function spin(text) {
    let out = String(text || '');
    const re = /\{([^{}]*\|[^{}]*)\}/;
    let m, guard = 0;
    while ((m = out.match(re)) && guard++ < 100) {
        const options = m[1].split('|');
        out = out.slice(0, m.index) + options[Math.floor(Math.random() * options.length)] + out.slice(m.index + m[0].length);
    }
    return out;
}

function fillTemplate(tpl, lead) {
    return spin(String(tpl || '')
        .replace(/\{\{firma\}\}/g, lead.company || '')
        .replace(/\{\{isim\}\}/g, lead.name || '')
        .replace(/\{\{email\}\}/g, lead.email || '')
        .replace(/\{\{website\}\}/g, lead.website || ''));
}

export function validAccounts(settings) {
    const accounts = (settings.accounts || []).filter(a => a && a.smtpHost && a.smtpUser && a.smtpPass);
    if (!accounts.length) throw new Error('Geçerli SMTP hesabı yok (panelden en az bir hesap tanımlayın)');
    return accounts;
}

function pickAccount(settings, accountIndex) {
    const accounts = validAccounts(settings);
    if (accountIndex != null && accounts[accountIndex]) return accounts[accountIndex];
    return accounts[Math.floor(Math.random() * accounts.length)];
}

function pickTemplate(settings, lead, forceVariant) {
    const useGeneric = forceVariant
        ? forceVariant === 'generic'
        : (isGenericEmail(lead.email) || !(lead.company || '').trim());
    if (useGeneric && settings.subjectGeneric && settings.bodyGenericHtml) {
        return { subject: settings.subjectGeneric, body: settings.bodyGenericHtml };
    }
    return { subject: settings.subject, body: settings.bodyHtml };
}

export async function sendToLead(settings, lead, forceVariant, accountIndex) {
    const account = pickAccount(settings, accountIndex);
    const port = Number(account.smtpPort) || 465;
    const transporter = nodemailer.createTransport({
        host: account.smtpHost,
        port,
        secure: port === 465,
        auth: { user: account.smtpUser, pass: account.smtpPass }
    });
    const tpl = pickTemplate(settings, lead, forceVariant);
    const subject = fillTemplate(tpl.subject, lead);
    const html = fillTemplate(tpl.body, lead);
    const text = html.replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n\n')
        .replace(/<[^>]+>/g, '').replace(/\n{3,}/g, '\n\n').trim();
    const mail = {
        from: `"${account.fromName || 'Girişim Makina'}" <${account.smtpUser}>`,
        to: lead.email,
        subject, html, text
    };
    if (account.replyTo) mail.replyTo = account.replyTo;
    if (settings.cc) mail.cc = settings.cc;
    const info = await transporter.sendMail(mail);
    return { info, account };
}

export async function logSend(entry) {
    try {
        await rest('marketing_log', {
            method: 'POST',
            headers: { Prefer: 'return=minimal' },
            body: JSON.stringify(entry)
        });
    } catch (e) {
        console.error('Log yazılamadı:', e.message);
    }
}
