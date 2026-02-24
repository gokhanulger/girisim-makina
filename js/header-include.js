/**
 * Girişim Makina - Shared Header Component (Data-Driven)
 * Bu dosya tüm sayfalarda aynı header'ı yükler - Supabase'den dinamik veri alır
 */

(function() {
    // Sayfa derinliğini belirle (products/, products/flowpack/ vb.)
    const rawPath = window.location.pathname;

    // Strip language prefix for depth calculation (/en/products/flow-pack → /products/flow-pack)
    const langMatch = rawPath.match(/^\/(en|ru|ar|fr|pt|es)(\/|$)/);
    const cleanPath = langMatch ? rawPath.replace(/^\/(en|ru|ar|fr|pt|es)/, '') : rawPath;

    let basePath = '';
    if (cleanPath.includes('/products/flowpack/')) {
        basePath = '../../';
    } else if (cleanPath.includes('/products/') || cleanPath.includes('/machines/')) {
        basePath = '../';
    } else if (langMatch && (cleanPath === '' || cleanPath === '/')) {
        // Root page with lang prefix: /en → need "lang/" for relative link resolution
        basePath = langMatch[1] + '/';
    } else {
        basePath = '';
    }

    // Default values (fallback when Supabase data not available)
    const defaults = {
        officePhone: '+90 212 879 29 27',
        whatsapp: '+90 546 879 29 27',
        email: 'info@girisimmak.com',
        whatsappNumber: '905468792927',
        social: {
            youtube: 'https://www.youtube.com/@girisimpackagingmachinery',
            linkedin: 'https://www.linkedin.com/company/girisim-food-processing-and-packaging-machinery-turkey',
            instagram: 'https://www.instagram.com/girisim.machinery.turkey',
            facebook: 'https://www.facebook.com/PackagingMachineryTurkey',
            tiktok: 'https://www.tiktok.com/@girisim.makina.turkiye'
        },
        footerDescription: "1995'ten beri gıda işleme ve paketleme makineleri üretiyoruz. 57+ ülkeye ihracat.",
        footerCopyright: '2025 Girişim Makina Türkiye. Tüm hakları saklıdır.',
        address: 'Güneşli, Bağcılar / İstanbul'
    };

    // Build header HTML with dynamic data
    function buildHeaderHTML(data) {
        const ci = data.contactInfo || {};
        const hc = data.headerConfig || {};
        const social = hc.social || data.footer?.social || defaults.social;

        const officePhone = ci.officePhone || defaults.officePhone;
        const whatsapp = ci.whatsapp || defaults.whatsapp;
        const whatsappNum = whatsapp.replace(/[\s\+\-]/g, '');
        const email = ci.email || defaults.email;

        // Saved language from localStorage
        const savedLang = localStorage.getItem('girisim_lang') || 'tr';

        // Social links builder
        const socialLinksHTML = buildSocialLinks(social);

        return `
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="contact-info">
                    <a href="tel:${officePhone.replace(/\s/g, '')}" class="office-phone"><i class="fas fa-phone"></i> ${officePhone}</a>
                    <a href="https://wa.me/${whatsappNum}" target="_blank"><i class="fab fa-whatsapp"></i> ${whatsapp}</a>
                    <a href="mailto:${email}"><i class="fas fa-envelope"></i> ${email}</a>
                </div>
                <div class="language-social">
                    <div class="languages" id="languageSelector">
                        <a href="#" data-lang="tr" class="${savedLang === 'tr' ? 'active' : ''}">TR</a>
                        <a href="#" data-lang="en" class="${savedLang === 'en' ? 'active' : ''}">EN</a>
                        <a href="#" data-lang="ru" class="${savedLang === 'ru' ? 'active' : ''}">RU</a>
                        <a href="#" data-lang="ar" class="${savedLang === 'ar' ? 'active' : ''}">AR</a>
                        <a href="#" data-lang="fr" class="${savedLang === 'fr' ? 'active' : ''}">FR</a>
                        <a href="#" data-lang="pt" class="${savedLang === 'pt' ? 'active' : ''}">PT</a>
                        <a href="#" data-lang="es" class="${savedLang === 'es' ? 'active' : ''}">ES</a>
                    </div>
                    <div class="languages-mobile" id="languageSelectorMobile">
                        <a href="javascript:void(0);" class="lang-mobile-btn" id="langMobileBtn">
                            <i class="fas fa-globe"></i>
                            <span id="currentLangMobile">${savedLang.toUpperCase()}</span>
                            <i class="fas fa-chevron-down"></i>
                        </a>
                        <div class="lang-mobile-dropdown" id="langMobileDropdown">
                            <a href="#" data-lang="tr" class="${savedLang === 'tr' ? 'active' : ''}">TR</a>
                            <a href="#" data-lang="en" class="${savedLang === 'en' ? 'active' : ''}">EN</a>
                            <a href="#" data-lang="ru" class="${savedLang === 'ru' ? 'active' : ''}">RU</a>
                            <a href="#" data-lang="ar" class="${savedLang === 'ar' ? 'active' : ''}">AR</a>
                            <a href="#" data-lang="fr" class="${savedLang === 'fr' ? 'active' : ''}">FR</a>
                            <a href="#" data-lang="pt" class="${savedLang === 'pt' ? 'active' : ''}">PT</a>
                            <a href="#" data-lang="es" class="${savedLang === 'es' ? 'active' : ''}">ES</a>
                        </div>
                    </div>
                    <div class="social-links">
                        ${socialLinksHTML}
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
                    <span class="logo-sub" data-translate="nav.logoSub">PAKETLEME MAKİNALARI</span>
                </a>
                <ul class="nav-menu">
                    ${buildNavMenu(data, basePath)}
                </ul>
                <button class="search-toggle" onclick="toggleSearchOverlay()" aria-label="Ara"><i class="fas fa-search"></i></button>
                <a href="https://wa.me/${whatsappNum}?text=Bilgi%20almak%20istiyorum" target="_blank" class="btn btn-primary" data-translate="nav.getQuote"><i class="fab fa-whatsapp"></i> TEKLİF AL</a>
                <div class="hamburger" id="hamburgerBtn"><span></span><span></span><span></span></div>
            </nav>
        </div>
    </header>
    `;
    }

    // Build navigation menu from data
    function buildNavMenu(data, bp) {
        const hc = data.headerConfig || {};

        // Default corporate menu (matches index.html)
        const corporateMenu = hc.corporateMenu || [
            { label: 'Hakkımızda', href: bp + 'index.html#about', visible: true, translateKey: 'dropdown.about' },
            { label: 'Neden Girişim Makina?', href: bp + 'index.html#why-us', visible: true, translateKey: 'dropdown.whyUs' },
            { label: 'Sertifikalarımız', href: bp + 'index.html#certificates', visible: true, translateKey: 'dropdown.certificates' },
            { label: 'İnsan Kaynakları', href: bp + 'hr.html', visible: true, translateKey: 'dropdown.hr' }
        ];

        // Default production menu
        const productionMenu = hc.productionMenu || [
            { label: 'Gofret Üretim Hatları', href: bp + 'products/wafer.html', visible: true, translateKey: 'dropdown.wafer' },
            { label: 'Tahıl Bar Üretim Hatları', href: bp + 'products/cereal-bar.html', visible: true, translateKey: 'dropdown.cerealBar' },
            { label: 'Hindistan Cevizi Dolgulu Bar', href: bp + 'products/coconut-bar.html', visible: true, translateKey: 'dropdown.coconutBar' },
            { label: 'Bisküvi Kremalama Makinaları', href: bp + 'products/biscuit-sandwiching.html', visible: true, translateKey: 'dropdown.biscuit' },
            { label: 'Cookie Capping (Chocopie)', href: bp + 'products/cookie-capping.html', visible: true, translateKey: 'dropdown.cookieCapping' },
            { label: 'Çikolata Kaplama Makinası', href: bp + 'products/chocolate-coating.html', visible: true, translateKey: 'dropdown.chocolate' },
            { label: 'Çikolata Soğutma Tüneli', href: bp + 'products/chocolate-cooling.html', visible: true, translateKey: 'dropdown.chocolateCooling' },
            { label: 'Çikolata Hazırlama Mutfağı', href: bp + 'products/chocolate-preparation.html', visible: true, translateKey: 'dropdown.chocolatePrep' },
            { label: 'Pudra Şekeri Değirmeni', href: bp + 'products/sugar-mill.html', visible: true, translateKey: 'dropdown.sugarMill' }
        ];

        // Default packaging menu
        const packagingMenu = hc.packagingMenu || [
            { label: 'Yatay Flowpack Paketleme', href: bp + 'products/flow-pack.html', visible: true, translateKey: 'dropdown.flowpack' },
            { label: 'Dikey Paketleme (VFFS)', href: bp + 'products/vffs.html', visible: true, translateKey: 'dropdown.vffs' },
            { label: 'Zarf Tipi Paketleme', href: bp + 'products/overwrapping.html', visible: true, translateKey: 'dropdown.overwrap' },
            { label: 'Thermoform Paketleme', href: bp + 'products/thermoform.html', visible: true, translateKey: 'dropdown.thermoform' },
            { label: 'Dolum Makinaları', href: bp + 'products/filling-machines.html', visible: true, translateKey: 'dropdown.filling' }
        ];

        // Build corporate dropdown items
        const corporateItems = corporateMenu
            .filter(item => item.visible !== false)
            .map(item => {
                const href = item.href.startsWith('http') || item.href.startsWith('#') ? item.href : (item.href.startsWith(bp) ? item.href : bp + item.href);
                return `<li><a href="${href}" ${item.translateKey ? 'data-translate="' + item.translateKey + '"' : ''}>${item.label}</a></li>`;
            }).join('');

        // SVG icons for mega dropdown categories
        const megaSvgIcons = {
            production: `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Konveyör bant -->
                <rect x="5" y="58" width="90" height="6" rx="3" fill="#e53935" opacity="0.18"/>
                <circle cx="14" cy="64" r="4.5" fill="#e53935" opacity="0.35"/><circle cx="14" cy="64" r="2" fill="#e53935" opacity="0.5"/>
                <circle cx="86" cy="64" r="4.5" fill="#e53935" opacity="0.35"/><circle cx="86" cy="64" r="2" fill="#e53935" opacity="0.5"/>
                <line x1="14" y1="64" x2="86" y2="64" stroke="#e53935" stroke-width="1" opacity="0.2"/>
                <!-- Sol makina gövdesi -->
                <rect x="8" y="22" width="26" height="36" rx="3" fill="#e53935" opacity="0.1" stroke="#e53935" stroke-width="1.5"/>
                <rect x="12" y="26" width="18" height="10" rx="2" fill="#e53935" opacity="0.25"/>
                <circle cx="21" cy="31" r="3" fill="#e53935" opacity="0.45"/>
                <rect x="14" y="40" width="14" height="6" rx="1" fill="#e53935" opacity="0.15"/>
                <rect x="14" y="48" width="14" height="6" rx="1" fill="#e53935" opacity="0.15"/>
                <!-- Orta ürünler konveyör üzerinde -->
                <rect x="38" y="44" width="10" height="14" rx="2" fill="#e53935" opacity="0.6"/>
                <rect x="51" y="46" width="10" height="12" rx="2" fill="#e53935" opacity="0.45"/>
                <rect x="64" y="44" width="10" height="14" rx="2" fill="#e53935" opacity="0.6"/>
                <!-- Sağ makina gövdesi -->
                <rect x="66" y="22" width="26" height="36" rx="3" fill="#e53935" opacity="0.1" stroke="#e53935" stroke-width="1.5"/>
                <rect x="70" y="26" width="18" height="10" rx="2" fill="#e53935" opacity="0.25"/>
                <circle cx="79" cy="31" r="3" fill="#e53935" opacity="0.45"/>
                <rect x="72" y="40" width="14" height="6" rx="1" fill="#e53935" opacity="0.15"/>
                <!-- Bağlantı okları -->
                <line x1="34" y1="40" x2="38" y2="40" stroke="#e53935" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>
                <line x1="62" y1="40" x2="66" y2="40" stroke="#e53935" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>
                <!-- Üst panel göstergeler -->
                <rect x="15" y="10" width="8" height="8" rx="1.5" fill="#e53935" opacity="0.12" stroke="#e53935" stroke-width="1"/>
                <rect x="77" y="10" width="8" height="8" rx="1.5" fill="#e53935" opacity="0.12" stroke="#e53935" stroke-width="1"/>
                <line x1="19" y1="18" x2="19" y2="22" stroke="#e53935" stroke-width="1" opacity="0.3"/>
                <line x1="81" y1="18" x2="81" y2="22" stroke="#e53935" stroke-width="1" opacity="0.3"/>
            </svg>`,
            biscuit: `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Bisküvi sandviç (sol) -->
                <rect x="8" y="42" width="28" height="10" rx="5" fill="#e53935" opacity="0.5"/>
                <rect x="8" y="36" width="28" height="8" rx="4" fill="#e53935" opacity="0.25"/>
                <rect x="8" y="50" width="28" height="8" rx="4" fill="#e53935" opacity="0.25"/>
                <circle cx="15" cy="40" r="1.2" fill="#fff" opacity="0.5"/>
                <circle cx="22" cy="39" r="1.2" fill="#fff" opacity="0.5"/>
                <circle cx="29" cy="40" r="1.2" fill="#fff" opacity="0.5"/>
                <circle cx="18" cy="54" r="1.2" fill="#fff" opacity="0.5"/>
                <circle cx="25" cy="55" r="1.2" fill="#fff" opacity="0.5"/>
                <!-- Krema katmanı -->
                <rect x="10" y="44" width="24" height="4" rx="2" fill="#e53935" opacity="0.7"/>
                <!-- Çikolata kaplama makinesi (sağ) -->
                <rect x="48" y="16" width="44" height="14" rx="3" fill="#e53935" opacity="0.15" stroke="#e53935" stroke-width="1.5"/>
                <rect x="52" y="20" width="8" height="6" rx="1" fill="#e53935" opacity="0.3"/>
                <rect x="63" y="20" width="8" height="6" rx="1" fill="#e53935" opacity="0.3"/>
                <rect x="74" y="20" width="8" height="6" rx="1" fill="#e53935" opacity="0.3"/>
                <!-- Çikolata akışı -->
                <line x1="56" y1="30" x2="56" y2="38" stroke="#e53935" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
                <line x1="67" y1="30" x2="67" y2="36" stroke="#e53935" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
                <line x1="78" y1="30" x2="78" y2="38" stroke="#e53935" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
                <!-- Konveyör + kaplanmış ürünler -->
                <line x1="44" y1="52" x2="96" y2="52" stroke="#e53935" stroke-width="2" opacity="0.3"/>
                <rect x="50" y="40" width="12" height="12" rx="2" fill="#e53935" opacity="0.55"/>
                <rect x="65" y="40" width="12" height="12" rx="2" fill="#e53935" opacity="0.4"/>
                <rect x="80" y="40" width="12" height="12" rx="2" fill="#e53935" opacity="0.55"/>
                <!-- Soğutma dalgaları -->
                <path d="M50 60 Q55 56 60 60 Q65 64 70 60" stroke="#e53935" stroke-width="1" opacity="0.2" fill="none"/>
                <path d="M70 60 Q75 56 80 60 Q85 64 90 60" stroke="#e53935" stroke-width="1" opacity="0.2" fill="none"/>
            </svg>`,
            horizontal: `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Ana makina gövdesi -->
                <rect x="8" y="20" width="84" height="40" rx="5" fill="#e53935" opacity="0.08" stroke="#e53935" stroke-width="1.5"/>
                <!-- Film rulosu (sol) -->
                <circle cx="20" cy="40" r="14" fill="#e53935" opacity="0.1" stroke="#e53935" stroke-width="1.5"/>
                <circle cx="20" cy="40" r="8" fill="#e53935" opacity="0.15" stroke="#e53935" stroke-width="1"/>
                <circle cx="20" cy="40" r="3" fill="#e53935" opacity="0.4"/>
                <!-- Film akışı -->
                <path d="M34 40 L52 40" stroke="#e53935" stroke-width="2" opacity="0.35" stroke-linecap="round"/>
                <!-- Ürün giriş -->
                <rect x="42" y="30" width="14" height="20" rx="3" fill="#e53935" opacity="0.25" stroke="#e53935" stroke-width="1"/>
                <!-- Yatay ok (flow yönü) -->
                <line x1="58" y1="40" x2="76" y2="40" stroke="#e53935" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
                <polyline points="73,35 79,40 73,45" fill="none" stroke="#e53935" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
                <!-- Paketlenmiş ürün çıkış -->
                <rect x="78" y="32" width="18" height="16" rx="3" fill="#e53935" opacity="0.5"/>
                <line x1="84" y1="32" x2="84" y2="48" stroke="#fff" stroke-width="1" opacity="0.4"/>
                <line x1="90" y1="32" x2="90" y2="48" stroke="#fff" stroke-width="1" opacity="0.3"/>
                <!-- Mühür çizgileri -->
                <line x1="78" y1="36" x2="96" y2="36" stroke="#fff" stroke-width="0.8" opacity="0.3"/>
                <line x1="78" y1="44" x2="96" y2="44" stroke="#fff" stroke-width="0.8" opacity="0.3"/>
                <!-- Alt konveyör -->
                <line x1="8" y1="66" x2="92" y2="66" stroke="#e53935" stroke-width="2" opacity="0.2"/>
                <circle cx="16" cy="66" r="3" fill="#e53935" opacity="0.2"/>
                <circle cx="84" cy="66" r="3" fill="#e53935" opacity="0.2"/>
            </svg>`,
            vertical: `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Üst film rulosu -->
                <circle cx="50" cy="10" r="7" fill="#e53935" opacity="0.12" stroke="#e53935" stroke-width="1.5"/>
                <circle cx="50" cy="10" r="3" fill="#e53935" opacity="0.3"/>
                <!-- Ana makina gövdesi -->
                <rect x="30" y="18" width="40" height="42" rx="4" fill="#e53935" opacity="0.08" stroke="#e53935" stroke-width="1.5"/>
                <!-- Form shoulder (omuz) -->
                <path d="M34 22 L50 18 L66 22 L66 28 L34 28 Z" fill="#e53935" opacity="0.2"/>
                <!-- Tüp oluşumu -->
                <rect x="40" y="28" width="20" height="24" rx="2" fill="#e53935" opacity="0.12" stroke="#e53935" stroke-width="1"/>
                <!-- Dikey mühür çizgisi -->
                <line x1="50" y1="28" x2="50" y2="52" stroke="#e53935" stroke-width="1.5" opacity="0.35" stroke-dasharray="3 2"/>
                <!-- Yatay mühür çeneleri -->
                <rect x="34" y="44" width="8" height="8" rx="1.5" fill="#e53935" opacity="0.35"/>
                <rect x="58" y="44" width="8" height="8" rx="1.5" fill="#e53935" opacity="0.35"/>
                <line x1="42" y1="48" x2="58" y2="48" stroke="#e53935" stroke-width="2" opacity="0.4"/>
                <!-- Dikey ok (aşağı akış) -->
                <line x1="50" y1="54" x2="50" y2="64" stroke="#e53935" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
                <polyline points="45,61 50,67 55,61" fill="none" stroke="#e53935" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
                <!-- Dolmuş poşet -->
                <rect x="42" y="66" width="16" height="12" rx="2" fill="#e53935" opacity="0.5"/>
                <line x1="42" y1="70" x2="58" y2="70" stroke="#fff" stroke-width="0.8" opacity="0.4"/>
                <!-- Yan kontrol panelleri -->
                <rect x="12" y="26" width="14" height="20" rx="2" fill="#e53935" opacity="0.1" stroke="#e53935" stroke-width="1"/>
                <circle cx="19" cy="32" r="2" fill="#e53935" opacity="0.3"/>
                <rect x="15" y="38" width="8" height="4" rx="1" fill="#e53935" opacity="0.2"/>
                <rect x="74" y="26" width="14" height="20" rx="2" fill="#e53935" opacity="0.1" stroke="#e53935" stroke-width="1"/>
                <circle cx="81" cy="32" r="2" fill="#e53935" opacity="0.3"/>
                <rect x="77" y="38" width="8" height="4" rx="1" fill="#e53935" opacity="0.2"/>
            </svg>`,
            filling: `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Ana dolum hunisi -->
                <rect x="34" y="6" width="32" height="14" rx="3" fill="#e53935" opacity="0.15" stroke="#e53935" stroke-width="1.5"/>
                <path d="M38 20 L44 38 L56 38 L62 20 Z" fill="#e53935" opacity="0.2" stroke="#e53935" stroke-width="1.5"/>
                <!-- Dolum nozulu -->
                <rect x="47" y="38" width="6" height="10" rx="1" fill="#e53935" opacity="0.4"/>
                <!-- Dolum akışı (damla) -->
                <line x1="50" y1="48" x2="50" y2="56" stroke="#e53935" stroke-width="2" stroke-dasharray="2 2" opacity="0.5" stroke-linecap="round"/>
                <!-- Şişe/kutu (orta) -->
                <rect x="42" y="56" width="16" height="20" rx="2.5" fill="#e53935" opacity="0.12" stroke="#e53935" stroke-width="1.5"/>
                <rect x="45" y="52" width="10" height="5" rx="1.5" fill="#e53935" opacity="0.3"/>
                <rect x="44" y="62" width="12" height="12" rx="1" fill="#e53935" opacity="0.35"/>
                <!-- Sol şişe (bekleyen) -->
                <rect x="14" y="58" width="12" height="18" rx="2" fill="#e53935" opacity="0.1" stroke="#e53935" stroke-width="1"/>
                <rect x="16" y="55" width="8" height="4" rx="1.5" fill="#e53935" opacity="0.2"/>
                <rect x="15.5" y="64" width="9" height="10" rx="1" fill="#e53935" opacity="0.2"/>
                <!-- Sağ şişe (dolu) -->
                <rect x="74" y="58" width="12" height="18" rx="2" fill="#e53935" opacity="0.1" stroke="#e53935" stroke-width="1.5"/>
                <rect x="76" y="55" width="8" height="4" rx="1.5" fill="#e53935" opacity="0.3"/>
                <rect x="75.5" y="64" width="9" height="10" rx="1" fill="#e53935" opacity="0.45"/>
                <!-- Konveyör -->
                <line x1="8" y1="76" x2="92" y2="76" stroke="#e53935" stroke-width="2" opacity="0.25"/>
                <circle cx="14" cy="76" r="2.5" fill="#e53935" opacity="0.2"/>
                <circle cx="50" cy="76" r="2.5" fill="#e53935" opacity="0.2"/>
                <circle cx="86" cy="76" r="2.5" fill="#e53935" opacity="0.2"/>
                <!-- Oklar (sol→orta→sağ) -->
                <line x1="26" y1="68" x2="38" y2="68" stroke="#e53935" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
                <polyline points="36,65 40,68 36,71" fill="none" stroke="#e53935" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
                <line x1="60" y1="68" x2="72" y2="68" stroke="#e53935" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
                <polyline points="70,65 74,68 70,71" fill="none" stroke="#e53935" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
            </svg>`
        };

        // Mega menü kategorileri - siteContent'ten veya fallback (recursive tree yapısı)
        const adminCats = window.__siteContent?.machineCategories;
        const megaCategories = (adminCats && adminCats.length) ? adminCats : [
            { id: 'production', title: 'Üretim Hatları', titleKey: 'megaMenu.productionLines', icon: '', image: '', type: 'category', href: 'machines/production-lines.html', children: [] },
            { id: 'biscuit', title: 'Bisküvi & Çikolata', titleKey: 'megaMenu.biscuitChocolate', icon: '', image: '', type: 'category', href: 'machines/biscuit-chocolate.html', children: [] },
            { id: 'horizontal', title: 'Yatay Paketleme', titleKey: 'megaMenu.horizontalPack', icon: '', image: '', type: 'category', href: 'machines/horizontal-packaging.html', children: [] },
            { id: 'vertical', title: 'Dikey Paketleme', titleKey: 'megaMenu.verticalPack', icon: '', image: '', type: 'category', href: 'machines/vertical-packaging.html', children: [] },
            { id: 'filling', title: 'Dolum & Yardımcı', titleKey: 'megaMenu.fillingAux', icon: '', image: '', type: 'category', href: 'machines/filling-auxiliary.html', children: [] }
        ];

        // Recursive submenu builder
        function buildSubmenuHTML(children, depth) {
            if (!children || !children.length) return '';
            var items = children.map(function(child) {
                var childHref = child.href ? bp + child.href : '#';
                var hasChildren = child.children && child.children.length > 0;
                var translateAttr = child.titleKey ? ' data-translate="' + child.titleKey + '"' : '';
                var subMenu = hasChildren ? buildSubmenuHTML(child.children, depth + 1) : '';
                return '<li class="' + (hasChildren ? 'has-sub' : '') + '">' +
                    '<a href="' + childHref + '"' + translateAttr + '>' + child.title +
                    (hasChildren ? ' <i class="fas fa-chevron-right mega-sub-arrow"></i>' : '') +
                    '</a>' +
                    (hasChildren ? '<ul class="mega-submenu mega-submenu-depth-' + (depth + 1) + '">' + subMenu + '</ul>' : '') +
                    '</li>';
            }).join('');
            return items;
        }

        const megaItemsHTML = megaCategories.map(function(cat) {
            var catHref = cat.href ? bp + cat.href : '#';
            var hasChildren = cat.children && cat.children.length > 0;
            var iconHTML = cat.icon
                ? '<img src="' + cat.icon + '" alt="' + cat.title + '" style="width:84px;height:68px;object-fit:contain">'
                : (megaSvgIcons[cat.id] || '');
            var translateAttr = cat.titleKey ? 'data-translate="' + cat.titleKey + '"' : '';
            var submenuHTML = hasChildren
                ? '<ul class="mega-submenu mega-submenu-depth-1">' + buildSubmenuHTML(cat.children, 1) + '</ul>'
                : '';
            return '<div class="mega-cat-item-wrap">' +
                '<a href="' + catHref + '" class="mega-cat-item">' +
                    '<div class="mega-cat-icon">' + iconHTML + '</div>' +
                    '<div class="mega-cat-label" ' + translateAttr + '>' + cat.title + '</div>' +
                '</a>' +
                submenuHTML +
            '</div>';
        }).join('');

        return `
                    <li class="dropdown">
                        <a href="${bp}index.html#about" data-translate="nav.about">Kurumsal</a>
                        <ul class="dropdown-menu">
                            ${corporateItems}
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="${bp}index.html#packaging-choice" data-translate="nav.packaging">Paketleme Seçeneği</a>
                        <ul class="dropdown-menu">
                            <li><a href="${bp}packaging-by-type.html" data-translate="dropdown.byType">Paket Tipine Göre</a></li>
                            <li><a href="${bp}packaging-by-product.html" data-translate="dropdown.byProduct">Ürününüze Göre</a></li>
                        </ul>
                    </li>
                    <li class="has-mega-menu">
                        <a href="${bp}index.html#production" data-translate="nav.production">Makinelerimiz</a>
                        <div class="mega-dropdown">
                            <div class="mega-cat-grid">${megaItemsHTML}</div>
                        </div>
                    </li>
                    <li><a href="${bp}index.html#videos" data-translate="nav.videos">Videolar</a></li>
                    <li><a href="${bp}blog.html" data-translate="nav.blog">Blog</a></li>
                    <li><a href="${bp}index.html#contact" data-translate="nav.contact">İletişim</a></li>`;
    }

    // Build social links HTML
    function buildSocialLinks(social) {
        const platforms = [
            { key: 'youtube', icon: 'fab fa-youtube', title: 'YouTube' },
            { key: 'linkedin', icon: 'fab fa-linkedin-in', title: 'LinkedIn' },
            { key: 'instagram', icon: 'fab fa-instagram', title: 'Instagram' },
            { key: 'facebook', icon: 'fab fa-facebook-f', title: 'Facebook' },
            { key: 'tiktok', icon: 'fab fa-tiktok', title: 'TikTok' }
        ];

        return platforms
            .filter(p => social[p.key])
            .map(p => `<a href="${social[p.key]}" target="_blank" title="${p.title}"><i class="${p.icon}"></i></a>`)
            .join('\n                        ');
    }

    // Build footer HTML with dynamic data
    function buildFooterHTML(data) {
        const ci = data.contactInfo || {};
        const footer = data.footer || {};
        const social = footer.social || data.headerConfig?.social || defaults.social;

        const officePhone = ci.officePhone || defaults.officePhone;
        const whatsapp = ci.whatsapp || defaults.whatsapp;
        const whatsappNum = whatsapp.replace(/[\s\+\-]/g, '');
        const email = ci.email || defaults.email;
        const description = footer.description || defaults.footerDescription;
        const copyright = footer.copyright || defaults.footerCopyright;
        const savedLang = localStorage.getItem('girisim_lang') || 'tr';
        const address = data.contact?.address ?
            `${data.contact.address.line1 || ''}, ${data.contact.address.line3 || ''}`.replace(/^,\s*/, '').replace(/,\s*$/, '') :
            defaults.address;

        return `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="${basePath}index.html" class="footer-logo">
                        <span class="logo-text">GİRİŞİM MAKİNA</span>
                        <span class="logo-sub">PAKETLEME MAKİNALARI</span>
                    </a>
                    <p data-translate="footer.desc">${description}</p>
                    <div class="footer-social">
                        ${social.youtube ? `<a href="${social.youtube}" target="_blank" title="YouTube"><i class="fab fa-youtube"></i></a>` : ''}
                        ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>` : ''}
                        ${social.instagram ? `<a href="${social.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>` : ''}
                        ${social.facebook ? `<a href="${social.facebook}" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>` : ''}
                        <a href="https://wa.me/${whatsappNum}" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4 data-translate="footer.production">Üretim Hatları</h4>
                    <ul>
                        <li><a href="${basePath}products/wafer.html" data-translate="dropdown.wafer">Wafer Üretim Hatları</a></li>
                        <li><a href="${basePath}products/cereal-bar.html" data-translate="dropdown.cerealBar">Cereal Bar Hatları</a></li>
                        <li><a href="${basePath}products/protein-bar.html" data-translate="dropdown.protein">Protein Bar Hatları</a></li>
                        <li><a href="${basePath}products/chocolate-coating.html" data-translate="dropdown.chocolate">Çikolata Kaplama</a></li>
                        <li><a href="${basePath}products/biscuit-sandwiching.html" data-translate="dropdown.biscuit">Bisküvi Kremalama</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4 data-translate="footer.packagingTitle">Paketleme</h4>
                    <ul>
                        <li><a href="${basePath}products/flow-pack.html" data-translate="dropdown.flowpack">Flow Pack</a></li>
                        <li><a href="${basePath}products/overwrapping.html" data-translate="dropdown.overwrap">Overwrapping</a></li>
                        <li><a href="${basePath}products/thermoform.html" data-translate="dropdown.thermoform">Thermoform</a></li>
                        <li><a href="${basePath}products/vffs.html" data-translate="dropdown.vffs">VFFS Dikey Dolum</a></li>
                        <li><a href="${basePath}products/filling-machines.html" data-translate="dropdown.filling">Dolum Makinaları</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4 data-translate="footer.corporate">Kurumsal</h4>
                    <ul>
                        <li><a href="${basePath}index.html#about" data-translate="dropdown.about">Hakkımızda</a></li>
                        <li><a href="${basePath}hr.html" data-translate="dropdown.hr">İnsan Kaynakları</a></li>
                        <li><a href="${basePath}blog.html" data-translate="nav.blog">Blog</a></li>
                        <li><a href="${basePath}index.html#videos" data-translate="nav.videos">Videolar</a></li>
                        <li><a href="${basePath}index.html#contact" data-translate="nav.contact">İletişim</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4 data-translate="footer.contact">İletişim</h4>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> ${address}</li>
                        <li><i class="fab fa-whatsapp"></i> <a href="https://wa.me/${whatsappNum}" class="whatsapp-phone">${whatsapp}</a></li>
                        <li><i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a></li>
                    </ul>
                    <div class="footer-certificates">
                        <img src="${basePath}images/iso-badge.svg" alt="ISO 9001">
                        <img src="${basePath}images/ce-badge.svg" alt="CE">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p>&copy; ${copyright}</p>
                    <div class="footer-bottom-links">
                        <a href="#">Gizlilik Politikası</a>
                        <a href="#">KVKK</a>
                        <a href="#">Çerez Politikası</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Search Overlay -->
    <div class="search-overlay" id="searchOverlay">
        <div class="search-overlay-content">
            <button class="search-close" onclick="toggleSearchOverlay()"><i class="fas fa-times"></i></button>
            <div class="search-box">
                <i class="fas fa-search search-icon"></i>
                <input type="text" id="searchInput" placeholder="Ürün veya sayfa ara..." data-translate-placeholder="search.placeholder" autocomplete="off">
            </div>
            <div class="search-results" id="searchResults">
                <div class="search-hint">
                    <i class="fas fa-lightbulb"></i>
                    <span>Ürün adı, makina türü veya sayfa ismi yazarak arama yapabilirsiniz.</span>
                </div>
            </div>
        </div>
    </div>

    <!-- WhatsApp Float -->
    <a href="https://wa.me/${whatsappNum}" class="whatsapp-float" target="_blank"><i class="fab fa-whatsapp"></i></a>

    <!-- Side Contact Panel -->
    <div class="side-contact-toggle" onclick="toggleSideContact()">
        <i class="fas fa-chevron-left"></i>
    </div>
    <div class="side-contact-panel" id="sideContactPanel">
        <div class="side-contact-header">
            <h4 data-translate="sideContact.title">Hızlı İletişim</h4>
            <button onclick="toggleSideContact()" class="side-contact-close"><i class="fas fa-times"></i></button>
        </div>
        <div class="side-contact-body">
            <a href="tel:${officePhone.replace(/\\s/g, '')}" class="side-contact-item">
                <i class="fas fa-phone"></i>
                <div>
                    <strong data-translate="sideContact.phone">Telefon</strong>
                    <span>${officePhone}</span>
                </div>
            </a>
            <a href="https://wa.me/${whatsappNum}" target="_blank" class="side-contact-item">
                <i class="fab fa-whatsapp"></i>
                <div>
                    <strong>WhatsApp</strong>
                    <span>${whatsapp}</span>
                </div>
            </a>
            <a href="mailto:${email}" class="side-contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                    <strong data-translate="sideContact.email">E-posta</strong>
                    <span>${email}</span>
                </div>
            </a>
            <a href="mailto:export@girisimmak.com" class="side-contact-item">
                <i class="fas fa-globe"></i>
                <div>
                    <strong data-translate="sideContact.export">İhracat</strong>
                    <span>export@girisimmak.com</span>
                </div>
            </a>
        </div>
    </div>

    <!-- Floating Language Selector -->
    <div class="language-float" id="languageFloat">
        <button class="language-float-btn" onclick="toggleLanguageDropdown()">
            <i class="fas fa-globe"></i>
            <span id="currentLangLabel">${savedLang.toUpperCase()}</span>
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
        ${buildFloatSocialIcons(social)}
    </div>

    <!-- Back to Top -->
    <a href="#" class="back-to-top" id="backToTop"><i class="fas fa-chevron-up"></i></a>
    `;
    }

    // Build floating social icons
    function buildFloatSocialIcons(social) {
        const platforms = [
            { key: 'youtube', icon: 'fab fa-youtube', cls: 'youtube' },
            { key: 'linkedin', icon: 'fab fa-linkedin-in', cls: 'linkedin' },
            { key: 'instagram', icon: 'fab fa-instagram', cls: 'instagram' },
            { key: 'facebook', icon: 'fab fa-facebook-f', cls: 'facebook' },
            { key: 'tiktok', icon: 'fab fa-tiktok', cls: 'tiktok' }
        ];

        return platforms
            .filter(p => social[p.key])
            .map(p => `<a href="${social[p.key]}" target="_blank" class="social-float-icon ${p.cls}" title="${p.cls.charAt(0).toUpperCase() + p.cls.slice(1)}"><i class="${p.icon}"></i></a>`)
            .join('\n        ');
    }

    // Get site content data (from cache, Supabase, or defaults)
    function getSiteData() {
        // 1. Check if globally available (set by site-loader.js)
        if (window.__siteContent) return window.__siteContent;

        // 2. Check sessionStorage cache
        try {
            const cached = sessionStorage.getItem('girisim_site_cache');
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < 2 * 60 * 1000) {
                    return data;
                }
            }
        } catch (e) { /* ignore */ }

        // 3. Check localStorage
        try {
            const local = localStorage.getItem('girisim_site_content');
            if (local) return JSON.parse(local);
        } catch (e) { /* ignore */ }

        // 4. Return empty (will use defaults in builders)
        return {};
    }

    // Header'ı sayfaya ekle
    function initHeader() {
        const data = getSiteData();

        const headerHTML = buildHeaderHTML(data);
        const footerHTML = buildFooterHTML(data);

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

        // Event listener'ları ekle
        initLanguageSelectors();
        initFloatingElements();
        initHamburgerMenu();
        // Mega menü artık sadece kategori linkleri - tab etkileşimi yok

        // Remove placeholder min-height after header is loaded
        if (headerPlaceholder) headerPlaceholder.style.minHeight = '0';

        // Fallback: if site-loader.js is not present, reveal page after header init
        if (typeof getCachedSiteContent !== 'function') {
            document.body.classList.add('site-ready');
        }

        // Safety fallback: always reveal page after 2 seconds max
        setTimeout(function() {
            document.body.classList.add('site-ready');
        }, 2000);

        // Supabase'den güncel veri geldiğinde header'ı güncelle
        if (!window.__siteContent && typeof getCachedSiteContent === 'function') {
            getCachedSiteContent().then(function(freshData) {
                if (freshData && freshData.contactInfo) {
                    updateHeaderWithFreshData(freshData);
                }
            }).catch(function() { /* ignore - already showing cached/default */ });
        }
    }

    // Update header elements with fresh Supabase data (without full re-render)
    function updateHeaderWithFreshData(data) {
        const ci = data.contactInfo || {};
        const footer = data.footer || {};
        const social = data.headerConfig?.social || footer.social || {};

        // Update contact info
        if (ci.officePhone) {
            document.querySelectorAll('.office-phone').forEach(function(el) {
                if (el.tagName === 'A') {
                    el.href = 'tel:' + ci.officePhone.replace(/\s/g, '');
                    if (el.closest('.top-bar')) el.innerHTML = '<i class="fas fa-phone"></i> ' + ci.officePhone;
                    else el.textContent = ci.officePhone;
                }
            });
        }
        if (ci.whatsapp) {
            const num = ci.whatsapp.replace(/[\s\+\-]/g, '');
            document.querySelectorAll('.whatsapp-phone').forEach(function(el) {
                el.href = 'https://wa.me/' + num;
                el.textContent = ci.whatsapp;
            });
            document.querySelectorAll('.whatsapp-float').forEach(function(el) {
                el.href = 'https://wa.me/' + num;
            });
            document.querySelectorAll('a.btn-primary[href*="wa.me"]').forEach(function(el) {
                el.href = 'https://wa.me/' + num + '?text=Bilgi%20almak%20istiyorum';
            });
        }
        if (ci.email) {
            document.querySelectorAll('a[href^="mailto:"]').forEach(function(el) {
                el.href = 'mailto:' + ci.email;
                if (el.closest('.top-bar')) el.innerHTML = '<i class="fas fa-envelope"></i> ' + ci.email;
            });
        }

        // Update footer description
        if (footer.description) {
            const footerDesc = document.querySelector('.footer-about p');
            if (footerDesc) footerDesc.textContent = footer.description;
        }
        if (footer.copyright) {
            const copyrightEl = document.querySelector('.footer-bottom p');
            if (copyrightEl) copyrightEl.innerHTML = '&copy; ' + footer.copyright;
        }
    }

    // Global mobil menü fonksiyonları
    // Nav-menu'yu body'ye taşıma (position:fixed stacking context sorunu için)
    var _navMenuMovedToBody = false;

    function _ensureNavMenuInBody() {
        var navMenu = document.querySelector('.nav-menu');
        if (navMenu && !_navMenuMovedToBody && window.innerWidth <= 768) {
            document.body.appendChild(navMenu);
            _navMenuMovedToBody = true;
        }
    }

    window.toggleMobileMenu = function() {
        var hamburger = document.querySelector('.hamburger');
        var navMenu = document.querySelector('.nav-menu');
        var overlay = document.querySelector('.mobile-menu-overlay');

        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            overlay.addEventListener('click', function() { window.closeMobileMenu(); });
            overlay.addEventListener('touchend', function(e) { e.preventDefault(); window.closeMobileMenu(); });
            document.body.appendChild(overlay);
        }

        if (!navMenu) return;

        var isOpen = navMenu.classList.contains('active');

        if (!isOpen) {
            // Opening menu - move to body first
            _ensureNavMenuInBody();
        }

        hamburger && hamburger.classList.toggle('active', !isOpen);
        navMenu.classList.toggle('active', !isOpen);
        overlay.classList.toggle('active', !isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
    };

    window.closeMobileMenu = function() {
        var hamburger = document.querySelector('.hamburger');
        var navMenu = document.querySelector('.nav-menu');
        var overlay = document.querySelector('.mobile-menu-overlay');

        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';

        document.querySelectorAll('.dropdown.active, .has-mega-menu.active').forEach(function(item) {
            item.classList.remove('active');
        });
    };

    window.toggleMobileDropdown = function(element, e) {
        if (window.innerWidth <= 768) {
            if (e) e.preventDefault(); else if (window.event) window.event.preventDefault();
            var parent = element.parentElement;
            var wasActive = parent.classList.contains('active');

            document.querySelectorAll('.dropdown.active, .has-mega-menu.active').forEach(function(item) {
                if (item !== parent) item.classList.remove('active');
            });

            parent.classList.toggle('active', !wasActive);
        }
    };

    // Hamburger menü init
    function initHamburgerMenu() {
        var hamburgerBtn = document.getElementById('hamburgerBtn');
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.toggleMobileMenu();
            });

            hamburgerBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.toggleMobileMenu();
            });
        }

        // Overlay oluştur
        var overlay = document.querySelector('.mobile-menu-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            overlay.addEventListener('click', function() { window.closeMobileMenu(); });
            overlay.addEventListener('touchend', function(e) { e.preventDefault(); window.closeMobileMenu(); });
            document.body.appendChild(overlay);
        }

        // Mobilde nav-menu'yu body'ye taşı
        if (window.innerWidth <= 768) {
            _ensureNavMenuInBody();
        }

        // Resize'da geri taşı/tekrar taşı
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 768) {
                _ensureNavMenuInBody();
            }
        });

        // Event delegation ile dropdown toggle
        var navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.addEventListener('click', function(e) {
                if (window.innerWidth > 768) return;

                // Mega submenu toggle on mobile (category items with children)
                var megaWrap = e.target.closest('.mega-cat-item-wrap');
                if (megaWrap) {
                    var subMenu = megaWrap.querySelector('.mega-submenu');
                    if (subMenu && e.target.closest('.mega-cat-item')) {
                        e.preventDefault();
                        e.stopPropagation();
                        // Close siblings
                        megaWrap.parentElement.querySelectorAll('.mega-cat-item-wrap.active').forEach(function(s) {
                            if (s !== megaWrap) s.classList.remove('active');
                        });
                        megaWrap.classList.toggle('active');
                        return;
                    }
                }

                // Nested submenu toggle (has-sub items)
                var hasSub = e.target.closest('.has-sub');
                if (hasSub) {
                    var subLink = e.target.closest('.has-sub > a');
                    if (subLink) {
                        e.preventDefault();
                        e.stopPropagation();
                        hasSub.parentElement.querySelectorAll('.has-sub.active').forEach(function(s) {
                            if (s !== hasSub) s.classList.remove('active');
                        });
                        hasSub.classList.toggle('active');
                        return;
                    }
                }

                // Mega dropdown veya normal dropdown içindeki ürün linklerine tıklama - navigasyona izin ver
                var megaLink = e.target.closest('.mega-submenu li:not(.has-sub) a, .mega-links a, .dropdown-menu a');
                if (megaLink) {
                    // Ürün/sayfa linki - navigasyona izin ver, menüyü kapat
                    window.closeMobileMenu();
                    return; // preventDefault YAPMA - link çalışsın
                }

                // mega-cat-item without children - navigate directly
                var directCatLink = e.target.closest('.mega-cat-item');
                if (directCatLink) {
                    var wrap = directCatLink.closest('.mega-cat-item-wrap');
                    if (wrap && !wrap.querySelector('.mega-submenu')) {
                        window.closeMobileMenu();
                        return;
                    }
                }

                // Dropdown toggle tıklaması (ana menü başlıkları)
                var target = e.target.closest('.dropdown-toggle, .dropdown > a, .has-mega-menu > a');
                if (target) {
                    e.preventDefault();
                    e.stopPropagation();

                    var parent = target.parentElement;
                    var wasActive = parent.classList.contains('active');

                    navMenu.querySelectorAll('.dropdown.active, .has-mega-menu.active').forEach(function(item) {
                        if (item !== parent) item.classList.remove('active');
                    });

                    parent.classList.toggle('active', !wasActive);
                    return;
                }

                // Normal link tıklaması - menüyü kapat
                var regularLink = e.target.closest('a[href]');
                if (regularLink) {
                    window.closeMobileMenu();
                }
            }, {capture: true});
        }
    }

    // Sayfa yüklendiyse hemen çalıştır, yoksa bekle
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeader);
    } else {
        initHeader();
    }


    // Dil seçicilerini başlat
    function initLanguageSelectors() {
        const currentLang = localStorage.getItem('girisim_lang') || 'tr';

        document.querySelectorAll('[data-lang]').forEach(function(link) {
            if (link.getAttribute('data-lang') === currentLang) {
                link.classList.add('active');
            }
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                localStorage.setItem('girisim_lang', lang);

                // Navigate to the language-prefixed URL (e.g., /en/blog, /ru/products/flow-pack)
                if (typeof window.switchLangUrl === 'function') {
                    var newUrl = window.switchLangUrl(lang);
                    if (newUrl !== window.location.pathname) {
                        window.location.href = newUrl;
                        return;
                    }
                }

                // Same page (or switchLangUrl not available) - update in place
                document.querySelectorAll('[data-lang]').forEach(a => a.classList.remove('active'));
                document.querySelectorAll('[data-lang="' + lang + '"]').forEach(a => a.classList.add('active'));

                const labelEl = document.getElementById('currentLangLabel');
                if (labelEl) labelEl.textContent = lang.toUpperCase();

                const mobileLabelEl = document.getElementById('currentLangMobile');
                if (mobileLabelEl) mobileLabelEl.textContent = lang.toUpperCase();

                if (typeof setLanguage === 'function') setLanguage(lang);
                if (typeof setProductLanguage === 'function') setProductLanguage(lang);
            });
        });

        const labelEl = document.getElementById('currentLangLabel');
        if (labelEl) labelEl.textContent = currentLang.toUpperCase();

        const mobileLabelEl = document.getElementById('currentLangMobile');
        if (mobileLabelEl) mobileLabelEl.textContent = currentLang.toUpperCase();

        if (typeof setLanguage === 'function') {
            setLanguage(currentLang);
        }
        if (typeof setProductLanguage === 'function') {
            setProductLanguage(currentLang);
        }
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

    // ==========================================
    // SEARCH FUNCTIONALITY
    // ==========================================

    // Aranabilir içerik veritabanı (default + Supabase override)
    let searchData = [
        // Üretim Makinaları
        { title: 'Gofret Üretim Hatları', url: basePath + 'products/wafer.html', category: 'Üretim Makinaları', keywords: 'gofret wafer üretim hattı makina' },
        { title: 'Tahıl Bar Üretim Hatları', url: basePath + 'products/cereal-bar.html', category: 'Üretim Makinaları', keywords: 'tahıl bar cereal granola müsli üretim' },
        { title: 'Hindistan Cevizi Dolgulu Bar', url: basePath + 'products/coconut-bar.html', category: 'Üretim Makinaları', keywords: 'hindistan cevizi coconut bar bounty dolgulu' },
        { title: 'Bisküvi Kremalama Makinaları', url: basePath + 'products/biscuit-sandwiching.html', category: 'Üretim Makinaları', keywords: 'bisküvi kremalama sandviç sandwich biscuit' },
        { title: 'Cookie Capping (Chocopie)', url: basePath + 'products/cookie-capping.html', category: 'Üretim Makinaları', keywords: 'cookie capping chocopie pie kaplama' },
        { title: 'Çikolata Kaplama Makinası', url: basePath + 'products/chocolate-coating.html', category: 'Üretim Makinaları', keywords: 'çikolata kaplama coating enrober enrobing' },
        { title: 'Çikolata Soğutma Tüneli', url: basePath + 'products/chocolate-cooling.html', category: 'Üretim Makinaları', keywords: 'çikolata soğutma cooling tunnel tünel' },
        { title: 'Çikolata Hazırlama Mutfağı', url: basePath + 'products/chocolate-preparation.html', category: 'Üretim Makinaları', keywords: 'çikolata hazırlama mutfak preparation tempering' },
        { title: 'Pudra Şekeri Değirmeni', url: basePath + 'products/sugar-mill.html', category: 'Üretim Makinaları', keywords: 'pudra şeker değirmen sugar mill öğütme' },
        { title: 'Protein Bar Üretim Hatları', url: basePath + 'products/protein-bar.html', category: 'Üretim Makinaları', keywords: 'protein bar enerji spor fitness' },
        { title: 'Helva Üretim Hatları', url: basePath + 'products/halvah.html', category: 'Üretim Makinaları', keywords: 'helva halvah tahin üretim' },

        // Paketleme Makinaları
        { title: 'Yatay Flowpack Paketleme', url: basePath + 'products/flow-pack.html', category: 'Paketleme Makinaları', keywords: 'flowpack flow pack yatay paketleme horizontal' },
        { title: 'Dikey Paketleme (VFFS)', url: basePath + 'products/vffs.html', category: 'Paketleme Makinaları', keywords: 'vffs dikey paketleme vertical form fill seal' },
        { title: 'Zarf Tipi Paketleme', url: basePath + 'products/overwrapping.html', category: 'Paketleme Makinaları', keywords: 'overwrap zarf tipi paketleme selofan' },
        { title: 'Thermoform Paketleme', url: basePath + 'products/thermoform.html', category: 'Paketleme Makinaları', keywords: 'thermoform vakum paketleme' },
        { title: 'Dolum Makinaları', url: basePath + 'products/filling-machines.html', category: 'Paketleme Makinaları', keywords: 'dolum filling sıvı toz granül' },

        // Sayfalar
        { title: 'Ana Sayfa', url: basePath + 'index.html', category: 'Sayfalar', keywords: 'ana sayfa home anasayfa' },
        { title: 'Hakkımızda', url: basePath + 'index.html#about', category: 'Kurumsal', keywords: 'hakkımızda about kurumsal tarihçe' },
        { title: 'Neden Girişim Makina?', url: basePath + 'index.html#why-us', category: 'Kurumsal', keywords: 'neden biz why us avantaj' },
        { title: 'Misyonumuz & Vizyonumuz', url: basePath + 'index.html#mission', category: 'Kurumsal', keywords: 'misyon vizyon değerler' },
        { title: 'AR-GE', url: basePath + 'index.html#rnd', category: 'Kurumsal', keywords: 'ar-ge araştırma geliştirme r&d inovasyon' },
        { title: 'Satış Sonrası Servis', url: basePath + 'index.html#service', category: 'Kurumsal', keywords: 'servis bakım teknik destek' },
        { title: 'Sertifikalarımız', url: basePath + 'index.html#certificates', category: 'Kurumsal', keywords: 'sertifika ce iso belgeler' },
        { title: 'İnsan Kaynakları', url: basePath + 'hr.html', category: 'Kurumsal', keywords: 'insan kaynakları kariyer iş başvuru' },
        { title: 'Videolar', url: basePath + 'index.html#videos', category: 'Sayfalar', keywords: 'video youtube izle' },
        { title: 'İletişim', url: basePath + 'index.html#contact', category: 'Sayfalar', keywords: 'iletişim contact adres telefon' },
        { title: 'Paket Tipine Göre', url: basePath + 'packaging-by-type.html', category: 'Paketleme Tercihi', keywords: 'paket tipi flowpack pillow' },
        { title: 'Ürününüze Göre', url: basePath + 'packaging-by-product.html', category: 'Paketleme Tercihi', keywords: 'ürün bisküvi çikolata bar' },
        { title: 'Blog', url: basePath + 'blog.html', category: 'Sayfalar', keywords: 'blog yazı makale haber' },
    ];

    // Merge featured search items from Supabase
    if (data.featuredSearchItems && Array.isArray(data.featuredSearchItems) && data.featuredSearchItems.length > 0) {
        const adminItems = data.featuredSearchItems.map(item => ({
            title: item.title,
            url: basePath + (item.url || '#'),
            category: item.category || 'Diğer',
            keywords: item.keywords || item.title.toLowerCase()
        }));
        searchData = [...adminItems, ...searchData];
    }

    // Search overlay toggle
    // Side Contact Panel Toggle
    window.toggleSideContact = function() {
        const panel = document.getElementById('sideContactPanel');
        const toggle = document.querySelector('.side-contact-toggle i');
        if (panel) {
            panel.classList.toggle('open');
            if (toggle) {
                toggle.className = panel.classList.contains('open') ? 'fas fa-chevron-right' : 'fas fa-chevron-left';
            }
        }
    };

    window.toggleSearchOverlay = function() {
        const overlay = document.getElementById('searchOverlay');
        const input = document.getElementById('searchInput');

        if (overlay) {
            overlay.classList.toggle('active');

            if (overlay.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                setTimeout(() => input && input.focus(), 300);
            } else {
                document.body.style.overflow = '';
                if (input) input.value = '';
                resetSearchResults();
            }
        }
    };

    // Reset search results
    function resetSearchResults() {
        const results = document.getElementById('searchResults');
        if (results) {
            results.innerHTML = `
                <div class="search-hint">
                    <i class="fas fa-lightbulb"></i>
                    <span>Ürün adı, makina türü veya sayfa ismi yazarak arama yapabilirsiniz.</span>
                </div>
            `;
        }
    }

    // Search fonksiyonu
    function performSearch(query) {
        const results = document.getElementById('searchResults');
        if (!results) return;

        query = query.trim().toLowerCase();

        if (query.length < 2) {
            resetSearchResults();
            return;
        }

        const matches = searchData.filter(item => {
            const searchText = (item.title + ' ' + item.keywords + ' ' + item.category).toLowerCase();
            return searchText.includes(query);
        });

        if (matches.length === 0) {
            results.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p>"${query}" için sonuç bulunamadı.</p>
                    <span>Farklı kelimeler deneyebilirsiniz.</span>
                </div>
            `;
            return;
        }

        const grouped = {};
        matches.forEach(item => {
            if (!grouped[item.category]) grouped[item.category] = [];
            grouped[item.category].push(item);
        });

        let html = '';
        for (const category in grouped) {
            html += `<div class="search-category"><h4>${category}</h4><ul>`;
            grouped[category].forEach(item => {
                html += `<li><a href="${item.url}" onclick="toggleSearchOverlay()"><i class="fas fa-chevron-right"></i><span>${item.title}</span></a></li>`;
            });
            html += `</ul></div>`;
        }

        results.innerHTML = html;
    }

    // Search input listener
    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                performSearch(this.value);
            });

            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const firstResult = document.querySelector('#searchResults a');
                    if (firstResult) firstResult.click();
                }
                if (e.key === 'Escape') toggleSearchOverlay();
            });
        }
    });

    // ESC tuşu ile overlay'i kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const overlay = document.getElementById('searchOverlay');
            if (overlay && overlay.classList.contains('active')) {
                toggleSearchOverlay();
            }
        }
    });

})();
