// Multi-language Translation System
const translations = {
    // Turkish - Türkçe
    tr: {
        lang: "Türkçe",
        flag: "🇹🇷",
        dir: "ltr",
        nav: {
            about: "Kurumsal",
            production: "Makinalarımız",
            packaging: "Paketleme Tercihiniz",
            sectors: "Sektörler",
            videos: "Videolar",
            contact: "İletişim",
            blog: "Blog",
            getQuote: "TEKLİF AL"
        },
        corporate: {
            aboutUs: "Hakkımızda",
            whyUs: "Neden Girişim Makina?",
            certificates: "Sertifikalarımız",
            hr: "İnsan Kaynakları"
        },
        machines: {
            cerealBar: "Tahıl Bar Üretim Hatları",
            chocolateCoating: "Çikolata Kaplama Makinaları",
            biscuitSandwich: "Bisküvi Kremalama Makinaları",
            flowpack: "Yatay Flowpack Paketleme",
            vffs: "Dikey Paketleme Makinaları",
            overwrap: "Zarf Tipi Paketleme"
        },
        packagingChoice: {
            byType: "Paket Tipine Göre",
            byProduct: "Ürününüze Göre"
        },
        dropdown: {
            // Mega Menu Titles
            productionMachines: "Üretim Makinaları",
            packagingMachines: "Paketleme Makinaları",
            // Production Machines
            wafer: "Gofret Üretim Hatları",
            cereal: "Tahıl Bar Üretim Hatları",
            coconutBar: "Hindistan Cevizi Dolgulu Bar",
            protein: "Protein Bar Hatları",
            biscuit: "Bisküvi Kremalama Makinaları",
            cookieCapping: "Cookie Capping (Chocopie)",
            chocolate: "Çikolata Kaplama Makinası",
            chocolateCooling: "Çikolata Soğutma Tüneli",
            chocolatePrep: "Çikolata Hazırlama Mutfağı",
            sugarMill: "Pudra Şekeri Değirmeni",
            // Packaging Machines
            flowpack: "Yatay Flowpack Paketleme",
            vffs: "Dikey Paketleme (VFFS)",
            overwrap: "Zarf Tipi Paketleme",
            thermoform: "Thermoform Paketleme",
            filling: "Dolum Makinaları",
            halvah: "Helva Dilimleme & Paketleme",
            // Corporate Menu
            mission: "Misyonumuz & Vizyonumuz",
            values: "Değerlerimiz",
            rnd: "AR-GE",
            service: "Satış Sonrası Servis"
        },
        hero: {
            title1: "WAFER & CEREAL BAR",
            title2: "ÜRETİM HATLARI",
            title3: "& PAKETLEME MAKİNALARI",
            description: "1995'ten beri gıda işleme ve paketleme makineleri üretiyoruz. Türkiye'nin lider üreticisi olarak 57 ülkeye ihracat yapıyoruz.",
            stat1: "Ülkeye İhracat",
            stat2: "m² Üretim Alanı",
            stat3: "Yıllık Tecrübe",
            cta1: "HEMEN TEKLİF AL",
            cta2: "VİDEOLARI İZLE"
        },
        about: {
            tag: "Hakkımızda",
            title1: "Gıda Üreticilerinin",
            title2: "Global Büyüme Ortağı",
            p1: "Girişim Makina olarak, 1995 yılından bu yana gıda işleme ve paketleme sektöründe Türkiye'nin lider üreticisiyiz. 3 farklı üretim tesisimiz ve toplam 12.000 m² kapalı alanımızla wafer üretim hatları, cereal bar makineleri, çikolata kaplama sistemleri ve paketleme makineleri üretiyoruz.",
            p2: "Avrupa, Ortadoğu, Afrika ve Asya'da 57'den fazla ülkeye ihracat yaparak, dünya standartlarında kalite ve müşteri memnuniyeti sunuyoruz. Gulfood Manufacturing gibi uluslararası fuarlarda Türkiye'yi temsil ediyoruz.",
            feature1: "3 Üretim Tesisi",
            feature2: "57+ Ülke İhracat",
            feature3: "7/24 Teknik Destek",
            catalog: "Katalogları İndir"
        },
        production: {
            tag: "Üretim Hatları",
            title1: "Gıda İşleme",
            title2: "Makinelerimiz",
            subtitle: "Komple anahtar teslim üretim hatları ve tek makine çözümleri",
            getQuote: "Teklif Al",
            watchVideos: "Tüm Videoları İzle",
            machines: {
                wafer: {
                    title: "Wafer Üretim Hatları",
                    desc: "Komple wafer üretim hatları - hamur hazırlamadan paketlemeye kadar",
                    f1: "Otomatik hamur hazırlama",
                    f2: "Yüksek kapasiteli fırınlar",
                    f3: "Kremalama & kesim sistemleri"
                },
                cereal: {
                    title: "Cereal & Protein Bar Hatları",
                    desc: "Granola, müsli, protein ve enerji barı üretim hatları",
                    f1: "Karıştırma & pişirme sistemleri",
                    f2: "Şekillendirme üniteleri",
                    f3: "Soğutma tünelleri"
                },
                chocolate: {
                    title: "Çikolata Kaplama Sistemleri",
                    desc: "Enrobing makineleri ve çikolata soğutma tünelleri",
                    f1: "Tam/yarım kaplama",
                    f2: "Hassas sıcaklık kontrolü",
                    f3: "Dekorasyon üniteleri"
                },
                biscuit: {
                    title: "Bisküvi Kremalama Makineleri",
                    desc: "Sandviç bisküvi üretimi için kremalama sistemleri",
                    f1: "Farklı şekil & boyutlar",
                    f2: "Hassas krem dozajlama",
                    f3: "Yüksek hız kapasitesi"
                }
            }
        },
        packaging: {
            tag: "Paketleme Çözümleri",
            title1: "Paketleme",
            title2: "Makinelerimiz",
            subtitle: "Her ürün ve sektör için özelleştirilmiş paketleme çözümleri",
            types: {
                flowpack: {
                    title: "Flow Pack",
                    desc: "Yatay form-fill-seal paketleme. Bisküvi, wafer, çikolata, sabun, ekmek ve daha fazlası. Vakum ve MAP seçenekleri mevcut."
                },
                overwrap: {
                    title: "Overwrapping",
                    desc: "Zarf tipi paketleme. Özellikle pirinç keki, wafer, bisküvi, cips ve sabun paketleme için ideal çözüm."
                },
                thermoform: {
                    title: "Thermoform",
                    desc: "Form-fill-seal paketleme. Çikolata, şekerleme, peynir ve et ürünleri için vakumlu paketleme."
                },
                vffs: {
                    title: "VFFS Dikey Dolum",
                    desc: "Dikey form-fill-seal. Granül, toz, kuruyemiş ve snack ürünleri için tartım ve dolum sistemleri."
                }
            }
        },
        certificates: {
            tag: "Sertifikalarımız",
            title: "CE",
            highlight: "Sertifikaları",
            subtitle: "Makinelerimiz Avrupa CE standartlarına uygun olarak üretilmektedir",
            horizontal: "Yatay paketleme makineleri CE sertifikası",
            thermoform: "Termoform paketleme makineleri CE sertifikası",
            vertical: "Dikey dolum makineleri CE sertifikası",
            download: "İndir"
        },
        sectors: {
            tag: "Uzmanlık Alanlarımız",
            title1: "Paketlediğimiz",
            title2: "Ürünler",
            subtitle: "30 yıllık tecrübeyle her sektöre özel çözümler",
            items: ["Bisküvi", "Wafer", "Çikolata", "Kek & Pasta", "Cereal Bar", "Protein Bar", "Helva", "Cips & Snack", "Sabun", "Pirinç Keki", "Kahve", "Pet Food"]
        },
        whyUs: {
            tag: "Neden Biz?",
            title1: "Neden",
            title2: "Girişim Makina?",
            items: [
                { title: "3 Üretim Tesisi", desc: "Toplam 12.000 m² kapalı alanda, 3 ayrı modern üretim tesisiyle Türkiye'nin en büyük gıda makineleri üreticisiyiz." },
                { title: "57+ Ülkeye İhracat", desc: "Avrupa, Ortadoğu, Afrika ve Asya'da 57'den fazla ülkede müşterilerimize hizmet veriyoruz." },
                { title: "Anahtar Teslim Projeler", desc: "Üretimden paketlemeye, fabrika tasarımından kuruluma kadar komple çözümler sunuyoruz." },
                { title: "Satış Sonrası Destek", desc: "7/24 teknik destek, yedek parça temini ve operatör eğitimi hizmetleri." },
                { title: "30 Yıllık Tecrübe", desc: "1995'ten beri sektörün güvenilir çözüm ortağı. Gulfood Manufacturing katılımcısı." }
            ]
        },
        testimonials: {
            tag: "Referanslarımız",
            title1: "Müşterilerimiz",
            title2: "Ne Diyor?"
        },
        fuarlar: {
            tag: "Fuarlar",
            title1: "Fuar",
            title2: "Katılımlarımız",
            subtitle: "Uluslararası fuarlarda Türkiye'yi temsil ediyoruz",
            video1: "CNR FOTEG 2022",
            video2: "Gulfood Manufacturing 2024",
            video3: "Interpack 2023",
            video4: "PackExpo 2024"
        },
        videos: {
            tag: "Video Galeri",
            title1: "Makinelerimizi",
            title2: "İzleyin",
            subtitle: "YouTube kanalımızda 100+ makine videosu",
            cta: "YouTube Kanalımız",
            items: ["Flow Pack Paketleme", "Wafer Üretim Hattı", "Çikolata Enrobing", "Pirinç Keki Paketleme", "VFFS Dikey Dolum", "Bisküvi Üretim Hattı"]
        },
        cta: {
            title: "Projeniz İçin Ücretsiz Teklif Alın",
            subtitle: "Uzman ekibimiz size en uygun üretim ve paketleme çözümünü sunmak için hazır",
            whatsapp: "WhatsApp ile Ulaşın",
            email: "E-posta Gönderin"
        },
        contact: {
            tag: "İletişim",
            title1: "Bizimle",
            title2: "İletişime Geçin",
            address: "Adres",
            whatsapp: "WhatsApp",
            emailTitle: "E-Posta",
            hours: "Çalışma Saatleri",
            support247: "7/24 Destek",
            weekdays: "Pazartesi - Cuma: 08:30 - 18:00",
            saturday: "Cumartesi: 09:00 - 14:00",
            formTitle: "Teklif Formu",
            formName: "Adınız Soyadınız *",
            formCompany: "Firma Adı",
            formEmail: "E-posta Adresiniz *",
            formPhone: "Telefon / WhatsApp *",
            formProduct: "İlgilendiğiniz Ürün *",
            formMessage: "Mesajınız - Kapasite, ürün tipi vb. detaylar *",
            formKvkk: "KVKK Aydınlatma Metni'ni okudum ve kabul ediyorum.",
            formSubmit: "Teklif İste",
            products: ["Wafer Üretim Hattı", "Cereal Bar / Protein Bar Hattı", "Çikolata Kaplama Sistemi", "Flow Pack Makinesi", "Overwrapping Makinesi", "Thermoform Paketleme", "Dikey Dolum (VFFS)", "Bisküvi Kremalama", "Helva Dilimleme & Paketleme", "Diğer"]
        },
        footer: {
            desc: "1985'ten beri gıda işleme ve paketleme makineleri üretiyoruz. 57+ ülkeye ihracat, 12.000 m² üretim tesisi. Wafer, cereal bar üretim hatları ve paketleme makinelerinde Türkiye'nin lider üreticisi.",
            production: "Üretim Hatları",
            packagingTitle: "Paketleme",
            corporate: "Kurumsal",
            aboutUs: "Hakkımızda",
            catalogs: "Kataloglar",
            videosTitle: "Videolar",
            contactTitle: "İletişim",
            copyright: "Girişim Makina Türkiye. Tüm hakları saklıdır.",
            privacy: "Gizlilik Politikası",
            kvkk: "KVKK",
            cookies: "Çerez Politikası"
        },
        exitPopup: {
            title: "Bekleyin! Gitmeyin",
            text: "Kataloglarımızı göndermemizi ister misiniz? Size özel tekliflerimizden haberdar olun.",
            yes: "Evet, Katalog Gönder",
            no: "Hayır, Teşekkürler"
        },
        quoteForm: {
            title: "Ücretsiz Teklif Alın",
            company: "Firma Adı *",
            name: "Ad Soyad *",
            email: "E-posta *",
            phone: "Telefon *",
            productSelect: "İlgilendiğiniz Ürün *",
            message: "Mesajınız (opsiyonel)",
            fileUpload: "Görsel/Dosya Ekle (opsiyonel)",
            privacy: "KVKK Aydınlatma Metni'ni okudum ve kabul ediyorum.",
            submit: "Teklif Talebi Gönder",
            successTitle: "Talebiniz Alındı!",
            successText: "En kısa sürede size dönüş yapacağız."
        }
    },

    // English
    en: {
        lang: "English",
        flag: "🇬🇧",
        dir: "ltr",
        nav: {
            about: "Corporate",
            production: "Our Machines",
            packaging: "Packaging Choice",
            sectors: "Sectors",
            videos: "Videos",
            contact: "Contact",
            blog: "Blog",
            getQuote: "GET QUOTE"
        },
        corporate: {
            aboutUs: "About Us",
            whyUs: "Why Girişim Makina?",
            certificates: "Our Certificates",
            hr: "Human Resources"
        },
        machines: {
            cerealBar: "Cereal Bar Production Lines",
            chocolateCoating: "Chocolate Coating Machines",
            biscuitSandwich: "Biscuit Sandwiching Machines",
            flowpack: "Horizontal Flowpack Packaging",
            vffs: "Vertical Packaging Machines",
            overwrap: "Overwrapping Packaging"
        },
        packagingChoice: {
            byType: "By Package Type",
            byProduct: "By Your Product"
        },
        dropdown: {
            // Mega Menu Titles
            productionMachines: "Production Machines",
            packagingMachines: "Packaging Machines",
            // Production Machines
            wafer: "Wafer Production Lines",
            cereal: "Cereal Bar Production Lines",
            coconutBar: "Coconut Bar Production Lines",
            protein: "Protein Bar Lines",
            biscuit: "Biscuit Cream Sandwiching Machines",
            cookieCapping: "Cookie Capping (Chocopie)",
            chocolate: "Chocolate Enrobing Machine",
            chocolateCooling: "Chocolate Cooling Tunnel",
            chocolatePrep: "Chocolate Preparation Kitchen",
            sugarMill: "Powdered Sugar Mill",
            // Packaging Machines
            flowpack: "Horizontal Flowpack Packaging",
            vffs: "Vertical Packaging (VFFS)",
            overwrap: "Overwrapping Machines",
            thermoform: "Thermoform Packaging",
            filling: "Filling Machines",
            halvah: "Halvah Slicing & Packaging",
            // Corporate Menu
            mission: "Our Mission & Vision",
            values: "Our Values",
            rnd: "R&D",
            service: "After-Sales Service"
        },
        hero: {
            title1: "WAFER & CEREAL BAR",
            title2: "PRODUCTION LINES",
            title3: "& PACKAGING MACHINES",
            description: "Manufacturing food processing and packaging machines since 1985. As Turkey's leading manufacturer, we export to 57 countries worldwide.",
            stat1: "Countries Export",
            stat2: "m² Production Area",
            stat3: "Years Experience",
            cta1: "GET QUOTE NOW",
            cta2: "WATCH VIDEOS"
        },
        about: {
            tag: "About Us",
            title1: "Global Growth Partner",
            title2: "for Food Producers",
            p1: "As Girisim Makina, we have been Turkey's leading manufacturer in food processing and packaging since 1985. With 3 production facilities and 12,000 m² of covered area, we manufacture wafer production lines, cereal bar machines, chocolate coating systems, and packaging machines.",
            p2: "We export to more than 57 countries across Europe, Middle East, Africa, and Asia, offering world-class quality and customer satisfaction. We represent Turkey at international fairs like Gulfood Manufacturing.",
            feature1: "3 Production Facilities",
            feature2: "57+ Countries Export",
            feature3: "24/7 Technical Support",
            catalog: "Download Catalogs"
        },
        production: {
            tag: "Production Lines",
            title1: "Food Processing",
            title2: "Machines",
            subtitle: "Complete turnkey production lines and individual machine solutions",
            getQuote: "Get Quote",
            watchVideos: "Watch All Videos",
            machines: {
                wafer: {
                    title: "Wafer Production Lines",
                    desc: "Complete wafer production lines - from batter preparation to packaging",
                    f1: "Automatic batter preparation",
                    f2: "High capacity ovens",
                    f3: "Creaming & cutting systems"
                },
                cereal: {
                    title: "Cereal & Protein Bar Lines",
                    desc: "Granola, muesli, protein and energy bar production lines",
                    f1: "Mixing & cooking systems",
                    f2: "Forming units",
                    f3: "Cooling tunnels"
                },
                chocolate: {
                    title: "Chocolate Coating Systems",
                    desc: "Enrobing machines and chocolate cooling tunnels",
                    f1: "Full/half coating",
                    f2: "Precise temperature control",
                    f3: "Decoration units"
                },
                biscuit: {
                    title: "Biscuit Sandwiching Machines",
                    desc: "Cream sandwiching systems for sandwich biscuit production",
                    f1: "Various shapes & sizes",
                    f2: "Precise cream dosing",
                    f3: "High speed capacity"
                }
            }
        },
        packaging: {
            tag: "Packaging Solutions",
            title1: "Packaging",
            title2: "Machines",
            subtitle: "Customized packaging solutions for every product and industry",
            types: {
                flowpack: {
                    title: "Flow Pack",
                    desc: "Horizontal form-fill-seal packaging. For biscuits, wafers, chocolate, soap, bread and more. Vacuum and MAP options available."
                },
                overwrap: {
                    title: "Overwrapping",
                    desc: "Envelope-type packaging. Ideal solution for rice cake, wafer, biscuit, chips and soap packaging."
                },
                thermoform: {
                    title: "Thermoform",
                    desc: "Form-fill-seal packaging. Vacuum packaging for chocolate, confectionery, cheese and meat products."
                },
                vffs: {
                    title: "VFFS Vertical Filling",
                    desc: "Vertical form-fill-seal. Weighing and filling systems for granules, powder, nuts and snack products."
                }
            }
        },
        certificates: {
            tag: "Our Certificates",
            title: "CE",
            highlight: "Certificates",
            subtitle: "Our machines are manufactured in accordance with European CE standards",
            horizontal: "CE certificate for horizontal packaging machines",
            thermoform: "CE certificate for thermoform packaging machines",
            vertical: "CE certificate for vertical filling machines",
            download: "Download"
        },
        sectors: {
            tag: "Our Expertise",
            title1: "Products",
            title2: "We Package",
            subtitle: "Specialized solutions for every sector with 30 years of experience",
            items: ["Biscuit", "Wafer", "Chocolate", "Cake & Pastry", "Cereal Bar", "Protein Bar", "Halvah", "Chips & Snack", "Soap", "Rice Cake", "Coffee", "Pet Food"]
        },
        whyUs: {
            tag: "Why Us?",
            title1: "Why",
            title2: "Girisim Makina?",
            items: [
                { title: "3 Production Facilities", desc: "Turkey's largest food machinery manufacturer with 3 modern production facilities in a total of 12,000 m² covered area." },
                { title: "Export to 57+ Countries", desc: "We serve our customers in more than 57 countries across Europe, Middle East, Africa and Asia." },
                { title: "Turnkey Projects", desc: "Complete solutions from production to packaging, from factory design to installation." },
                { title: "After-Sales Support", desc: "24/7 technical support, spare parts supply and operator training services." },
                { title: "30 Years of Experience", desc: "Reliable solution partner of the sector since 1995. Gulfood Manufacturing participant." }
            ]
        },
        testimonials: {
            tag: "References",
            title1: "What Our",
            title2: "Customers Say"
        },
        fuarlar: {
            tag: "Trade Fairs",
            title1: "Our Trade Fair",
            title2: "Participations",
            subtitle: "We represent Turkey at international trade fairs",
            video1: "CNR FOTEG 2022",
            video2: "Gulfood Manufacturing 2024",
            video3: "Interpack 2023",
            video4: "PackExpo 2024"
        },
        videos: {
            tag: "Video Gallery",
            title1: "Watch Our",
            title2: "Machines",
            subtitle: "100+ machine videos on our YouTube channel",
            cta: "Our YouTube Channel",
            items: ["Flow Pack Packaging", "Wafer Production Line", "Chocolate Enrobing", "Rice Cake Packaging", "VFFS Vertical Filling", "Biscuit Production Line"]
        },
        cta: {
            title: "Get a Free Quote for Your Project",
            subtitle: "Our expert team is ready to offer you the most suitable production and packaging solution",
            whatsapp: "Contact via WhatsApp",
            email: "Send Email"
        },
        contact: {
            tag: "Contact",
            title1: "Get in",
            title2: "Touch with Us",
            address: "Address",
            whatsapp: "WhatsApp",
            emailTitle: "Email",
            hours: "Working Hours",
            support247: "24/7 Support",
            weekdays: "Monday - Friday: 08:30 - 18:00",
            saturday: "Saturday: 09:00 - 14:00",
            formTitle: "Quote Form",
            formName: "Your Name *",
            formCompany: "Company Name",
            formEmail: "Your Email *",
            formPhone: "Phone / WhatsApp *",
            formProduct: "Product of Interest *",
            formMessage: "Your Message - Capacity, product type, etc. *",
            formKvkk: "I have read and accept the Privacy Policy.",
            formSubmit: "Request Quote",
            products: ["Wafer Production Line", "Cereal Bar / Protein Bar Line", "Chocolate Coating System", "Flow Pack Machine", "Overwrapping Machine", "Thermoform Packaging", "Vertical Filling (VFFS)", "Biscuit Sandwiching", "Halvah Slicing & Packaging", "Other"]
        },
        footer: {
            desc: "Manufacturing food processing and packaging machines since 1985. Export to 57+ countries, 12,000 m² production facility. Turkey's leading manufacturer in wafer, cereal bar production lines and packaging machines.",
            production: "Production Lines",
            packagingTitle: "Packaging",
            corporate: "Corporate",
            aboutUs: "About Us",
            catalogs: "Catalogs",
            videosTitle: "Videos",
            contactTitle: "Contact",
            copyright: "Girisim Makina Turkey. All rights reserved.",
            privacy: "Privacy Policy",
            kvkk: "GDPR",
            cookies: "Cookie Policy"
        },
        exitPopup: {
            title: "Wait! Don't Go",
            text: "Would you like us to send our catalogs? Stay informed about our special offers.",
            yes: "Yes, Send Catalog",
            no: "No, Thanks"
        },
        quoteForm: {
            title: "Get a Free Quote",
            company: "Company Name *",
            name: "Full Name *",
            email: "Email *",
            phone: "Phone *",
            productSelect: "Product of Interest *",
            message: "Your Message (optional)",
            fileUpload: "Add Image/File (optional)",
            privacy: "I have read and accept the Privacy Policy.",
            submit: "Send Quote Request",
            successTitle: "Request Received!",
            successText: "We will get back to you as soon as possible."
        }
    },

    // Russian - Русский
    ru: {
        lang: "Русский",
        flag: "🇷🇺",
        dir: "ltr",
        nav: {
            about: "О нас",
            production: "Производственные линии",
            packaging: "Упаковка",
            sectors: "Секторы",
            videos: "Видео",
            contact: "Контакты",
            blog: "Blog",
            getQuote: "ПОЛУЧИТЬ ЦЕНУ"
        },
        corporate: {
            aboutUs: "О нас",
            whyUs: "Почему Girişim Makina?",
            certificates: "Наши сертификаты",
            hr: "Кадры"
        },
        machines: {
            cerealBar: "Линии производства зерновых батончиков",
            chocolateCoating: "Машины для покрытия шоколадом",
            biscuitSandwich: "Машины для сэндвич-печенья",
            flowpack: "Горизонтальная упаковка Flowpack",
            vffs: "Вертикальные упаковочные машины",
            overwrap: "Упаковка конвертного типа"
        },
        packagingChoice: {
            byType: "По типу упаковки",
            byProduct: "По вашему продукту"
        },
        dropdown: {
            // Mega Menu Titles
            productionMachines: "Производственные Машины",
            packagingMachines: "Упаковочные Машины",
            // Production Machines
            wafer: "Линии производства вафель",
            cereal: "Линии зерновых батончиков",
            coconutBar: "Линии кокосовых батончиков",
            protein: "Линии протеиновых батончиков",
            biscuit: "Машины для сэндвич-печенья",
            cookieCapping: "Cookie Capping (Chocopie)",
            chocolate: "Машина шоколадной глазури",
            chocolateCooling: "Туннель охлаждения шоколада",
            chocolatePrep: "Кухня приготовления шоколада",
            sugarMill: "Мельница сахарной пудры",
            // Packaging Machines
            flowpack: "Горизонтальная упаковка Flowpack",
            vffs: "Вертикальная упаковка (VFFS)",
            overwrap: "Машины overwrapping",
            thermoform: "Термоформовочная упаковка",
            filling: "Машины розлива",
            halvah: "Нарезка и упаковка халвы",
            // Corporate Menu
            mission: "Наша Миссия и Видение",
            values: "Наши Ценности",
            rnd: "НИОКР",
            service: "Послепродажное обслуживание"
        },
        hero: {
            title1: "ВАФЛИ И ЗЕРНОВЫЕ БАТОНЧИКИ",
            title2: "ПРОИЗВОДСТВЕННЫЕ ЛИНИИ",
            title3: "И УПАКОВОЧНЫЕ МАШИНЫ",
            description: "Производим оборудование для переработки и упаковки пищевых продуктов с 1985 года. Как ведущий производитель Турции, экспортируем в 57 стран мира.",
            stat1: "Стран экспорта",
            stat2: "м² производства",
            stat3: "Лет опыта",
            cta1: "ПОЛУЧИТЬ ЦЕНУ",
            cta2: "СМОТРЕТЬ ВИДЕО"
        },
        about: {
            tag: "О нас",
            title1: "Глобальный партнер",
            title2: "для производителей продуктов питания",
            p1: "Компания Girisim Makina является ведущим турецким производителем в сфере переработки и упаковки пищевых продуктов с 1985 года. Имея 3 производственных объекта и 12 000 м² крытой площади, мы производим линии по производству вафель, машины для зерновых батончиков, системы шоколадной глазури и упаковочные машины.",
            p2: "Мы экспортируем в более чем 57 стран Европы, Ближнего Востока, Африки и Азии, предлагая качество мирового класса и удовлетворенность клиентов. Мы представляем Турцию на международных выставках, таких как Gulfood Manufacturing.",
            feature1: "3 производственных объекта",
            feature2: "Экспорт в 57+ стран",
            feature3: "Техподдержка 24/7",
            catalog: "Скачать каталоги"
        },
        production: {
            tag: "Производственные линии",
            title1: "Оборудование для",
            title2: "переработки пищевых продуктов",
            subtitle: "Комплексные решения под ключ и индивидуальные машины",
            getQuote: "Получить цену",
            watchVideos: "Смотреть все видео",
            machines: {
                wafer: {
                    title: "Линии производства вафель",
                    desc: "Полные линии производства вафель - от приготовления теста до упаковки",
                    f1: "Автоматическое приготовление теста",
                    f2: "Высокопроизводительные печи",
                    f3: "Системы крема и резки"
                },
                cereal: {
                    title: "Линии зерновых и протеиновых батончиков",
                    desc: "Линии производства гранолы, мюсли, протеиновых и энергетических батончиков",
                    f1: "Системы смешивания и приготовления",
                    f2: "Формовочные узлы",
                    f3: "Охлаждающие туннели"
                },
                chocolate: {
                    title: "Системы шоколадной глазури",
                    desc: "Глазировочные машины и туннели охлаждения шоколада",
                    f1: "Полная/частичная глазурь",
                    f2: "Точный контроль температуры",
                    f3: "Узлы декорирования"
                },
                biscuit: {
                    title: "Машины для сэндвич-печенья",
                    desc: "Системы нанесения крема для производства сэндвич-печенья",
                    f1: "Различные формы и размеры",
                    f2: "Точная дозировка крема",
                    f3: "Высокая производительность"
                }
            }
        },
        packaging: {
            tag: "Упаковочные решения",
            title1: "Упаковочные",
            title2: "машины",
            subtitle: "Индивидуальные упаковочные решения для каждого продукта и отрасли",
            types: {
                flowpack: {
                    title: "Flow Pack",
                    desc: "Горизонтальная упаковка form-fill-seal. Для печенья, вафель, шоколада, мыла, хлеба и многого другого. Доступны варианты вакуума и MAP."
                },
                overwrap: {
                    title: "Overwrapping",
                    desc: "Упаковка конвертного типа. Идеальное решение для упаковки рисовых хлебцев, вафель, печенья, чипсов и мыла."
                },
                thermoform: {
                    title: "Термоформирование",
                    desc: "Упаковка form-fill-seal. Вакуумная упаковка для шоколада, кондитерских изделий, сыра и мясных продуктов."
                },
                vffs: {
                    title: "VFFS вертикальная фасовка",
                    desc: "Вертикальная form-fill-seal. Системы взвешивания и фасовки для гранул, порошков, орехов и снэков."
                }
            }
        },
        certificates: {
            tag: "Наши сертификаты",
            title: "CE",
            highlight: "Сертификаты",
            subtitle: "Наши машины производятся в соответствии с европейскими стандартами CE",
            horizontal: "Сертификат CE для горизонтальных упаковочных машин",
            thermoform: "Сертификат CE для термоформовочных упаковочных машин",
            vertical: "Сертификат CE для вертикальных фасовочных машин",
            download: "Скачать"
        },
        sectors: {
            tag: "Наша экспертиза",
            title1: "Продукты,",
            title2: "которые мы упаковываем",
            subtitle: "Специализированные решения для каждой отрасли с 30-летним опытом",
            items: ["Печенье", "Вафли", "Шоколад", "Торты и выпечка", "Зерновые батончики", "Протеиновые батончики", "Халва", "Чипсы и снэки", "Мыло", "Рисовые хлебцы", "Кофе", "Корм для животных"]
        },
        whyUs: {
            tag: "Почему мы?",
            title1: "Почему",
            title2: "Girisim Makina?",
            items: [
                { title: "3 производственных объекта", desc: "Крупнейший турецкий производитель пищевого оборудования с 3 современными производственными объектами общей площадью 12 000 м²." },
                { title: "Экспорт в 57+ стран", desc: "Мы обслуживаем клиентов в более чем 57 странах Европы, Ближнего Востока, Африки и Азии." },
                { title: "Проекты под ключ", desc: "Комплексные решения от производства до упаковки, от проектирования завода до монтажа." },
                { title: "Послепродажная поддержка", desc: "Техническая поддержка 24/7, поставка запасных частей и обучение операторов." },
                { title: "30 лет опыта", desc: "Надежный партнер отрасли с 1995 года. Участник Gulfood Manufacturing." }
            ]
        },
        testimonials: {
            tag: "Отзывы",
            title1: "Что говорят",
            title2: "наши клиенты"
        },
        fuarlar: {
            tag: "Выставки",
            title1: "Наше участие",
            title2: "в выставках",
            subtitle: "Мы представляем Турцию на международных выставках",
            video1: "CNR FOTEG 2022",
            video2: "Gulfood Manufacturing 2024",
            video3: "Interpack 2023",
            video4: "PackExpo 2024"
        },
        videos: {
            tag: "Видеогалерея",
            title1: "Смотрите наши",
            title2: "машины",
            subtitle: "100+ видео машин на нашем YouTube канале",
            cta: "Наш YouTube канал",
            items: ["Упаковка Flow Pack", "Линия производства вафель", "Шоколадная глазурь", "Упаковка рисовых хлебцев", "VFFS вертикальный наполнитель", "Линия производства печенья"]
        },
        cta: {
            title: "Получите бесплатное предложение для вашего проекта",
            subtitle: "Наша команда экспертов готова предложить вам наиболее подходящее производственное и упаковочное решение",
            whatsapp: "Связаться через WhatsApp",
            email: "Отправить Email"
        },
        contact: {
            tag: "Контакты",
            title1: "Свяжитесь",
            title2: "с нами",
            address: "Адрес",
            whatsapp: "WhatsApp",
            emailTitle: "Email",
            hours: "Рабочие часы",
            support247: "Поддержка 24/7",
            weekdays: "Понедельник - Пятница: 08:30 - 18:00",
            saturday: "Суббота: 09:00 - 14:00",
            formTitle: "Форма запроса",
            formName: "Ваше имя *",
            formCompany: "Название компании",
            formEmail: "Ваш Email *",
            formPhone: "Телефон / WhatsApp *",
            formProduct: "Интересующий продукт *",
            formMessage: "Ваше сообщение - мощность, тип продукта и т.д. *",
            formKvkk: "Я прочитал и принимаю Политику конфиденциальности.",
            formSubmit: "Запросить цену",
            products: ["Линия производства вафель", "Линия зерновых/протеиновых батончиков", "Система шоколадной глазури", "Flow Pack машина", "Overwrapping машина", "Термоформовочная упаковка", "Вертикальная фасовка (VFFS)", "Сэндвич-печенье", "Нарезка и упаковка халвы", "Другое"]
        },
        footer: {
            desc: "Производим оборудование для переработки и упаковки пищевых продуктов с 1985 года. Экспорт в 57+ стран, 12 000 м² производственных площадей. Ведущий турецкий производитель линий производства вафель, зерновых батончиков и упаковочных машин.",
            production: "Производственные линии",
            packagingTitle: "Упаковка",
            corporate: "Компания",
            aboutUs: "О нас",
            catalogs: "Каталоги",
            videosTitle: "Видео",
            contactTitle: "Контакты",
            copyright: "Girisim Makina Turkey. Все права защищены.",
            privacy: "Политика конфиденциальности",
            kvkk: "GDPR",
            cookies: "Политика cookies"
        },
        exitPopup: {
            title: "Подождите! Не уходите",
            text: "Хотите, чтобы мы отправили вам наши каталоги? Узнавайте о наших специальных предложениях.",
            yes: "Да, отправьте каталог",
            no: "Нет, спасибо"
        },
        quoteForm: {
            title: "Получить бесплатное предложение",
            company: "Название компании *",
            name: "ФИО *",
            email: "Эл. почта *",
            phone: "Телефон *",
            productSelect: "Интересующий продукт *",
            message: "Ваше сообщение (необязательно)",
            fileUpload: "Добавить изображение/файл (необязательно)",
            privacy: "Я прочитал и принимаю Политику конфиденциальности.",
            submit: "Отправить запрос",
            successTitle: "Запрос получен!",
            successText: "Мы свяжемся с вами в ближайшее время."
        }
    },

    // Arabic - العربية
    ar: {
        lang: "العربية",
        flag: "🇸🇦",
        dir: "rtl",
        nav: {
            about: "من نحن",
            production: "خطوط الإنتاج",
            packaging: "التغليف",
            sectors: "القطاعات",
            videos: "الفيديوهات",
            contact: "اتصل بنا",
            blog: "Blog",
            getQuote: "طلب عرض سعر"
        },
        corporate: {
            aboutUs: "معلومات عنا",
            whyUs: "لماذا Girişim Makina؟",
            certificates: "شهاداتنا",
            hr: "الموارد البشرية"
        },
        machines: {
            cerealBar: "خطوط إنتاج ألواح الحبوب",
            chocolateCoating: "آلات تغليف الشوكولاتة",
            biscuitSandwich: "آلات صنع البسكويت المحشو",
            flowpack: "تغليف أفقي Flowpack",
            vffs: "آلات التغليف العمودية",
            overwrap: "تغليف ظرفي"
        },
        packagingChoice: {
            byType: "حسب نوع التغليف",
            byProduct: "حسب منتجك"
        },
        dropdown: {
            // Mega Menu Titles
            productionMachines: "آلات الإنتاج",
            packagingMachines: "آلات التغليف",
            // Production Machines
            wafer: "خطوط إنتاج الويفر",
            cereal: "خطوط إنتاج ألواح الحبوب",
            coconutBar: "خطوط إنتاج ألواح جوز الهند",
            protein: "خطوط ألواح البروتين",
            biscuit: "آلات حشو البسكويت",
            cookieCapping: "Cookie Capping (Chocopie)",
            chocolate: "آلة تغليف الشوكولاتة",
            chocolateCooling: "نفق تبريد الشوكولاتة",
            chocolatePrep: "مطبخ تحضير الشوكولاتة",
            sugarMill: "مطحنة السكر البودرة",
            // Packaging Machines
            flowpack: "تغليف Flowpack الأفقي",
            vffs: "التغليف العمودي (VFFS)",
            overwrap: "آلات التغليف الظرفي",
            thermoform: "تغليف الثيرموفورم",
            filling: "آلات التعبئة",
            halvah: "تقطيع وتغليف الحلاوة",
            // Corporate Menu
            mission: "مهمتنا ورؤيتنا",
            values: "قيمنا",
            rnd: "البحث والتطوير",
            service: "خدمة ما بعد البيع"
        },
        hero: {
            title1: "الويفر وألواح الحبوب",
            title2: "خطوط الإنتاج",
            title3: "وآلات التغليف",
            description: "نصنع آلات معالجة وتغليف الأغذية منذ عام 1985. كشركة رائدة في تركيا، نصدر إلى 57 دولة حول العالم.",
            stat1: "دولة تصدير",
            stat2: "م² مساحة الإنتاج",
            stat3: "سنة خبرة",
            cta1: "احصل على عرض سعر",
            cta2: "شاهد الفيديوهات"
        },
        about: {
            tag: "من نحن",
            title1: "شريك النمو العالمي",
            title2: "لمنتجي الأغذية",
            p1: "شركة جيريشيم ماكينا هي الشركة الرائدة في تركيا في مجال معالجة وتغليف الأغذية منذ عام 1985. مع 3 منشآت إنتاج و12,000 متر مربع من المساحة المغطاة، نقوم بتصنيع خطوط إنتاج الويفر وآلات ألواح الحبوب وأنظمة تغليف الشوكولاتة وآلات التغليف.",
            p2: "نصدر إلى أكثر من 57 دولة في أوروبا والشرق الأوسط وأفريقيا وآسيا، ونقدم جودة عالمية ورضا العملاء. نمثل تركيا في المعارض الدولية مثل جلفود للتصنيع.",
            feature1: "3 منشآت إنتاج",
            feature2: "تصدير لـ 57+ دولة",
            feature3: "دعم فني 24/7",
            catalog: "تحميل الكتالوجات"
        },
        production: {
            tag: "خطوط الإنتاج",
            title1: "آلات معالجة",
            title2: "الأغذية",
            subtitle: "خطوط إنتاج متكاملة تسليم مفتاح وحلول آلات فردية",
            getQuote: "طلب عرض سعر",
            watchVideos: "شاهد جميع الفيديوهات",
            machines: {
                wafer: {
                    title: "خطوط إنتاج الويفر",
                    desc: "خطوط إنتاج ويفر كاملة - من تحضير العجين إلى التغليف",
                    f1: "تحضير العجين الأوتوماتيكي",
                    f2: "أفران عالية السعة",
                    f3: "أنظمة الكريمة والقطع"
                },
                cereal: {
                    title: "خطوط ألواح الحبوب والبروتين",
                    desc: "خطوط إنتاج الجرانولا والموسلي وألواح البروتين والطاقة",
                    f1: "أنظمة الخلط والطهي",
                    f2: "وحدات التشكيل",
                    f3: "أنفاق التبريد"
                },
                chocolate: {
                    title: "أنظمة تغليف الشوكولاتة",
                    desc: "آلات الإنروبينج وأنفاق تبريد الشوكولاتة",
                    f1: "تغليف كامل/نصفي",
                    f2: "تحكم دقيق بالحرارة",
                    f3: "وحدات الزخرفة"
                },
                biscuit: {
                    title: "آلات حشو البسكويت",
                    desc: "أنظمة حشو الكريمة لإنتاج البسكويت الساندويتش",
                    f1: "أشكال وأحجام متنوعة",
                    f2: "جرعات كريمة دقيقة",
                    f3: "سعة سرعة عالية"
                }
            }
        },
        packaging: {
            tag: "حلول التغليف",
            title1: "آلات",
            title2: "التغليف",
            subtitle: "حلول تغليف مخصصة لكل منتج وصناعة",
            types: {
                flowpack: {
                    title: "فلو باك",
                    desc: "تغليف أفقي form-fill-seal. للبسكويت والويفر والشوكولاتة والصابون والخبز والمزيد. خيارات الفراغ وMAP متاحة."
                },
                overwrap: {
                    title: "التغليف الظرفي",
                    desc: "تغليف نوع الظرف. حل مثالي لتغليف كعك الأرز والويفر والبسكويت والرقائق والصابون."
                },
                thermoform: {
                    title: "ثيرموفورم",
                    desc: "تغليف form-fill-seal. تغليف فراغي للشوكولاتة والحلويات والجبن ومنتجات اللحوم."
                },
                vffs: {
                    title: "تعبئة عمودية VFFS",
                    desc: "form-fill-seal عمودي. أنظمة وزن وتعبئة للحبيبات والمساحيق والمكسرات ومنتجات السناك."
                }
            }
        },
        certificates: {
            tag: "شهاداتنا",
            title: "CE",
            highlight: "شهادات",
            subtitle: "يتم تصنيع آلاتنا وفقًا لمعايير CE الأوروبية",
            horizontal: "شهادة CE لآلات التغليف الأفقية",
            thermoform: "شهادة CE لآلات التغليف الحراري",
            vertical: "شهادة CE لآلات التعبئة العمودية",
            download: "تحميل"
        },
        sectors: {
            tag: "خبرتنا",
            title1: "المنتجات",
            title2: "التي نغلفها",
            subtitle: "حلول متخصصة لكل قطاع مع 30 عامًا من الخبرة",
            items: ["بسكويت", "ويفر", "شوكولاتة", "كيك ومعجنات", "ألواح الحبوب", "ألواح البروتين", "حلاوة", "رقائق وسناك", "صابون", "كعك الأرز", "قهوة", "طعام الحيوانات"]
        },
        whyUs: {
            tag: "لماذا نحن؟",
            title1: "لماذا",
            title2: "جيريشيم ماكينا؟",
            items: [
                { title: "3 منشآت إنتاج", desc: "أكبر مصنع تركي لآلات الأغذية مع 3 منشآت إنتاج حديثة بمساحة إجمالية 12,000 متر مربع." },
                { title: "تصدير لـ 57+ دولة", desc: "نخدم عملاءنا في أكثر من 57 دولة في أوروبا والشرق الأوسط وأفريقيا وآسيا." },
                { title: "مشاريع تسليم مفتاح", desc: "حلول كاملة من الإنتاج إلى التغليف، من تصميم المصنع إلى التركيب." },
                { title: "دعم ما بعد البيع", desc: "دعم فني 24/7، توريد قطع الغيار وتدريب المشغلين." },
                { title: "30 عامًا من الخبرة", desc: "شريك موثوق في القطاع منذ 1995. مشارك في جلفود للتصنيع." }
            ]
        },
        testimonials: {
            tag: "المراجع",
            title1: "ماذا يقول",
            title2: "عملاؤنا"
        },
        fuarlar: {
            tag: "المعارض",
            title1: "مشاركاتنا",
            title2: "في المعارض",
            subtitle: "نمثل تركيا في المعارض الدولية",
            video1: "CNR FOTEG 2022",
            video2: "Gulfood Manufacturing 2024",
            video3: "Interpack 2023",
            video4: "PackExpo 2024"
        },
        videos: {
            tag: "معرض الفيديو",
            title1: "شاهد",
            title2: "آلاتنا",
            subtitle: "100+ فيديو آلات على قناتنا يوتيوب",
            cta: "قناتنا على يوتيوب",
            items: ["تغليف فلو باك", "خط إنتاج الويفر", "تغليف الشوكولاتة", "تغليف كعك الأرز", "ماكينة التعبئة العمودية", "خط إنتاج البسكويت"]
        },
        cta: {
            title: "احصل على عرض سعر مجاني لمشروعك",
            subtitle: "فريقنا من الخبراء مستعد لتقديم أنسب حلول الإنتاج والتغليف لك",
            whatsapp: "تواصل عبر واتساب",
            email: "إرسال بريد إلكتروني"
        },
        contact: {
            tag: "اتصل بنا",
            title1: "تواصل",
            title2: "معنا",
            address: "العنوان",
            whatsapp: "واتساب",
            emailTitle: "البريد الإلكتروني",
            hours: "ساعات العمل",
            support247: "دعم 24/7",
            weekdays: "الاثنين - الجمعة: 08:30 - 18:00",
            saturday: "السبت: 09:00 - 14:00",
            formTitle: "نموذج طلب عرض سعر",
            formName: "اسمك *",
            formCompany: "اسم الشركة",
            formEmail: "بريدك الإلكتروني *",
            formPhone: "الهاتف / واتساب *",
            formProduct: "المنتج المطلوب *",
            formMessage: "رسالتك - السعة، نوع المنتج، إلخ. *",
            formKvkk: "لقد قرأت ووافقت على سياسة الخصوصية.",
            formSubmit: "طلب عرض سعر",
            products: ["خط إنتاج الويفر", "خط ألواح الحبوب/البروتين", "نظام تغليف الشوكولاتة", "آلة فلو باك", "آلة التغليف الظرفي", "تغليف ثيرموفورم", "تعبئة عمودية (VFFS)", "حشو البسكويت", "تقطيع وتغليف الحلاوة", "أخرى"]
        },
        footer: {
            desc: "نصنع آلات معالجة وتغليف الأغذية منذ عام 1985. تصدير لـ 57+ دولة، 12,000 م² منشأة إنتاج. المصنع التركي الرائد في خطوط إنتاج الويفر وألواح الحبوب وآلات التغليف.",
            production: "خطوط الإنتاج",
            packagingTitle: "التغليف",
            corporate: "الشركة",
            aboutUs: "من نحن",
            catalogs: "الكتالوجات",
            videosTitle: "الفيديوهات",
            contactTitle: "اتصل بنا",
            copyright: "جيريشيم ماكينا تركيا. جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            kvkk: "GDPR",
            cookies: "سياسة ملفات تعريف الارتباط"
        },
        exitPopup: {
            title: "انتظر! لا تذهب",
            text: "هل تريد أن نرسل لك كتالوجاتنا؟ ابق على اطلاع بعروضنا الخاصة.",
            yes: "نعم، أرسل الكتالوج",
            no: "لا، شكراً"
        },
        quoteForm: {
            title: "احصل على عرض أسعار مجاني",
            company: "اسم الشركة *",
            name: "الاسم الكامل *",
            email: "البريد الإلكتروني *",
            phone: "الهاتف *",
            productSelect: "المنتج المطلوب *",
            message: "رسالتك (اختياري)",
            fileUpload: "إضافة صورة/ملف (اختياري)",
            privacy: "لقد قرأت وأوافق على سياسة الخصوصية.",
            submit: "إرسال طلب عرض الأسعار",
            successTitle: "تم استلام طلبك!",
            successText: "سنتواصل معك في أقرب وقت ممكن."
        }
    },

    // French - Français
    fr: {
        lang: "Français",
        flag: "🇫🇷",
        dir: "ltr",
        nav: {
            about: "À propos",
            production: "Lignes de production",
            packaging: "Emballage",
            sectors: "Secteurs",
            videos: "Vidéos",
            contact: "Contact",
            blog: "Blog",
            getQuote: "DEVIS"
        },
        corporate: {
            aboutUs: "À propos",
            whyUs: "Pourquoi Girişim Makina?",
            certificates: "Nos certificats",
            hr: "Ressources humaines"
        },
        machines: {
            cerealBar: "Lignes de production de barres de céréales",
            chocolateCoating: "Machines d'enrobage chocolat",
            biscuitSandwich: "Machines à sandwich biscuit",
            flowpack: "Emballage horizontal Flowpack",
            vffs: "Machines d'emballage vertical",
            overwrap: "Emballage type envelope"
        },
        packagingChoice: {
            byType: "Par type d'emballage",
            byProduct: "Par votre produit"
        },
        dropdown: {
            // Mega Menu Titles
            productionMachines: "Machines de Production",
            packagingMachines: "Machines d'Emballage",
            // Production Machines
            wafer: "Lignes de production de gaufrettes",
            cereal: "Lignes de barres de céréales",
            coconutBar: "Lignes de barres de noix de coco",
            protein: "Lignes de barres protéinées",
            biscuit: "Machines sandwich de biscuits",
            cookieCapping: "Cookie Capping (Chocopie)",
            chocolate: "Machine d'enrobage chocolat",
            chocolateCooling: "Tunnel de refroidissement chocolat",
            chocolatePrep: "Cuisine de préparation chocolat",
            sugarMill: "Moulin à sucre glace",
            // Packaging Machines
            flowpack: "Emballage Flowpack horizontal",
            vffs: "Emballage vertical (VFFS)",
            overwrap: "Machines d'emballage envelope",
            thermoform: "Emballage thermoformage",
            filling: "Machines de remplissage",
            halvah: "Découpe et emballage halva",
            // Corporate Menu
            mission: "Notre Mission & Vision",
            values: "Nos Valeurs",
            rnd: "R&D",
            service: "Service Après-Vente"
        },
        hero: {
            title1: "GAUFRETTES & BARRES DE CÉRÉALES",
            title2: "LIGNES DE PRODUCTION",
            title3: "& MACHINES D'EMBALLAGE",
            description: "Fabricant de machines de transformation et d'emballage alimentaire depuis 1985. Leader en Turquie, nous exportons vers 57 pays dans le monde.",
            stat1: "Pays d'exportation",
            stat2: "m² de production",
            stat3: "Ans d'expérience",
            cta1: "DEMANDER UN DEVIS",
            cta2: "VOIR LES VIDÉOS"
        },
        about: {
            tag: "À propos",
            title1: "Partenaire de croissance",
            title2: "mondiale pour les producteurs alimentaires",
            p1: "Girisim Makina est le leader turc de la transformation et de l'emballage alimentaire depuis 1985. Avec 3 installations de production et 12 000 m² de surface couverte, nous fabriquons des lignes de production de gaufrettes, des machines à barres de céréales, des systèmes d'enrobage chocolat et des machines d'emballage.",
            p2: "Nous exportons vers plus de 57 pays en Europe, Moyen-Orient, Afrique et Asie, offrant une qualité mondiale et satisfaction client. Nous représentons la Turquie aux salons internationaux comme Gulfood Manufacturing.",
            feature1: "3 usines de production",
            feature2: "Export 57+ pays",
            feature3: "Support technique 24/7",
            catalog: "Télécharger les catalogues"
        },
        production: {
            tag: "Lignes de production",
            title1: "Machines de",
            title2: "transformation alimentaire",
            subtitle: "Lignes de production clé en main et solutions machines individuelles",
            getQuote: "Demander un devis",
            watchVideos: "Voir toutes les vidéos",
            machines: {
                wafer: {
                    title: "Lignes de production de gaufrettes",
                    desc: "Lignes complètes de production de gaufrettes - de la préparation de la pâte à l'emballage",
                    f1: "Préparation automatique de la pâte",
                    f2: "Fours haute capacité",
                    f3: "Systèmes de crémage et découpe"
                },
                cereal: {
                    title: "Lignes barres céréales & protéines",
                    desc: "Lignes de production granola, muesli, barres protéinées et énergétiques",
                    f1: "Systèmes de mélange et cuisson",
                    f2: "Unités de formage",
                    f3: "Tunnels de refroidissement"
                },
                chocolate: {
                    title: "Systèmes d'enrobage chocolat",
                    desc: "Machines d'enrobage et tunnels de refroidissement chocolat",
                    f1: "Enrobage complet/partiel",
                    f2: "Contrôle précis de température",
                    f3: "Unités de décoration"
                },
                biscuit: {
                    title: "Machines sandwich biscuit",
                    desc: "Systèmes de crémage pour la production de biscuits sandwich",
                    f1: "Formes et tailles variées",
                    f2: "Dosage précis de crème",
                    f3: "Haute vitesse de production"
                }
            }
        },
        packaging: {
            tag: "Solutions d'emballage",
            title1: "Machines",
            title2: "d'emballage",
            subtitle: "Solutions d'emballage personnalisées pour chaque produit et industrie",
            types: {
                flowpack: {
                    title: "Flow Pack",
                    desc: "Emballage horizontal form-fill-seal. Pour biscuits, gaufrettes, chocolat, savon, pain et plus. Options vide et MAP disponibles."
                },
                overwrap: {
                    title: "Overwrapping",
                    desc: "Emballage type envelope. Solution idéale pour l'emballage de galettes de riz, gaufrettes, biscuits, chips et savon."
                },
                thermoform: {
                    title: "Thermoformage",
                    desc: "Emballage form-fill-seal. Emballage sous vide pour chocolat, confiserie, fromage et produits carnés."
                },
                vffs: {
                    title: "VFFS remplissage vertical",
                    desc: "Form-fill-seal vertical. Systèmes de pesage et remplissage pour granulés, poudres, noix et snacks."
                }
            }
        },
        certificates: {
            tag: "Nos certificats",
            title: "CE",
            highlight: "Certificats",
            subtitle: "Nos machines sont fabriquées conformément aux normes CE européennes",
            horizontal: "Certificat CE pour machines d'emballage horizontales",
            thermoform: "Certificat CE pour machines d'emballage thermoformées",
            vertical: "Certificat CE pour machines de remplissage verticales",
            download: "Télécharger"
        },
        sectors: {
            tag: "Notre expertise",
            title1: "Produits que",
            title2: "nous emballons",
            subtitle: "Solutions spécialisées pour chaque secteur avec 30 ans d'expérience",
            items: ["Biscuit", "Gaufrette", "Chocolat", "Gâteaux & pâtisseries", "Barres de céréales", "Barres protéinées", "Halva", "Chips & snacks", "Savon", "Galettes de riz", "Café", "Alimentation animale"]
        },
        whyUs: {
            tag: "Pourquoi nous?",
            title1: "Pourquoi",
            title2: "Girisim Makina?",
            items: [
                { title: "3 usines de production", desc: "Plus grand fabricant turc de machines alimentaires avec 3 usines modernes sur 12 000 m² de surface totale." },
                { title: "Export vers 57+ pays", desc: "Nous servons nos clients dans plus de 57 pays en Europe, Moyen-Orient, Afrique et Asie." },
                { title: "Projets clé en main", desc: "Solutions complètes de la production à l'emballage, de la conception d'usine à l'installation." },
                { title: "Service après-vente", desc: "Support technique 24/7, fourniture de pièces détachées et formation des opérateurs." },
                { title: "30 ans d'expérience", desc: "Partenaire fiable du secteur depuis 1995. Participant à Gulfood Manufacturing." }
            ]
        },
        testimonials: {
            tag: "Références",
            title1: "Ce que disent",
            title2: "nos clients"
        },
        fuarlar: {
            tag: "Salons",
            title1: "Nos participations",
            title2: "aux salons",
            subtitle: "Nous représentons la Turquie dans les salons internationaux",
            video1: "CNR FOTEG 2022",
            video2: "Gulfood Manufacturing 2024",
            video3: "Interpack 2023",
            video4: "PackExpo 2024"
        },
        videos: {
            tag: "Galerie vidéo",
            title1: "Regardez nos",
            title2: "machines",
            subtitle: "100+ vidéos de machines sur notre chaîne YouTube",
            cta: "Notre chaîne YouTube",
            items: ["Emballage Flow Pack", "Ligne de production gaufrettes", "Enrobage chocolat", "Emballage galettes de riz", "Remplissage vertical VFFS", "Ligne de production biscuits"]
        },
        cta: {
            title: "Obtenez un devis gratuit pour votre projet",
            subtitle: "Notre équipe d'experts est prête à vous offrir la solution de production et d'emballage la plus adaptée",
            whatsapp: "Contacter via WhatsApp",
            email: "Envoyer un email"
        },
        contact: {
            tag: "Contact",
            title1: "Contactez",
            title2: "nous",
            address: "Adresse",
            whatsapp: "WhatsApp",
            emailTitle: "Email",
            hours: "Heures d'ouverture",
            support247: "Support 24/7",
            weekdays: "Lundi - Vendredi: 08:30 - 18:00",
            saturday: "Samedi: 09:00 - 14:00",
            formTitle: "Formulaire de devis",
            formName: "Votre nom *",
            formCompany: "Nom de l'entreprise",
            formEmail: "Votre email *",
            formPhone: "Téléphone / WhatsApp *",
            formProduct: "Produit d'intérêt *",
            formMessage: "Votre message - capacité, type de produit, etc. *",
            formKvkk: "J'ai lu et j'accepte la politique de confidentialité.",
            formSubmit: "Demander un devis",
            products: ["Ligne de production gaufrettes", "Ligne barres céréales/protéines", "Système d'enrobage chocolat", "Machine Flow Pack", "Machine Overwrapping", "Emballage thermoformage", "Remplissage vertical (VFFS)", "Sandwich biscuit", "Découpe et emballage halva", "Autre"]
        },
        footer: {
            desc: "Fabricant de machines de transformation et d'emballage alimentaire depuis 1995. Export vers 57+ pays, 12 000 m² de production. Leader turc des lignes de production de gaufrettes, barres de céréales et machines d'emballage.",
            production: "Lignes de production",
            packagingTitle: "Emballage",
            corporate: "Entreprise",
            aboutUs: "À propos",
            catalogs: "Catalogues",
            videosTitle: "Vidéos",
            contactTitle: "Contact",
            copyright: "Girisim Makina Turkey. Tous droits réservés.",
            privacy: "Politique de confidentialité",
            kvkk: "RGPD",
            cookies: "Politique de cookies"
        },
        exitPopup: {
            title: "Attendez ! Ne partez pas",
            text: "Souhaitez-vous recevoir nos catalogues ? Restez informé de nos offres spéciales.",
            yes: "Oui, envoyez le catalogue",
            no: "Non, merci"
        },
        quoteForm: {
            title: "Demander un devis gratuit",
            company: "Nom de l'entreprise *",
            name: "Nom complet *",
            email: "E-mail *",
            phone: "Téléphone *",
            productSelect: "Produit souhaité *",
            message: "Votre message (optionnel)",
            fileUpload: "Ajouter image/fichier (optionnel)",
            privacy: "J'ai lu et j'accepte la Politique de confidentialité.",
            submit: "Envoyer la demande",
            successTitle: "Demande reçue !",
            successText: "Nous vous contacterons dans les plus brefs délais."
        }
    },

    // Portuguese - Português
    pt: {
        lang: "Português",
        flag: "🇧🇷",
        dir: "ltr",
        nav: {
            about: "Sobre nós",
            production: "Linhas de produção",
            packaging: "Embalagem",
            sectors: "Setores",
            videos: "Vídeos",
            contact: "Contato",
            blog: "Blog",
            getQuote: "ORÇAMENTO"
        },
        corporate: {
            aboutUs: "Sobre nós",
            whyUs: "Por que Girişim Makina?",
            certificates: "Nossos certificados",
            hr: "Recursos Humanos"
        },
        machines: {
            cerealBar: "Linhas de produção de barras de cereais",
            chocolateCoating: "Máquinas de cobertura de chocolate",
            biscuitSandwich: "Máquinas de sanduíche de biscoito",
            flowpack: "Embalagem horizontal Flowpack",
            vffs: "Máquinas de embalagem vertical",
            overwrap: "Embalagem tipo envelope"
        },
        packagingChoice: {
            byType: "Por tipo de embalagem",
            byProduct: "Por seu produto"
        },
        dropdown: {
            // Mega Menu Titles
            productionMachines: "Máquinas de Produção",
            packagingMachines: "Máquinas de Embalagem",
            // Production Machines
            wafer: "Linhas de produção de wafer",
            cereal: "Linhas de barras de cereais",
            coconutBar: "Linhas de barras de coco",
            protein: "Linhas de barras de proteína",
            biscuit: "Máquinas de sanduíche de biscoito",
            cookieCapping: "Cookie Capping (Chocopie)",
            chocolate: "Máquina de cobertura de chocolate",
            chocolateCooling: "Túnel de resfriamento de chocolate",
            chocolatePrep: "Cozinha de preparação de chocolate",
            sugarMill: "Moinho de açúcar em pó",
            // Packaging Machines
            flowpack: "Embalagem Flowpack horizontal",
            vffs: "Embalagem vertical (VFFS)",
            overwrap: "Máquinas Overwrapping",
            thermoform: "Embalagem de termoformagem",
            filling: "Máquinas de enchimento",
            halvah: "Corte e embalagem de halva",
            // Corporate Menu
            mission: "Nossa Missão e Visão",
            values: "Nossos Valores",
            rnd: "P&D",
            service: "Serviço Pós-Venda"
        },
        hero: {
            title1: "WAFER E BARRAS DE CEREAIS",
            title2: "LINHAS DE PRODUÇÃO",
            title3: "E MÁQUINAS DE EMBALAGEM",
            description: "Fabricante de máquinas de processamento e embalagem de alimentos desde 1995. Como líder na Turquia, exportamos para 57 países em todo o mundo.",
            stat1: "Países de exportação",
            stat2: "m² de área de produção",
            stat3: "Anos de experiência",
            cta1: "SOLICITAR ORÇAMENTO",
            cta2: "ASSISTIR VÍDEOS"
        },
        about: {
            tag: "Sobre nós",
            title1: "Parceiro global de crescimento",
            title2: "para produtores de alimentos",
            p1: "A Girisim Makina é líder na Turquia em processamento e embalagem de alimentos desde 1995. Com 3 fábricas e 12.000 m² de área coberta, fabricamos linhas de produção de wafer, máquinas de barras de cereais, sistemas de cobertura de chocolate e máquinas de embalagem.",
            p2: "Exportamos para mais de 57 países na Europa, Oriente Médio, África e Ásia, oferecendo qualidade de classe mundial e satisfação do cliente. Representamos a Turquia em feiras internacionais como Gulfood Manufacturing.",
            feature1: "3 Fábricas",
            feature2: "Exportação para 57+ países",
            feature3: "Suporte técnico 24/7",
            catalog: "Baixar catálogos"
        },
        production: {
            tag: "Linhas de produção",
            title1: "Máquinas de processamento",
            title2: "de alimentos",
            subtitle: "Linhas de produção turnkey completas e soluções de máquinas individuais",
            getQuote: "Solicitar orçamento",
            watchVideos: "Assistir todos os vídeos",
            machines: {
                wafer: {
                    title: "Linhas de produção de wafer",
                    desc: "Linhas completas de produção de wafer - da preparação da massa à embalagem",
                    f1: "Preparação automática de massa",
                    f2: "Fornos de alta capacidade",
                    f3: "Sistemas de creme e corte"
                },
                cereal: {
                    title: "Linhas de barras de cereais e proteína",
                    desc: "Linhas de produção de granola, muesli, barras de proteína e energia",
                    f1: "Sistemas de mistura e cozimento",
                    f2: "Unidades de moldagem",
                    f3: "Túneis de resfriamento"
                },
                chocolate: {
                    title: "Sistemas de cobertura de chocolate",
                    desc: "Máquinas de enrobing e túneis de resfriamento de chocolate",
                    f1: "Cobertura total/parcial",
                    f2: "Controle preciso de temperatura",
                    f3: "Unidades de decoração"
                },
                biscuit: {
                    title: "Máquinas de sanduíche de biscoito",
                    desc: "Sistemas de sanduíche com creme para produção de biscoitos sanduíche",
                    f1: "Várias formas e tamanhos",
                    f2: "Dosagem precisa de creme",
                    f3: "Alta capacidade de velocidade"
                }
            }
        },
        packaging: {
            tag: "Soluções de embalagem",
            title1: "Máquinas de",
            title2: "embalagem",
            subtitle: "Soluções de embalagem personalizadas para cada produto e setor",
            types: {
                flowpack: {
                    title: "Flow Pack",
                    desc: "Embalagem horizontal form-fill-seal. Para biscoitos, wafers, chocolate, sabonete, pão e mais. Opções de vácuo e MAP disponíveis."
                },
                overwrap: {
                    title: "Overwrapping",
                    desc: "Embalagem tipo envelope. Solução ideal para bolos de arroz, wafers, biscoitos, chips e sabonete."
                },
                thermoform: {
                    title: "Termoformagem",
                    desc: "Embalagem form-fill-seal. Embalagem a vácuo para chocolate, doces, queijo e produtos de carne."
                },
                vffs: {
                    title: "VFFS Envase Vertical",
                    desc: "Form-fill-seal vertical. Sistemas de pesagem e envase para granulados, pós, nozes e snacks."
                }
            }
        },
        certificates: {
            tag: "Nossos certificados",
            title: "CE",
            highlight: "Certificados",
            subtitle: "Nossas máquinas são fabricadas de acordo com os padrões CE europeus",
            horizontal: "Certificado CE para máquinas de embalagem horizontais",
            thermoform: "Certificado CE para máquinas de embalagem termoformadas",
            vertical: "Certificado CE para máquinas de envase verticais",
            download: "Baixar"
        },
        sectors: {
            tag: "Nossa expertise",
            title1: "Produtos que",
            title2: "embalamos",
            subtitle: "Soluções especializadas para cada setor com 30 anos de experiência",
            items: ["Biscoito", "Wafer", "Chocolate", "Bolo e confeitaria", "Barra de cereais", "Barra de proteína", "Halva", "Chips e snacks", "Sabonete", "Bolo de arroz", "Café", "Ração animal"]
        },
        whyUs: {
            tag: "Por que nós?",
            title1: "Por que",
            title2: "Girisim Makina?",
            items: [
                { title: "3 Fábricas", desc: "Maior fabricante turco de máquinas de alimentos com 3 fábricas modernas totalizando 12.000 m²." },
                { title: "Exportação para 57+ países", desc: "Atendemos clientes em mais de 57 países na Europa, Oriente Médio, África e Ásia." },
                { title: "Projetos turnkey", desc: "Soluções completas desde a produção até a embalagem, do projeto da fábrica à instalação." },
                { title: "Suporte pós-venda", desc: "Suporte técnico 24/7, fornecimento de peças de reposição e treinamento de operadores." },
                { title: "30 anos de experiência", desc: "Parceiro confiável do setor desde 1995. Participante da Gulfood Manufacturing." }
            ]
        },
        testimonials: {
            tag: "Referências",
            title1: "O que nossos",
            title2: "clientes dizem"
        },
        fuarlar: {
            tag: "Feiras",
            title1: "Nossas participações",
            title2: "em feiras",
            subtitle: "Representamos a Turquia em feiras internacionais",
            video1: "CNR FOTEG 2022",
            video2: "Gulfood Manufacturing 2024",
            video3: "Interpack 2023",
            video4: "PackExpo 2024"
        },
        videos: {
            tag: "Galeria de vídeos",
            title1: "Assista nossas",
            title2: "máquinas",
            subtitle: "100+ vídeos de máquinas em nosso canal do YouTube",
            cta: "Nosso canal do YouTube",
            items: ["Embalagem Flow Pack", "Linha de produção de wafer", "Enrobing de chocolate", "Embalagem de bolo de arroz", "Envase vertical VFFS", "Linha de produção de biscoitos"]
        },
        cta: {
            title: "Obtenha um orçamento gratuito para seu projeto",
            subtitle: "Nossa equipe de especialistas está pronta para oferecer a solução de produção e embalagem ideal para você",
            whatsapp: "Contato via WhatsApp",
            email: "Enviar e-mail"
        },
        contact: {
            tag: "Contato",
            title1: "Entre em",
            title2: "contato",
            address: "Endereço",
            whatsapp: "WhatsApp",
            emailTitle: "E-mail",
            hours: "Horário de funcionamento",
            support247: "Suporte 24/7",
            weekdays: "Segunda - Sexta: 08:30 - 18:00",
            saturday: "Sábado: 09:00 - 14:00",
            formTitle: "Formulário de orçamento",
            formName: "Seu nome *",
            formCompany: "Nome da empresa",
            formEmail: "Seu e-mail *",
            formPhone: "Telefone / WhatsApp *",
            formProduct: "Produto de interesse *",
            formMessage: "Sua mensagem - capacidade, tipo de produto etc. *",
            formKvkk: "Li e aceito a Política de Privacidade.",
            formSubmit: "Solicitar orçamento",
            products: ["Linha de produção de wafer", "Linha de barras de cereais/proteína", "Sistema de cobertura de chocolate", "Máquina Flow Pack", "Máquina Overwrapping", "Embalagem termoformagem", "Envase vertical (VFFS)", "Sanduíche de biscoito", "Corte e embalagem de halva", "Outro"]
        },
        footer: {
            desc: "Fabricante de máquinas de processamento e embalagem de alimentos desde 1995. Exportação para 57+ países, 12.000 m² de produção. Líder turco em linhas de produção de wafer, barras de cereais e máquinas de embalagem.",
            production: "Linhas de produção",
            packagingTitle: "Embalagem",
            corporate: "Institucional",
            aboutUs: "Sobre nós",
            catalogs: "Catálogos",
            videosTitle: "Vídeos",
            contactTitle: "Contato",
            copyright: "Girisim Makina Turkey. Todos os direitos reservados.",
            privacy: "Privacidade",
            kvkk: "LGPD",
            cookies: "Política de Cookies"
        },
        exitPopup: {
            title: "Espere! Não vá embora",
            text: "Gostaria que enviássemos nossos catálogos? Fique por dentro das nossas ofertas especiais.",
            yes: "Sim, envie o catálogo",
            no: "Não, obrigado"
        },
        quoteForm: {
            title: "Solicitar orçamento grátis",
            company: "Nome da empresa *",
            name: "Nome completo *",
            email: "E-mail *",
            phone: "Telefone *",
            productSelect: "Produto de interesse *",
            message: "Sua mensagem (opcional)",
            fileUpload: "Adicionar imagem/arquivo (opcional)",
            privacy: "Li e aceito a Política de Privacidade.",
            submit: "Enviar solicitação",
            successTitle: "Solicitação recebida!",
            successText: "Entraremos em contato o mais breve possível."
        }
    },

    // Spanish - Español
    es: {
        lang: "Español",
        flag: "🇪🇸",
        dir: "ltr",
        nav: {
            about: "Nosotros",
            production: "Líneas de producción",
            packaging: "Embalaje",
            sectors: "Sectores",
            videos: "Videos",
            contact: "Contacto",
            blog: "Blog",
            getQuote: "COTIZACIÓN"
        },
        corporate: {
            aboutUs: "Nosotros",
            whyUs: "¿Por qué Girişim Makina?",
            certificates: "Nuestros certificados",
            hr: "Recursos Humanos"
        },
        machines: {
            cerealBar: "Líneas de producción de barras de cereales",
            chocolateCoating: "Máquinas de recubrimiento de chocolate",
            biscuitSandwich: "Máquinas de sándwich de galletas",
            flowpack: "Embalaje horizontal Flowpack",
            vffs: "Máquinas de embalaje vertical",
            overwrap: "Embalaje tipo sobre"
        },
        packagingChoice: {
            byType: "Por tipo de embalaje",
            byProduct: "Por su producto"
        },
        dropdown: {
            // Mega Menu Titles
            productionMachines: "Máquinas de Producción",
            packagingMachines: "Máquinas de Embalaje",
            // Production Machines
            wafer: "Líneas de producción de wafer",
            cereal: "Líneas de barras de cereales",
            coconutBar: "Líneas de barras de coco",
            protein: "Líneas de barras de proteínas",
            biscuit: "Máquinas de sándwich de galletas",
            cookieCapping: "Cookie Capping (Chocopie)",
            chocolate: "Máquina de recubrimiento de chocolate",
            chocolateCooling: "Túnel de enfriamiento de chocolate",
            chocolatePrep: "Cocina de preparación de chocolate",
            sugarMill: "Molino de azúcar en polvo",
            // Packaging Machines
            flowpack: "Embalaje Flowpack horizontal",
            vffs: "Embalaje vertical (VFFS)",
            overwrap: "Máquinas Overwrapping",
            thermoform: "Embalaje de termoformado",
            filling: "Máquinas de llenado",
            halvah: "Corte y embalaje de halva",
            // Corporate Menu
            mission: "Nuestra Misión y Visión",
            values: "Nuestros Valores",
            rnd: "I+D",
            service: "Servicio Postventa"
        },
        hero: {
            title1: "WAFER Y BARRAS DE CEREALES",
            title2: "LÍNEAS DE PRODUCCIÓN",
            title3: "Y MÁQUINAS DE EMBALAJE",
            description: "Fabricante de máquinas de procesamiento y embalaje de alimentos desde 1985. Como líder en Turquía, exportamos a 57 países en todo el mundo.",
            stat1: "Países de exportación",
            stat2: "m² área de producción",
            stat3: "Años de experiencia",
            cta1: "SOLICITAR COTIZACIÓN",
            cta2: "VER VIDEOS"
        },
        about: {
            tag: "Nosotros",
            title1: "Socio de crecimiento global",
            title2: "para productores de alimentos",
            p1: "Girisim Makina es el fabricante líder de Turquía en procesamiento y embalaje de alimentos desde 1985. Con 3 instalaciones de producción y 12.000 m² de área cubierta, fabricamos líneas de producción de wafer, máquinas de barras de cereales, sistemas de recubrimiento de chocolate y máquinas de embalaje.",
            p2: "Exportamos a más de 57 países en Europa, Medio Oriente, África y Asia, ofreciendo calidad mundial y satisfacción del cliente. Representamos a Turquía en ferias internacionales como Gulfood Manufacturing.",
            feature1: "3 plantas de producción",
            feature2: "Exportación a 57+ países",
            feature3: "Soporte técnico 24/7",
            catalog: "Descargar catálogos"
        },
        production: {
            tag: "Líneas de producción",
            title1: "Máquinas de",
            title2: "procesamiento de alimentos",
            subtitle: "Líneas de producción llave en mano y soluciones de máquinas individuales",
            getQuote: "Solicitar cotización",
            watchVideos: "Ver todos los videos",
            machines: {
                wafer: {
                    title: "Líneas de producción de wafer",
                    desc: "Líneas completas de producción de wafer - desde la preparación de la masa hasta el embalaje",
                    f1: "Preparación automática de masa",
                    f2: "Hornos de alta capacidad",
                    f3: "Sistemas de crema y corte"
                },
                cereal: {
                    title: "Líneas de barras de cereales y proteínas",
                    desc: "Líneas de producción de granola, muesli, barras de proteínas y energía",
                    f1: "Sistemas de mezcla y cocción",
                    f2: "Unidades de formación",
                    f3: "Túneles de enfriamiento"
                },
                chocolate: {
                    title: "Sistemas de recubrimiento de chocolate",
                    desc: "Máquinas de enrobing y túneles de enfriamiento de chocolate",
                    f1: "Recubrimiento total/parcial",
                    f2: "Control preciso de temperatura",
                    f3: "Unidades de decoración"
                },
                biscuit: {
                    title: "Máquinas de sándwich de galletas",
                    desc: "Sistemas de crema para producción de galletas sándwich",
                    f1: "Varias formas y tamaños",
                    f2: "Dosificación precisa de crema",
                    f3: "Alta capacidad de velocidad"
                }
            }
        },
        packaging: {
            tag: "Soluciones de embalaje",
            title1: "Máquinas de",
            title2: "embalaje",
            subtitle: "Soluciones de embalaje personalizadas para cada producto e industria",
            types: {
                flowpack: {
                    title: "Flow Pack",
                    desc: "Embalaje horizontal form-fill-seal. Para galletas, wafer, chocolate, jabón, pan y más. Opciones de vacío y MAP disponibles."
                },
                overwrap: {
                    title: "Overwrapping",
                    desc: "Embalaje tipo sobre. Solución ideal para tortas de arroz, wafer, galletas, chips y jabón."
                },
                thermoform: {
                    title: "Termoformado",
                    desc: "Embalaje form-fill-seal. Embalaje al vacío para chocolate, confitería, queso y productos cárnicos."
                },
                vffs: {
                    title: "VFFS llenado vertical",
                    desc: "Form-fill-seal vertical. Sistemas de pesaje y llenado para gránulos, polvos, nueces y snacks."
                }
            }
        },
        certificates: {
            tag: "Nuestros certificados",
            title: "CE",
            highlight: "Certificados",
            subtitle: "Nuestras máquinas se fabrican de acuerdo con los estándares CE europeos",
            horizontal: "Certificado CE para máquinas de embalaje horizontales",
            thermoform: "Certificado CE para máquinas de embalaje termoformadas",
            vertical: "Certificado CE para máquinas de llenado verticales",
            download: "Descargar"
        },
        sectors: {
            tag: "Nuestra experiencia",
            title1: "Productos que",
            title2: "embalamos",
            subtitle: "Soluciones especializadas para cada sector con 30 años de experiencia",
            items: ["Galleta", "Wafer", "Chocolate", "Pasteles", "Barras de cereales", "Barras de proteínas", "Halva", "Chips y snacks", "Jabón", "Tortas de arroz", "Café", "Alimento para mascotas"]
        },
        whyUs: {
            tag: "¿Por qué nosotros?",
            title1: "¿Por qué",
            title2: "Girisim Makina?",
            items: [
                { title: "3 plantas de producción", desc: "Mayor fabricante turco de maquinaria alimentaria con 3 plantas modernas en 12.000 m² de área total." },
                { title: "Exportación a 57+ países", desc: "Servimos a clientes en más de 57 países en Europa, Medio Oriente, África y Asia." },
                { title: "Proyectos llave en mano", desc: "Soluciones completas desde la producción hasta el embalaje, desde el diseño de fábrica hasta la instalación." },
                { title: "Soporte postventa", desc: "Soporte técnico 24/7, suministro de repuestos y capacitación de operadores." },
                { title: "30 años de experiencia", desc: "Socio confiable del sector desde 1995. Participante en Gulfood Manufacturing." }
            ]
        },
        testimonials: {
            tag: "Referencias",
            title1: "Lo que dicen",
            title2: "nuestros clientes"
        },
        fuarlar: {
            tag: "Ferias",
            title1: "Nuestras participaciones",
            title2: "en ferias",
            subtitle: "Representamos a Turquía en ferias internacionales",
            video1: "CNR FOTEG 2022",
            video2: "Gulfood Manufacturing 2024",
            video3: "Interpack 2023",
            video4: "PackExpo 2024"
        },
        videos: {
            tag: "Galería de videos",
            title1: "Vea nuestras",
            title2: "máquinas",
            subtitle: "100+ videos de máquinas en nuestro canal de YouTube",
            cta: "Nuestro canal de YouTube",
            items: ["Embalaje Flow Pack", "Línea de producción de wafer", "Recubrimiento de chocolate", "Embalaje de tortas de arroz", "Llenado vertical VFFS", "Línea de producción de galletas"]
        },
        cta: {
            title: "Obtenga una cotización gratuita para su proyecto",
            subtitle: "Nuestro equipo de expertos está listo para ofrecerle la solución de producción y embalaje más adecuada",
            whatsapp: "Contactar por WhatsApp",
            email: "Enviar correo"
        },
        contact: {
            tag: "Contacto",
            title1: "Contáctenos",
            title2: "",
            address: "Dirección",
            whatsapp: "WhatsApp",
            emailTitle: "Correo",
            hours: "Horario",
            support247: "Soporte 24/7",
            weekdays: "Lunes - Viernes: 08:30 - 18:00",
            saturday: "Sábado: 09:00 - 14:00",
            formTitle: "Formulario de cotización",
            formName: "Su nombre *",
            formCompany: "Nombre de empresa",
            formEmail: "Su correo *",
            formPhone: "Teléfono / WhatsApp *",
            formProduct: "Producto de interés *",
            formMessage: "Su mensaje - capacidad, tipo de producto, etc. *",
            formKvkk: "He leído y acepto la política de privacidad.",
            formSubmit: "Solicitar cotización",
            products: ["Línea de producción de wafer", "Línea de barras de cereales/proteínas", "Sistema de recubrimiento de chocolate", "Máquina Flow Pack", "Máquina Overwrapping", "Embalaje termoformado", "Llenado vertical (VFFS)", "Sándwich de galletas", "Corte y embalaje de halva", "Otro"]
        },
        footer: {
            desc: "Fabricante de máquinas de procesamiento y embalaje de alimentos desde 1995. Exportación a 57+ países, 12.000 m² de producción. Fabricante líder turco de líneas de producción de wafer, barras de cereales y máquinas de embalaje.",
            production: "Líneas de producción",
            packagingTitle: "Embalaje",
            corporate: "Empresa",
            aboutUs: "Nosotros",
            catalogs: "Catálogos",
            videosTitle: "Videos",
            contactTitle: "Contacto",
            copyright: "Girisim Makina Turkey. Todos los derechos reservados.",
            privacy: "Política de privacidad",
            kvkk: "RGPD",
            cookies: "Política de cookies"
        },
        exitPopup: {
            title: "¡Espera! No te vayas",
            text: "¿Te gustaría que te enviemos nuestros catálogos? Mantente informado sobre nuestras ofertas especiales.",
            yes: "Sí, envíame el catálogo",
            no: "No, gracias"
        },
        quoteForm: {
            title: "Solicitar presupuesto gratis",
            company: "Nombre de la empresa *",
            name: "Nombre completo *",
            email: "Correo electrónico *",
            phone: "Teléfono *",
            productSelect: "Producto de interés *",
            message: "Su mensaje (opcional)",
            fileUpload: "Agregar imagen/archivo (opcional)",
            privacy: "He leído y acepto la Política de Privacidad.",
            submit: "Enviar solicitud",
            successTitle: "¡Solicitud recibida!",
            successText: "Nos pondremos en contacto con usted lo antes posible."
        }
    }
};

// Current language
let currentLang = localStorage.getItem('girisim_lang') || 'tr';

// Get translation by path
function t(path) {
    const keys = path.split('.');
    let value = translations[currentLang];
    for (const key of keys) {
        if (value && value[key] !== undefined) {
            value = value[key];
        } else {
            // Fallback to Turkish
            value = translations.tr;
            for (const k of keys) {
                if (value && value[k] !== undefined) {
                    value = value[k];
                } else {
                    return path;
                }
            }
            return value;
        }
    }
    return value;
}

// Change language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('girisim_lang', lang);
        applyTranslations();

        // Handle RTL for Arabic
        if (translations[lang].dir === 'rtl') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }

        // Update language selector
        updateLanguageSelector();
    }
}

// Update language selector UI
function updateLanguageSelector() {
    // Update all language selectors
    document.querySelectorAll('.lang-selector a, .languages a, .lang-mobile-dropdown a, .language-float-dropdown a, .mobile-lang-options a').forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-lang') === currentLang) {
            el.classList.add('active');
        }
    });

    // Update current language label
    const langLabel = document.getElementById('currentLangLabel');
    if (langLabel) {
        langLabel.textContent = currentLang.toUpperCase();
    }

    // Update mobile language label
    const langLabelMobile = document.getElementById('currentLangMobile');
    if (langLabelMobile) {
        langLabelMobile.textContent = currentLang.toUpperCase();
    }
}

// Toggle mobile language dropdown
function toggleMobileLang() {
    const dropdown = document.getElementById('langMobileDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Apply translations to the page
function applyTranslations() {
    const lang = translations[currentLang];
    if (!lang) return;

    // Navigation - Get all dropdowns
    const dropdowns = document.querySelectorAll('.nav-menu > li.dropdown');

    // First dropdown - Kurumsal/Corporate
    if (dropdowns[0]) {
        const mainLink = dropdowns[0].querySelector(':scope > a');
        if (mainLink) mainLink.innerHTML = lang.nav.about + ' <i class="fas fa-chevron-down"></i>';

        if (lang.corporate) {
            const items = dropdowns[0].querySelectorAll('.dropdown-menu > li:not(.dropdown-divider) > a');
            if (items[0]) items[0].textContent = lang.corporate.aboutUs;
            if (items[1]) items[1].textContent = lang.corporate.whyUs;
            if (items[2]) items[2].textContent = lang.corporate.certificates;
            if (items[3]) items[3].textContent = lang.corporate.hr;
        }
    }

    // Second dropdown - Makinalarımız/Our Machines
    if (dropdowns[1]) {
        const mainLink = dropdowns[1].querySelector(':scope > a');
        if (mainLink) mainLink.innerHTML = lang.nav.production + ' <i class="fas fa-chevron-down"></i>';

        if (lang.machines) {
            const items = dropdowns[1].querySelectorAll('.dropdown-menu > li:not(.dropdown-divider) > a');
            if (items[0]) items[0].textContent = lang.machines.cerealBar;
            if (items[1]) items[1].textContent = lang.machines.chocolateCoating;
            if (items[2]) items[2].textContent = lang.machines.biscuitSandwich;
            if (items[3]) items[3].textContent = lang.machines.flowpack;
            if (items[4]) items[4].textContent = lang.machines.vffs;
            if (items[5]) items[5].textContent = lang.machines.overwrap;
        }
    }

    // Third dropdown - Paketleme Tercihiniz/Packaging Choice
    if (dropdowns[2]) {
        const mainLink = dropdowns[2].querySelector(':scope > a');
        if (mainLink) mainLink.innerHTML = lang.nav.packaging + ' <i class="fas fa-chevron-down"></i>';

        if (lang.packagingChoice) {
            const items = dropdowns[2].querySelectorAll('.dropdown-menu > li > a');
            if (items[0]) items[0].textContent = lang.packagingChoice.byType;
            if (items[1]) items[1].textContent = lang.packagingChoice.byProduct;
        }
    }

    // Non-dropdown nav items (Videos, Blog, Contact)
    const navItems = document.querySelectorAll('.nav-menu > li:not(.dropdown) > a');
    navItems.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.includes('#videos') || href.includes('index.html#videos')) {
            link.textContent = lang.nav.videos;
        } else if (href.includes('blog')) {
            link.textContent = lang.nav.blog || 'Blog';
        } else if (href.includes('#contact') || href.includes('index.html#contact')) {
            link.textContent = lang.nav.contact;
        }
    });

    // Header button
    const headerBtn = document.querySelector('.header .btn-primary');
    if (headerBtn) headerBtn.innerHTML = '<i class="fab fa-whatsapp"></i> ' + lang.nav.getQuote;

    // Hero Section
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.innerHTML = `${lang.hero.title1}<br><span class="highlight">${lang.hero.title2}</span> ${lang.hero.title3}`;
    }

    const heroDesc = document.querySelector('.hero-content > p');
    if (heroDesc) heroDesc.textContent = lang.hero.description;

    const heroStats = document.querySelectorAll('.hero-stats .stat');
    if (heroStats[0]) heroStats[0].querySelector('.stat-text').textContent = lang.hero.stat1;
    if (heroStats[1]) heroStats[1].querySelector('.stat-text').textContent = lang.hero.stat2;
    if (heroStats[2]) heroStats[2].querySelector('.stat-text').textContent = lang.hero.stat3;

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons[0]) heroButtons[0].innerHTML = '<i class="fab fa-whatsapp"></i> ' + lang.hero.cta1;
    if (heroButtons[1]) heroButtons[1].innerHTML = '<i class="fab fa-youtube"></i> ' + lang.hero.cta2;

    // About Section
    const aboutTag = document.querySelector('#about .section-tag');
    if (aboutTag) aboutTag.textContent = lang.about.tag;

    const aboutTitle = document.querySelector('#about .about-content h2');
    if (aboutTitle) aboutTitle.innerHTML = `${lang.about.title1}<br><span class="highlight">${lang.about.title2}</span>`;

    const aboutParagraphs = document.querySelectorAll('#about .about-content > p');
    if (aboutParagraphs[0]) aboutParagraphs[0].textContent = lang.about.p1;
    if (aboutParagraphs[1]) aboutParagraphs[1].textContent = lang.about.p2;

    const aboutFeatures = document.querySelectorAll('#about .about-features .feature span');
    if (aboutFeatures[0]) aboutFeatures[0].textContent = lang.about.feature1;
    if (aboutFeatures[1]) aboutFeatures[1].textContent = lang.about.feature2;
    if (aboutFeatures[2]) aboutFeatures[2].textContent = lang.about.feature3;

    const catalogBtn = document.querySelector('#about .btn-primary');
    if (catalogBtn) catalogBtn.innerHTML = '<i class="fas fa-file-pdf"></i> ' + lang.about.catalog;

    // Production Section
    const prodTag = document.querySelector('#production .section-tag');
    if (prodTag) prodTag.textContent = lang.production.tag;

    const prodTitle = document.querySelector('#production .section-header h2');
    if (prodTitle) prodTitle.innerHTML = `${lang.production.title1} <span class="highlight">${lang.production.title2}</span>`;

    const prodSubtitle = document.querySelector('#production .section-header p');
    if (prodSubtitle) prodSubtitle.textContent = lang.production.subtitle;

    // Machine cards
    const machineCards = document.querySelectorAll('#production .machine-card');
    const machineTypes = ['wafer', 'cereal', 'chocolate', 'biscuit'];
    machineCards.forEach((card, index) => {
        const type = machineTypes[index];
        if (lang.production.machines[type]) {
            const titleEl = card.querySelector('.machine-info h3');
            const descEl = card.querySelector('.machine-info > p');
            const features = card.querySelectorAll('.machine-features li');

            if (titleEl) titleEl.textContent = lang.production.machines[type].title;
            if (descEl) descEl.textContent = lang.production.machines[type].desc;
            if (features[0]) features[0].innerHTML = '<i class="fas fa-check"></i> ' + lang.production.machines[type].f1;
            if (features[1]) features[1].innerHTML = '<i class="fas fa-check"></i> ' + lang.production.machines[type].f2;
            if (features[2]) features[2].innerHTML = '<i class="fas fa-check"></i> ' + lang.production.machines[type].f3;
        }

        const quoteBtn = card.querySelector('.machine-overlay .btn');
        if (quoteBtn) quoteBtn.textContent = lang.production.getQuote;
    });

    const watchVideosBtn = document.querySelector('#production .text-center .btn');
    if (watchVideosBtn) watchVideosBtn.innerHTML = '<i class="fab fa-youtube"></i> ' + lang.production.watchVideos;

    // Packaging Section
    const packTag = document.querySelector('#packaging .section-tag');
    if (packTag) packTag.textContent = lang.packaging.tag;

    const packTitle = document.querySelector('#packaging .section-header h2');
    if (packTitle) packTitle.innerHTML = `${lang.packaging.title1} <span class="highlight">${lang.packaging.title2}</span>`;

    const packSubtitle = document.querySelector('#packaging .section-header p');
    if (packSubtitle) packSubtitle.textContent = lang.packaging.subtitle;

    const packageCards = document.querySelectorAll('#packaging .package-card');
    const packTypes = ['flowpack', 'overwrap', 'thermoform', 'vffs'];
    packageCards.forEach((card, index) => {
        const type = packTypes[index];
        if (lang.packaging.types[type]) {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            if (titleEl) titleEl.textContent = lang.packaging.types[type].title;
            if (descEl) descEl.textContent = lang.packaging.types[type].desc;
        }
    });

    // Sectors Section
    const secTag = document.querySelector('#sectors .section-tag');
    if (secTag) secTag.textContent = lang.sectors.tag;

    const secTitle = document.querySelector('#sectors .section-header h2');
    if (secTitle) secTitle.innerHTML = `${lang.sectors.title1} <span class="highlight">${lang.sectors.title2}</span>`;

    const secSubtitle = document.querySelector('#sectors .section-header p');
    if (secSubtitle) secSubtitle.textContent = lang.sectors.subtitle;

    const sectorCards = document.querySelectorAll('#sectors .sector-card h4');
    sectorCards.forEach((h4, index) => {
        if (lang.sectors.items[index]) {
            h4.textContent = lang.sectors.items[index];
        }
    });

    // Why Us Section
    const whyTag = document.querySelector('.why-us-section .section-tag');
    if (whyTag) whyTag.textContent = lang.whyUs.tag;

    const whyTitle = document.querySelector('.why-us-section h2');
    if (whyTitle) whyTitle.innerHTML = `${lang.whyUs.title1} <span class="highlight">${lang.whyUs.title2}</span>`;

    const whyItems = document.querySelectorAll('.why-us-items .why-item');
    whyItems.forEach((item, index) => {
        if (lang.whyUs.items[index]) {
            const titleEl = item.querySelector('.why-text h4');
            const descEl = item.querySelector('.why-text p');
            if (titleEl) titleEl.textContent = lang.whyUs.items[index].title;
            if (descEl) descEl.textContent = lang.whyUs.items[index].desc;
        }
    });

    // Testimonials Section
    const testTag = document.querySelector('.testimonials-section .section-tag');
    if (testTag) testTag.textContent = lang.testimonials.tag;

    const testTitle = document.querySelector('.testimonials-section .section-header h2');
    if (testTitle) testTitle.innerHTML = `${lang.testimonials.title1} <span class="highlight">${lang.testimonials.title2}</span>`;

    // Videos Section
    const vidTag = document.querySelector('#videos .section-tag');
    if (vidTag) vidTag.textContent = lang.videos.tag;

    const vidTitle = document.querySelector('#videos .section-header h2');
    if (vidTitle) vidTitle.innerHTML = `${lang.videos.title1} <span class="highlight">${lang.videos.title2}</span>`;

    const vidSubtitle = document.querySelector('#videos .section-header p');
    if (vidSubtitle) vidSubtitle.textContent = lang.videos.subtitle;

    const videoCards = document.querySelectorAll('.video-card h4');
    videoCards.forEach((h4, index) => {
        if (lang.videos.items[index]) {
            h4.textContent = lang.videos.items[index];
        }
    });

    const ytBtn = document.querySelector('#videos .text-center .btn');
    if (ytBtn) ytBtn.innerHTML = '<i class="fab fa-youtube"></i> ' + lang.videos.cta;

    // CTA Section
    const ctaTitle = document.querySelector('.cta-content h2');
    if (ctaTitle) ctaTitle.textContent = lang.cta.title;

    const ctaDesc = document.querySelector('.cta-content p');
    if (ctaDesc) ctaDesc.textContent = lang.cta.subtitle;

    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    if (ctaButtons[0]) ctaButtons[0].innerHTML = '<i class="fab fa-whatsapp"></i> ' + lang.cta.whatsapp;
    if (ctaButtons[1]) ctaButtons[1].innerHTML = '<i class="fas fa-envelope"></i> ' + lang.cta.email;

    // Contact Section
    const contTag = document.querySelector('#contact .section-tag');
    if (contTag) contTag.textContent = lang.contact.tag;

    const contTitle = document.querySelector('#contact .section-header h2');
    if (contTitle) contTitle.innerHTML = `${lang.contact.title1} <span class="highlight">${lang.contact.title2}</span>`;

    const contactCards = document.querySelectorAll('.contact-info-cards .contact-card h4');
    if (contactCards[0]) contactCards[0].textContent = lang.contact.address;
    if (contactCards[1]) contactCards[1].textContent = lang.contact.whatsapp;
    if (contactCards[2]) contactCards[2].textContent = lang.contact.emailTitle;
    if (contactCards[3]) contactCards[3].textContent = lang.contact.hours;

    const hoursCard = document.querySelectorAll('.contact-info-cards .contact-card')[3];
    if (hoursCard) {
        const paras = hoursCard.querySelectorAll('p');
        if (paras[0]) paras[0].textContent = lang.contact.weekdays;
        if (paras[1]) paras[1].textContent = lang.contact.saturday;
    }

    const supportText = document.querySelector('.contact-card small');
    if (supportText) supportText.textContent = lang.contact.support247;

    // Contact Form
    const formTitle = document.querySelector('.contact-form h3');
    if (formTitle) formTitle.textContent = lang.contact.formTitle;

    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs.forEach(input => {
        const name = input.getAttribute('name');
        if (name === 'name') input.placeholder = lang.contact.formName;
        else if (name === 'company') input.placeholder = lang.contact.formCompany;
        else if (name === 'email') input.placeholder = lang.contact.formEmail;
        else if (name === 'phone') input.placeholder = lang.contact.formPhone;
        else if (name === 'message') input.placeholder = lang.contact.formMessage;
    });

    const formSelect = document.querySelector('.contact-form select');
    if (formSelect) {
        const options = formSelect.querySelectorAll('option');
        options[0].textContent = lang.contact.formProduct;
        lang.contact.products.forEach((product, index) => {
            if (options[index + 1]) options[index + 1].textContent = product;
        });
    }

    const kvkkLabel = document.querySelector('.checkbox-group span');
    if (kvkkLabel) kvkkLabel.textContent = lang.contact.formKvkk;

    const submitBtn = document.querySelector('.contact-form button');
    if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + lang.contact.formSubmit;

    // Footer
    const footerDesc = document.querySelector('.footer-about p');
    if (footerDesc) footerDesc.textContent = lang.footer.desc;

    const footerLinks = document.querySelectorAll('.footer-links h4');
    if (footerLinks[0]) footerLinks[0].textContent = lang.footer.production;
    if (footerLinks[1]) footerLinks[1].textContent = lang.footer.packagingTitle;
    if (footerLinks[2]) footerLinks[2].textContent = lang.footer.corporate;

    const corpLinks = document.querySelectorAll('.footer-links:nth-child(4) ul li a');
    if (corpLinks[0]) corpLinks[0].textContent = lang.footer.aboutUs;
    if (corpLinks[1]) corpLinks[1].textContent = lang.footer.catalogs;
    if (corpLinks[2]) corpLinks[2].textContent = lang.footer.videosTitle;
    if (corpLinks[3]) corpLinks[3].textContent = lang.footer.contactTitle;

    const footerContactTitle = document.querySelector('.footer-contact h4');
    if (footerContactTitle) footerContactTitle.textContent = lang.footer.contactTitle;

    const copyright = document.querySelector('.footer-bottom-content p');
    if (copyright) copyright.innerHTML = `&copy; 2024 ${lang.footer.copyright}`;

    const bottomLinks = document.querySelectorAll('.footer-bottom-links a');
    if (bottomLinks[0]) bottomLinks[0].textContent = lang.footer.privacy;
    if (bottomLinks[1]) bottomLinks[1].textContent = lang.footer.kvkk;
    if (bottomLinks[2]) bottomLinks[2].textContent = lang.footer.cookies;

    // Also apply to data-i18n elements for flexibility
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    // Exit Popup
    if (lang.exitPopup) {
        const exitTitle = document.querySelector('[data-translate="exitPopupTitle"]');
        if (exitTitle) exitTitle.textContent = lang.exitPopup.title;

        const exitText = document.querySelector('[data-translate="exitPopupText"]');
        if (exitText) exitText.textContent = lang.exitPopup.text;

        const exitYes = document.querySelector('[data-translate="exitPopupYes"]');
        if (exitYes) exitYes.innerHTML = '<i class="fas fa-file-pdf"></i> ' + lang.exitPopup.yes;

        const exitNo = document.querySelector('[data-translate="exitPopupNo"]');
        if (exitNo) exitNo.textContent = lang.exitPopup.no;
    }

    // Quote Form
    if (lang.quoteForm) {
        const quoteTitle = document.querySelector('[data-translate="quoteFormTitle"]');
        if (quoteTitle) quoteTitle.textContent = lang.quoteForm.title;

        const quoteCompany = document.querySelector('[data-translate-placeholder="quoteCompany"]');
        if (quoteCompany) quoteCompany.placeholder = lang.quoteForm.company;

        const quoteName = document.querySelector('[data-translate-placeholder="quoteName"]');
        if (quoteName) quoteName.placeholder = lang.quoteForm.name;

        const quoteEmail = document.querySelector('[data-translate-placeholder="quoteEmail"]');
        if (quoteEmail) quoteEmail.placeholder = lang.quoteForm.email;

        const quotePhone = document.querySelector('[data-translate-placeholder="quotePhone"]');
        if (quotePhone) quotePhone.placeholder = lang.quoteForm.phone;

        const quoteProductSelect = document.querySelector('[data-translate="quoteProductSelect"]');
        if (quoteProductSelect) quoteProductSelect.textContent = lang.quoteForm.productSelect;

        const quoteMessage = document.querySelector('[data-translate-placeholder="quoteMessage"]');
        if (quoteMessage) quoteMessage.placeholder = lang.quoteForm.message;

        const quoteFileUpload = document.querySelector('[data-translate="quoteFileUpload"]');
        if (quoteFileUpload && !quoteFileUpload.dataset.hasFile) quoteFileUpload.textContent = lang.quoteForm.fileUpload;

        const quotePrivacy = document.querySelector('[data-translate="quotePrivacy"]');
        if (quotePrivacy) quotePrivacy.textContent = lang.quoteForm.privacy;

        const quoteSubmit = document.querySelector('[data-translate="quoteSubmit"]');
        if (quoteSubmit) quoteSubmit.innerHTML = '<i class="fas fa-paper-plane"></i> ' + lang.quoteForm.submit;

        const quoteSuccessTitle = document.querySelector('[data-translate="quoteSuccessTitle"]');
        if (quoteSuccessTitle) quoteSuccessTitle.textContent = lang.quoteForm.successTitle;

        const quoteSuccessText = document.querySelector('[data-translate="quoteSuccessText"]');
        if (quoteSuccessText) quoteSuccessText.textContent = lang.quoteForm.successText;
    }

    // Fuarlar Section
    console.log('Fuarlar translation:', lang.fuarlar);
    if (lang.fuarlar) {
        const fuarTag = document.querySelector('[data-translate="fuarlar.tag"]');
        console.log('fuarTag element:', fuarTag);
        if (fuarTag) fuarTag.textContent = lang.fuarlar.tag;

        const fuarTitle1 = document.querySelector('[data-translate="fuarlar.title1"]');
        if (fuarTitle1) fuarTitle1.textContent = lang.fuarlar.title1;

        const fuarTitle2 = document.querySelector('[data-translate="fuarlar.title2"]');
        if (fuarTitle2) fuarTitle2.textContent = lang.fuarlar.title2;

        const fuarSubtitle = document.querySelector('[data-translate="fuarlar.subtitle"]');
        if (fuarSubtitle) fuarSubtitle.textContent = lang.fuarlar.subtitle;

        const fuarVideo1 = document.querySelector('[data-translate="fuarlar.video1"]');
        if (fuarVideo1) fuarVideo1.textContent = lang.fuarlar.video1;

        const fuarVideo2 = document.querySelector('[data-translate="fuarlar.video2"]');
        if (fuarVideo2) fuarVideo2.textContent = lang.fuarlar.video2;

        const fuarVideo3 = document.querySelector('[data-translate="fuarlar.video3"]');
        if (fuarVideo3) fuarVideo3.textContent = lang.fuarlar.video3;

        const fuarVideo4 = document.querySelector('[data-translate="fuarlar.video4"]');
        if (fuarVideo4) fuarVideo4.textContent = lang.fuarlar.video4;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);

    // Add click handlers to language links
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = el.getAttribute('data-lang');
            setLanguage(lang);

            // Close mobile dropdown if open
            const mobileDropdown = document.getElementById('langMobileDropdown');
            if (mobileDropdown) {
                mobileDropdown.classList.remove('show');
            }
        });
    });

    // Mobile language button click handler
    const langMobileBtn = document.getElementById('langMobileBtn');
    if (langMobileBtn) {
        langMobileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = document.getElementById('langMobileDropdown');
            if (dropdown) {
                dropdown.classList.toggle('show');
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.languages-mobile')) {
            const mobileDropdown = document.getElementById('langMobileDropdown');
            if (mobileDropdown) {
                mobileDropdown.classList.remove('show');
            }
        }
    });
});

// Export for use in other scripts
window.girisimTranslations = {
    t,
    setLanguage,
    getCurrentLang: () => currentLang,
    translations
};
