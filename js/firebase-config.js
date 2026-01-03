// Firebase Configuration
// IMPORTANT: Replace these values with your Firebase project credentials
// Go to: https://console.firebase.google.com
// 1. Create a new project or select existing
// 2. Go to Project Settings > General > Your apps > Web app
// 3. Copy the firebaseConfig object and paste below

const firebaseConfig = {
    apiKey: "AIzaSyCevgh1HtlJvhWgFYkK5q5OPMHzYFwbgMc",
    authDomain: "girisim-makina-2b308.firebaseapp.com",
    projectId: "girisim-makina-2b308",
    storageBucket: "girisim-makina-2b308.firebasestorage.app",
    messagingSenderId: "1067142137150",
    appId: "1:1067142137150:web:078ec7cd1452a6af0b986f",
    measurementId: "G-4ZR0GGRGC5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Default site content structure
const defaultSiteContent = {
    // Top Bar
    topBar: {
        phone: "+90 212 XXX XX XX",
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
            { title: "Flow Pack Paketleme", thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", videoId: "dQw4w9WgXcQ" },
            { title: "Gofret Üretim Hattı", thumbnail: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600", videoId: "dQw4w9WgXcQ" },
            { title: "Çikolata Enrobing", thumbnail: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600", videoId: "dQw4w9WgXcQ" }
        ]
    },

    // CTA Section
    cta: {
        title: "Projeniz İçin Teklif Alın",
        description: "Uzman ekibimiz size en uygun üretim ve paketleme çözümünü sunmak için hazır",
        whatsapp: "905XXXXXXXXX"
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
        phones: ["+90 212 XXX XX XX", "+90 532 XXX XX XX"],
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
            whatsapp: "905XXXXXXXXX"
        },
        copyright: "2024 Girişim Makina. Tüm hakları saklıdır."
    }
};

// Helper function to initialize default content in Firestore
async function initializeDefaultContent() {
    try {
        const docRef = db.collection('siteContent').doc('main');
        const doc = await docRef.get();

        if (!doc.exists) {
            await docRef.set(defaultSiteContent);
            console.log('Default content initialized in Firestore');
        }
    } catch (error) {
        console.error('Error initializing content:', error);
    }
}

// Load site content from Firestore
async function loadSiteContent() {
    try {
        const doc = await db.collection('siteContent').doc('main').get();
        if (doc.exists) {
            return doc.data();
        }
        return defaultSiteContent;
    } catch (error) {
        console.error('Error loading content:', error);
        return defaultSiteContent;
    }
}

// Save site content to Firestore
async function saveSiteContent(content) {
    try {
        await db.collection('siteContent').doc('main').set(content, { merge: true });
        return true;
    } catch (error) {
        console.error('Error saving content:', error);
        return false;
    }
}
