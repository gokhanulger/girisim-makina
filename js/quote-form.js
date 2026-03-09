// Product Quote Form - FormSubmit.co submission
// Sends email to export@girisimmak.com with CC to customer
// No registration required - just confirm email on first submission
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

    // FormSubmit.co payload
    var payload = new FormData();
    payload.append('name', name);
    payload.append('email', email);
    payload.append('phone', phone);
    payload.append('company', company);
    payload.append('product', product);
    if (message) payload.append('message', message);
    payload.append('_subject', 'Teklif Talebi: ' + product + ' - ' + company);
    payload.append('_cc', email);
    payload.append('_replyto', email);
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');
    payload.append('_source', window.location.href);

    fetch('https://formsubmit.co/ajax/export@girisimmak.com', {
        method: 'POST',
        body: payload
    })
    .then(function(response) { return response.json(); })
    .then(function(result) {
        if (result.success === 'true' || result.success === true) {
            form.innerHTML = '<div class="quote-success"><i class="fas fa-check-circle"></i><h4>Talebiniz Alındı!</h4><p>En kısa sürede size dönüş yapacağız.</p></div>';
        } else {
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        }
    })
    .catch(function() {
        alert('Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.');
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    });
}
