// Multi-language Translation System
const translations = {
    // Turkish - Türkçe
    tr: {
        lang: "Türkçe",
        flag: "🇹🇷",
        dir: "ltr",
        nav: {
            about: "Kurumsal",
            production: "Makinelerimiz",
            packaging: "Paketleme Seçeneği",
            sectors: "Sektörler",
            videos: "Videolar",
            contact: "İletişim",
            blog: "Blog",
            getQuote: "TEKLİF AL",
            logoSub: "PAKETLEME MAKİNALARI"
        },
        search: {
            placeholder: "Makine veya ürün ara...",
            noResults: "Sonuç bulunamadı"
        },
        sideContact: {
            toggle: "İletişim",
            title: "Hızlı İletişim",
            phone: "Telefon",
            email: "E-posta",
            export: "İhracat"
        },
        blog: {
            title: "Blog",
            subtitle: "Sektörel haberler, ürün tanıtımları ve fuar duyuruları",
            all: "Tümü",
            general: "Genel",
            products: "Ürünler",
            industry: "Sektör",
            fairs: "Fuarlar",
            noPosts: "Henüz yazı yok",
            noPostsDesc: "Bu kategoride henüz yazı bulunmamaktadır.",
            readMore: "Devamını Oku",
            newsletterTitle: "Bültenimize Abone Olun",
            newsletterDesc: "Yeni ürünler ve fuar duyuruları için e-posta bültenimize abone olun.",
            subscribe: "Abone Ol"
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
            about: "Hakkımızda",
            mission: "Misyonumuz & Vizyonumuz",
            values: "Değerlerimiz",
            rnd: "AR-GE",
            service: "Satış Sonrası Servis",
            whyUs: "Neden Girişim Makina?",
            certificates: "Sertifikalarımız",
            hr: "İnsan Kaynakları",
            cerealBar: "Tahıl Bar Üretim Hatları",
            // Packaging Choice
            byType: "Paket Tipine Göre",
            byProduct: "Ürününüze Göre"
        },
        megaMenu: {
            productionLines: "Üretim Hatları",
            biscuitChocolate: "Bisküvi & Çikolata",
            horizontalPack: "Yatay Paketleme",
            verticalPack: "Dikey Paketleme",
            fillingAux: "Dolum & Yardımcı"
        },
        bannerSlides: {
            s1: { tag: "Anahtar Teslim Üretim", title: "Wafer & Cereal Bar<br>Üretim Hatları", desc: "Hamur hazırlamadan paketlemeye kadar komple üretim hatları. 57 ülkeye ihracat, 30 yılı aşkın tecrübe.", btn1: "Teklif Al", btn2: "Videoları İzle" },
            s2: { tag: "Paketleme Çözümleri", title: "Flowpack<br>Paketleme Makineleri", desc: "Bisküvi, wafer, çikolata, ekmek ve sabun gibi geniş ürün yelpazesi için yatay paketleme çözümleri.", btn1: "Modelleri İncele", btn2: "WhatsApp" },
            s3: { tag: "Çikolata İşleme", title: "Çikolata Kaplama<br>& Soğutma Sistemleri", desc: "Enrobing makineleri, soğutma tünelleri ve çikolata hazırlama tankları. Komple kaplama hatları.", btn1: "Detaylı Bilgi", btn2: "Teklif Al" },
            s4: { tag: "Bisküvi İşleme", title: "Bisküvi Kremalama<br>& Sandviç Makineleri", desc: "Farklı şekil ve boyutlarda bisküvi kremalama. Yüksek kapasite, hassas dozajlama.", btn1: "Detaylı Bilgi", btn2: "Teklif Al" },
            s5: { tag: "Paketleme Teknolojileri", title: "Overwrapping &<br>Thermoform Makineleri", desc: "Zarf tipi, thermoform ve dikey dolum makineleri. Her ürüne özel paketleme formatları.", btn1: "Overwrapping", btn2: "Thermoform" },
            s6: { tag: "Bar Üretim Hatları", title: "Cereal Bar &<br>Protein Bar Hatları", desc: "Granola, müsli, protein ve enerji barı üretimi. Karıştırma, şekillendirme, soğutma ve paketleme.", btn1: "Cereal Bar", btn2: "Protein Bar" },
            s7: { tag: "Global Güven", title: "57 Ülkeye İhracat<br>30+ Yıllık Tecrübe", desc: "12.000 m² üretim alanı, 3 farklı üretim tesisi. Türkiye'nin lider gıda makineleri üreticisi.", btn1: "Hakkımızda", btn2: "Katalog İndir" }
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
            feature3: "Satış Sonrası Destek",
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
            about: "1995'ten beri gıda işleme ve paketleme makineleri üretiyoruz. 57+ ülkeye ihracat, 12.000 m² üretim tesisi.",
            desc: "1995'ten beri gıda işleme ve paketleme makineleri üretiyoruz. 57+ ülkeye ihracat, 12.000 m² üretim tesisi. Wafer, cereal bar üretim hatları ve paketleme makinelerinde Türkiye'nin lider üreticisi.",
            quickLinks: "Hızlı Linkler",
            contact: "İletişim",
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
        },
        inline: {
            hello: "Merhaba",
            interestedProduct: "ile ilgileniyorum",
            message: "Mesajınız",
            contactInfo: "İletişim bilgileriniz",
            addFile: "Görsel/Dosya Ekle (opsiyonel)",
            errorRetry: "Bir hata oluştu. Lütfen tekrar deneyin.",
            connectionError: "Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.",
            catalogThanks: "Teşekkürler! Kataloglar açılıyor...",
            sending: "Gönderiliyor..."
        },
        byType: {
            heroTitle: "Paket Tipine Göre",
            heroDesc: "İhtiyacınıza uygun paket tipini seçin, size en uygun makineyi önerelim",
            sectionTitle: "Paket Tipinizi Seçin",
            sectionDesc: "Her paket tipi için özelleştirilmiş paketleme çözümlerimizi inceleyin",
            pillowH: "Yastık Paket (Yatay)",
            pillowHDesc: "Pillow Bag - En yaygın kullanılan paket tipi. Bisküvi, çikolata, sabun ve daha fazlası için ideal.",
            gussetH: "Körüklü Paket (Yatay)",
            gussetHDesc: "Gusseted Bag - Yan körüklü paketler. Daha fazla hacim ve profesyonel görünüm.",
            envelope: "Zarf Tipi Paket (X-Fold)",
            envelopeDesc: "Overwrapping - Premium görünüm için zarf tipi paketleme. Wafer, bisküvi, çikolata için.",
            pillowV: "Yastık Paket (Dikey)",
            pillowVDesc: "Vertical Pillow Bag - Granül, toz ve parçalı ürünler için dikey dolum paketleme.",
            gussetV: "Körüklü Paket (Dikey)",
            gussetVDesc: "Vertical Gusseted - Yan körüklü dikey paketler. Kahve, kuruyemiş için ideal.",
            quadro: "Quadro / Block Bottom",
            quadroDesc: "Düz tabanlı paketler. Premium görünüm, raflarda dik durur. Kahve, kuruyemiş için.",
            doypack: "Doypack / Stand-up Pouch",
            doypackDesc: "Ayakta duran poşetler. Modern görünüm, fermuarlı seçenek. Snack, kuruyemiş için.",
            stick: "Stick Pack",
            stickDesc: "Uzun, dar stick paketler. Şeker, kahve, çay, ilaç için tek kullanımlık porsiyonlar.",
            sachet: "Sachet / Poşet",
            sachetDesc: "Küçük tek kullanımlık poşetler. Ketçap, mayonez, şampuan, sos paketleri için.",
            viewMachines: "Makineleri Gör",
            ctaTitle: "Hangi Paket Tipi Size Uygun?",
            ctaDesc: "Uzmanlarımız ürününüz için en uygun paket tipini belirlemenize yardımcı olsun",
            ctaBtn: "WhatsApp ile Danışın",
            seoTitle: "Paket Tipine Göre Makineler",
            seoP1: "Paketleme sektöründe farklı ürün tipleri ve pazar gereksinimleri için çeşitli paket formatları kullanılmaktadır. Girişim Makina olarak yastık paket (pillow pack), körüklü paket (gusseted), zarf paket (envelope), doypack, quadro seal, stick pack ve thermoform gibi tüm yaygın paket tiplerini üretebilen makineler sunmaktayız.",
            seoP2: "Her paket tipi, farklı ürün özellikleri ve raf ömrü gereksinimlerine göre avantajlar sunar. Yastık paket ekonomik ve hızlı üretim için idealdir. MAP (Modified Atmosphere Packaging) uygulamaları ile raf ömrü uzatılabilir. Doypack ve quadro seal formatları premium görünüm sağlarken, stick pack tek kullanımlık porsiyonlar için tercih edilir."
        },
        byProduct: {
            heroTitle: "Ürününüze Göre",
            heroDesc: "Paketlemek istediğiniz ürünü seçin, size en uygun makineyi önerelim",
            sectionTitle: "Ürün Kategorisi Seçin",
            sectionDesc: "Paketlemek istediğiniz ürüne tıklayarak uygun makineleri görüntüleyin",
            catDrinks: "İçecek & Kahve Ürünleri", catSugar: "Şeker & Toz Ürünler", catBiscuit: "Bisküvi & Unlu Mamüller", catSnack: "Kuruyemiş & Snack", catGrain: "Tahıl & Bakliyat", catSpice: "Baharat", catDairy: "Süt Ürünleri", catOther: "Diğer Ürünler",
            groundCoffee: "Toz Kahve", coffeeBeans: "Çekirdek Kahve", instantCoffee: "Hazır Kahve", tea: "Çay",
            powderedSugar: "Toz Şeker", granulatedSugar: "Kristal Şeker", sugarSticks: "Stick Şeker", milkPowder: "Süt Tozu", detergent: "Deterjan",
            biscuit: "Bisküvi", wafer: "Gofret", cake: "Kek", bakeryOther: "Diğer Unlu Mamüller",
            chips: "Cips & Snack", nuts: "Kuruyemiş", driedFruits: "Kuru Meyve & Sebze", cerealBar: "Cereal Bar",
            legumes: "Bakliyat", pasta: "Makarna & Mantı", rice: "Pirinç",
            groundSpices: "Toz Baharat", wholeSpices: "Tane Baharat",
            gratedCheese: "Rende Peynir", butter: "Tereyağı",
            frozen: "Donuk Ürünler", petFood: "Hayvan Maması", wrappedCandy: "Sarılı Şeker", soap: "Sabun",
            ctaTitle: "Ürününüz Listede Yok mu?",
            ctaDesc: "Uzmanlarımız her türlü ürün için paketleme çözümü sunabilir",
            ctaBtn: "WhatsApp ile Danışın",
            getQuote: "Teklif Al",
            seoTitle: "Ürüne Göre Paketleme Çözümleri",
            seoP1: "Girişim Makina, gıda sektöründe farklı ürün gruplarına özel paketleme çözümleri sunmaktadır. Bisküvi, çikolata, şekerleme, kuruyemiş, tahıl ürünleri, baharatlar, süt ürünleri ve daha birçok ürün grubu için yatay flowpack, dikey dolum (VFFS), thermoform ve overwrapping makineleri ile komple paketleme hatları tasarlıyoruz.",
            seoP2: "Her ürün grubunun kendine özgü paketleme gereksinimleri vardır. Kırılgan ürünler için hassas besleme sistemleri, toz ürünler için vidalı dolum, granül ürünler için multihead tartı sistemleri ve sıvı ürünler için pompalı dolum çözümleri sunuyoruz. Tüm makinelerimiz servo motorlu, PLC kontrollü ve hijyen standartlarına uygun olarak üretilmektedir."
        },
        hr: {
            heroTitle: "İnsan Kaynakları",
            heroDesc: "Girişim Makina ailesine katılın. Gıda makineleri sektöründe kariyer fırsatlarını keşfedin.",
            whyTitle: "Neden Girişim Makina?",
            whyP1: "1995'ten beri gıda işleme ve paketleme makineleri sektöründe Türkiye'nin lider üreticisiyiz. 57'den fazla ülkeye ihracat yapan, 12.000 m² üretim tesisinde çalışan dinamik bir ekibiz.",
            whyP2: "Sürekli büyüyen ekibimizle, kariyer gelişiminize önem veren, yenilikçi ve dinamik bir çalışma ortamı sunuyoruz.",
            benefit1: "Sürekli Eğitim", benefit2: "Kariyer Gelişimi", benefit3: "Uluslararası İş Ortamı", benefit4: "Dinamik Ekip", benefit5: "Sosyal Haklar", benefit6: "Başarı Primleri",
            formTitle: "İş Başvuru Formu",
            labelName: "Ad Soyad *", labelEmail: "E-posta *", labelPhone: "Telefon *",
            labelPosition: "Başvurmak İstediğiniz Pozisyon *", labelExperience: "Deneyim Süresi",
            labelCV: "CV Yükle (PDF, DOC, DOCX)", labelNotes: "Ek Notlar",
            selectPosition: "Pozisyon Seçiniz", selectExperience: "Seçiniz",
            fileUploadText: "CV dosyanızı sürükleyin veya tıklayın",
            submitBtn: "Başvuruyu Gönder",
            phName: "Adınız ve soyadınız", phEmail: "ornek@email.com", phPhone: "+90 5XX XXX XX XX", phNotes: "Kendiniz hakkında kısaca bilgi verebilirsiniz..."
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
            getQuote: "GET QUOTE",
            logoSub: "PACKAGING MACHINES"
        },
        search: {
            placeholder: "Search machines or products...",
            noResults: "No results found"
        },
        sideContact: {
            toggle: "Contact",
            title: "Quick Contact",
            phone: "Phone",
            email: "Email",
            export: "Export"
        },
        blog: {
            title: "Blog",
            subtitle: "Industry news, product introductions and fair announcements",
            all: "All",
            general: "General",
            products: "Products",
            industry: "Industry",
            fairs: "Fairs",
            noPosts: "No posts yet",
            noPostsDesc: "There are no posts in this category yet.",
            readMore: "Read More",
            newsletterTitle: "Subscribe to Our Newsletter",
            newsletterDesc: "Subscribe to our newsletter for new products and fair announcements.",
            subscribe: "Subscribe"
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
            service: "After-Sales Service",
            about: "About Us",
            whyUs: "Why Girişim Makina?",
            certificates: "Our Certificates",
            hr: "Human Resources",
            cerealBar: "Cereal Bar Production Lines",
            byType: "By Package Type",
            byProduct: "By Your Product"
        },
        megaMenu: {
            productionLines: "Production Lines",
            biscuitChocolate: "Biscuit & Chocolate",
            horizontalPack: "Horizontal Packaging",
            verticalPack: "Vertical Packaging",
            fillingAux: "Filling & Auxiliary"
        },
        bannerSlides: {
            s1: { tag: "Turnkey Production", title: "Wafer & Cereal Bar<br>Production Lines", desc: "Complete production lines from dough preparation to packaging. Export to 57 countries, 30+ years of experience.", btn1: "Get Quote", btn2: "Watch Videos" },
            s2: { tag: "Packaging Solutions", title: "Flowpack<br>Packaging Machines", desc: "Horizontal packaging solutions for a wide range of products including biscuits, wafers, chocolate, bread and soap.", btn1: "View Models", btn2: "WhatsApp" },
            s3: { tag: "Chocolate Processing", title: "Chocolate Enrobing<br>& Cooling Systems", desc: "Enrobing machines, cooling tunnels and chocolate preparation tanks. Complete coating lines.", btn1: "Learn More", btn2: "Get Quote" },
            s4: { tag: "Biscuit Processing", title: "Biscuit Sandwiching<br>& Cream Machines", desc: "Biscuit cream sandwiching in various shapes and sizes. High capacity, precise dosing.", btn1: "Learn More", btn2: "Get Quote" },
            s5: { tag: "Packaging Technologies", title: "Overwrapping &<br>Thermoform Machines", desc: "Envelope type, thermoform and vertical filling machines. Custom packaging formats for every product.", btn1: "Overwrapping", btn2: "Thermoform" },
            s6: { tag: "Bar Production Lines", title: "Cereal Bar &<br>Protein Bar Lines", desc: "Granola, muesli, protein and energy bar production. Mixing, forming, cooling and packaging.", btn1: "Cereal Bar", btn2: "Protein Bar" },
            s7: { tag: "Global Trust", title: "Export to 57 Countries<br>30+ Years Experience", desc: "12,000 m² production area, 3 production facilities. Turkey's leading food machinery manufacturer.", btn1: "About Us", btn2: "Download Catalog" }
        },
        hero: {
            title1: "WAFER & CEREAL BAR",
            title2: "PRODUCTION LINES",
            title3: "& PACKAGING MACHINES",
            description: "Manufacturing food processing and packaging machines since 1995. As Turkey's leading manufacturer, we export to 57 countries worldwide.",
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
            p1: "As Girisim Makina, we have been Turkey's leading manufacturer in food processing and packaging since 1995. With 3 production facilities and 12,000 m² of covered area, we manufacture wafer production lines, cereal bar machines, chocolate coating systems, and packaging machines.",
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
            about: "Manufacturing food processing and packaging machines since 1995. Export to 57+ countries.",
            quickLinks: "Quick Links",
            contact: "Contact",
            desc: "Manufacturing food processing and packaging machines since 1995. Export to 57+ countries, 12,000 m² production facility. Turkey's leading manufacturer in wafer, cereal bar production lines and packaging machines.",
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
        },
        inline: {
            hello: "Hello",
            interestedProduct: "I am interested in",
            message: "Your message",
            contactInfo: "Your contact info",
            addFile: "Add Image/File (optional)",
            errorRetry: "An error occurred. Please try again.",
            connectionError: "Connection error. Please check your internet connection.",
            catalogThanks: "Thank you! Catalogs are opening...",
            sending: "Sending..."
        },
        byType: {
            heroTitle: "By Package Type",
            heroDesc: "Choose the right package type, we'll recommend the best machine for you",
            sectionTitle: "Choose Your Package Type",
            sectionDesc: "Explore our customized packaging solutions for each package type",
            pillowH: "Pillow Pack (Horizontal)",
            pillowHDesc: "Pillow Bag - The most commonly used package type. Ideal for biscuits, chocolate, soap and more.",
            gussetH: "Gusseted Pack (Horizontal)",
            gussetHDesc: "Gusseted Bag - Side-gusseted packages. More volume and professional appearance.",
            envelope: "Envelope Pack (X-Fold)",
            envelopeDesc: "Overwrapping - Envelope type packaging for premium appearance. For wafers, biscuits, chocolate.",
            pillowV: "Pillow Pack (Vertical)",
            pillowVDesc: "Vertical Pillow Bag - Vertical filling packaging for granules, powder and particulate products.",
            gussetV: "Gusseted Pack (Vertical)",
            gussetVDesc: "Vertical Gusseted - Vertical packages with side gussets. Ideal for coffee, nuts.",
            quadro: "Quadro / Block Bottom",
            quadroDesc: "Flat bottom packages. Premium look, stands upright on shelves. For coffee, nuts.",
            doypack: "Doypack / Stand-up Pouch",
            doypackDesc: "Stand-up pouches. Modern look, zipper option. For snacks, nuts.",
            stick: "Stick Pack",
            stickDesc: "Long, narrow stick packs. Single-use portions for sugar, coffee, tea, medicine.",
            sachet: "Sachet",
            sachetDesc: "Small single-use sachets. For ketchup, mayonnaise, shampoo, sauces.",
            viewMachines: "View Machines",
            ctaTitle: "Which Package Type Suits You?",
            ctaDesc: "Our experts will help you determine the ideal package type for your product",
            ctaBtn: "Consult via WhatsApp",
            seoTitle: "Machines by Package Type",
            seoP1: "In the packaging industry, various package formats are used for different product types and market requirements. At Girişim Makina, we offer machines capable of producing all common package types including pillow pack, gusseted, envelope, doypack, quadro seal, stick pack and thermoform.",
            seoP2: "Each package type offers advantages based on product characteristics and shelf life requirements. Pillow pack is ideal for economical and fast production. MAP applications can extend shelf life. Doypack and quadro seal formats provide premium appearance, while stick pack is preferred for single-use portions."
        },
        byProduct: {
            heroTitle: "By Your Product",
            heroDesc: "Select the product you want to package, we'll recommend the best machine",
            sectionTitle: "Select Product Category",
            sectionDesc: "Click on the product you want to package to see suitable machines",
            catDrinks: "Beverages & Coffee",
            catSugar: "Sugar & Powder Products",
            catBiscuit: "Biscuits & Bakery",
            catSnack: "Nuts & Snacks",
            catGrain: "Grains & Legumes",
            catSpice: "Spices",
            catDairy: "Dairy Products",
            catOther: "Other Products",
            groundCoffee: "Ground Coffee", coffeeBeans: "Coffee Beans", instantCoffee: "Instant Coffee", tea: "Tea",
            powderedSugar: "Powdered Sugar", granulatedSugar: "Granulated Sugar", sugarSticks: "Sugar Sticks", milkPowder: "Milk Powder", detergent: "Detergent",
            biscuit: "Biscuits", wafer: "Wafer", cake: "Cake", bakeryOther: "Other Bakery Products",
            chips: "Chips & Snacks", nuts: "Nuts", driedFruits: "Dried Fruits & Vegetables", cerealBar: "Cereal Bar",
            legumes: "Legumes", pasta: "Pasta", rice: "Rice",
            groundSpices: "Ground Spices", wholeSpices: "Whole Spices",
            gratedCheese: "Grated Cheese", butter: "Butter",
            frozen: "Frozen Products", petFood: "Pet Food", wrappedCandy: "Wrapped Candy", soap: "Soap",
            ctaTitle: "Your Product Not Listed?",
            ctaDesc: "Our experts can provide packaging solutions for any type of product",
            ctaBtn: "Consult via WhatsApp",
            getQuote: "Get Quote",
            seoTitle: "Packaging Solutions by Product",
            seoP1: "Girişim Makina offers specialized packaging solutions for different product groups in the food industry. We design complete packaging lines with horizontal flowpack, vertical filling (VFFS), thermoform and overwrapping machines for biscuits, chocolate, confectionery, nuts, cereal products, spices, dairy products and more.",
            seoP2: "Each product group has unique packaging requirements. We offer sensitive feeding systems for fragile products, auger filling for powders, multihead weighing systems for granules and pump filling solutions for liquids. All our machines are manufactured with servo motors, PLC control and in compliance with hygiene standards."
        },
        hr: {
            heroTitle: "Human Resources",
            heroDesc: "Join the Girişim Makina family. Discover career opportunities in the food machinery sector.",
            whyTitle: "Why Girişim Makina?",
            whyP1: "We have been Turkey's leading manufacturer of food processing and packaging machinery since 1995. We are a dynamic team exporting to over 57 countries and working in 12,000 m² production facilities.",
            whyP2: "With our constantly growing team, we offer an innovative and dynamic work environment that values your career development.",
            benefit1: "Continuous Training", benefit2: "Career Development", benefit3: "International Environment", benefit4: "Dynamic Team", benefit5: "Social Benefits", benefit6: "Achievement Bonuses",
            formTitle: "Job Application Form",
            labelName: "Full Name *", labelEmail: "Email *", labelPhone: "Phone *",
            labelPosition: "Position You're Applying For *", labelExperience: "Years of Experience",
            labelCV: "Upload CV (PDF, DOC, DOCX)", labelNotes: "Additional Notes",
            selectPosition: "Select Position", selectExperience: "Select",
            fileUploadText: "Drag or click to upload your CV",
            submitBtn: "Submit Application",
            phName: "Your full name", phEmail: "example@email.com", phPhone: "+90 5XX XXX XX XX", phNotes: "You can briefly share information about yourself..."
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
            blog: "Блог",
            getQuote: "ПОЛУЧИТЬ ЦЕНУ",
            logoSub: "УПАКОВОЧНЫЕ МАШИНЫ"
        },
        search: {
            placeholder: "Поиск машин или продуктов...",
            noResults: "Ничего не найдено"
        },
        sideContact: {
            toggle: "Контакты",
            title: "Быстрая связь",
            phone: "Телефон",
            email: "Эл. почта",
            export: "Экспорт"
        },
        blog: {
            title: "Блог",
            subtitle: "Отраслевые новости, презентации продуктов и объявления о выставках",
            all: "Все",
            general: "Общее",
            products: "Продукты",
            industry: "Отрасль",
            fairs: "Выставки",
            noPosts: "Пока нет записей",
            noPostsDesc: "В этой категории пока нет записей.",
            readMore: "Читать далее",
            newsletterTitle: "Подпишитесь на рассылку",
            newsletterDesc: "Подпишитесь на нашу рассылку для получения новостей о продуктах и выставках.",
            subscribe: "Подписаться"
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
            cookieCapping: "Кэпирование печенья (Chocopie)",
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
            service: "Послепродажное обслуживание",
            about: "О нас",
            whyUs: "Почему Girişim Makina?",
            certificates: "Наши сертификаты",
            hr: "Кадры",
            cerealBar: "Линии зерновых батончиков",
            byType: "По типу упаковки",
            byProduct: "По вашему продукту"
        },
        megaMenu: {
            productionLines: "Производственные Линии",
            biscuitChocolate: "Печенье и Шоколад",
            horizontalPack: "Горизонтальная Упаковка",
            verticalPack: "Вертикальная Упаковка",
            fillingAux: "Фасовка и Вспомогательное"
        },
        bannerSlides: {
            s1: { tag: "Производство под ключ", title: "Вафли и зерновые батончики<br>Производственные линии", desc: "Комплектные линии от подготовки теста до упаковки. Экспорт в 57 стран, более 30 лет опыта.", btn1: "Запросить цену", btn2: "Смотреть видео" },
            s2: { tag: "Упаковочные решения", title: "Flowpack<br>Упаковочные машины", desc: "Горизонтальные упаковочные решения для печенья, вафель, шоколада, хлеба и мыла.", btn1: "Модели", btn2: "WhatsApp" },
            s3: { tag: "Шоколадная обработка", title: "Шоколадное покрытие<br>и системы охлаждения", desc: "Энробинг машины, охлаждающие тоннели и танки для подготовки шоколада.", btn1: "Подробнее", btn2: "Запросить цену" },
            s4: { tag: "Обработка печенья", title: "Кремование печенья<br>и сэндвич-машины", desc: "Кремование печенья различных форм и размеров. Высокая производительность, точное дозирование.", btn1: "Подробнее", btn2: "Запросить цену" },
            s5: { tag: "Упаковочные технологии", title: "Overwrapping и<br>Thermoform машины", desc: "Конвертное, термоформовочное и вертикальное оборудование. Индивидуальные форматы упаковки.", btn1: "Overwrapping", btn2: "Thermoform" },
            s6: { tag: "Линии батончиков", title: "Зерновые батончики и<br>Протеиновые батончики", desc: "Производство гранола, мюсли, протеиновых и энергетических батончиков.", btn1: "Cereal Bar", btn2: "Protein Bar" },
            s7: { tag: "Глобальное доверие", title: "Экспорт в 57 стран<br>30+ лет опыта", desc: "12 000 м² производственная площадь, 3 производственных объекта. Ведущий турецкий производитель.", btn1: "О нас", btn2: "Скачать каталог" }
        },
        hero: {
            title1: "ВАФЛИ И ЗЕРНОВЫЕ БАТОНЧИКИ",
            title2: "ПРОИЗВОДСТВЕННЫЕ ЛИНИИ",
            title3: "И УПАКОВОЧНЫЕ МАШИНЫ",
            description: "Производим оборудование для переработки и упаковки пищевых продуктов с 1995 года. Как ведущий производитель Турции, экспортируем в 57 стран мира.",
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
            p1: "Компания Girisim Makina является ведущим турецким производителем в сфере переработки и упаковки пищевых продуктов с 1995 года. Имея 3 производственных объекта и 12 000 м² крытой площади, мы производим линии по производству вафель, машины для зерновых батончиков, системы шоколадной глазури и упаковочные машины.",
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
            about: "Производим оборудование для пищевой промышленности с 1995 года. Экспорт в 57+ стран.",
            quickLinks: "Быстрые ссылки",
            contact: "Контакты",
            desc: "Производим оборудование для переработки и упаковки пищевых продуктов с 1995 года. Экспорт в 57+ стран, 12 000 м² производственных площадей. Ведущий турецкий производитель линий производства вафель, зерновых батончиков и упаковочных машин.",
            production: "Производственные линии",
            packagingTitle: "Упаковка",
            corporate: "Компания",
            aboutUs: "О нас",
            catalogs: "Каталоги",
            videosTitle: "Видео",
            contactTitle: "Контакты",
            copyright: "Girisim Makina Turkey. Все права защищены.",
            privacy: "Политика конфиденциальности",
            kvkk: "KVKK",
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
        },
        inline: {
            hello: "Здравствуйте",
            interestedProduct: "Меня интересует",
            message: "Ваше сообщение",
            contactInfo: "Ваши контактные данные",
            addFile: "Добавить изображение/файл (необязательно)",
            errorRetry: "Произошла ошибка. Пожалуйста, попробуйте снова.",
            connectionError: "Ошибка подключения. Проверьте подключение к интернету.",
            catalogThanks: "Спасибо! Каталоги открываются...",
            sending: "Отправка..."
        },
        byType: {
            heroTitle: "По типу упаковки",
            heroDesc: "Выберите подходящий тип упаковки, мы порекомендуем лучшую машину",
            sectionTitle: "Выберите тип упаковки",
            sectionDesc: "Ознакомьтесь с нашими индивидуальными решениями для каждого типа упаковки",
            pillowH: "Подушечная упаковка (горизонтальная)", pillowHDesc: "Pillow Bag - Самый распространенный тип. Идеально для печенья, шоколада, мыла и др.",
            gussetH: "Упаковка с фальцами (горизонтальная)", gussetHDesc: "Gusseted Bag - Пакеты с боковыми фальцами. Больший объем и профессиональный вид.",
            envelope: "Конвертная упаковка (X-Fold)", envelopeDesc: "Overwrapping - Упаковка типа конверт для премиального вида. Для вафель, печенья, шоколада.",
            pillowV: "Подушечная упаковка (вертикальная)", pillowVDesc: "Vertical Pillow Bag - Вертикальная упаковка для гранул, порошков и сыпучих продуктов.",
            gussetV: "Упаковка с фальцами (вертикальная)", gussetVDesc: "Vertical Gusseted - Вертикальные пакеты с фальцами. Идеально для кофе, орехов.",
            quadro: "Quadro / Плоское дно", quadroDesc: "Пакеты с плоским дном. Премиальный вид, стоят на полках. Для кофе, орехов.",
            doypack: "Дойпак / Stand-up Pouch", doypackDesc: "Стоячие пакеты. Современный вид, вариант с молнией. Для снеков, орехов.",
            stick: "Стик-пак", stickDesc: "Длинные узкие стик-пакеты. Индивидуальные порции для сахара, кофе, чая, лекарств.",
            sachet: "Саше", sachetDesc: "Маленькие одноразовые пакетики. Для кетчупа, майонеза, шампуня, соусов.",
            viewMachines: "Смотреть машины",
            ctaTitle: "Какой тип упаковки вам подходит?", ctaDesc: "Наши специалисты помогут определить идеальный тип упаковки для вашего продукта", ctaBtn: "Консультация по WhatsApp",
            seoTitle: "Машины по типу упаковки", seoP1: "В упаковочной промышленности используются различные форматы для разных типов продуктов. Girişim Makina предлагает машины для всех распространенных типов.", seoP2: "Каждый тип упаковки имеет свои преимущества в зависимости от характеристик продукта и требований к сроку хранения."
        },
        byProduct: {
            heroTitle: "По вашему продукту", heroDesc: "Выберите продукт для упаковки, мы порекомендуем лучшую машину",
            sectionTitle: "Выберите категорию продукта", sectionDesc: "Нажмите на продукт для просмотра подходящих машин",
            catDrinks: "Напитки и кофе", catSugar: "Сахар и порошковые продукты", catBiscuit: "Печенье и выпечка", catSnack: "Орехи и снеки", catGrain: "Зерновые и бобовые", catSpice: "Специи", catDairy: "Молочные продукты", catOther: "Другие продукты",
            groundCoffee: "Молотый кофе", coffeeBeans: "Кофе в зернах", instantCoffee: "Растворимый кофе", tea: "Чай",
            powderedSugar: "Сахарная пудра", granulatedSugar: "Сахар-песок", sugarSticks: "Сахар в стиках", milkPowder: "Сухое молоко", detergent: "Моющее средство",
            biscuit: "Печенье", wafer: "Вафли", cake: "Торт", bakeryOther: "Другая выпечка",
            chips: "Чипсы и снеки", nuts: "Орехи", driedFruits: "Сухофрукты и овощи", cerealBar: "Зерновой батончик",
            legumes: "Бобовые", pasta: "Макароны", rice: "Рис",
            groundSpices: "Молотые специи", wholeSpices: "Цельные специи",
            gratedCheese: "Тертый сыр", butter: "Масло",
            frozen: "Замороженные продукты", petFood: "Корм для животных", wrappedCandy: "Конфеты в обертке", soap: "Мыло",
            ctaTitle: "Вашего продукта нет в списке?", ctaDesc: "Наши специалисты предложат решения для любого типа продукта", ctaBtn: "Консультация по WhatsApp", getQuote: "Запросить цену",
            seoTitle: "Упаковочные решения по продукту", seoP1: "Girişim Makina предлагает специализированные решения для различных групп продуктов в пищевой промышленности.", seoP2: "Каждая группа продуктов имеет уникальные требования к упаковке."
        },
        hr: {
            heroTitle: "Кадры", heroDesc: "Присоединяйтесь к семье Girişim Makina. Откройте карьерные возможности в сфере пищевого оборудования.",
            whyTitle: "Почему Girişim Makina?", whyP1: "С 1995 года мы являемся ведущим турецким производителем оборудования для обработки и упаковки пищевых продуктов. Экспорт в более чем 57 стран.", whyP2: "С нашей постоянно растущей командой мы предлагаем инновационную и динамичную рабочую среду.",
            benefit1: "Постоянное обучение", benefit2: "Карьерный рост", benefit3: "Международная среда", benefit4: "Динамичная команда", benefit5: "Социальные льготы", benefit6: "Премии за достижения",
            formTitle: "Форма заявки на работу", labelName: "Полное имя *", labelEmail: "Эл. почта *", labelPhone: "Телефон *", labelPosition: "Желаемая должность *", labelExperience: "Стаж работы", labelCV: "Загрузить резюме (PDF, DOC, DOCX)", labelNotes: "Дополнительные заметки",
            selectPosition: "Выберите должность", selectExperience: "Выберите", fileUploadText: "Перетащите или нажмите для загрузки резюме", submitBtn: "Отправить заявку",
            phName: "Ваше полное имя", phEmail: "пример@email.com", phPhone: "+90 5XX XXX XX XX", phNotes: "Расскажите кратко о себе..."
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
            blog: "المدونة",
            getQuote: "طلب عرض سعر",
            logoSub: "آلات التغليف"
        },
        search: {
            placeholder: "ابحث عن الآلات أو المنتجات...",
            noResults: "لم يتم العثور على نتائج"
        },
        sideContact: {
            toggle: "اتصل بنا",
            title: "اتصال سريع",
            phone: "هاتف",
            email: "البريد الإلكتروني",
            export: "تصدير"
        },
        blog: {
            title: "المدونة",
            subtitle: "أخبار الصناعة وعروض المنتجات وإعلانات المعارض",
            all: "الكل",
            general: "عام",
            products: "المنتجات",
            industry: "الصناعة",
            fairs: "المعارض",
            noPosts: "لا توجد مقالات بعد",
            noPostsDesc: "لا توجد مقالات في هذه الفئة بعد.",
            readMore: "اقرأ المزيد",
            newsletterTitle: "اشترك في نشرتنا الإخبارية",
            newsletterDesc: "اشترك في نشرتنا الإخبارية للحصول على أخبار المنتجات والمعارض.",
            subscribe: "اشترك"
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
            cookieCapping: "تغطية البسكويت (Chocopie)",
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
            service: "خدمة ما بعد البيع",
            about: "من نحن",
            whyUs: "لماذا جيريشيم ماكينا؟",
            certificates: "شهاداتنا",
            hr: "الموارد البشرية",
            cerealBar: "خطوط إنتاج ألواح الحبوب",
            byType: "حسب نوع التغليف",
            byProduct: "حسب منتجكم"
        },
        megaMenu: {
            productionLines: "خطوط الإنتاج",
            biscuitChocolate: "البسكويت والشوكولاتة",
            horizontalPack: "التغليف الأفقي",
            verticalPack: "التغليف العمودي",
            fillingAux: "التعبئة والمعدات المساعدة"
        },
        bannerSlides: {
            s1: { tag: "إنتاج تسليم مفتاح", title: "ويفر وألواح الحبوب<br>خطوط الإنتاج", desc: "خطوط إنتاج كاملة من تحضير العجين إلى التعبئة. تصدير إلى 57 دولة، أكثر من 30 عامًا من الخبرة.", btn1: "طلب عرض سعر", btn2: "شاهد الفيديو" },
            s2: { tag: "حلول التعبئة", title: "آلات تعبئة<br>فلوباك", desc: "حلول تعبئة أفقية للبسكويت والويفر والشوكولاتة والخبز والصابون.", btn1: "عرض النماذج", btn2: "واتساب" },
            s3: { tag: "معالجة الشوكولاتة", title: "تغليف الشوكولاتة<br>وأنظمة التبريد", desc: "آلات إنروبينج وأنفاق التبريد وخزانات تحضير الشوكولاتة.", btn1: "تفاصيل", btn2: "طلب عرض سعر" },
            s4: { tag: "معالجة البسكويت", title: "كريمة البسكويت<br>وآلات الساندويتش", desc: "كريمة البسكويت بأشكال وأحجام مختلفة. سعة عالية، جرعات دقيقة.", btn1: "تفاصيل", btn2: "طلب عرض سعر" },
            s5: { tag: "تقنيات التعبئة", title: "أوفرراپینگ و<br>آلات ثيرموفورم", desc: "آلات تغليف المغلفات والثيرموفورم والتعبئة العمودية. تنسيقات تعبئة مخصصة.", btn1: "أوفرراپینگ", btn2: "ثيرموفورم" },
            s6: { tag: "خطوط إنتاج الألواح", title: "ألواح الحبوب و<br>ألواح البروتين", desc: "إنتاج الجرانولا والموسلي والبروتين وألواح الطاقة. الخلط والتشكيل والتبريد والتعبئة.", btn1: "ألواح الحبوب", btn2: "ألواح البروتين" },
            s7: { tag: "ثقة عالمية", title: "تصدير إلى 57 دولة<br>أكثر من 30 عامًا", desc: "12,000 م² مساحة إنتاج، 3 منشآت إنتاج. الشركة الرائدة في تركيا لتصنيع آلات الغذاء.", btn1: "من نحن", btn2: "تحميل الكتالوج" }
        },
        hero: {
            title1: "الويفر وألواح الحبوب",
            title2: "خطوط الإنتاج",
            title3: "وآلات التغليف",
            description: "نصنع آلات معالجة وتغليف الأغذية منذ عام 1995. كشركة رائدة في تركيا، نصدر إلى 57 دولة حول العالم.",
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
            p1: "شركة جيريشيم ماكينا هي الشركة الرائدة في تركيا في مجال معالجة وتغليف الأغذية منذ عام 1995. مع 3 منشآت إنتاج و12,000 متر مربع من المساحة المغطاة، نقوم بتصنيع خطوط إنتاج الويفر وآلات ألواح الحبوب وأنظمة تغليف الشوكولاتة وآلات التغليف.",
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
            about: "تصنيع آلات معالجة وتغليف الأغذية منذ 1995. تصدير إلى أكثر من 57 دولة.",
            quickLinks: "روابط سريعة",
            contact: "اتصل بنا",
            desc: "نصنع آلات معالجة وتغليف الأغذية منذ عام 1995. تصدير لـ 57+ دولة، 12,000 م² منشأة إنتاج. المصنع التركي الرائد في خطوط إنتاج الويفر وألواح الحبوب وآلات التغليف.",
            production: "خطوط الإنتاج",
            packagingTitle: "التغليف",
            corporate: "الشركة",
            aboutUs: "من نحن",
            catalogs: "الكتالوجات",
            videosTitle: "الفيديوهات",
            contactTitle: "اتصل بنا",
            copyright: "جيريشيم ماكينا تركيا. جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            kvkk: "KVKK",
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
        },
        inline: {
            hello: "مرحباً",
            interestedProduct: "أنا مهتم بـ",
            message: "رسالتك",
            contactInfo: "معلومات الاتصال الخاصة بك",
            addFile: "إضافة صورة/ملف (اختياري)",
            errorRetry: "حدث خطأ. يرجى المحاولة مرة أخرى.",
            connectionError: "خطأ في الاتصال. يرجى التحقق من اتصال الإنترنت.",
            catalogThanks: "شكراً! يتم فتح الكتالوجات...",
            sending: "جاري الإرسال..."
        },
        byType: {
            heroTitle: "حسب نوع العبوة",
            heroDesc: "اختر نوع العبوة المناسب، وسنوصي بأفضل آلة لك",
            sectionTitle: "اختر نوع العبوة",
            sectionDesc: "استكشف حلولنا المخصصة لكل نوع عبوة",
            pillowH: "كيس وسادة (أفقي)", pillowHDesc: "Pillow Bag - النوع الأكثر شيوعاً. مثالي للبسكويت والشوكولاتة والصابون والمزيد.",
            gussetH: "كيس بطيات (أفقي)", gussetHDesc: "Gusseted Bag - عبوات بطيات جانبية. حجم أكبر ومظهر احترافي.",
            envelope: "تغليف ظرف (X-Fold)", envelopeDesc: "Overwrapping - تغليف نوع الظرف للمظهر الفاخر. للويفر والبسكويت والشوكولاتة.",
            pillowV: "كيس وسادة (عمودي)", pillowVDesc: "Vertical Pillow Bag - تغليف عمودي للحبيبات والمسحوق والمنتجات الجسيمية.",
            gussetV: "كيس بطيات (عمودي)", gussetVDesc: "Vertical Gusseted - عبوات عمودية بطيات. مثالية للقهوة والمكسرات.",
            quadro: "كوادرو / قاع مسطح", quadroDesc: "عبوات بقاع مسطح. مظهر فاخر، تقف على الرفوف. للقهوة والمكسرات.",
            doypack: "دوي باك / كيس قائم", doypackDesc: "أكياس تقف بذاتها. مظهر عصري، خيار بسحاب. للوجبات الخفيفة والمكسرات.",
            stick: "ستيك باك", stickDesc: "عبوات ستيك طويلة وضيقة. حصص فردية للسكر والقهوة والشاي والأدوية.",
            sachet: "ساشيه / كيس صغير", sachetDesc: "أكياس صغيرة للاستخدام الواحد. للكاتشب والمايونيز والشامبو والصلصات.",
            viewMachines: "عرض الآلات",
            ctaTitle: "أي نوع عبوة يناسبك؟", ctaDesc: "خبراؤنا سيساعدونك في تحديد نوع العبوة المثالي لمنتجك", ctaBtn: "استشر عبر واتساب",
            seoTitle: "آلات حسب نوع العبوة", seoP1: "في صناعة التغليف، تستخدم أشكال مختلفة لمنتجات مختلفة. في Girişim Makina نقدم آلات لجميع الأنواع الشائعة.", seoP2: "كل نوع عبوة يقدم مزايا حسب خصائص المنتج ومتطلبات مدة الصلاحية."
        },
        byProduct: {
            heroTitle: "حسب منتجك", heroDesc: "اختر المنتج الذي تريد تعبئته، وسنوصي بأفضل آلة",
            sectionTitle: "اختر فئة المنتج", sectionDesc: "انقر على المنتج الذي تريد تعبئته لعرض الآلات المناسبة",
            catDrinks: "مشروبات وقهوة", catSugar: "سكر ومنتجات مسحوقة", catBiscuit: "بسكويت ومخبوزات", catSnack: "مكسرات ووجبات خفيفة", catGrain: "حبوب وبقوليات", catSpice: "بهارات", catDairy: "منتجات ألبان", catOther: "منتجات أخرى",
            groundCoffee: "قهوة مطحونة", coffeeBeans: "حبوب قهوة", instantCoffee: "قهوة فورية", tea: "شاي",
            powderedSugar: "سكر بودرة", granulatedSugar: "سكر حبيبي", sugarSticks: "أصابع سكر", milkPowder: "حليب مجفف", detergent: "منظف",
            biscuit: "بسكويت", wafer: "ويفر", cake: "كيك", bakeryOther: "منتجات مخبوزات أخرى",
            chips: "شيبس ووجبات خفيفة", nuts: "مكسرات", driedFruits: "فواكه وخضروات مجففة", cerealBar: "بار الحبوب",
            legumes: "بقوليات", pasta: "معكرونة", rice: "أرز",
            groundSpices: "بهارات مطحونة", wholeSpices: "بهارات حبة",
            gratedCheese: "جبنة مبشورة", butter: "زبدة",
            frozen: "منتجات مجمدة", petFood: "طعام حيوانات", wrappedCandy: "حلوى ملفوفة", soap: "صابون",
            ctaTitle: "منتجك غير موجود في القائمة؟", ctaDesc: "خبراؤنا يمكنهم تقديم حلول تغليف لأي نوع من المنتجات", ctaBtn: "استشر عبر واتساب", getQuote: "طلب عرض سعر",
            seoTitle: "حلول التغليف حسب المنتج", seoP1: "تقدم Girişim Makina حلول تغليف متخصصة لمختلف مجموعات المنتجات في الصناعة الغذائية.", seoP2: "كل مجموعة منتجات لها متطلبات تغليف فريدة."
        },
        hr: {
            heroTitle: "الموارد البشرية", heroDesc: "انضم إلى عائلة Girişim Makina. اكتشف فرص العمل في قطاع آلات الأغذية.",
            whyTitle: "لماذا Girişim Makina؟", whyP1: "نحن الشركة الرائدة في تركيا في تصنيع آلات معالجة وتغليف الأغذية منذ 1995. نصدر إلى أكثر من 57 دولة.", whyP2: "مع فريقنا المتنامي باستمرار، نقدم بيئة عمل مبتكرة وديناميكية.",
            benefit1: "تدريب مستمر", benefit2: "تطوير مهني", benefit3: "بيئة دولية", benefit4: "فريق ديناميكي", benefit5: "مزايا اجتماعية", benefit6: "مكافآت الإنجاز",
            formTitle: "نموذج طلب التوظيف", labelName: "الاسم الكامل *", labelEmail: "البريد الإلكتروني *", labelPhone: "الهاتف *", labelPosition: "الوظيفة المطلوبة *", labelExperience: "سنوات الخبرة", labelCV: "تحميل السيرة الذاتية (PDF, DOC, DOCX)", labelNotes: "ملاحظات إضافية",
            selectPosition: "اختر الوظيفة", selectExperience: "اختر", fileUploadText: "اسحب أو انقر لتحميل سيرتك الذاتية", submitBtn: "إرسال الطلب",
            phName: "اسمك الكامل", phEmail: "مثال@email.com", phPhone: "+90 5XX XXX XX XX", phNotes: "يمكنك مشاركة معلومات موجزة عن نفسك..."
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
            getQuote: "DEVIS",
            logoSub: "MACHINES D'EMBALLAGE"
        },
        search: {
            placeholder: "Rechercher des machines ou produits...",
            noResults: "Aucun résultat trouvé"
        },
        sideContact: {
            toggle: "Contact",
            title: "Contact rapide",
            phone: "Téléphone",
            email: "E-mail",
            export: "Exportation"
        },
        blog: {
            title: "Blog",
            subtitle: "Actualités du secteur, présentations de produits et annonces de salons",
            all: "Tous",
            general: "Général",
            products: "Produits",
            industry: "Industrie",
            fairs: "Salons",
            noPosts: "Aucun article pour le moment",
            noPostsDesc: "Il n'y a pas encore d'articles dans cette catégorie.",
            readMore: "Lire la suite",
            newsletterTitle: "Abonnez-vous à notre newsletter",
            newsletterDesc: "Abonnez-vous pour recevoir les nouveautés produits et les annonces de salons.",
            subscribe: "S'abonner"
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
            cookieCapping: "Nappage de biscuits (Chocopie)",
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
            service: "Service Après-Vente",
            about: "À propos",
            whyUs: "Pourquoi Girişim Makina ?",
            certificates: "Nos certificats",
            hr: "Ressources humaines",
            cerealBar: "Lignes de barres céréalières",
            byType: "Par type d'emballage",
            byProduct: "Par votre produit"
        },
        megaMenu: {
            productionLines: "Lignes de Production",
            biscuitChocolate: "Biscuits & Chocolat",
            horizontalPack: "Emballage Horizontal",
            verticalPack: "Emballage Vertical",
            fillingAux: "Remplissage & Auxiliaire"
        },
        bannerSlides: {
            s1: { tag: "Production clé en main", title: "Gaufrettes & Barres de céréales<br>Lignes de production", desc: "Lignes de production complètes de la préparation de la pâte à l'emballage. Export vers 57 pays, plus de 30 ans d'expérience.", btn1: "Demander un devis", btn2: "Voir les vidéos" },
            s2: { tag: "Solutions d'emballage", title: "Machines d'emballage<br>Flowpack", desc: "Solutions d'emballage horizontal pour biscuits, gaufrettes, chocolat, pain et savon.", btn1: "Voir les modèles", btn2: "WhatsApp" },
            s3: { tag: "Traitement du chocolat", title: "Enrobage chocolat<br>& Systèmes de refroidissement", desc: "Machines d'enrobage, tunnels de refroidissement et cuves de préparation du chocolat.", btn1: "En savoir plus", btn2: "Demander un devis" },
            s4: { tag: "Traitement des biscuits", title: "Crémage de biscuits<br>& Machines sandwich", desc: "Crémage de biscuits en différentes formes et tailles. Haute capacité, dosage précis.", btn1: "En savoir plus", btn2: "Demander un devis" },
            s5: { tag: "Technologies d'emballage", title: "Overwrapping &<br>Machines thermoform", desc: "Machines d'emballage enveloppe, thermoform et remplissage vertical. Formats personnalisés.", btn1: "Overwrapping", btn2: "Thermoform" },
            s6: { tag: "Lignes de barres", title: "Barres de céréales &<br>Barres protéinées", desc: "Production de granola, muesli, barres protéinées et énergétiques. Mélange, formage, refroidissement et emballage.", btn1: "Cereal Bar", btn2: "Protein Bar" },
            s7: { tag: "Confiance mondiale", title: "Export vers 57 pays<br>30+ ans d'expérience", desc: "12 000 m² de production, 3 installations. Le leader turc des machines alimentaires.", btn1: "À propos", btn2: "Télécharger le catalogue" }
        },
        hero: {
            title1: "GAUFRETTES & BARRES DE CÉRÉALES",
            title2: "LIGNES DE PRODUCTION",
            title3: "& MACHINES D'EMBALLAGE",
            description: "Fabricant de machines de transformation et d'emballage alimentaire depuis 1995. Leader en Turquie, nous exportons vers 57 pays dans le monde.",
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
            p1: "Girisim Makina est le leader turc de la transformation et de l'emballage alimentaire depuis 1995. Avec 3 installations de production et 12 000 m² de surface couverte, nous fabriquons des lignes de production de gaufrettes, des machines à barres de céréales, des systèmes d'enrobage chocolat et des machines d'emballage.",
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
            about: "Fabrication de machines de traitement et d'emballage alimentaire depuis 1995. Export vers 57+ pays.",
            quickLinks: "Liens rapides",
            contact: "Contact",
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
            kvkk: "KVKK",
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
        },
        inline: {
            hello: "Bonjour",
            interestedProduct: "Je suis intéressé par",
            message: "Votre message",
            contactInfo: "Vos coordonnées",
            addFile: "Ajouter image/fichier (optionnel)",
            errorRetry: "Une erreur est survenue. Veuillez réessayer.",
            connectionError: "Erreur de connexion. Vérifiez votre connexion internet.",
            catalogThanks: "Merci ! Les catalogues s'ouvrent...",
            sending: "Envoi en cours..."
        },
        byType: {
            heroTitle: "Par Type d'Emballage",
            heroDesc: "Choisissez le type d'emballage adapté, nous vous recommanderons la meilleure machine",
            sectionTitle: "Choisissez Votre Type d'Emballage",
            sectionDesc: "Explorez nos solutions personnalisées pour chaque type d'emballage",
            pillowH: "Sachet Coussin (Horizontal)", pillowHDesc: "Pillow Bag - Le type le plus courant. Idéal pour biscuits, chocolat, savon et plus.",
            gussetH: "Sachet à Soufflets (Horizontal)", gussetHDesc: "Gusseted Bag - Sachets à soufflets latéraux. Plus de volume et apparence professionnelle.",
            envelope: "Emballage Enveloppe (X-Fold)", envelopeDesc: "Overwrapping - Emballage type enveloppe pour apparence premium. Pour gaufrettes, biscuits, chocolat.",
            pillowV: "Sachet Coussin (Vertical)", pillowVDesc: "Vertical Pillow Bag - Emballage vertical pour granulés, poudre et produits en particules.",
            gussetV: "Sachet à Soufflets (Vertical)", gussetVDesc: "Vertical Gusseted - Sachets verticaux à soufflets. Idéal pour café, fruits secs.",
            quadro: "Quadro / Fond Plat", quadroDesc: "Sachets à fond plat. Apparence premium, tiennent debout. Pour café, fruits secs.",
            doypack: "Doypack / Stand-up Pouch", doypackDesc: "Sachets qui tiennent debout. Apparence moderne, option zip. Pour snacks, fruits secs.",
            stick: "Stick Pack", stickDesc: "Sachets stick longs et étroits. Portions individuelles pour sucre, café, thé, médicaments.",
            sachet: "Sachet", sachetDesc: "Petits sachets à usage unique. Pour ketchup, mayonnaise, shampoing, sauces.",
            viewMachines: "Voir les Machines",
            ctaTitle: "Quel Type d'Emballage Vous Convient ?", ctaDesc: "Nos experts vous aideront à déterminer le type idéal pour votre produit", ctaBtn: "Consulter par WhatsApp",
            seoTitle: "Machines par Type d'Emballage", seoP1: "Dans l'industrie de l'emballage, différents formats sont utilisés. Chez Girişim Makina, nous proposons des machines pour tous les types courants.", seoP2: "Chaque type d'emballage offre des avantages selon les caractéristiques du produit et les exigences de durée de conservation."
        },
        byProduct: {
            heroTitle: "Par Votre Produit", heroDesc: "Sélectionnez le produit à emballer, nous vous recommanderons la meilleure machine",
            sectionTitle: "Sélectionnez la Catégorie de Produit", sectionDesc: "Cliquez sur le produit à emballer pour voir les machines adaptées",
            catDrinks: "Boissons et Café", catSugar: "Sucre et Produits en Poudre", catBiscuit: "Biscuits et Boulangerie", catSnack: "Fruits Secs et Snacks", catGrain: "Céréales et Légumineuses", catSpice: "Épices", catDairy: "Produits Laitiers", catOther: "Autres Produits",
            groundCoffee: "Café Moulu", coffeeBeans: "Grains de Café", instantCoffee: "Café Instantané", tea: "Thé",
            powderedSugar: "Sucre en Poudre", granulatedSugar: "Sucre Cristallisé", sugarSticks: "Sticks de Sucre", milkPowder: "Lait en Poudre", detergent: "Détergent",
            biscuit: "Biscuits", wafer: "Gaufrettes", cake: "Gâteau", bakeryOther: "Autres Produits de Boulangerie",
            chips: "Chips et Snacks", nuts: "Fruits Secs", driedFruits: "Fruits et Légumes Séchés", cerealBar: "Barre de Céréales",
            legumes: "Légumineuses", pasta: "Pâtes", rice: "Riz",
            groundSpices: "Épices Moulues", wholeSpices: "Épices Entières",
            gratedCheese: "Fromage Râpé", butter: "Beurre",
            frozen: "Produits Surgelés", petFood: "Nourriture pour Animaux", wrappedCandy: "Bonbons Emballés", soap: "Savon",
            ctaTitle: "Votre Produit N'est Pas dans la Liste ?", ctaDesc: "Nos experts peuvent proposer des solutions pour tout type de produit", ctaBtn: "Consulter par WhatsApp", getQuote: "Demander un Devis",
            seoTitle: "Solutions d'Emballage par Produit", seoP1: "Girişim Makina propose des solutions spécialisées pour différents groupes de produits dans l'industrie alimentaire.", seoP2: "Chaque groupe de produits a des exigences d'emballage uniques."
        },
        hr: {
            heroTitle: "Ressources Humaines", heroDesc: "Rejoignez la famille Girişim Makina. Découvrez les opportunités de carrière dans le secteur des machines alimentaires.",
            whyTitle: "Pourquoi Girişim Makina ?", whyP1: "Nous sommes le fabricant leader en Turquie de machines de transformation et d'emballage alimentaire depuis 1995. Nous exportons dans plus de 57 pays.", whyP2: "Avec notre équipe en constante croissance, nous offrons un environnement de travail innovant et dynamique.",
            benefit1: "Formation Continue", benefit2: "Développement de Carrière", benefit3: "Environnement International", benefit4: "Équipe Dynamique", benefit5: "Avantages Sociaux", benefit6: "Primes de Performance",
            formTitle: "Formulaire de Candidature", labelName: "Nom Complet *", labelEmail: "E-mail *", labelPhone: "Téléphone *", labelPosition: "Poste Souhaité *", labelExperience: "Années d'Expérience", labelCV: "Télécharger CV (PDF, DOC, DOCX)", labelNotes: "Notes Supplémentaires",
            selectPosition: "Sélectionnez le Poste", selectExperience: "Sélectionnez", fileUploadText: "Glissez ou cliquez pour télécharger votre CV", submitBtn: "Envoyer la Candidature",
            phName: "Votre nom complet", phEmail: "exemple@email.com", phPhone: "+90 5XX XXX XX XX", phNotes: "Partagez brièvement des informations sur vous..."
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
            getQuote: "ORÇAMENTO",
            logoSub: "MÁQUINAS DE EMBALAGEM"
        },
        search: {
            placeholder: "Pesquisar máquinas ou produtos...",
            noResults: "Nenhum resultado encontrado"
        },
        sideContact: {
            toggle: "Contato",
            title: "Contato rápido",
            phone: "Telefone",
            email: "E-mail",
            export: "Exportação"
        },
        blog: {
            title: "Blog",
            subtitle: "Notícias do setor, apresentações de produtos e anúncios de feiras",
            all: "Todos",
            general: "Geral",
            products: "Produtos",
            industry: "Indústria",
            fairs: "Feiras",
            noPosts: "Ainda não há artigos",
            noPostsDesc: "Ainda não há artigos nesta categoria.",
            readMore: "Leia mais",
            newsletterTitle: "Assine nossa newsletter",
            newsletterDesc: "Assine nossa newsletter para novidades de produtos e anúncios de feiras.",
            subscribe: "Assinar"
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
            cookieCapping: "Cobertura de biscoito (Chocopie)",
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
            service: "Serviço Pós-Venda",
            about: "Sobre nós",
            whyUs: "Por que Girişim Makina?",
            certificates: "Nossos certificados",
            hr: "Recursos humanos",
            cerealBar: "Linhas de barras de cereais",
            byType: "Por tipo de embalagem",
            byProduct: "Por seu produto"
        },
        megaMenu: {
            productionLines: "Linhas de Produção",
            biscuitChocolate: "Biscoito & Chocolate",
            horizontalPack: "Embalagem Horizontal",
            verticalPack: "Embalagem Vertical",
            fillingAux: "Enchimento & Auxiliar"
        },
        bannerSlides: {
            s1: { tag: "Produção chave na mão", title: "Wafer e Barras de cereais<br>Linhas de produção", desc: "Linhas de produção completas da preparação da massa à embalagem. Exportação para 57 países, mais de 30 anos de experiência.", btn1: "Solicitar orçamento", btn2: "Ver vídeos" },
            s2: { tag: "Soluções de embalagem", title: "Máquinas de embalagem<br>Flowpack", desc: "Soluções de embalagem horizontal para biscoitos, wafers, chocolate, pão e sabão.", btn1: "Ver modelos", btn2: "WhatsApp" },
            s3: { tag: "Processamento de chocolate", title: "Cobertura de chocolate<br>e Sistemas de resfriamento", desc: "Máquinas de enrobing, túneis de resfriamento e tanques de preparação de chocolate.", btn1: "Saiba mais", btn2: "Solicitar orçamento" },
            s4: { tag: "Processamento de biscoitos", title: "Recheio de biscoitos<br>e Máquinas sanduíche", desc: "Recheio de biscoitos em várias formas e tamanhos. Alta capacidade, dosagem precisa.", btn1: "Saiba mais", btn2: "Solicitar orçamento" },
            s5: { tag: "Tecnologias de embalagem", title: "Overwrapping &<br>Máquinas thermoform", desc: "Máquinas de embalagem envelope, thermoform e enchimento vertical. Formatos personalizados.", btn1: "Overwrapping", btn2: "Thermoform" },
            s6: { tag: "Linhas de barras", title: "Barras de cereais &<br>Barras de proteína", desc: "Produção de granola, muesli, barras de proteína e energia. Mistura, formação, resfriamento e embalagem.", btn1: "Cereal Bar", btn2: "Protein Bar" },
            s7: { tag: "Confiança global", title: "Exportação para 57 países<br>30+ anos de experiência", desc: "12.000 m² de área de produção, 3 instalações. Líder turco em máquinas alimentares.", btn1: "Sobre nós", btn2: "Baixar catálogo" }
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
            about: "Fabricação de máquinas de processamento e embalagem de alimentos desde 1995. Exportação para mais de 57 países.",
            quickLinks: "Links rápidos",
            contact: "Contato",
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
            kvkk: "KVKK",
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
        },
        inline: {
            hello: "Olá",
            interestedProduct: "Estou interessado em",
            message: "Sua mensagem",
            contactInfo: "Suas informações de contato",
            addFile: "Adicionar imagem/arquivo (opcional)",
            errorRetry: "Ocorreu um erro. Por favor, tente novamente.",
            connectionError: "Erro de conexão. Verifique sua conexão com a internet.",
            catalogThanks: "Obrigado! Os catálogos estão abrindo...",
            sending: "Enviando..."
        },
        byType: {
            heroTitle: "Por Tipo de Embalagem",
            heroDesc: "Escolha o tipo de embalagem adequado, recomendaremos a melhor máquina",
            sectionTitle: "Escolha Seu Tipo de Embalagem",
            sectionDesc: "Explore nossas soluções personalizadas para cada tipo de embalagem",
            pillowH: "Embalagem Travesseiro (Horizontal)", pillowHDesc: "Pillow Bag - O tipo mais comum. Ideal para biscoitos, chocolate, sabão e mais.",
            gussetH: "Embalagem com Fole (Horizontal)", gussetHDesc: "Gusseted Bag - Pacotes com fole lateral. Mais volume e aparência profissional.",
            envelope: "Embalagem Envelope (X-Fold)", envelopeDesc: "Overwrapping - Embalagem tipo envelope para aparência premium. Para wafer, biscoitos, chocolate.",
            pillowV: "Embalagem Travesseiro (Vertical)", pillowVDesc: "Vertical Pillow Bag - Embalagem vertical para grânulos, pó e produtos em partículas.",
            gussetV: "Embalagem com Fole (Vertical)", gussetVDesc: "Vertical Gusseted - Pacotes verticais com fole. Ideal para café, castanhas.",
            quadro: "Quadro / Fundo Plano", quadroDesc: "Pacotes de fundo plano. Aparência premium, ficam em pé nas prateleiras. Para café, castanhas.",
            doypack: "Doypack / Stand-up Pouch", doypackDesc: "Sacos que ficam em pé. Aparência moderna, opção com zíper. Para snacks, castanhas.",
            stick: "Stick Pack", stickDesc: "Pacotes stick longos e estreitos. Porções individuais para açúcar, café, chá, medicamentos.",
            sachet: "Sachet / Sachê", sachetDesc: "Pequenos sachês de uso único. Para ketchup, maionese, shampoo, molhos.",
            viewMachines: "Ver Máquinas",
            ctaTitle: "Qual Tipo de Embalagem é Adequado?", ctaDesc: "Nossos especialistas ajudarão a determinar o tipo ideal para seu produto", ctaBtn: "Consultar por WhatsApp",
            seoTitle: "Máquinas por Tipo de Embalagem", seoP1: "Na indústria de embalagens, vários formatos são usados para diferentes tipos de produtos. Na Girişim Makina oferecemos máquinas para todos os tipos comuns.", seoP2: "Cada tipo de embalagem oferece vantagens conforme as características do produto e requisitos de vida útil."
        },
        byProduct: {
            heroTitle: "Por Seu Produto", heroDesc: "Selecione o produto que deseja embalar, recomendaremos a melhor máquina",
            sectionTitle: "Selecione Categoria de Produto", sectionDesc: "Clique no produto que deseja embalar para ver as máquinas adequadas",
            catDrinks: "Bebidas e Café", catSugar: "Açúcar e Produtos em Pó", catBiscuit: "Biscoitos e Panificação", catSnack: "Castanhas e Snacks", catGrain: "Cereais e Leguminosas", catSpice: "Temperos", catDairy: "Laticínios", catOther: "Outros Produtos",
            groundCoffee: "Café Moído", coffeeBeans: "Grãos de Café", instantCoffee: "Café Instantâneo", tea: "Chá",
            powderedSugar: "Açúcar em Pó", granulatedSugar: "Açúcar Cristal", sugarSticks: "Sticks de Açúcar", milkPowder: "Leite em Pó", detergent: "Detergente",
            biscuit: "Biscoitos", wafer: "Wafer", cake: "Bolo", bakeryOther: "Outros Produtos de Panificação",
            chips: "Chips e Snacks", nuts: "Castanhas", driedFruits: "Frutas e Legumes Secos", cerealBar: "Barra de Cereal",
            legumes: "Leguminosas", pasta: "Massa", rice: "Arroz",
            groundSpices: "Temperos Moídos", wholeSpices: "Temperos em Grão",
            gratedCheese: "Queijo Ralado", butter: "Manteiga",
            frozen: "Produtos Congelados", petFood: "Ração Animal", wrappedCandy: "Balas Embaladas", soap: "Sabão",
            ctaTitle: "Seu Produto Não Está na Lista?", ctaDesc: "Nossos especialistas podem oferecer soluções para qualquer tipo de produto", ctaBtn: "Consultar por WhatsApp", getQuote: "Solicitar Orçamento",
            seoTitle: "Soluções de Embalagem por Produto", seoP1: "Girişim Makina oferece soluções especializadas para diferentes grupos de produtos na indústria alimentar.", seoP2: "Cada grupo de produtos tem requisitos únicos de embalagem."
        },
        hr: {
            heroTitle: "Recursos Humanos", heroDesc: "Junte-se à família Girişim Makina. Descubra oportunidades de carreira no setor de máquinas alimentares.",
            whyTitle: "Por que Girişim Makina?", whyP1: "Somos o fabricante líder da Turquia em máquinas de processamento e embalagem de alimentos desde 1995. Exportamos para mais de 57 países.", whyP2: "Com nossa equipe em constante crescimento, oferecemos um ambiente de trabalho inovador e dinâmico.",
            benefit1: "Formação Contínua", benefit2: "Desenvolvimento Profissional", benefit3: "Ambiente Internacional", benefit4: "Equipe Dinâmica", benefit5: "Benefícios Sociais", benefit6: "Bônus por Conquistas",
            formTitle: "Formulário de Candidatura", labelName: "Nome Completo *", labelEmail: "E-mail *", labelPhone: "Telefone *", labelPosition: "Cargo Desejado *", labelExperience: "Anos de Experiência", labelCV: "Enviar CV (PDF, DOC, DOCX)", labelNotes: "Notas Adicionais",
            selectPosition: "Selecione Cargo", selectExperience: "Selecione", fileUploadText: "Arraste ou clique para enviar seu CV", submitBtn: "Enviar Candidatura",
            phName: "Seu nome completo", phEmail: "exemplo@email.com", phPhone: "+90 5XX XXX XX XX", phNotes: "Compartilhe informações breves sobre você..."
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
            getQuote: "COTIZACIÓN",
            logoSub: "MÁQUINAS DE EMBALAJE"
        },
        search: {
            placeholder: "Buscar máquinas o productos...",
            noResults: "No se encontraron resultados"
        },
        sideContact: {
            toggle: "Contacto",
            title: "Contacto rápido",
            phone: "Teléfono",
            email: "Correo electrónico",
            export: "Exportación"
        },
        blog: {
            title: "Blog",
            subtitle: "Noticias del sector, presentaciones de productos y anuncios de ferias",
            all: "Todos",
            general: "General",
            products: "Productos",
            industry: "Industria",
            fairs: "Ferias",
            noPosts: "Aún no hay artículos",
            noPostsDesc: "Aún no hay artículos en esta categoría.",
            readMore: "Leer más",
            newsletterTitle: "Suscríbase a nuestro boletín",
            newsletterDesc: "Suscríbase para recibir novedades de productos y anuncios de ferias.",
            subscribe: "Suscribirse"
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
            cookieCapping: "Cobertura de galletas (Chocopie)",
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
            service: "Servicio Postventa",
            about: "Sobre nosotros",
            whyUs: "¿Por qué Girişim Makina?",
            certificates: "Nuestros certificados",
            hr: "Recursos humanos",
            cerealBar: "Líneas de barras de cereales",
            byType: "Por tipo de embalaje",
            byProduct: "Por su producto"
        },
        megaMenu: {
            productionLines: "Líneas de Producción",
            biscuitChocolate: "Galletas y Chocolate",
            horizontalPack: "Empaque Horizontal",
            verticalPack: "Empaque Vertical",
            fillingAux: "Llenado y Auxiliar"
        },
        bannerSlides: {
            s1: { tag: "Producción llave en mano", title: "Wafer y Barras de cereales<br>Líneas de producción", desc: "Líneas de producción completas desde la preparación de masa hasta el empaque. Exportación a 57 países, más de 30 años de experiencia.", btn1: "Solicitar cotización", btn2: "Ver videos" },
            s2: { tag: "Soluciones de empaque", title: "Máquinas de empaque<br>Flowpack", desc: "Soluciones de empaque horizontal para galletas, wafers, chocolate, pan y jabón.", btn1: "Ver modelos", btn2: "WhatsApp" },
            s3: { tag: "Procesamiento de chocolate", title: "Recubrimiento de chocolate<br>y Sistemas de enfriamiento", desc: "Máquinas de enrobing, túneles de enfriamiento y tanques de preparación de chocolate.", btn1: "Más información", btn2: "Solicitar cotización" },
            s4: { tag: "Procesamiento de galletas", title: "Crema de galletas<br>y Máquinas sándwich", desc: "Crema de galletas en varias formas y tamaños. Alta capacidad, dosificación precisa.", btn1: "Más información", btn2: "Solicitar cotización" },
            s5: { tag: "Tecnologías de empaque", title: "Overwrapping y<br>Máquinas thermoform", desc: "Máquinas de empaque sobre, thermoform y llenado vertical. Formatos personalizados.", btn1: "Overwrapping", btn2: "Thermoform" },
            s6: { tag: "Líneas de barras", title: "Barras de cereales y<br>Barras de proteína", desc: "Producción de granola, muesli, barras de proteína y energía. Mezcla, formación, enfriamiento y empaque.", btn1: "Cereal Bar", btn2: "Protein Bar" },
            s7: { tag: "Confianza global", title: "Exportación a 57 países<br>Más de 30 años", desc: "12.000 m² de área de producción, 3 instalaciones. Líder turco en maquinaria alimentaria.", btn1: "Sobre nosotros", btn2: "Descargar catálogo" }
        },
        hero: {
            title1: "WAFER Y BARRAS DE CEREALES",
            title2: "LÍNEAS DE PRODUCCIÓN",
            title3: "Y MÁQUINAS DE EMBALAJE",
            description: "Fabricante de máquinas de procesamiento y embalaje de alimentos desde 1995. Como líder en Turquía, exportamos a 57 países en todo el mundo.",
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
            p1: "Girisim Makina es el fabricante líder de Turquía en procesamiento y embalaje de alimentos desde 1995. Con 3 instalaciones de producción y 12.000 m² de área cubierta, fabricamos líneas de producción de wafer, máquinas de barras de cereales, sistemas de recubrimiento de chocolate y máquinas de embalaje.",
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
            title2: "Contáctenos",
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
            about: "Fabricación de máquinas de procesamiento y empaque de alimentos desde 1995. Exportación a más de 57 países.",
            quickLinks: "Enlaces rápidos",
            contact: "Contacto",
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
            kvkk: "KVKK",
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
        },
        inline: {
            hello: "Hola",
            interestedProduct: "Estoy interesado en",
            message: "Su mensaje",
            contactInfo: "Su información de contacto",
            addFile: "Agregar imagen/archivo (opcional)",
            errorRetry: "Se produjo un error. Por favor, inténtelo de nuevo.",
            connectionError: "Error de conexión. Verifique su conexión a internet.",
            catalogThanks: "¡Gracias! Los catálogos se están abriendo...",
            sending: "Enviando..."
        },
        byType: {
            heroTitle: "Por Tipo de Empaque",
            heroDesc: "Elija el tipo de empaque adecuado, le recomendaremos la mejor máquina",
            sectionTitle: "Elija Su Tipo de Empaque",
            sectionDesc: "Explore nuestras soluciones personalizadas para cada tipo de empaque",
            pillowH: "Bolsa Almohada (Horizontal)",
            pillowHDesc: "Pillow Bag - El tipo de empaque más común. Ideal para galletas, chocolate, jabón y más.",
            gussetH: "Bolsa con Fuelle (Horizontal)",
            gussetHDesc: "Gusseted Bag - Paquetes con fuelle lateral. Más volumen y apariencia profesional.",
            envelope: "Empaque Sobre (X-Fold)",
            envelopeDesc: "Overwrapping - Empaque tipo sobre para apariencia premium. Para wafer, galletas, chocolate.",
            pillowV: "Bolsa Almohada (Vertical)",
            pillowVDesc: "Vertical Pillow Bag - Empaque vertical para gránulos, polvo y productos en partículas.",
            gussetV: "Bolsa con Fuelle (Vertical)",
            gussetVDesc: "Vertical Gusseted - Paquetes verticales con fuelle. Ideal para café, frutos secos.",
            quadro: "Quadro / Fondo Plano",
            quadroDesc: "Paquetes de fondo plano. Apariencia premium, se mantienen de pie. Para café, frutos secos.",
            doypack: "Doypack / Bolsa Stand-up",
            doypackDesc: "Bolsas que se mantienen de pie. Apariencia moderna, opción con cierre. Para snacks, frutos secos.",
            stick: "Stick Pack",
            stickDesc: "Paquetes stick largos y estrechos. Porciones individuales para azúcar, café, té, medicamentos.",
            sachet: "Sachet / Sobre",
            sachetDesc: "Pequeños sobres de un solo uso. Para ketchup, mayonesa, champú, salsas.",
            viewMachines: "Ver Máquinas",
            ctaTitle: "¿Qué Tipo de Empaque es Adecuado?",
            ctaDesc: "Nuestros expertos le ayudarán a determinar el tipo de empaque ideal para su producto",
            ctaBtn: "Consultar por WhatsApp",
            seoTitle: "Máquinas por Tipo de Empaque",
            seoP1: "En la industria del empaque, se utilizan varios formatos para diferentes tipos de productos y requisitos del mercado. En Girişim Makina ofrecemos máquinas capaces de producir todos los tipos comunes como bolsa almohada, con fuelle, sobre, doypack, quadro seal, stick pack y thermoform.",
            seoP2: "Cada tipo de empaque ofrece ventajas según las características del producto y los requisitos de vida útil. La bolsa almohada es ideal para producción económica y rápida. Las aplicaciones MAP pueden extender la vida útil. Los formatos doypack y quadro seal brindan apariencia premium, mientras que el stick pack se prefiere para porciones individuales."
        },
        byProduct: {
            heroTitle: "Por Su Producto",
            heroDesc: "Seleccione el producto que desea empacar, le recomendaremos la mejor máquina",
            sectionTitle: "Seleccione Categoría de Producto",
            sectionDesc: "Haga clic en el producto que desea empacar para ver las máquinas adecuadas",
            catDrinks: "Bebidas y Café",
            catSugar: "Azúcar y Productos en Polvo",
            catBiscuit: "Galletas y Panadería",
            catSnack: "Frutos Secos y Snacks",
            catGrain: "Cereales y Legumbres",
            catSpice: "Especias",
            catDairy: "Productos Lácteos",
            catOther: "Otros Productos",
            groundCoffee: "Café Molido", coffeeBeans: "Granos de Café", instantCoffee: "Café Instantáneo", tea: "Té",
            powderedSugar: "Azúcar en Polvo", granulatedSugar: "Azúcar Granulada", sugarSticks: "Sticks de Azúcar", milkPowder: "Leche en Polvo", detergent: "Detergente",
            biscuit: "Galletas", wafer: "Wafer", cake: "Pastel", bakeryOther: "Otros Productos de Panadería",
            chips: "Chips y Snacks", nuts: "Frutos Secos", driedFruits: "Frutas y Verduras Secas", cerealBar: "Barra de Cereal",
            legumes: "Legumbres", pasta: "Pasta", rice: "Arroz",
            groundSpices: "Especias Molidas", wholeSpices: "Especias Enteras",
            gratedCheese: "Queso Rallado", butter: "Mantequilla",
            frozen: "Productos Congelados", petFood: "Alimento para Mascotas", wrappedCandy: "Caramelos Envueltos", soap: "Jabón",
            ctaTitle: "¿Su Producto No Está en la Lista?",
            ctaDesc: "Nuestros expertos pueden ofrecer soluciones de empaque para todo tipo de productos",
            ctaBtn: "Consultar por WhatsApp",
            getQuote: "Solicitar Cotización",
            seoTitle: "Soluciones de Empaque por Producto",
            seoP1: "Girişim Makina ofrece soluciones de empaque especializadas para diferentes grupos de productos en la industria alimentaria. Diseñamos líneas completas con máquinas flowpack horizontal, llenado vertical (VFFS), thermoform y overwrapping para galletas, chocolate, confitería, frutos secos, cereales, especias, productos lácteos y más.",
            seoP2: "Cada grupo de productos tiene requisitos de empaque únicos. Ofrecemos sistemas de alimentación sensible para productos frágiles, llenado por tornillo para polvos, sistemas de pesaje multihead para gránulos y soluciones de llenado por bomba para líquidos."
        },
        hr: {
            heroTitle: "Recursos Humanos",
            heroDesc: "Únase a la familia Girişim Makina. Descubra oportunidades de carrera en el sector de maquinaria alimentaria.",
            whyTitle: "¿Por qué Girişim Makina?",
            whyP1: "Somos el fabricante líder de Turquía en maquinaria de procesamiento y empaque de alimentos desde 1995. Somos un equipo dinámico que exporta a más de 57 países y trabaja en instalaciones de producción de 12.000 m².",
            whyP2: "Con nuestro equipo en constante crecimiento, ofrecemos un ambiente de trabajo innovador y dinámico que valora su desarrollo profesional.",
            benefit1: "Formación Continua", benefit2: "Desarrollo Profesional", benefit3: "Ambiente Internacional", benefit4: "Equipo Dinámico", benefit5: "Beneficios Sociales", benefit6: "Bonos por Logros",
            formTitle: "Formulario de Solicitud de Empleo",
            labelName: "Nombre Completo *", labelEmail: "Correo Electrónico *", labelPhone: "Teléfono *",
            labelPosition: "Puesto al que Aplica *", labelExperience: "Años de Experiencia",
            labelCV: "Subir CV (PDF, DOC, DOCX)", labelNotes: "Notas Adicionales",
            selectPosition: "Seleccione Puesto", selectExperience: "Seleccione",
            fileUploadText: "Arrastre o haga clic para subir su CV",
            submitBtn: "Enviar Solicitud",
            phName: "Su nombre completo", phEmail: "ejemplo@email.com", phPhone: "+90 5XX XXX XX XX", phNotes: "Puede compartir información breve sobre usted..."
        }
    }
};

// Current language
let currentLang = localStorage.getItem('girisim_lang') || 'tr';

// Merge Supabase translation overrides into hardcoded translations
function mergeSupabaseTranslations() {
    const siteContent = window.__siteContent;
    if (!siteContent || !siteContent.translations) return;

    Object.keys(siteContent.translations).forEach(lang => {
        const overrides = siteContent.translations[lang];
        if (!overrides || typeof overrides !== 'object') return;

        if (!translations[lang]) {
            // New language from admin - create from overrides
            translations[lang] = JSON.parse(JSON.stringify(overrides));
        } else {
            // Merge overrides into existing language (deep merge)
            deepMerge(translations[lang], overrides);
        }
    });
}

function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            if (!target[key]) target[key] = {};
            deepMerge(target[key], source[key]);
        } else if (source[key] !== undefined && source[key] !== null && source[key] !== '') {
            target[key] = source[key];
        }
    }
}

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
    // Merge Supabase overrides before applying
    mergeSupabaseTranslations();

    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('girisim_lang', lang);
        applyTranslations();

        // Re-apply Supabase content after translations so admin changes take priority
        // Only for Turkish (default language) - other languages use translations
        if (lang === 'tr' && window.__siteContent && typeof applySiteContent === 'function') {
            applySiteContent(window.__siteContent);
        }

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

        // Dispatch event for dynamic content (blog, etc.)
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
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

    // Check if admin has customized content via Supabase (only for Turkish - default language)
    // For other languages, translations always take priority
    const sc = window.__siteContent;
    const isTurkish = currentLang === 'tr';
    const hasAdminHero = isTurkish && sc && sc.heroSlides && sc.heroSlides.length > 0 && sc.heroSlides[0].title;
    const hasAdminAbout = isTurkish && sc && sc.about && sc.about.title;
    const hasAdminMachines = isTurkish && sc && sc.machines && sc.machines.title;
    const hasAdminPackaging = isTurkish && sc && sc.packaging && sc.packaging.title;
    const hasAdminSectors = isTurkish && sc && sc.sectors && sc.sectors.title;

    // Navigation is handled entirely by data-translate attributes
    // (both index.html and header-include.js use data-translate)

    // Hero Section - Skip if admin has customized hero in Turkish (applySiteContent handles it)
    if (!hasAdminHero) {
        const heroTitle = document.querySelector('.hero-content h1') || document.querySelector('.banner-content h1');
        if (heroTitle) {
            heroTitle.innerHTML = `${lang.hero.title1}<br><span class="highlight">${lang.hero.title2}</span> ${lang.hero.title3}`;
        }

        const heroDesc = document.querySelector('.hero-content > p') || document.querySelector('.banner-content > p');
        if (heroDesc) heroDesc.textContent = lang.hero.description;

        const heroStats = document.querySelectorAll('.hero-stats .stat');
        if (heroStats[0]) heroStats[0].querySelector('.stat-text').textContent = lang.hero.stat1;
        if (heroStats[1]) heroStats[1].querySelector('.stat-text').textContent = lang.hero.stat2;
        if (heroStats[2]) heroStats[2].querySelector('.stat-text').textContent = lang.hero.stat3;

        const heroButtons = document.querySelectorAll('.hero-buttons .btn') || document.querySelectorAll('.banner-buttons .btn');
        if (heroButtons[0]) heroButtons[0].innerHTML = '<i class="fab fa-whatsapp"></i> ' + lang.hero.cta1;
        if (heroButtons[1]) heroButtons[1].innerHTML = '<i class="fab fa-youtube"></i> ' + lang.hero.cta2;
    }

    // About Section - Skip if admin has customized about in Turkish (applySiteContent handles it)
    if (!hasAdminAbout) {
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
    }

    const catalogBtn = document.querySelector('#about .btn-primary');
    if (catalogBtn) catalogBtn.innerHTML = '<i class="fas fa-file-pdf"></i> ' + lang.about.catalog;

    // Production Section - Skip if admin has customized in Turkish
    if (!hasAdminMachines) {
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
    } else {
        // Even with admin content, translate UI buttons
        const quoteButtons = document.querySelectorAll('#production .machine-overlay .btn');
        quoteButtons.forEach(btn => { btn.textContent = lang.production.getQuote; });
        const watchVideosBtn = document.querySelector('#production .text-center .btn');
        if (watchVideosBtn) watchVideosBtn.innerHTML = '<i class="fab fa-youtube"></i> ' + lang.production.watchVideos;
    }

    // Packaging Section - Skip if admin has customized in Turkish
    if (!hasAdminPackaging) {
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
    }

    // Sectors Section - Skip if admin has customized in Turkish
    if (!hasAdminSectors) {
        const secTag = document.querySelector('#sectors .section-tag');
        if (secTag) secTag.textContent = lang.sectors.tag;

        const secTitle = document.querySelector('#sectors .section-header h2');
        if (secTitle) secTitle.innerHTML = `${lang.sectors.title1} <span class="highlight">${lang.sectors.title2}</span>`;

        const secSubtitle = document.querySelector('#sectors .section-header p');
        if (secSubtitle) secSubtitle.textContent = lang.sectors.subtitle;
    }

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
    if (corpLinks[0]) corpLinks[0].textContent = lang.footer.aboutUs || lang.dropdown?.about || 'Hakkımızda';
    if (corpLinks[1]) corpLinks[1].textContent = lang.dropdown?.hr || 'İnsan Kaynakları';
    if (corpLinks[2]) corpLinks[2].textContent = lang.nav?.blog || 'Blog';
    if (corpLinks[3]) corpLinks[3].textContent = lang.footer.videosTitle || lang.nav?.videos || 'Videolar';
    if (corpLinks[4]) corpLinks[4].textContent = lang.footer.contactTitle || lang.nav?.contact || 'İletişim';

    const footerContactTitle = document.querySelector('.footer-contact h4');
    if (footerContactTitle) footerContactTitle.textContent = lang.footer.contactTitle;

    const copyright = document.querySelector('.footer-bottom-content p');
    if (copyright) copyright.innerHTML = `&copy; 2025 ${lang.footer.copyright}`;

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
    if (lang.fuarlar) {
        const fuarTag = document.querySelector('[data-translate="fuarlar.tag"]');
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

    // ==========================================
    // GENERIC data-translate RESOLVER
    // Handles ALL [data-translate] elements not covered above
    // ==========================================
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const value = t(key);
        if (value && value !== key && typeof value === 'string') {
            const icon = el.querySelector('i');
            if (icon && el.children.length > 0) {
                const iconHtml = icon.outerHTML;
                // Keep icon position: if icon was at end (like dropdown chevrons), put after text
                const iconWasFirst = el.firstElementChild === icon;
                if (iconWasFirst) {
                    el.innerHTML = iconHtml + ' ' + value;
                } else {
                    el.innerHTML = value + ' ' + iconHtml;
                }
            } else if (value.includes('<')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        }
    });

    // Handle data-translate-placeholder
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        const value = t(key);
        if (value && value !== key && typeof value === 'string') {
            el.placeholder = value;
        }
    });

    // Mega dropdown category titles and links are handled by the generic data-translate resolver above
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);

    // Only add [data-lang] click handlers if header-include.js is NOT handling them
    // header-include.js manages language selectors on product pages (has #header-placeholder)
    const headerPlaceholder = document.getElementById('header-placeholder');
    const headerIncludeActive = headerPlaceholder && headerPlaceholder.children.length > 0;

    if (!headerIncludeActive) {
        // index.html or pages without header-include - add click handlers here
        document.querySelectorAll('[data-lang]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
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
    }
});

// Export for use in other scripts
window.girisimTranslations = {
    t,
    setLanguage,
    getCurrentLang: () => currentLang,
    translations
};
