// Universal Quote Form Handler - Web3Forms
// Sends email to company + confirmation email to customer (7 languages)

var QUOTE_FORM_ACCESS_KEY = 'a590c8e5-6cb3-452f-9bf6-f17d591d86f8';

// Customer confirmation messages in 7 languages
var _confirmMessages = {
    tr: { subject: 'Teklif Talebiniz Alındı - Girişim Makina', body: 'Sayın {name},\n\nTeklif talebiniz başarıyla alınmıştır.\n\nÜrün/Konu: {product}\nFirma: {company}\n\nEn kısa sürede size dönüş yapacağız.\n\nSaygılarımızla,\nGirişim Makina\nTel: +90 212 879 29 27\nwww.girisimmak.com' },
    en: { subject: 'Your Quote Request Received - Girisim Makina', body: 'Dear {name},\n\nYour quote request has been received successfully.\n\nProduct/Subject: {product}\nCompany: {company}\n\nWe will get back to you as soon as possible.\n\nBest regards,\nGirisim Makina\nTel: +90 212 879 29 27\nwww.girisimmak.com' },
    ru: { subject: 'Ваш запрос на коммерческое предложение получен - Girisim Makina', body: 'Уважаемый(ая) {name},\n\nВаш запрос на коммерческое предложение успешно получен.\n\nПродукт/Тема: {product}\nКомпания: {company}\n\nМы свяжемся с вами в ближайшее время.\n\nС уважением,\nGirisim Makina\nТел: +90 212 879 29 27\nwww.girisimmak.com' },
    ar: { subject: 'تم استلام طلب عرض الأسعار - Girisim Makina', body: 'عزيزي {name}،\n\nتم استلام طلب عرض الأسعار الخاص بك بنجاح.\n\nالمنتج/الموضوع: {product}\nالشركة: {company}\n\nسنعود إليك في أقرب وقت ممكن.\n\nمع أطيب التحيات،\nGirisim Makina\nهاتف: +90 212 879 29 27\nwww.girisimmak.com' },
    fr: { subject: 'Votre demande de devis a été reçue - Girisim Makina', body: 'Cher(e) {name},\n\nVotre demande de devis a été reçue avec succès.\n\nProduit/Sujet: {product}\nEntreprise: {company}\n\nNous vous recontacterons dans les plus brefs délais.\n\nCordialement,\nGirisim Makina\nTél: +90 212 879 29 27\nwww.girisimmak.com' },
    pt: { subject: 'Seu pedido de cotação foi recebido - Girisim Makina', body: 'Prezado(a) {name},\n\nSeu pedido de cotação foi recebido com sucesso.\n\nProduto/Assunto: {product}\nEmpresa: {company}\n\nEntraremos em contato o mais breve possível.\n\nAtenciosamente,\nGirisim Makina\nTel: +90 212 879 29 27\nwww.girisimmak.com' },
    es: { subject: 'Su solicitud de cotización fue recibida - Girisim Makina', body: 'Estimado/a {name},\n\nSu solicitud de cotización ha sido recibida exitosamente.\n\nProducto/Tema: {product}\nEmpresa: {company}\n\nNos pondremos en contacto con usted lo antes posible.\n\nSaludos cordiales,\nGirisim Makina\nTel: +90 212 879 29 27\nwww.girisimmak.com' }
};

// Send confirmation email to customer
function sendCustomerConfirmation(name, email, product, company) {
    if (!email) return;
    var lang = (typeof localStorage !== 'undefined' && localStorage.getItem('girisim_lang')) || 'tr';
    var msg = _confirmMessages[lang] || _confirmMessages['tr'];
    var body = msg.body.replace(/\{name\}/g, name || '').replace(/\{product\}/g, product || '-').replace(/\{company\}/g, company || '-');

    var payload = new FormData();
    payload.append('access_key', QUOTE_FORM_ACCESS_KEY);
    payload.append('subject', msg.subject);
    payload.append('from_name', 'Girişim Makina');
    payload.append('to', email);
    payload.append('message', body);

    // Fire and forget - don't block on customer email
    fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload }).catch(function() {});
}

// Product page quote form handler
function submitQuoteForm(e) {
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('button[type="submit"]');
    var originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
    btn.disabled = true;

    var data = new FormData(form);
    var product = data.get('product') || '';
    var name = data.get('name') || '';
    var email = data.get('email') || '';
    var phone = data.get('phone') || '-';
    var company = data.get('company') || '-';
    var message = data.get('message') || '';

    var payload = new FormData();
    payload.append('access_key', QUOTE_FORM_ACCESS_KEY);
    payload.append('subject', 'Teklif Talebi: ' + product + ' - ' + company);
    payload.append('from_name', 'Girişim Makina Web Sitesi');
    payload.append('replyto', email);
    payload.append('Ürün', product);
    payload.append('Ad Soyad', name);
    payload.append('E-posta', email);
    payload.append('Telefon', phone);
    payload.append('Firma', company);
    if (message) payload.append('Mesaj', message);
    payload.append('Kaynak Sayfa', window.location.href);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
    })
    .then(function(response) { return response.json(); })
    .then(function(result) {
        if (result.success) {
            // Send confirmation to customer
            sendCustomerConfirmation(name, email, product, company);
            form.innerHTML = '<div class="quote-success"><i class="fas fa-check-circle"></i><h4>Talebiniz Alındı!</h4><p>En kısa sürede size dönüş yapacağız.</p></div>';
        } else {
            alert('Hata: ' + (result.message || 'Bilinmeyen hata'));
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        }
    })
    .catch(function(err) {
        alert('Bağlantı hatası. Lütfen tekrar deneyin.');
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    });
}
