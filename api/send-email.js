// Vercel Serverless Function - Email sender via Resend
// POST /api/send-email

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) return res.status(500).json({ error: 'Resend API key not configured' });

    const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'info@girisimmak.com';
    const FROM_EMAIL = process.env.FROM_EMAIL || 'Girişim Makina <noreply@girisimmak.com>';

    try {
        const body = req.body;
        const { name, email, phone, company, subject, message, product, sourcePage, lang } = body;

        const productOrSubject = product || subject || '-';
        const emailSubject = `Teklif Talebi: ${productOrSubject} - ${company || name || 'Web'}`;

        // 1. Send to company
        const companyResp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: FROM_EMAIL,
                to: [COMPANY_EMAIL],
                reply_to: email || undefined,
                subject: emailSubject,
                html: buildCompanyEmail({ name, email, phone, company, product: productOrSubject, message, sourcePage })
            })
        });

        if (!companyResp.ok) {
            const err = await companyResp.text();
            console.error('Resend company email error:', err);
            return res.status(500).json({ success: false, error: 'Email gönderilemedi' });
        }

        // 2. Send confirmation to customer (if email provided)
        if (email) {
            const confirmMsg = getConfirmationMessage(lang || 'tr', { name, product: productOrSubject, company });
            await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${RESEND_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: FROM_EMAIL,
                    to: [email],
                    subject: confirmMsg.subject,
                    html: confirmMsg.html
                })
            }).catch(err => console.error('Customer confirmation error:', err));
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Send email error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

function buildCompanyEmail({ name, email, phone, company, product, message, sourcePage }) {
    return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#e63946;color:white;padding:20px 24px;border-radius:8px 8px 0 0">
            <h2 style="margin:0;font-size:18px">📩 Yeni Teklif Talebi</h2>
        </div>
        <div style="background:#fff;border:1px solid #eee;padding:24px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#888;width:120px">Ad Soyad</td><td style="padding:8px 0;font-weight:600">${esc(name)}</td></tr>
                <tr><td style="padding:8px 0;color:#888">E-posta</td><td style="padding:8px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
                <tr><td style="padding:8px 0;color:#888">Telefon</td><td style="padding:8px 0">${esc(phone || '-')}</td></tr>
                <tr><td style="padding:8px 0;color:#888">Firma</td><td style="padding:8px 0">${esc(company || '-')}</td></tr>
                <tr><td style="padding:8px 0;color:#888">Ürün/Konu</td><td style="padding:8px 0;font-weight:600;color:#e63946">${esc(product)}</td></tr>
                ${message ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top">Mesaj</td><td style="padding:8px 0">${esc(message)}</td></tr>` : ''}
                ${sourcePage ? `<tr><td style="padding:8px 0;color:#888">Kaynak</td><td style="padding:8px 0;font-size:12px;color:#aaa">${esc(sourcePage)}</td></tr>` : ''}
            </table>
        </div>
        <p style="color:#aaa;font-size:11px;margin-top:12px;text-align:center">Girişim Makina Web Sitesi - Otomatik bildirim</p>
    </div>`;
}

function getConfirmationMessage(lang, data) {
    const msgs = {
        tr: {
            subject: 'Teklif Talebiniz Alındı - Girişim Makina',
            greeting: 'Sayın',
            body: 'Teklif talebiniz başarıyla alınmıştır. En kısa sürede size dönüş yapacağız.',
            product: 'Ürün/Konu',
            company: 'Firma',
            regards: 'Saygılarımızla'
        },
        en: {
            subject: 'Your Quote Request Received - Girisim Makina',
            greeting: 'Dear',
            body: 'Your quote request has been received successfully. We will get back to you as soon as possible.',
            product: 'Product/Subject',
            company: 'Company',
            regards: 'Best regards'
        },
        ru: {
            subject: 'Ваш запрос получен - Girisim Makina',
            greeting: 'Уважаемый(ая)',
            body: 'Ваш запрос на коммерческое предложение успешно получен. Мы свяжемся с вами в ближайшее время.',
            product: 'Продукт/Тема',
            company: 'Компания',
            regards: 'С уважением'
        },
        ar: {
            subject: 'تم استلام طلبكم - Girisim Makina',
            greeting: 'عزيزي',
            body: 'تم استلام طلب عرض الأسعار الخاص بك بنجاح. سنعود إليك في أقرب وقت ممكن.',
            product: 'المنتج/الموضوع',
            company: 'الشركة',
            regards: 'مع أطيب التحيات'
        },
        fr: {
            subject: 'Votre demande reçue - Girisim Makina',
            greeting: 'Cher(e)',
            body: 'Votre demande de devis a été reçue avec succès. Nous vous recontacterons dans les plus brefs délais.',
            product: 'Produit/Sujet',
            company: 'Entreprise',
            regards: 'Cordialement'
        },
        pt: {
            subject: 'Seu pedido recebido - Girisim Makina',
            greeting: 'Prezado(a)',
            body: 'Seu pedido de cotação foi recebido com sucesso. Entraremos em contato o mais breve possível.',
            product: 'Produto/Assunto',
            company: 'Empresa',
            regards: 'Atenciosamente'
        },
        es: {
            subject: 'Su solicitud recibida - Girisim Makina',
            greeting: 'Estimado/a',
            body: 'Su solicitud de cotización ha sido recibida exitosamente. Nos pondremos en contacto con usted lo antes posible.',
            product: 'Producto/Tema',
            company: 'Empresa',
            regards: 'Saludos cordiales'
        }
    };

    const m = msgs[lang] || msgs['tr'];

    return {
        subject: m.subject,
        html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#1a1a2e;padding:24px;text-align:center;border-radius:8px 8px 0 0">
                <h1 style="color:#fff;margin:0;font-size:20px">GİRİŞİM MAKİNA</h1>
                <p style="color:#e63946;margin:4px 0 0;font-size:12px;letter-spacing:2px">PACKAGING MACHINERY</p>
            </div>
            <div style="background:#fff;border:1px solid #eee;padding:32px 24px;border-radius:0 0 8px 8px">
                <p style="font-size:16px;color:#333">${m.greeting} <strong>${esc(data.name)}</strong>,</p>
                <p style="color:#555;line-height:1.7">${m.body}</p>
                <div style="background:#f8f9fa;border-radius:8px;padding:16px;margin:20px 0">
                    <p style="margin:0 0 8px;color:#888;font-size:13px">${m.product}:</p>
                    <p style="margin:0;font-weight:600;color:#e63946;font-size:15px">${esc(data.product)}</p>
                    ${data.company ? `<p style="margin:8px 0 0;color:#888;font-size:13px">${m.company}: <strong style="color:#333">${esc(data.company)}</strong></p>` : ''}
                </div>
                <p style="color:#555">${m.regards},<br><strong>Girişim Makina</strong></p>
                <hr style="border:none;border-top:1px solid #eee;margin:20px 0">
                <p style="color:#aaa;font-size:12px;text-align:center">
                    📞 +90 212 879 29 27 &nbsp;|&nbsp; 📧 info@girisimmak.com<br>
                    🌐 www.girisimmak.com
                </p>
            </div>
        </div>`
    };
}

function esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
