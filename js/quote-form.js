// Product Quote Form - Web3Forms submission
// Sends email with CC to customer
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

    // Web3Forms payload (same key used in main page teklifForm)
    var payload = new FormData();
    payload.append('access_key', 'a590c8e5-6cb3-452f-9bf6-f17d591d86f8');
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
            form.innerHTML = '<div class="quote-success"><i class="fas fa-check-circle"></i><h4>Talebiniz Alındı!</h4><p>En kısa sürede size dönüş yapacağız.</p></div>';
        } else {
            alert('Hata: ' + (result.message || 'Bilinmeyen hata. Lütfen tekrar deneyin.'));
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        }
    })
    .catch(function(err) {
        alert('Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.');
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    });
}
