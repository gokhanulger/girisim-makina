// Supabase Configuration
// Girişim Makina - Backend powered by Supabase
//
// IMPORTANT: Enable Row Level Security (RLS) on your Supabase database!
// Run these SQL commands in the Supabase SQL Editor:
//
//   ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
//   CREATE POLICY "Public read" ON site_content FOR SELECT USING (true);
//   CREATE POLICY "Auth write" ON site_content FOR INSERT USING (auth.role() = 'authenticated');
//   CREATE POLICY "Auth update" ON site_content FOR UPDATE USING (auth.role() = 'authenticated');
//   CREATE POLICY "Auth delete" ON site_content FOR DELETE USING (auth.role() = 'authenticated');
//

const SUPABASE_URL = 'https://yvptjiowxqllxfzlkosy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cHRqaW93eHFsbHhmemxrb3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NTQxMTksImV4cCI6MjA4NTAzMDExOX0.9soLQNOJZEpQx__vhJEQzB9SBImPi-ccceB-23WNWAQ';

// Initialize Supabase client and store on window for cross-script access
(function() {
    var sdk = window.supabase || window.Supabase;
    if (sdk && sdk.createClient) {
        window._supabaseClient = sdk.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else {
        console.error('Supabase SDK not loaded');
        window._supabaseClient = null;
    }
})();
var supabase = window._supabaseClient;

// Default site content structure
const defaultSiteContent = {
    // Site Logo (boş ise text logo kullanılır)
    logo: '',

    // Top Bar
    topBar: {
        phone: "+90 212 879 29 27",
        email: "info@girisimmak.com"
    },

    // Hero Section
    hero: {
        title: "GOFRET & PAKETLEME",
        titleHighlight: "TEKNOLOJİLERİNDE",
        titleEnd: "LİDER",
        description: "1985'ten beri gıda işleme ve paketleme makineleri üretiyoruz. Dünya standartlarında kalite, 57 ülkeye ihracat.",
        stats: [
            { number: "57+", text: "Ülke" },
            { number: "12.000", text: "m² Tesis" },
            { number: "38+", text: "Yıl Tecrübe" }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920"
    },

    // About Section
    about: {
        tag: "Hakkımızda",
        title: "Gıda İşleme ve Paketlemede",
        titleHighlight: "Güvenilir Çözüm Ortağınız",
        paragraph1: "Girişim Makina olarak, 1985 yılından bu yana gıda işleme ve paketleme sektöründe faaliyet göstermekteyiz. Gofret üretim hatları, tahıl bar makineleri, çikolata kaplama sistemleri ve yatay paketleme makineleri üretiminde uzmanlaşmış firmamız, toplam 12.000 m² üretim alanına sahiptir.",
        paragraph2: "57'den fazla ülkeye ihracat yapan firmamız, dünya standartlarında kalite ve müşteri memnuniyeti odaklı hizmet sunmaktadır.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
        experienceYears: "38+",
        features: [
            { icon: "fas fa-industry", text: "12.000 m² Tesis" },
            { icon: "fas fa-globe-europe", text: "57+ Ülke İhracat" },
            { icon: "fas fa-headset", text: "7/24 Destek" }
        ]
    },

    // Machines Section
    machines: {
        tag: "Üretim Hatları",
        title: "Gıda İşleme",
        titleHighlight: "Makinelerimiz",
        subtitle: "Komple üretim hatları ve tek makine çözümleri",
        items: [
            {
                title: "Gofret Üretim Hatları",
                description: "Komple gofret üretim hatları, hamur hazırlama, pişirme ve kesim sistemleri",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
                features: ["Otomatik hamur besleme", "Yüksek kapasiteli fırınlar", "Hassas kesim sistemleri"]
            },
            {
                title: "Tahıl & Enerji Bar Hatları",
                description: "Granola, müsli ve enerji barı üretim hatları",
                image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600",
                features: ["Karıştırma sistemleri", "Şekillendirme üniteleri", "Soğutma tünelleri"]
            },
            {
                title: "Çikolata Kaplama Sistemleri",
                description: "Enrobing makineleri ve çikolata soğutma tünelleri",
                image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600",
                features: ["Tam kaplama sistemi", "Sıcaklık kontrolü", "Dekorasyon üniteleri"]
            },
            {
                title: "Flow Pack Makineleri",
                description: "Yatay paketleme, vakum ve gaz enjeksiyon sistemleri",
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600",
                features: ["Yüksek hız", "Vakum/MAP seçeneği", "Servo motorlu"]
            }
        ]
    },

    // Packaging Section
    packaging: {
        tag: "Paketleme Çözümleri",
        title: "Paketleme",
        titleHighlight: "Makinelerimiz",
        subtitle: "Her ürün için özelleştirilmiş paketleme çözümleri",
        items: [
            { icon: "fas fa-box", title: "Flow Pack", description: "Bisküvi, gofret, çikolata, sabun ve daha fazlası için yatay paketleme" },
            { icon: "fas fa-gift", title: "Overwrapping", description: "Zarf tipi paketleme, özellikle cips, gofret ve sabun için ideal" },
            { icon: "fas fa-layer-group", title: "Thermoform", description: "Form-fill-seal paketleme, çikolata ve şekerleme için" },
            { icon: "fas fa-arrows-alt-v", title: "VFFS", description: "Dikey form-fill-seal, granül ve toz ürünler için" }
        ]
    },

    // Sectors Section
    sectors: {
        tag: "Uzmanlık Alanlarımız",
        title: "Paketlediğimiz",
        titleHighlight: "Ürünler",
        subtitle: "Geniş ürün yelpazesinde uzman çözümler",
        items: [
            { icon: "fas fa-cookie", title: "Bisküvi" },
            { icon: "fas fa-stroopwafel", title: "Gofret" },
            { icon: "fas fa-candy-cane", title: "Çikolata" },
            { icon: "fas fa-bread-slice", title: "Kek & Kruvasan" },
            { icon: "fas fa-cheese", title: "Helva" },
            { icon: "fas fa-seedling", title: "Tahıl Bar" },
            { icon: "fas fa-fire", title: "Cips & Snack" },
            { icon: "fas fa-soap", title: "Sabun" },
            { icon: "fas fa-coffee", title: "Kahve" },
            { icon: "fas fa-bone", title: "Pet Food" },
            { icon: "fas fa-ice-cream", title: "Dondurma" },
            { icon: "fas fa-pizza-slice", title: "Tortilla" }
        ]
    },

    // Machine Categories - Recursive tree structure (esnek derinlik)
    // type: 'category' = alt kategoriler içerir, 'product' = yaprak düğüm (ürün sayfası)
    machineCategories: [
        {
            id: 'production',
            title: 'Üretim Hatları',
            titleKey: 'megaMenu.productionLines',
            icon: '',
            image: '',
            type: 'category',
            href: 'machines/production-lines.html',
            children: [
                { id: 'wafer', title: 'Gofret Üretim Hatları', titleKey: 'dropdown.wafer', icon: '', image: '', type: 'product', href: 'products/wafer.html', children: [] },
                { id: 'cereal-bar', title: 'Tahıl Bar Üretim Hatları', titleKey: 'dropdown.cerealBar', icon: '', image: '', type: 'product', href: 'products/cereal-bar.html', children: [] },
                { id: 'protein-bar', title: 'Protein Bar Üretim Hatları', titleKey: 'dropdown.protein', icon: '', image: '', type: 'product', href: 'products/protein-bar.html', children: [] },
                { id: 'coconut-bar', title: 'Hindistan Cevizi Dolgulu Bar', titleKey: 'dropdown.coconutBar', icon: '', image: '', type: 'product', href: 'products/coconut-bar.html', children: [] },
                { id: 'halvah', title: 'Helva Üretim Hatları', titleKey: 'dropdown.halvah', icon: '', image: '', type: 'product', href: 'products/halvah.html', children: [] }
            ]
        },
        {
            id: 'biscuit',
            title: 'Bisküvi & Çikolata',
            titleKey: 'megaMenu.biscuitChocolate',
            icon: '',
            image: '',
            type: 'category',
            href: 'machines/biscuit-chocolate.html',
            children: [
                { id: 'biscuit-sandwiching', title: 'Bisküvi Kremalama Makinaları', titleKey: 'dropdown.biscuit', icon: '', image: '', type: 'product', href: 'products/biscuit-sandwiching.html', children: [] },
                { id: 'cookie-capping', title: 'Cookie Capping (Chocopie)', titleKey: 'dropdown.cookieCapping', icon: '', image: '', type: 'product', href: 'products/cookie-capping.html', children: [] },
                { id: 'chocolate-coating', title: 'Çikolata Kaplama Makinası', titleKey: 'dropdown.chocolate', icon: '', image: '', type: 'product', href: 'products/chocolate-coating.html', children: [] },
                { id: 'chocolate-cooling', title: 'Çikolata Soğutma Tüneli', titleKey: 'dropdown.chocolateCooling', icon: '', image: '', type: 'product', href: 'products/chocolate-cooling.html', children: [] },
                { id: 'chocolate-preparation', title: 'Çikolata Hazırlama Mutfağı', titleKey: 'dropdown.chocolatePrep', icon: '', image: '', type: 'product', href: 'products/chocolate-preparation.html', children: [] }
            ]
        },
        {
            id: 'horizontal',
            title: 'Yatay Paketleme',
            titleKey: 'megaMenu.horizontalPack',
            icon: '',
            image: '',
            type: 'category',
            href: 'machines/horizontal-packaging.html',
            children: [
                { id: 'flow-pack', title: 'Yatay Flowpack Paketleme', titleKey: 'dropdown.flowpack', icon: '', image: '', type: 'product', href: 'products/flow-pack.html', children: [] },
                { id: 'overwrapping', title: 'Zarf Tipi Paketleme (Overwrapping)', titleKey: 'dropdown.overwrap', icon: '', image: '', type: 'product', href: 'products/overwrapping.html', children: [] }
            ]
        },
        {
            id: 'vertical',
            title: 'Dikey Paketleme',
            titleKey: 'megaMenu.verticalPack',
            icon: '',
            image: '',
            type: 'category',
            href: 'machines/vertical-packaging.html',
            children: [
                { id: 'vffs', title: 'Dikey Paketleme (VFFS)', titleKey: 'dropdown.vffs', icon: '', image: '', type: 'product', href: 'products/vffs.html', children: [] },
                { id: 'thermoform', title: 'Thermoform Paketleme', titleKey: 'dropdown.thermoform', icon: '', image: '', type: 'product', href: 'products/thermoform.html', children: [] }
            ]
        },
        {
            id: 'filling',
            title: 'Dolum & Yardımcı',
            titleKey: 'megaMenu.fillingAux',
            icon: '',
            image: '',
            type: 'category',
            href: 'machines/filling-auxiliary.html',
            children: [
                { id: 'filling-machines', title: 'Dolum Makinaları', titleKey: 'dropdown.filling', icon: '', image: '', type: 'product', href: 'products/filling-machines.html', children: [] },
                { id: 'sugar-mill', title: 'Pudra Şekeri Değirmeni', titleKey: 'dropdown.sugarMill', icon: '', image: '', type: 'product', href: 'products/sugar-mill.html', children: [] }
            ]
        }
    ],

    // Why Us Section
    whyUs: {
        tag: "Neden Biz?",
        title: "Neden",
        titleHighlight: "Girişim Makina?",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800",
        items: [
            { icon: "fas fa-industry", title: "Geniş Üretim Kapasitesi", description: "12.000 m² kapalı alanda, 4 ayrı üretim tesisiyle hizmet veriyoruz" },
            { icon: "fas fa-globe", title: "Global Deneyim", description: "Avrupa, Ortadoğu, Afrika ve Asya'da 57+ ülkeye ihracat" },
            { icon: "fas fa-cogs", title: "Komple Çözümler", description: "Üretimden paketlemeye, anahtar teslim proje çözümleri" },
            { icon: "fas fa-tools", title: "Teknik Servis", description: "Satış sonrası destek, yedek parça ve eğitim hizmetleri" },
            { icon: "fas fa-history", title: "38 Yıllık Tecrübe", description: "1985'ten beri sektörde güvenilir çözüm ortağı" }
        ]
    },

    // Testimonials Section
    testimonials: {
        tag: "Referanslarımız",
        title: "Müşterilerimiz",
        titleHighlight: "Ne Diyor?",
        items: [
            {
                text: "Girişim Makina ile gofret hattımızı kurduk. Kaliteli üretim, hızlı kurulum ve mükemmel teknik destek. Kesinlikle tavsiye ediyoruz.",
                author: "Mehmet Kaya",
                role: "Gıda Üreticisi - Türkiye",
                flag: "images/flags/tr.svg"
            },
            {
                text: "Excellent flow pack machines. Running 24/7 for 3 years without major issues. Great after-sales support from the team.",
                author: "Ahmed Hassan",
                role: "Food Factory - Egypt",
                flag: "images/flags/ae.svg"
            },
            {
                text: "We bought cereal bar line and overwrapping machine. Professional team, quality equipment. Very satisfied with the investment.",
                author: "Piotr Nowak",
                role: "Confectionery - Poland",
                flag: "images/flags/pl.svg"
            }
        ]
    },

    // Videos Section
    videos: {
        tag: "Video Galeri",
        title: "Makinelerimiz",
        titleHighlight: "Çalışırken",
        subtitle: "YouTube kanalımızda tüm makinelerimizi izleyin",
        youtubeChannel: "https://www.youtube.com/@girisimpackagingmachinery",
        items: [
            { title: "Flow Pack Paketleme", thumbnail: "https://img.youtube.com/vi/tF6KbrRx9gI/maxresdefault.jpg", videoId: "tF6KbrRx9gI" },
            { title: "Gofret Üretim Hattı", thumbnail: "https://img.youtube.com/vi/igEIPiJt3UI/maxresdefault.jpg", videoId: "igEIPiJt3UI" },
            { title: "Çikolata Enrobing", thumbnail: "https://img.youtube.com/vi/x2IZbYuavgY/maxresdefault.jpg", videoId: "x2IZbYuavgY" },
            { title: "Pirinç Keki Paketleme", thumbnail: "https://img.youtube.com/vi/RdnibYpZZG4/maxresdefault.jpg", videoId: "RdnibYpZZG4" },
            { title: "VFFS Dikey Paketleme", thumbnail: "https://img.youtube.com/vi/GlzQlLBKF-U/maxresdefault.jpg", videoId: "GlzQlLBKF-U" },
            { title: "Bisküvi Kremalama", thumbnail: "https://img.youtube.com/vi/gfMiy8vIisY/maxresdefault.jpg", videoId: "gfMiy8vIisY" }
        ]
    },

    // CTA Section
    cta: {
        title: "Projeniz İçin Teklif Alın",
        description: "Uzman ekibimiz size en uygun üretim ve paketleme çözümünü sunmak için hazır",
        whatsapp: "905468792927"
    },

    // Contact Section
    contact: {
        tag: "İletişim",
        title: "Bizimle",
        titleHighlight: "İletişime Geçin",
        address: {
            line1: "Mahmutbey Mah. Taş Ocağı Cad.",
            line2: "No:3/295 Güneşli",
            line3: "Bağcılar / İstanbul"
        },
        phones: ["+90 212 879 29 27", "+90 546 879 29 27"],
        emails: ["info@girisimmak.com", "sales@girisimmak.com"],
        workingHours: {
            weekdays: "Pazartesi - Cuma: 08:30 - 18:00",
            saturday: "Cumartesi: 09:00 - 13:00"
        },
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.7!2d28.82!3d41.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzAwLjAiTiAyOMKwNDknMTIuMCJF!5e0!3m2!1str!2str!4v1635000000000!5m2!1str!2str"
    },

    // Footer
    footer: {
        description: "1985'ten beri gıda işleme ve paketleme makineleri üretiyoruz. 57+ ülkeye ihracat, 12.000 m² üretim tesisi.",
        social: {
            facebook: "https://www.facebook.com/girisimmakina",
            instagram: "https://www.instagram.com/girisimmakina",
            linkedin: "https://www.linkedin.com/company/girisim-food-processing-and-packaging-machinery-turkey",
            youtube: "https://www.youtube.com/@girisimpackagingmachinery",
            whatsapp: "905468792927"
        },
        copyright: "2025 Girişim Makina. Tüm hakları saklıdır."
    },

    // Contact Info (shared across header, footer, float buttons)
    contactInfo: {
        officePhone: "+90 212 879 29 27",
        mobilePhone: "+90 546 879 29 27",
        whatsapp: "+90 546 879 29 27",
        fax: "",
        email: "info@girisimmak.com",
        salesEmail: "sales@girisimmak.com"
    },

    // Header Configuration
    headerConfig: {
        menuItems: [
            { id: "home", label: "Ana Sayfa", href: "/", visible: true },
            { id: "corporate", label: "Kurumsal", href: "#", visible: true, hasDropdown: true },
            { id: "machines", label: "Makinalarımız", href: "#", visible: true, hasMegamenu: true },
            { id: "packaging-choice", label: "Paketleme Tercihi", href: "#", visible: true, hasDropdown: true },
            { id: "blog", label: "Blog", href: "/blog", visible: true },
            { id: "contact", label: "İletişim", href: "/#contact", visible: true }
        ],
        social: {
            youtube: "https://www.youtube.com/@girisimpackagingmachinery",
            linkedin: "https://www.linkedin.com/company/girisim-food-processing-and-packaging-machinery-turkey",
            instagram: "https://www.instagram.com/girisimmakina",
            facebook: "https://www.facebook.com/girisimmakina",
            tiktok: ""
        }
    },

    // Hero Slides (for multi-slide hero)
    heroSlides: [
        {
            tag: "Gofret Üretim Hatları",
            title: "GOFRET ÜRETİMİNDE",
            titleHighlight: "DÜNYA LİDERİ",
            description: "Tam otomatik gofret üretim hatları ile yüksek kapasiteli, kesintisiz üretim.",
            stats: [{ number: "57+", text: "Ülke" }, { number: "12.000", text: "m² Tesis" }, { number: "38+", text: "Yıl" }],
            buttons: [
                { text: "Ürünleri İncele", href: "/products/wafer", style: "primary" },
                { text: "Teklif Al", href: "https://wa.me/905468792927", style: "outline" }
            ],
            backgroundImage: ""
        }
    ],

    // Analytics & Tracking
    analytics: {
        googleAnalytics: "",
        googleTagManager: "",
        googleSearchConsole: "",
        googleAdsConversionId: "",
        googleAdsConversionLabel: "",
        facebookPixel: "",
        yandexMetrica: "",
        yandexWebmaster: "",
        linkedinInsight: "",
        microsoftClarity: "",
        tiktokPixel: "",
        customHeadCode: "",
        customBodyCode: ""
    },

    // SEO Settings
    seo: {
        homepage: {
            title: "Girişim Makina | Gıda İşleme ve Paketleme Makineleri",
            description: "1995'ten beri gıda işleme ve paketleme makineleri üretiyoruz. Gofret hatları, flow pack, çikolata kaplama ve daha fazlası.",
            keywords: "paketleme makinesi, flow pack, gofret üretim hattı, çikolata kaplama",
            ogImage: ""
        }
    },

    // Blog
    blog: {
        posts: []
    },

    // HR (İnsan Kaynakları)
    hr: {
        title: "Girişim Makina Ailesi'ne Katılın",
        description: "Sektörünün lider kuruluşlarından biri olan Girişim Makina, yetenekli ve dinamik profesyonelleri bünyesine katmak istiyor.",
        benefits: [
            "Rekabetçi maaş ve yan haklar",
            "Kariyer gelişim fırsatları",
            "Uluslararası çalışma ortamı",
            "Sosyal aktiviteler ve etkinlikler"
        ],
        positions: [
            { title: "Makine Mühendisi", department: "Üretim" },
            { title: "Elektrik-Elektronik Mühendisi", department: "Ar-Ge" },
            { title: "İhracat Uzmanı", department: "Satış" },
            { title: "Teknik Servis Teknisyeni", department: "Servis" }
        ]
    },

    // Products (ürün sayfası içerikleri - admin'den düzenlenen)
    products: {},

    // Product Pages (varsayılan ürün sayfası verileri - product-data.js'den yüklenir)
    // Admin'den düzenlenen veriler bunu override eder
    productPages: {},

    // Translations (admin'den düzenlenen çeviriler)
    translations: {},

    // Certificates
    certificates: {
        tag: 'Sertifikalarımız',
        title: 'Kalite Belgelerimiz',
        items: []
    },

    // Catalog
    catalog: {
        url: "",
        title: "Girişim Makina Kataloğu"
    },

    // Featured Search Items
    featuredSearchItems: [
        { title: "Flow Pack", href: "/products/flow-pack" },
        { title: "Gofret Hattı", href: "/products/wafer" },
        { title: "Çikolata Kaplama", href: "/products/chocolate-coating" },
        { title: "Thermoform", href: "/products/thermoform" },
        { title: "VFFS", href: "/products/vffs" },
        { title: "Overwrapping", href: "/products/overwrapping" }
    ]
};

// ============================================
// Content Cache (sessionStorage - 2min TTL)
// ============================================

const CACHE_KEY = 'girisim_site_cache';
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

async function getCachedSiteContent() {
    // 1. Check if already loaded globally
    if (window.__siteContent) return window.__siteContent;

    // 2. Check sessionStorage cache
    try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < CACHE_TTL) {
                window.__siteContent = migrateMachineCategories(data);
                return window.__siteContent;
            }
        }
    } catch (e) { /* ignore parse errors */ }

    // 3. Fetch from Supabase
    try {
        if (typeof supabase !== 'undefined') {
            let content = await loadSiteContent();
            if (content) {
                content = migrateMachineCategories(content);
                window.__siteContent = content;
                sessionStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: content, timestamp: Date.now()
                }));
                return content;
            }
        }
    } catch (e) {
        console.warn('Supabase fetch failed, trying localStorage fallback');
    }

    // 4. Fallback to localStorage
    try {
        const localContent = localStorage.getItem('girisim_site_content');
        if (localContent) {
            const content = migrateMachineCategories(JSON.parse(localContent));
            window.__siteContent = content;
            return content;
        }
    } catch (e) { /* ignore */ }

    // 5. Return defaults
    window.__siteContent = defaultSiteContent;
    return defaultSiteContent;
}

// Migrate old machineCategories format (machines[] → children[])
function migrateMachineCategories(content) {
    if (!content || !content.machineCategories || !content.machineCategories.length) return content;
    var cats = content.machineCategories;
    // Check if old format (has 'machines' key instead of 'children')
    if (cats[0].machines && !cats[0].children) {
        content.machineCategories = cats.map(function(cat) {
            return {
                id: cat.id || '',
                title: cat.title || '',
                titleKey: cat.titleKey || '',
                icon: cat.icon || '',
                image: cat.image || '',
                type: 'category',
                href: cat.href || '',
                children: (cat.machines || []).map(function(m) {
                    return {
                        id: (m.href || '').split('/').pop().replace('.html', '') || '',
                        title: m.title || '',
                        titleKey: m.titleKey || '',
                        icon: '',
                        image: m.image || '',
                        type: 'product',
                        href: m.href || '',
                        children: []
                    };
                })
            };
        });
    }
    return content;
}

// Clear cache (called from admin after save)
function clearSiteCache() {
    sessionStorage.removeItem(CACHE_KEY);
    localStorage.removeItem('girisim_site_content');
    localStorage.removeItem('girisim_analytics_settings');
    localStorage.removeItem('girisim_header_config');
    localStorage.removeItem('girisim_custom_translations');
    localStorage.removeItem('girisim_product_package_images');
    localStorage.removeItem('girisim_uploaded_images');
    window.__siteContent = null;
}

// ============================================
// Supabase Database Functions
// ============================================

// Initialize default content in database
async function initializeDefaultContent() {
    try {
        const { data, error } = await supabase
            .from('site_content')
            .select('*')
            .eq('id', 'main')
            .single();

        if (error && error.code === 'PGRST116') {
            // No data found, insert default
            const { error: insertError } = await supabase
                .from('site_content')
                .insert({ id: 'main', content: defaultSiteContent });

            if (insertError) {
                console.error('Error initializing content:', insertError);
            } else {
                console.log('Default content initialized in Supabase');
            }
        }
    } catch (error) {
        console.error('Error initializing content:', error);
    }
}

// Load site content from Supabase
async function loadSiteContent() {
    try {
        const { data, error } = await supabase
            .from('site_content')
            .select('content')
            .eq('id', 'main')
            .single();

        if (error) {
            console.error('Error loading content:', error);
            return defaultSiteContent;
        }

        return data?.content || defaultSiteContent;
    } catch (error) {
        console.error('Error loading content:', error);
        return defaultSiteContent;
    }
}

// Save site content to Supabase
async function saveSiteContent(content) {
    try {
        const { error } = await supabase
            .from('site_content')
            .upsert({
                id: 'main',
                content: content,
                updated_at: new Date().toISOString()
            });

        if (error) {
            console.error('Error saving content:', error);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error saving content:', error);
        return false;
    }
}

// ============================================
// Supabase Auth Functions
// ============================================

// Get current user
function getCurrentUser() {
    return supabase.auth.getUser();
}

// Sign in with email and password
async function signInWithEmail(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) throw error;
    return data;
}

// Sign out
async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

// Listen to auth state changes
function onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange((event, session) => {
        callback(session?.user || null);
    });
}

// ============================================
// Supabase Storage Functions
// ============================================

// Upload image to Supabase Storage
async function uploadImage(file, path) {
    try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${path}/${fileName}`;

        const { data, error } = await supabase.storage
            .from('images')
            .upload(filePath, file);

        if (error) throw error;

        // Get public URL
        const { data: urlData } = supabase.storage
            .from('images')
            .getPublicUrl(filePath);

        return urlData.publicUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

// Delete image from Supabase Storage
async function deleteImage(path) {
    try {
        const { error } = await supabase.storage
            .from('images')
            .remove([path]);

        if (error) throw error;
        return true;
    } catch (error) {
        console.error('Error deleting image:', error);
        return false;
    }
}
