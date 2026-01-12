/**
 * Girişim Makina - Shared Header Component
 * Bu dosya tüm sayfalarda aynı header'ı yükler
 */

(function() {
    // Sayfa derinliğini belirle (products/, products/flowpack/ vb.)
    const path = window.location.pathname;
    let basePath = '';

    if (path.includes('/products/flowpack/')) {
        basePath = '../../';
    } else if (path.includes('/products/')) {
        basePath = '../';
    } else {
        basePath = '';
    }

    // Header HTML
    const headerHTML = `
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="contact-info">
                    <a href="https://wa.me/905468792927" target="_blank"><i class="fab fa-whatsapp"></i> +90 546 879 29 27</a>
                    <a href="mailto:info@girisimmak.com"><i class="fas fa-envelope"></i> info@girisimmak.com</a>
                </div>
                <div class="language-social">
                    <div class="languages" id="languageSelector">
                        <a href="#" data-lang="tr" class="active">TR</a>
                        <a href="#" data-lang="en">EN</a>
                        <a href="#" data-lang="ru">RU</a>
                        <a href="#" data-lang="ar">AR</a>
                        <a href="#" data-lang="fr">FR</a>
                        <a href="#" data-lang="pt">PT</a>
                        <a href="#" data-lang="es">ES</a>
                    </div>
                    <div class="languages-mobile" id="languageSelectorMobile">
                        <a href="javascript:void(0);" class="lang-mobile-btn" id="langMobileBtn">
                            <i class="fas fa-globe"></i>
                            <span id="currentLangMobile">TR</span>
                            <i class="fas fa-chevron-down"></i>
                        </a>
                        <div class="lang-mobile-dropdown" id="langMobileDropdown">
                            <a href="#" data-lang="tr" class="active">TR</a>
                            <a href="#" data-lang="en">EN</a>
                            <a href="#" data-lang="ru">RU</a>
                            <a href="#" data-lang="ar">AR</a>
                            <a href="#" data-lang="fr">FR</a>
                            <a href="#" data-lang="pt">PT</a>
                            <a href="#" data-lang="es">ES</a>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="https://www.youtube.com/@girisimpackagingmachinery" target="_blank" title="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/company/girisim-food-processing-and-packaging-machinery-turkey" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/girisim.machinery.turkey" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/PackagingMachineryTurkey" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.tiktok.com/@girisim.makina.turkiye" target="_blank" title="TikTok"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Header -->
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <a href="${basePath}index.html" class="logo">
                    <span class="logo-text">GİRİŞİM MAKİNA</span>
                    <span class="logo-sub">PAKETLEME MAKİNALARI</span>
                </a>
                <ul class="nav-menu">
                    <li class="dropdown">
                        <a href="${basePath}index.html#about" data-translate="nav.corporate">Kurumsal <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="${basePath}index.html#about" data-translate="dropdown.about">Hakkımızda</a></li>
                            <li><a href="${basePath}index.html#mission" data-translate="dropdown.mission">Misyonumuz & Vizyonumuz</a></li>
                            <li><a href="${basePath}index.html#values" data-translate="dropdown.values">Değerlerimiz</a></li>
                            <li><a href="${basePath}index.html#why-us" data-translate="dropdown.whyUs">Neden Girişim Makina?</a></li>
                            <li><a href="${basePath}index.html#rnd" data-translate="dropdown.rnd">AR-GE</a></li>
                            <li><a href="${basePath}index.html#service" data-translate="dropdown.service">Satış Sonrası Servis</a></li>
                            <li><a href="${basePath}index.html#certificates" data-translate="dropdown.certificates">Sertifikalarımız</a></li>
                            <li><a href="${basePath}hr.html" data-translate="dropdown.hr">İnsan Kaynakları</a></li>
                        </ul>
                    </li>
                    <li class="dropdown has-mega-menu">
                        <a href="${basePath}index.html#production" data-translate="nav.machines">Makinalarımız <i class="fas fa-chevron-down"></i></a>
                        <div class="mega-menu">
                            <div class="mega-menu-column">
                                <h4 class="mega-menu-title" data-translate="dropdown.productionMachines">Üretim Makinaları</h4>
                                <ul>
                                    <li><a href="${basePath}products/wafer.html" data-translate="dropdown.wafer">Gofret Üretim Hatları</a></li>
                                    <li><a href="${basePath}products/cereal-bar.html" data-translate="dropdown.cerealBar">Tahıl Bar Üretim Hatları</a></li>
                                    <li><a href="${basePath}products/coconut-bar.html" data-translate="dropdown.coconutBar">Hindistan Cevizi Dolgulu Bar</a></li>
                                    <li><a href="${basePath}products/biscuit-sandwiching.html" data-translate="dropdown.biscuit">Bisküvi Kremalama Makinaları</a></li>
                                    <li><a href="${basePath}products/cookie-capping.html" data-translate="dropdown.cookieCapping">Cookie Capping (Chocopie)</a></li>
                                    <li><a href="${basePath}products/chocolate-coating.html" data-translate="dropdown.chocolate">Çikolata Kaplama Makinası</a></li>
                                    <li><a href="${basePath}products/chocolate-cooling.html" data-translate="dropdown.chocolateCooling">Çikolata Soğutma Tüneli</a></li>
                                    <li><a href="${basePath}products/chocolate-preparation.html" data-translate="dropdown.chocolatePrep">Çikolata Hazırlama Mutfağı</a></li>
                                    <li><a href="${basePath}products/sugar-mill.html" data-translate="dropdown.sugarMill">Pudra Şekeri Değirmeni</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu-column">
                                <h4 class="mega-menu-title" data-translate="dropdown.packagingMachines">Paketleme Makinaları</h4>
                                <ul>
                                    <li><a href="${basePath}products/flow-pack.html" data-translate="dropdown.flowpack">Yatay Flowpack Paketleme</a></li>
                                    <li><a href="${basePath}products/vffs.html" data-translate="dropdown.vffs">Dikey Paketleme (VFFS)</a></li>
                                    <li><a href="${basePath}products/overwrapping.html" data-translate="dropdown.overwrap">Zarf Tipi Paketleme</a></li>
                                    <li><a href="${basePath}products/thermoform.html" data-translate="dropdown.thermoform">Thermoform Paketleme</a></li>
                                    <li><a href="${basePath}products/filling-machines.html" data-translate="dropdown.filling">Dolum Makinaları</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="${basePath}index.html#packaging-choice" data-translate="nav.packagingChoice">Paketleme Tercihiniz <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="${basePath}packaging-by-type.html" data-translate="dropdown.byType">Paket Tipine Göre</a></li>
                            <li><a href="${basePath}packaging-by-product.html" data-translate="dropdown.byProduct">Ürününüze Göre</a></li>
                        </ul>
                    </li>
                    <li><a href="${basePath}index.html#videos" data-translate="nav.videos">Videolar</a></li>
                    <li><a href="${basePath}index.html#contact" data-translate="nav.contact">İletişim</a></li>
                </ul>
                <a href="https://wa.me/905468792927?text=Bilgi%20almak%20istiyorum" target="_blank" class="btn btn-primary" data-translate="nav.getQuote"><i class="fab fa-whatsapp"></i> TEKLİF AL</a>
                <div class="hamburger"><span></span><span></span><span></span></div>
            </nav>
        </div>
    </header>
    `;

    // Footer HTML
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="${basePath}index.html" class="footer-logo">
                        <span class="logo-text">GİRİŞİM</span>
                        <span class="logo-sub">MAKİNA TÜRKİYE</span>
                    </a>
                    <p data-translate="footer.about">1985'ten beri gıda işleme ve paketleme makineleri üretiyoruz. 57+ ülkeye ihracat.</p>
                    <div class="footer-social">
                        <a href="https://www.youtube.com/@girisimpackagingmachinery" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/company/girisim-food-processing-and-packaging-machinery-turkey" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://wa.me/905468792927" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4 data-translate="footer.quickLinks">Hızlı Linkler</h4>
                    <ul>
                        <li><a href="${basePath}index.html#about" data-translate="dropdown.about">Hakkımızda</a></li>
                        <li><a href="${basePath}products/flow-pack.html" data-translate="dropdown.flowpack">Flowpack Makineleri</a></li>
                        <li><a href="${basePath}products/wafer.html" data-translate="dropdown.wafer">Gofret Üretim</a></li>
                        <li><a href="${basePath}index.html#videos" data-translate="nav.videos">Videolar</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4 data-translate="footer.contact">İletişim</h4>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> Güneşli, Bağcılar / İstanbul</li>
                        <li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/905468792927">+90 546 879 29 27</a></li>
                        <li><i class="fas fa-envelope"></i> <a href="mailto:info@girisimmak.com">info@girisimmak.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; 2025 Girişim Makina Türkiye. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Float -->
    <a href="https://wa.me/905468792927" class="whatsapp-float" target="_blank"><i class="fab fa-whatsapp"></i></a>

    <!-- Floating Language Selector -->
    <div class="language-float" id="languageFloat">
        <button class="language-float-btn" onclick="toggleLanguageDropdown()">
            <i class="fas fa-globe"></i>
            <span id="currentLangLabel">TR</span>
        </button>
        <div class="language-float-dropdown" id="languageDropdown">
            <a href="#" data-lang="tr">🇹🇷 TR</a>
            <a href="#" data-lang="en">🇬🇧 EN</a>
            <a href="#" data-lang="ru">🇷🇺 RU</a>
            <a href="#" data-lang="ar">🇸🇦 AR</a>
            <a href="#" data-lang="fr">🇫🇷 FR</a>
            <a href="#" data-lang="pt">🇧🇷 PT</a>
            <a href="#" data-lang="es">🇪🇸 ES</a>
        </div>
    </div>

    <!-- Floating Social Icons -->
    <div class="social-float" id="socialFloat">
        <a href="https://www.youtube.com/@girisimpackagingmachinery" target="_blank" class="social-float-icon youtube" title="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="https://www.linkedin.com/company/girisim-food-processing-and-packaging-machinery-turkey" target="_blank" class="social-float-icon linkedin" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.instagram.com/girisim.machinery.turkey" target="_blank" class="social-float-icon instagram" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/PackagingMachineryTurkey" target="_blank" class="social-float-icon facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.tiktok.com/@girisim.makina.turkiye" target="_blank" class="social-float-icon tiktok" title="TikTok"><i class="fab fa-tiktok"></i></a>
    </div>

    <!-- Back to Top -->
    <a href="#" class="back-to-top" id="backToTop"><i class="fas fa-chevron-up"></i></a>
    `;

    // Header'ı sayfaya ekle
    document.addEventListener('DOMContentLoaded', function() {
        // Header placeholder'ı bul veya body'nin başına ekle
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;
        } else {
            document.body.insertAdjacentHTML('afterbegin', headerHTML);
        }

        // Footer placeholder'ı bul veya body'nin sonuna ekle
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
        }

        // Dil seçimi için event listener'ları ekle
        initLanguageSelectors();

        // Floating elements için scroll listener
        initFloatingElements();
    });

    // Dil seçicilerini başlat
    function initLanguageSelectors() {
        const currentLang = localStorage.getItem('girisim_lang') || 'tr';

        // Tüm dil seçicilerini güncelle
        document.querySelectorAll('[data-lang]').forEach(function(link) {
            if (link.getAttribute('data-lang') === currentLang) {
                link.classList.add('active');
            }
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                localStorage.setItem('girisim_lang', lang);

                // Active class güncelle
                document.querySelectorAll('[data-lang]').forEach(a => a.classList.remove('active'));
                document.querySelectorAll('[data-lang="' + lang + '"]').forEach(a => a.classList.add('active'));

                // Label güncelle
                const labelEl = document.getElementById('currentLangLabel');
                if (labelEl) labelEl.textContent = lang.toUpperCase();

                const mobileLabelEl = document.getElementById('currentLangMobile');
                if (mobileLabelEl) mobileLabelEl.textContent = lang.toUpperCase();

                // Çeviri fonksiyonunu çağır
                if (typeof setLanguage === 'function') setLanguage(lang);
                if (typeof setProductLanguage === 'function') setProductLanguage(lang);
            });
        });

        // Current lang label'ları güncelle
        const labelEl = document.getElementById('currentLangLabel');
        if (labelEl) labelEl.textContent = currentLang.toUpperCase();

        const mobileLabelEl = document.getElementById('currentLangMobile');
        if (mobileLabelEl) mobileLabelEl.textContent = currentLang.toUpperCase();
    }

    // Floating elementleri başlat
    function initFloatingElements() {
        window.addEventListener('scroll', function() {
            const languageFloat = document.getElementById('languageFloat');
            const socialFloat = document.getElementById('socialFloat');
            const backToTop = document.getElementById('backToTop');

            if (window.scrollY > 300) {
                if (languageFloat) languageFloat.classList.add('visible');
                if (socialFloat) socialFloat.classList.add('visible');
                if (backToTop) backToTop.classList.add('visible');
            } else {
                if (languageFloat) languageFloat.classList.remove('visible');
                if (socialFloat) socialFloat.classList.remove('visible');
                if (backToTop) backToTop.classList.remove('visible');
            }
        });
    }

    // Dil dropdown toggle
    window.toggleLanguageDropdown = function() {
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown) dropdown.classList.toggle('show');
    };

    // Dropdown dışına tıklayınca kapat
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-float')) {
            const dropdown = document.getElementById('languageDropdown');
            if (dropdown) dropdown.classList.remove('show');
        }
    });

})();
