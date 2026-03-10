// Universal Quote Form Handler - Resend via Vercel API
// Sends email to company + confirmation to customer (7 languages)

var QUOTE_API_URL = '/api/send-email';

// Submit form data to API
function sendQuoteEmail(formFields) {
    var lang = 'tr';
    try { lang = localStorage.getItem('girisim_lang') || 'tr'; } catch(e) {}

    var payload = Object.assign({}, formFields, {
        lang: lang,
        sourcePage: window.location.href
    });

    return fetch(QUOTE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(function(r) { return r.json(); });
}

// Product page quote form handler (used in product pages via onsubmit)
function submitQuoteForm(e) {
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('button[type="submit"]');
    var originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
    btn.disabled = true;

    var data = new FormData(form);

    sendQuoteEmail({
        name: data.get('name') || '',
        email: data.get('email') || '',
        phone: data.get('phone') || '-',
        company: data.get('company') || '-',
        product: data.get('product') || '',
        message: data.get('message') || ''
    })
    .then(function(result) {
        if (result.success) {
            form.innerHTML = '<div class="quote-success"><i class="fas fa-check-circle"></i><h4>Talebiniz Alındı!</h4><p>En kısa sürede size dönüş yapacağız.</p></div>';
        } else {
            alert('Hata: ' + (result.error || 'Bilinmeyen hata'));
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        }
    })
    .catch(function() {
        alert('Bağlantı hatası. Lütfen tekrar deneyin.');
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    });
}
