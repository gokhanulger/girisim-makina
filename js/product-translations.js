// Product Page Translations
const productTranslations = {
    tr: {
        common: {
            tag_production: "Üretim Hatları",
            tag_production_machinery: "Üretim Makinaları",
            tag_packaging: "Paketleme Makineleri",
            getQuote: "Teklif Al",
            whatsapp: "WhatsApp",
            email: "E-posta",
            videos: "Videolar",
            countries: "Ülke",
            support: "Destek",
            perMin: "Paket/dk",
            perHour: "kg/saat",
            cycleMin: "Cycle/dk",
            pcsMin: "adet/dk",
            featuresTag: "Özellikler",
            specsTag: "Teknik Özellikler",
            specsNote: "* Kapasite değerleri ürün tipine ve formülasyona göre değişiklik gösterebilir.",
            relatedTag: "İlgili Ürünler",
            relatedTitle: "Diğer",
            relatedHighlight: "Makinelerimiz",
            ctaDesc: "Uzman ekibimiz projeniz için en uygun çözümü sunmak üzere hazır",
            watchVideos: "Videoları İzle"
        },
        wafer: {
            title: "Wafer Üretim",
            titleHighlight: "Hatları",
            heroDesc: "Komple wafer üretim hatları. Hamur hazırlamadan kesime, kremalama dan paketlemeye kadar anahtar teslim çözümler.",
            overviewTitle: "Wafer Üretim",
            overviewHighlight: "Çözümleri",
            overviewP1: "Girişim Makina olarak, dünya standartlarında wafer üretim hatları üretiyoruz. Otomatik hamur hazırlama, yüksek kapasiteli fırınlar, kremalama sistemleri ve kesim üniteleri ile komple çözümler sunuyoruz.",
            overviewP2: "Fırınlarımız 39-51-63-75 plaka seçenekleriyle farklı kapasitelere uygun. Düz wafer, dolgulu wafer, wafer stick ve cone wafer üretimi için özelleştirilmiş hatlar.",
            ctaTitle: "Wafer Üretim Hattı İçin Teklif Alın",
            videos: ["Wafer Fırını", "Wafer Kremalama", "Wafer Kesim"],
            featuresTitle: "Hat",
            featuresHighlight: "Bileşenleri",
            features: [
                { title: "Hamur Hazırlama", desc: "Otomatik dozajlama ve karıştırma sistemleri ile homojen hamur hazırlama. PLC kontrollü tam otomatik sistem." },
                { title: "Wafer Fırınları", desc: "Yüksek kapasiteli gaz veya elektrikli fırınlar. Hassas sıcaklık kontrolü ve düşük enerji tüketimi." },
                { title: "Kremalama Sistemi", desc: "Tek veya çok katlı wafer kremalama. Farklı krem tipleri için ayarlanabilir sistem." },
                { title: "Soğutma Tüneli", desc: "Verimli soğutma sistemi ile hızlı katılaşma. Enerji tasarruflu tasarım." },
                { title: "Kesim Makinesi", desc: "Hassas boyut kesimi. Farklı boyut ve şekiller için ayarlanabilir." },
                { title: "Paketleme", desc: "Flow pack veya overwrapping ile son paketleme. Entegre çözümler." }
            ],
            specsTitle: "Kapasite",
            specsHighlight: "Seçenekleri",
            specsHeaders: ["Model", "Kapasite", "Plaka Boyutu", "Plaka Sayısı", "Güç"]
        },
        "cereal-bar": {
            title: "Cereal Bar",
            titleHighlight: "Üretim Hatları",
            heroDesc: "Cereal bar ve granola bar üretim hatları. Karıştırma, presleme, kesim ve paketleme sistemleri ile komple çözümler.",
            overviewTitle: "Cereal Bar",
            overviewHighlight: "Üretim Çözümleri",
            overviewP1: "Cereal bar ve granola bar pazarı hızla büyüyor. Girişim Makina olarak, yulaf, pirinç patlağı, mısır gevreği ve diğer tahılları işleyebilen komple bar üretim hatları sunuyoruz.",
            overviewP2: "Bal, şeker şurubu veya çikolata bağlayıcılı barlar için özelleştirilmiş sistemler. Karıştırma, kalıplama, soğutma ve kesim üniteleri.",
            ctaTitle: "Cereal Bar Hattı İçin Teklif Alın",
            videos: ["Cereal Bar Üretimi", "Granola Bar Hattı"],
            featuresTitle: "Hat",
            featuresHighlight: "Bileşenleri",
            features: [
                { title: "Karıştırma Sistemi", desc: "Tahıl, kuruyemiş, bal ve diğer bağlayıcıların homojen karışımı için otomatik dozajlama ve karıştırma." },
                { title: "Pişirme/Isıtma", desc: "Bal bazlı karışımlar için kontrollü ısıtma sistemi. Sıcaklık ve süre ayarlanabilir." },
                { title: "Şekillendirme", desc: "Farklı boyut ve kalınlıklarda bar şekillendirme. Rulo veya pres sistemleri." },
                { title: "Soğutma Tüneli", desc: "Hızlı ve kontrollü soğutma. Bar stabilitesi için optimize edilmiş sistem." },
                { title: "Kesim Sistemi", desc: "Ultrasonik veya bıçaklı kesim. Hassas boyut kontrolü." },
                { title: "Paketleme", desc: "Flow pack paketleme entegrasyonu. Tek veya çoklu paketleme seçenekleri." }
            ],
            specsTitle: "Kapasite",
            specsHighlight: "Seçenekleri",
            specsHeaders: ["Model", "Kapasite", "Bar Boyutu", "Hat Genişliği", "Güç"]
        },
        "protein-bar": {
            title: "Protein Bar",
            titleHighlight: "Üretim Hatları",
            heroDesc: "Protein bar, enerji bar, nuga bar ve karamel bar üretimi için komple hatlar. Karıştırma, şekillendirme, kaplama ve paketleme dahil.",
            overviewTitle: "Protein Bar",
            overviewHighlight: "Üretim Çözümleri",
            overviewP1: "Protein bar pazarı hızla büyüyor. Girişim Makina olarak, nuga, karamel, fındık ezmesi ve diğer dolguları işleyebilen komple bar üretim hatları sunuyoruz.",
            overviewP2: "Ekstrüzyon veya slab forming sistemleri, çikolata enrobing, soğutma tüneli ve flow pack paketleme ile entegre çözümler.",
            ctaTitle: "Protein Bar Hattı İçin Teklif Alın",
            videos: ["Nuga Bar Hattı", "Coco Bar Hattı"]
        },
        "chocolate-coating": {
            title: "Çikolata Kaplama",
            titleHighlight: "Sistemleri",
            heroDesc: "Çikolata enrobing makineleri ve soğutma tünelleri. Bisküvi, wafer, bar ve şekerleme ürünleri için profesyonel kaplama çözümleri.",
            overviewTitle: "Çikolata Kaplama",
            overviewHighlight: "Çözümleri",
            overviewP1: "Çikolata enrobing makinelerimiz, ürünlerinizi tam veya yarım çikolata kaplamayla kaplar. Hassas sıcaklık kontrolü ve homojen kaplama kalınlığı sağlar.",
            overviewP2: "Soğutma tünelleri ile entegre sistemler sunuyoruz. Dekorasyon üniteleri, drizzle sistemleri ve bottom coating seçenekleri mevcut.",
            ctaTitle: "Çikolata Kaplama Sistemi İçin Teklif Alın",
            videos: ["Enrobing Sistemi", "Soğutma Tüneli", "Kaplama Örnekleri"],
            featuresTitle: "Sistem",
            featuresHighlight: "Bileşenleri",
            features: [
                { title: "Temperleme", desc: "Otomatik çikolata temperleme ünitesi. Kristalizasyon kontrolü." },
                { title: "Kaplama Perdesi", desc: "Üst ve alt kaplama sistemi. Ayarlanabilir kalınlık." },
                { title: "Soğutma Tüneli", desc: "Kontrollü soğutma. Parlak yüzey için optimize edilmiş." },
                { title: "Dekorasyon", desc: "Çizgileme ve serpme sistemleri. Özel tasarımlar." },
                { title: "Geri Dönüşüm", desc: "Fazla çikolatanın geri kazanımı. Verimli sistem." },
                { title: "PLC Kontrol", desc: "Tam otomatik kontrol. Reçete kaydetme." }
            ]
        },
        "biscuit-sandwiching": {
            title: "Bisküvi Kremalama",
            titleHighlight: "Makineleri",
            heroDesc: "Sandviç bisküvi üretimi için kremalama ve bisküvi birleştirme makineleri. Yüksek hız, hassas krem dozajı ve kolay temizlik.",
            overviewTitle: "Sandviç Bisküvi",
            overviewHighlight: "Üretim Çözümleri",
            overviewP1: "Bisküvi kremalama makineleri, yuvarlak veya kare bisküvilere krem sürerek sandviç bisküvi oluşturur. Farklı krem tipleri (çikolata, vaniyla, fındık) için uygun.",
            overviewP2: "Servo motorlu hassas dozajlama, otomatik bisküvi dizme ve birleştirme sistemi. On-edge veya flat feed seçenekleri.",
            ctaTitle: "Bisküvi Kremalama Makinesi İçin Teklif Alın",
            videos: ["Bisküvi Üretim Hattı"]
        },
        "flow-pack": {
            title: "Flow Pack",
            titleHighlight: "Makineleri",
            heroDesc: "Yatay flow pack (HFFS) paketleme makineleri. Bisküvi, wafer, çikolata, sabun, ekmek ve daha fazlası için yüksek hızlı paketleme.",
            overviewTitle: "Flow Pack",
            overviewHighlight: "Paketleme Çözümleri",
            overviewP1: "Flow pack makinelerimiz yatay form-fill-seal prensibiyle çalışır. Tekli, çoklu veya tepsi paketleme seçenekleri sunar. Servo motorlu hassas kesim ve kaynak sistemleri.",
            overviewP2: "Vakum ve MAP (Modifiye Atmosfer Paketleme) seçenekleri mevcut. Otomatik besleme sistemleri ve sayıcılarla entegre çalışabilir.",
            ctaTitle: "Flow Pack Makinesi İçin Teklif Alın",
            videos: ["Wafer Paketleme", "Sabun Paketleme", "Ekmek Paketleme", "Islak Mendil", "Bar Paketleme"]
        },
        overwrapping: {
            title: "Overwrapping",
            titleHighlight: "Makineleri",
            heroDesc: "Zarf tipi (envelope type) sarma makineleri. Pirinç keki, bisküvi, sabun, kutu ve düz yüzeyli ürünler için profesyonel paketleme.",
            overviewTitle: "Zarf Tipi",
            overviewHighlight: "Paketleme",
            overviewP1: "Overwrapping makineleri, ürünleri zarf şeklinde sararak sıkı ve şık bir paketleme sağlar. Özellikle pirinç keki, bisküvi paketleri, sabun ve kutu ürünler için idealdir.",
            overviewP2: "Hem flow pack hem de X-fold overwrap kombinasyonları sunulabilir. Farklı film tipleriyle uyumlu: OPP, BOPP, selofan.",
            ctaTitle: "Overwrapping Makinesi İçin Teklif Alın",
            videos: ["Pirinç Keki Paketleme", "Otomatik Paketleme", "Otomatik Besleme"]
        },
        thermoform: {
            title: "Thermoform",
            titleHighlight: "Paketleme",
            heroDesc: "Termoform paketleme makineleri. Peynir, et, sebze, meyve ve hazır gıda için vakum ve MAP (modifiye atmosfer) paketleme.",
            overviewTitle: "Thermoform",
            overviewHighlight: "Paketleme Çözümleri",
            overviewP1: "Thermoform makineleri, ısı ile şekillendirilen alt film üzerine ürünü yerleştirip üst film ile kapatarak paketleme yapar. Vakum veya gaz (MAP) ile raf ömrünü uzatır.",
            overviewP2: "Peynir, et, sebze, meyve, hazır gıda ve medikal ürünler için idealdir. Farklı kalıp boyutları ve çoklu bölme seçenekleri.",
            ctaTitle: "Thermoform Makinesi İçin Teklif Alın",
            videos: ["Peynir Paketleme"]
        },
        vffs: {
            title: "VFFS Dikey",
            titleHighlight: "Dolum Makineleri",
            heroDesc: "Dikey form-fill-seal (VFFS) paketleme makineleri. Granül, toz, kuruyemiş, şeker, kahve ve snack ürünleri için tartım ve dolum sistemleri.",
            overviewTitle: "VFFS Dikey Dolum",
            overviewHighlight: "Çözümleri",
            overviewP1: "VFFS makinelerimiz dikey form-fill-seal prensibiyle çalışır. Çoklu kafa tartım sistemleri ile hassas gramaj kontrolü sağlar.",
            overviewP2: "Granül, toz, sıvı ve yapışkan ürünler için farklı dolum sistemleri. Stick pack, pillow bag, gusseted bag ve doypack seçenekleri.",
            ctaTitle: "VFFS Makinesi İçin Teklif Alın",
            videos: ["Kuruyemiş Dolum", "Bakliyat Paketleme", "Çoklu Kafa Tartım"],
            featuresTitle: "Makine",
            featuresHighlight: "Özellikleri",
            features: [
                { title: "Multihead Tartı", desc: "10-14-16 başlıklı kombinasyon tartı. Yüksek hassasiyet." },
                { title: "Paket Formatları", desc: "Yastık, gusset, doypack, stick pack seçenekleri." },
                { title: "Gaz Dolum", desc: "Azot gazı ile MAP paketleme. Uzun raf ömrü." },
                { title: "Yüksek Hız", desc: "120 paket/dakikaya kadar üretim kapasitesi." },
                { title: "Kodlama", desc: "Tarih kodlama ve lot numarası entegrasyonu." },
                { title: "Servo Motor", desc: "Hassas kontrol. Hızlı format değişimi." }
            ]
        },
        halvah: {
            title: "Helva",
            titleHighlight: "Paketleme",
            heroDesc: "Helva dilimleme ve paketleme makineleri. Tahin helva, un helva, pişmaniye ve benzeri ürünler için dilimleme, tartım ve paketleme çözümleri.",
            overviewTitle: "Helva",
            overviewHighlight: "İşleme Çözümleri",
            overviewP1: "Helva paketleme makineleri, blok helvanın dilimleyerek veya doğrudan paketleme için tasarlanmıştır. Ultrasonik kesim, tel kesim ve bıçaklı kesim seçenekleri.",
            overviewP2: "Flow pack veya thermoform paketleme ile entegre edilebilir. Farklı gramajlar için hassas tartım sistemleri.",
            ctaTitle: "Helva Paketleme Makinesi İçin Teklif Alın",
            videos: ["Briket Tip Paketleme"]
        },
        "chocolate-cooling": {
            title: "Çikolata Soğutma",
            titleHighlight: "Tünelleri",
            heroDesc: "Çikolata soğutma tünelleri. Kaplama ve kalıplama sonrası çikolata ürünlerinin kontrollü soğutulması için profesyonel çözümler.",
            overviewTitle: "Çikolata Soğutma",
            overviewHighlight: "Çözümleri",
            overviewP1: "Çikolata soğutma tünellerimiz, enrobing ve kalıplama sonrasında çikolata ürünlerinin kontrollü bir şekilde soğutulmasını sağlar. Çoklu sıcaklık bölgeleri ile optimize edilmiş soğutma profili.",
            overviewP2: "Farklı uzunluk ve genişlik seçenekleri ile her kapasiteye uygun çözümler. Enerji verimli kompresörler ve paslanmaz çelik yapı.",
            ctaTitle: "Çikolata Soğutma Tüneli İçin Teklif Alın",
            videos: ["Soğutma Tüneli"],
            featuresTitle: "Sistem",
            featuresHighlight: "Özellikleri",
            features: [
                { title: "Çoklu Sıcaklık Bölgesi", desc: "3-5 bağımsız soğutma bölgesi. Her bölge ayrı kontrol edilebilir." },
                { title: "Hava Sirkülasyonu", desc: "Optimize edilmiş hava akışı. Homojen soğutma dağılımı." },
                { title: "Ayarlanabilir Hız", desc: "Bant hızı kontrolü. Ürün tipine göre soğutma süresi ayarı." },
                { title: "Enerji Verimliliği", desc: "Yüksek verimli kompresörler. Düşük enerji tüketimi." },
                { title: "PLC Kontrol", desc: "Dokunmatik ekranlı kontrol paneli. Tüm parametreler izlenebilir." },
                { title: "Paslanmaz Çelik", desc: "Tam paslanmaz çelik yapı. Hijyenik tasarım." }
            ],
            specsTitle: "Model",
            specsHighlight: "Seçenekleri",
            specsHeaders: ["Model", "Uzunluk", "Bant Genişliği", "Soğutma Kapasitesi", "Güç"]
        },
        "coconut-bar": {
            title: "Hindistan Cevizi Bar",
            titleHighlight: "Üretim Hatları",
            heroDesc: "Hindistan cevizi bar üretim hatları. Glikoz hazırlama, karıştırma, kalıplama, soğutma ve çikolata kaplama ile komple çözümler.",
            overviewTitle: "Hindistan Cevizi Bar",
            overviewHighlight: "Üretim Çözümleri",
            overviewP1: "Hindistan cevizi bar üretim hatları, glikoz şurubu hazırlama, hindistan cevizi karıştırma, kalıplama ve çikolata kaplama süreçlerini kapsar.",
            overviewP2: "Farklı bar boyutları ve ağırlıkları için ayarlanabilir sistemler. Çikolata kaplama ve soğutma tüneli entegrasyonu.",
            ctaTitle: "Hindistan Cevizi Bar Hattı İçin Teklif Alın",
            videos: ["Coco Bar Üretimi"],
            featuresTitle: "Hat",
            featuresHighlight: "Bileşenleri",
            features: [
                { title: "Glikoz Tankı", desc: "Glikoz şurubu depolama ve dozajlama sistemi. Otomatik sıcaklık kontrolü." },
                { title: "Şurup Pişirme", desc: "İnvert şurup pişirme tankı. Hassas sıcaklık ve kıvam kontrolü." },
                { title: "Z-Tip Mikser", desc: "Hindistan cevizi ve şurup karıştırma. Homojen kütle elde etme." },
                { title: "Kalıplama Makinası", desc: "Hindistan cevizi kütlesini bar şekline presleme. Farklı kalıp seçenekleri." },
                { title: "Soğutma Tüneli", desc: "Kalıplanmış barların soğutulması. Kaplama öncesi stabilizasyon." },
                { title: "Çikolata Kaplama", desc: "Tam kaplama sistemi. Çikolata soğutma tüneli entegrasyonu." }
            ],
            specsTitle: "Kapasite",
            specsHighlight: "Seçenekleri",
            specsHeaders: ["Model", "Kapasite", "Bar Ağırlığı", "Hat Genişliği", "Güç"]
        },
        "filling-machines": {
            title: "Dolum",
            titleHighlight: "Makineleri",
            heroDesc: "Toz ve granül ürünler için dolum ve tartım sistemleri. Vidalı, lineer, multihead ve hacimsel dolum seçenekleri.",
            overviewTitle: "Dolum Sistemleri",
            overviewHighlight: "Çözümleri",
            overviewP1: "Dolum makinelerimiz toz, granül ve parçalı ürünler için hassas tartım ve dozajlama sağlar. Vidalı, lineer ve multihead tartım seçenekleri.",
            overviewP2: "VFFS makineleri ile tam entegrasyon. Farklı ürün tipleri için özelleştirilmiş dolum çözümleri.",
            ctaTitle: "Dolum Makinesi İçin Teklif Alın",
            videos: ["Dolum Sistemi"],
            featuresTitle: "Sistem",
            featuresHighlight: "Çeşitleri",
            features: [
                { title: "Vidalı Dolum", desc: "Toz ürünler için vidalı tartım sistemi. Un, şeker, baharat gibi ürünler." },
                { title: "Lineer Tartım", desc: "2-4 kafalı lineer tartım sistemleri. Granül ve parçalı ürünler için." },
                { title: "Multihead Tartım", desc: "10-16 kafalı multihead sistemler. Yüksek hız ve hassasiyet." },
                { title: "Hacimsel Dolum", desc: "Sabit hacimli ürünler için bardak sistem. Hızlı ve ekonomik." },
                { title: "PLC Kontrol", desc: "Dokunmatik ekranlı kontrol. Reçete kaydetme ve çağırma." },
                { title: "VFFS Entegrasyonu", desc: "Dikey paketleme makinaları ile tam entegrasyon. Senkronize çalışma." }
            ],
            specsTitle: "Model",
            specsHighlight: "Seçenekleri",
            specsHeaders: ["Model", "Tip", "Kapasite", "Tartım Aralığı", "Hassasiyet"]
        },
        "chocolate-preparation": {
            title: "Çikolata Hazırlama",
            titleHighlight: "Mutfağı",
            heroDesc: "Çikolata hazırlama mutfağı ekipmanları. Yağ eritme, karıştırma, bilyalı değirmen, stok tankı ve temperleme makinaları.",
            overviewTitle: "Çikolata Hazırlama",
            overviewHighlight: "Çözümleri",
            overviewP1: "Çikolata hazırlama mutfağı ekipmanlarımız, kakao yağı eritme, hammadde karıştırma, ince öğütme ve temperleme süreçlerini kapsar.",
            overviewP2: "Bilyalı değirmenler ile 20-25 mikron inceliğe ulaşılır. Stok tankları ve temperleme makinaları ile komple çözümler.",
            ctaTitle: "Çikolata Hazırlama Mutfağı İçin Teklif Alın",
            videos: ["Çikolata Hazırlama"],
            featuresTitle: "Mutfak",
            featuresHighlight: "Bileşenleri",
            features: [
                { title: "Yağ Eritme Tankı", desc: "Kakao yağı ve diğer yağların eritilmesi. Su banyolu ısıtma sistemi." },
                { title: "Ön Karıştırma Mikseri", desc: "Çikolata hammaddelerinin ön karıştırması. Homojen kütle elde etme." },
                { title: "Bilyalı Değirmen", desc: "İnce öğütme sistemi. 20-25 mikron parçacık boyutu." },
                { title: "Stok Tankı", desc: "Hazır çikolatanın depolanması. Sıcaklık kontrollü." },
                { title: "Pudra Şekeri Değirmeni", desc: "Kristal şekeri pudra haline getirme. Yüksek incelik." },
                { title: "Temperleme Makinası", desc: "Çikolata kristalizasyonu için temperleme. Parlak yüzey elde etme." }
            ],
            specsTitle: "Kapasite",
            specsHighlight: "Seçenekleri",
            specsHeaders: ["Ekipman", "Model", "Kapasite", "Güç"]
        },
        "sugar-mill": {
            title: "Pudra Şekeri",
            titleHighlight: "Değirmeni",
            heroDesc: "Pudra şekeri değirmenleri. Kristal şekerin pudra haline öğütülmesi için yüksek kapasiteli ve enerji verimli değirmenler.",
            overviewTitle: "Pudra Şekeri",
            overviewHighlight: "Değirmen Çözümleri",
            overviewP1: "Pudra şekeri değirmenlerimiz, kristal şekeri istenilen incelikte pudra haline getirir. Soğutma sistemi ile şekerin kristalize olması engellenir.",
            overviewP2: "Farklı kapasite seçenekleri ile küçük ve büyük ölçekli üretim için uygun. Paslanmaz çelik yapı ve kolay bakım.",
            ctaTitle: "Pudra Şekeri Değirmeni İçin Teklif Alın",
            videos: ["Pudra Şekeri Öğütme"],
            featuresTitle: "Değirmen",
            featuresHighlight: "Özellikleri",
            features: [
                { title: "Yüksek Kapasite", desc: "900 kg/saat'e kadar öğütme kapasitesi. Sürekli çalışma." },
                { title: "İnce Öğütme", desc: "50-100 mikron parçacık boyutu. Ayarlanabilir incelik." },
                { title: "Düşük Enerji", desc: "Optimize edilmiş rotor tasarımı. Verimli enerji kullanımı." },
                { title: "Paslanmaz Çelik", desc: "Gıdaya temas eden tüm parçalar paslanmaz çelik." },
                { title: "Soğutma Sistemi", desc: "Öğütme sırasında sıcaklık kontrolü. Şeker kristalize olmaz." },
                { title: "Kolay Bakım", desc: "Hızlı temizlik ve bakım. Kolay parça değişimi." }
            ],
            specsTitle: "Model",
            specsHighlight: "Seçenekleri",
            specsHeaders: ["Model", "Kapasite", "İncelik", "Motor Gücü", "Ağırlık"]
        },
        "cookie-capping": {
            title: "Cookie Capping",
            titleHighlight: "Makineleri",
            heroDesc: "Cookie capping ve marshmallow sandviç makineleri. Bisküvi besleme, marshmallow dolum, kapatma ve çikolata kaplama ile komple hatlar.",
            overviewTitle: "Cookie Capping",
            overviewHighlight: "Üretim Çözümleri",
            overviewP1: "Cookie capping makineleri, bisküvi tabanına marshmallow veya krem dolum yaparak üst bisküvi ile kapatır. Çikolata kaplama entegrasyonu ile komple hatlar.",
            overviewP2: "Farklı bisküvi boyutları ve dolgu tipleri için ayarlanabilir sistemler. Flow pack paketleme entegrasyonu.",
            ctaTitle: "Cookie Capping Makinesi İçin Teklif Alın",
            videos: ["Cookie Capping Hattı"],
            featuresTitle: "Hat",
            featuresHighlight: "Bileşenleri",
            features: [
                { title: "Bisküvi Besleme Sistemi", desc: "Otomatik bisküvi besleme ve sıralama. Farklı boyutlara uyum sağlar." },
                { title: "Marshmallow Hazırlama", desc: "Marshmallow hazırlama ve pişirme ekipmanları. Kıvam kontrolü." },
                { title: "Depositor", desc: "Hassas marshmallow dozajlama. Ayarlanabilir dolgu miktarı." },
                { title: "Kapatma Sistemi", desc: "Üst bisküviyi otomatik yerleştirme. Hızlı ve hassas." },
                { title: "Çikolata Kaplama", desc: "Tam kaplama sistemi. Çeşitli kaplama seçenekleri." },
                { title: "Paketleme", desc: "Flow pack paketleme entegrasyonu. Tek veya çoklu paketleme." }
            ],
            specsTitle: "Kapasite",
            specsHighlight: "Seçenekleri",
            specsHeaders: ["Model", "Kapasite", "Bisküvi Çapı", "Dolgu Miktarı", "Güç"]
        }
    },
    en: {
        common: {
            tag_production: "Production Lines",
            tag_production_machinery: "Production Machinery",
            tag_packaging: "Packaging Machines",
            getQuote: "Get Quote",
            whatsapp: "WhatsApp",
            email: "Email",
            videos: "Videos",
            countries: "Countries",
            support: "Support",
            perMin: "Packs/min",
            perHour: "kg/hour",
            cycleMin: "Cycles/min",
            pcsMin: "pcs/min",
            featuresTag: "Features",
            specsTag: "Technical Specifications",
            specsNote: "* Capacity values may vary depending on product type and formulation.",
            relatedTag: "Related Products",
            relatedTitle: "Our Other",
            relatedHighlight: "Machines",
            ctaDesc: "Our expert team is ready to provide the most suitable solution for your project",
            watchVideos: "Watch Videos"
        },
        wafer: {
            title: "Wafer Production",
            titleHighlight: "Lines",
            heroDesc: "Complete wafer production lines. Turnkey solutions from dough preparation to cutting, creaming to packaging.",
            overviewTitle: "Wafer Production",
            overviewHighlight: "Solutions",
            overviewP1: "At Girisim Makina, we manufacture world-class wafer production lines. We offer complete solutions with automatic dough preparation, high-capacity ovens, creaming systems and cutting units.",
            overviewP2: "Our ovens are available with 39-51-63-75 plate options for different capacities. Customized lines for flat wafer, filled wafer, wafer stick and cone wafer production.",
            ctaTitle: "Get a Quote for Wafer Production Line",
            videos: ["Wafer Oven", "Wafer Creaming", "Wafer Cutting"],
            featuresTitle: "Line",
            featuresHighlight: "Components",
            features: [
                { title: "Dough Preparation", desc: "Automatic dosing and mixing systems for homogeneous dough. PLC controlled fully automatic system." },
                { title: "Wafer Ovens", desc: "High capacity gas or electric ovens. Precise temperature control and low energy consumption." },
                { title: "Creaming System", desc: "Single or multi-layer wafer creaming. Adjustable system for different cream types." },
                { title: "Cooling Tunnel", desc: "Efficient cooling system for rapid solidification. Energy-saving design." },
                { title: "Cutting Machine", desc: "Precise size cutting. Adjustable for different sizes and shapes." },
                { title: "Packaging", desc: "Final packaging with flow pack or overwrapping. Integrated solutions." }
            ],
            specsTitle: "Capacity",
            specsHighlight: "Options",
            specsHeaders: ["Model", "Capacity", "Plate Size", "Plate Count", "Power"]
        },
        "cereal-bar": {
            title: "Cereal Bar",
            titleHighlight: "Production Lines",
            heroDesc: "Cereal bar and granola bar production lines. Complete solutions with mixing, pressing, cutting and packaging systems.",
            overviewTitle: "Cereal Bar",
            overviewHighlight: "Production Solutions",
            overviewP1: "The cereal bar and granola bar market is growing rapidly. At Girisim Makina, we offer complete bar production lines that can process oats, puffed rice, corn flakes and other cereals.",
            overviewP2: "Customized systems for bars with honey, sugar syrup or chocolate binders. Mixing, molding, cooling and cutting units.",
            ctaTitle: "Get a Quote for Cereal Bar Line",
            videos: ["Cereal Bar Production", "Granola Bar Line"],
            featuresTitle: "Line",
            featuresHighlight: "Components",
            features: [
                { title: "Mixing System", desc: "Automatic dosing and mixing for homogeneous blend of cereals, nuts, honey and other binders." },
                { title: "Cooking/Heating", desc: "Controlled heating system for honey-based mixtures. Adjustable temperature and duration." },
                { title: "Forming", desc: "Bar forming in different sizes and thicknesses. Roller or press systems." },
                { title: "Cooling Tunnel", desc: "Fast and controlled cooling. System optimized for bar stability." },
                { title: "Cutting System", desc: "Ultrasonic or blade cutting. Precise size control." },
                { title: "Packaging", desc: "Flow pack packaging integration. Single or multi-pack options." }
            ],
            specsTitle: "Capacity",
            specsHighlight: "Options",
            specsHeaders: ["Model", "Capacity", "Bar Size", "Line Width", "Power"]
        },
        "protein-bar": {
            title: "Protein Bar",
            titleHighlight: "Production Lines",
            heroDesc: "Complete lines for protein bar, energy bar, nougat bar and caramel bar production. Including mixing, forming, coating and packaging.",
            overviewTitle: "Protein Bar",
            overviewHighlight: "Production Solutions",
            overviewP1: "The protein bar market is growing rapidly. At Girisim Makina, we offer complete bar production lines that can process nougat, caramel, nut paste and other fillings.",
            overviewP2: "Extrusion or slab forming systems, chocolate enrobing, cooling tunnel and flow pack packaging integrated solutions.",
            ctaTitle: "Get a Quote for Protein Bar Line",
            videos: ["Nougat Bar Line", "Coco Bar Line"]
        },
        "chocolate-coating": {
            title: "Chocolate Coating",
            titleHighlight: "Systems",
            heroDesc: "Chocolate enrobing machines and cooling tunnels. Professional coating solutions for biscuits, wafers, bars and confectionery products.",
            overviewTitle: "Chocolate Coating",
            overviewHighlight: "Solutions",
            overviewP1: "Our chocolate enrobing machines coat your products with full or half chocolate coating. Provides precise temperature control and uniform coating thickness.",
            overviewP2: "We offer integrated systems with cooling tunnels. Decoration units, drizzle systems and bottom coating options available.",
            ctaTitle: "Get a Quote for Chocolate Coating System",
            videos: ["Enrobing System", "Cooling Tunnel", "Coating Examples"],
            featuresTitle: "System",
            featuresHighlight: "Components",
            features: [
                { title: "Tempering", desc: "Automatic chocolate tempering unit. Crystallization control." },
                { title: "Coating Curtain", desc: "Top and bottom coating system. Adjustable thickness." },
                { title: "Cooling Tunnel", desc: "Controlled cooling. Optimized for glossy finish." },
                { title: "Decoration", desc: "Drizzling and sprinkling systems. Custom designs." },
                { title: "Recycling", desc: "Excess chocolate recovery. Efficient system." },
                { title: "PLC Control", desc: "Fully automatic control. Recipe storage." }
            ]
        },
        "biscuit-sandwiching": {
            title: "Biscuit Sandwiching",
            titleHighlight: "Machines",
            heroDesc: "Cream spreading and biscuit sandwiching machines for sandwich biscuit production. High speed, precise cream dosing and easy cleaning.",
            overviewTitle: "Sandwich Biscuit",
            overviewHighlight: "Production Solutions",
            overviewP1: "Biscuit sandwiching machines create sandwich biscuits by spreading cream on round or square biscuits. Suitable for different cream types (chocolate, vanilla, hazelnut).",
            overviewP2: "Servo motor precise dosing, automatic biscuit alignment and sandwiching system. On-edge or flat feed options.",
            ctaTitle: "Get a Quote for Biscuit Sandwiching Machine",
            videos: ["Biscuit Production Line"]
        },
        "flow-pack": {
            title: "Flow Pack",
            titleHighlight: "Machines",
            heroDesc: "Horizontal flow pack (HFFS) packaging machines. High-speed packaging for biscuits, wafers, chocolate, soap, bread and more.",
            overviewTitle: "Flow Pack",
            overviewHighlight: "Packaging Solutions",
            overviewP1: "Our flow pack machines operate on the horizontal form-fill-seal principle. Offers single, multiple or tray packaging options. Servo motor precise cutting and sealing systems.",
            overviewP2: "Vacuum and MAP (Modified Atmosphere Packaging) options available. Can work integrated with automatic feeding systems and counters.",
            ctaTitle: "Get a Quote for Flow Pack Machine",
            videos: ["Wafer Packaging", "Soap Packaging", "Bread Packaging", "Wet Wipes", "Bar Packaging"]
        },
        overwrapping: {
            title: "Overwrapping",
            titleHighlight: "Machines",
            heroDesc: "Envelope type wrapping machines. Professional packaging for rice cakes, biscuits, soap, boxes and flat surface products.",
            overviewTitle: "Envelope Type",
            overviewHighlight: "Packaging",
            overviewP1: "Overwrapping machines wrap products in envelope style, providing tight and elegant packaging. Ideal especially for rice cakes, biscuit packs, soap and boxed products.",
            overviewP2: "Both flow pack and X-fold overwrap combinations can be offered. Compatible with different film types: OPP, BOPP, cellophane.",
            ctaTitle: "Get a Quote for Overwrapping Machine",
            videos: ["Rice Cake Packaging", "Automatic Packaging", "Automatic Feeding"]
        },
        thermoform: {
            title: "Thermoform",
            titleHighlight: "Packaging",
            heroDesc: "Thermoform packaging machines. Vacuum and MAP (modified atmosphere) packaging for cheese, meat, vegetables, fruits and ready meals.",
            overviewTitle: "Thermoform",
            overviewHighlight: "Packaging Solutions",
            overviewP1: "Thermoform machines package by placing the product on heat-formed bottom film and sealing with top film. Extends shelf life with vacuum or gas (MAP).",
            overviewP2: "Ideal for cheese, meat, vegetables, fruits, ready meals and medical products. Different mold sizes and multi-compartment options.",
            ctaTitle: "Get a Quote for Thermoform Machine",
            videos: ["Cheese Packaging"]
        },
        vffs: {
            title: "VFFS Vertical",
            titleHighlight: "Filling Machines",
            heroDesc: "Vertical form-fill-seal (VFFS) packaging machines. Weighing and filling systems for granules, powder, nuts, sugar, coffee and snack products.",
            overviewTitle: "VFFS Vertical Filling",
            overviewHighlight: "Solutions",
            overviewP1: "Our VFFS machines operate on the vertical form-fill-seal principle. Multi-head weighing systems provide precise weight control.",
            overviewP2: "Different filling systems for granules, powder, liquid and sticky products. Stick pack, pillow bag, gusseted bag and doypack options.",
            ctaTitle: "Get a Quote for VFFS Machine",
            videos: ["Nut Filling", "Legume Packaging", "Multi-Head Weighing"],
            featuresTitle: "Machine",
            featuresHighlight: "Features",
            features: [
                { title: "Multihead Weigher", desc: "10-14-16 head combination weigher. High precision." },
                { title: "Package Formats", desc: "Pillow, gusset, doypack, stick pack options." },
                { title: "Gas Filling", desc: "Nitrogen gas MAP packaging. Extended shelf life." },
                { title: "High Speed", desc: "Up to 120 packs/minute production capacity." },
                { title: "Coding", desc: "Date coding and lot number integration." },
                { title: "Servo Motor", desc: "Precise control. Fast format changeover." }
            ]
        },
        halvah: {
            title: "Halvah",
            titleHighlight: "Packaging",
            heroDesc: "Halvah slicing and packaging machines. Slicing, weighing and packaging solutions for tahini halvah, flour halvah, pismaniye and similar products.",
            overviewTitle: "Halvah",
            overviewHighlight: "Processing Solutions",
            overviewP1: "Halvah packaging machines are designed for slicing block halvah or direct packaging. Ultrasonic cutting, wire cutting and blade cutting options.",
            overviewP2: "Can be integrated with flow pack or thermoform packaging. Precise weighing systems for different weights.",
            ctaTitle: "Get a Quote for Halvah Packaging Machine",
            videos: ["Briquet Type Packaging"]
        },
        "chocolate-cooling": {
            title: "Chocolate Cooling",
            titleHighlight: "Tunnels",
            heroDesc: "Chocolate cooling tunnels. Professional solutions for controlled cooling of chocolate products after coating and molding.",
            overviewTitle: "Chocolate Cooling",
            overviewHighlight: "Solutions",
            overviewP1: "Our chocolate cooling tunnels provide controlled cooling of chocolate products after enrobing and molding. Optimized cooling profile with multiple temperature zones.",
            overviewP2: "Solutions for every capacity with different length and width options. Energy efficient compressors and stainless steel construction.",
            ctaTitle: "Get a Quote for Chocolate Cooling Tunnel",
            videos: ["Cooling Tunnel"],
            featuresTitle: "System",
            featuresHighlight: "Features",
            features: [
                { title: "Multiple Temperature Zones", desc: "3-5 independent cooling zones. Each zone individually controllable." },
                { title: "Air Circulation", desc: "Optimized airflow. Homogeneous cooling distribution." },
                { title: "Adjustable Speed", desc: "Belt speed control. Cooling time adjustment by product type." },
                { title: "Energy Efficiency", desc: "High efficiency compressors. Low energy consumption." },
                { title: "PLC Control", desc: "Touchscreen control panel. All parameters monitorable." },
                { title: "Stainless Steel", desc: "Full stainless steel construction. Hygienic design." }
            ],
            specsTitle: "Model",
            specsHighlight: "Options",
            specsHeaders: ["Model", "Length", "Belt Width", "Cooling Capacity", "Power"]
        },
        "coconut-bar": {
            title: "Coconut Bar",
            titleHighlight: "Production Lines",
            heroDesc: "Coconut bar production lines. Complete solutions with glucose preparation, mixing, molding, cooling and chocolate coating.",
            overviewTitle: "Coconut Bar",
            overviewHighlight: "Production Solutions",
            overviewP1: "Coconut bar production lines cover glucose syrup preparation, coconut mixing, molding and chocolate coating processes.",
            overviewP2: "Adjustable systems for different bar sizes and weights. Chocolate coating and cooling tunnel integration.",
            ctaTitle: "Get a Quote for Coconut Bar Line",
            videos: ["Coco Bar Production"],
            featuresTitle: "Line",
            featuresHighlight: "Components",
            features: [
                { title: "Glucose Tank", desc: "Glucose syrup storage and dosing system. Automatic temperature control." },
                { title: "Syrup Cooking", desc: "Invert syrup cooking tank. Precise temperature and consistency control." },
                { title: "Z-Type Mixer", desc: "Coconut and syrup mixing. Homogeneous mass production." },
                { title: "Molding Machine", desc: "Pressing coconut mass into bar shape. Different mold options." },
                { title: "Cooling Tunnel", desc: "Cooling of molded bars. Stabilization before coating." },
                { title: "Chocolate Coating", desc: "Full coating system. Chocolate cooling tunnel integration." }
            ],
            specsTitle: "Capacity",
            specsHighlight: "Options",
            specsHeaders: ["Model", "Capacity", "Bar Weight", "Line Width", "Power"]
        },
        "filling-machines": {
            title: "Filling",
            titleHighlight: "Machines",
            heroDesc: "Filling and weighing systems for powder and granular products. Auger, linear, multihead and volumetric filling options.",
            overviewTitle: "Filling Systems",
            overviewHighlight: "Solutions",
            overviewP1: "Our filling machines provide precise weighing and dosing for powder, granular and particle products. Auger, linear and multihead weighing options.",
            overviewP2: "Full integration with VFFS machines. Customized filling solutions for different product types.",
            ctaTitle: "Get a Quote for Filling Machine",
            videos: ["Filling System"],
            featuresTitle: "System",
            featuresHighlight: "Types",
            features: [
                { title: "Auger Filling", desc: "Auger weighing system for powder products. Flour, sugar, spices etc." },
                { title: "Linear Weigher", desc: "2-4 head linear weighing systems. For granular and particle products." },
                { title: "Multihead Weigher", desc: "10-16 head multihead systems. High speed and precision." },
                { title: "Volumetric Filling", desc: "Cup system for fixed volume products. Fast and economical." },
                { title: "PLC Control", desc: "Touchscreen control. Recipe storage and recall." },
                { title: "VFFS Integration", desc: "Full integration with vertical packaging machines. Synchronized operation." }
            ],
            specsTitle: "Model",
            specsHighlight: "Options",
            specsHeaders: ["Model", "Type", "Capacity", "Weighing Range", "Accuracy"]
        },
        "chocolate-preparation": {
            title: "Chocolate Preparation",
            titleHighlight: "Kitchen",
            heroDesc: "Chocolate preparation kitchen equipment. Fat melting, mixing, ball mill, stock tank and tempering machines.",
            overviewTitle: "Chocolate Preparation",
            overviewHighlight: "Solutions",
            overviewP1: "Our chocolate preparation kitchen equipment covers cocoa butter melting, raw material mixing, fine grinding and tempering processes.",
            overviewP2: "Ball mills achieve 20-25 micron fineness. Complete solutions with stock tanks and tempering machines.",
            ctaTitle: "Get a Quote for Chocolate Preparation Kitchen",
            videos: ["Chocolate Preparation"],
            featuresTitle: "Kitchen",
            featuresHighlight: "Components",
            features: [
                { title: "Fat Melting Tank", desc: "Melting of cocoa butter and other fats. Water bath heating system." },
                { title: "Pre-Mixing Mixer", desc: "Pre-mixing of chocolate raw materials. Homogeneous mass production." },
                { title: "Ball Mill", desc: "Fine grinding system. 20-25 micron particle size." },
                { title: "Stock Tank", desc: "Storage of prepared chocolate. Temperature controlled." },
                { title: "Powdered Sugar Mill", desc: "Grinding crystal sugar to powder. High fineness." },
                { title: "Tempering Machine", desc: "Tempering for chocolate crystallization. Glossy finish." }
            ],
            specsTitle: "Capacity",
            specsHighlight: "Options",
            specsHeaders: ["Equipment", "Model", "Capacity", "Power"]
        },
        "sugar-mill": {
            title: "Powdered Sugar",
            titleHighlight: "Mill",
            heroDesc: "Powdered sugar mills. High capacity and energy efficient mills for grinding crystal sugar to powder.",
            overviewTitle: "Powdered Sugar",
            overviewHighlight: "Mill Solutions",
            overviewP1: "Our powdered sugar mills grind crystal sugar to the desired fineness. The cooling system prevents sugar crystallization.",
            overviewP2: "Suitable for small and large scale production with different capacity options. Stainless steel construction and easy maintenance.",
            ctaTitle: "Get a Quote for Powdered Sugar Mill",
            videos: ["Powdered Sugar Grinding"],
            featuresTitle: "Mill",
            featuresHighlight: "Features",
            features: [
                { title: "High Capacity", desc: "Grinding capacity up to 900 kg/hour. Continuous operation." },
                { title: "Fine Grinding", desc: "50-100 micron particle size. Adjustable fineness." },
                { title: "Low Energy", desc: "Optimized rotor design. Efficient energy usage." },
                { title: "Stainless Steel", desc: "All food contact parts are stainless steel." },
                { title: "Cooling System", desc: "Temperature control during grinding. Sugar does not crystallize." },
                { title: "Easy Maintenance", desc: "Quick cleaning and maintenance. Easy part replacement." }
            ],
            specsTitle: "Model",
            specsHighlight: "Options",
            specsHeaders: ["Model", "Capacity", "Fineness", "Motor Power", "Weight"]
        },
        "cookie-capping": {
            title: "Cookie Capping",
            titleHighlight: "Machines",
            heroDesc: "Cookie capping and marshmallow sandwich machines. Complete lines with biscuit feeding, marshmallow filling, capping and chocolate coating.",
            overviewTitle: "Cookie Capping",
            overviewHighlight: "Production Solutions",
            overviewP1: "Cookie capping machines fill marshmallow or cream on biscuit base and cap with top biscuit. Complete lines with chocolate coating integration.",
            overviewP2: "Adjustable systems for different biscuit sizes and filling types. Flow pack packaging integration.",
            ctaTitle: "Get a Quote for Cookie Capping Machine",
            videos: ["Cookie Capping Line"],
            featuresTitle: "Line",
            featuresHighlight: "Components",
            features: [
                { title: "Biscuit Feeding System", desc: "Automatic biscuit feeding and sorting. Adapts to different sizes." },
                { title: "Marshmallow Preparation", desc: "Marshmallow preparation and cooking equipment. Consistency control." },
                { title: "Depositor", desc: "Precise marshmallow dosing. Adjustable filling amount." },
                { title: "Capping System", desc: "Automatic top biscuit placement. Fast and precise." },
                { title: "Chocolate Coating", desc: "Full coating system. Various coating options." },
                { title: "Packaging", desc: "Flow pack packaging integration. Single or multi-pack." }
            ],
            specsTitle: "Capacity",
            specsHighlight: "Options",
            specsHeaders: ["Model", "Capacity", "Biscuit Diameter", "Filling Amount", "Power"]
        }
    },
    ru: {
        common: {
            tag_production: "Производственные линии",
            tag_production_machinery: "Производственное оборудование",
            tag_packaging: "Упаковочные машины",
            getQuote: "Получить предложение",
            whatsapp: "WhatsApp",
            email: "Эл. почта",
            videos: "Видео",
            countries: "Стран",
            support: "Поддержка",
            perMin: "Упак/мин",
            perHour: "кг/час",
            cycleMin: "Цикл/мин",
            pcsMin: "шт/мин",
            featuresTag: "Характеристики",
            specsTag: "Технические характеристики",
            specsNote: "* Производительность может варьироваться в зависимости от типа продукта и рецептуры.",
            relatedTag: "Связанные продукты",
            relatedTitle: "Другие наши",
            relatedHighlight: "Машины",
            ctaDesc: "Наша команда экспертов готова предложить наиболее подходящее решение для вашего проекта",
            watchVideos: "Смотреть видео"
        },
        wafer: {
            title: "Линии производства",
            titleHighlight: "вафель",
            heroDesc: "Комплектные линии производства вафель. Решения под ключ от подготовки теста до резки, от крема до упаковки.",
            overviewTitle: "Решения для",
            overviewHighlight: "производства вафель",
            overviewP1: "В Girisim Makina мы производим линии производства вафель мирового класса. Мы предлагаем комплексные решения с автоматической подготовкой теста, высокопроизводительными печами, системами крема и режущими блоками.",
            overviewP2: "Наши печи доступны с вариантами 39-51-63-75 пластин для различных мощностей. Индивидуальные линии для производства плоских вафель, вафель с начинкой, вафельных палочек и вафельных рожков.",
            ctaTitle: "Получить предложение на линию производства вафель",
            videos: ["Вафельная печь", "Крем для вафель", "Резка вафель"],
            featuresTitle: "Компоненты",
            featuresHighlight: "Линии",
            features: [
                { title: "Подготовка теста", desc: "Автоматические системы дозирования и смешивания для однородного теста. Полностью автоматическая система с ПЛК управлением." },
                { title: "Вафельные печи", desc: "Газовые или электрические печи высокой производительности. Точный контроль температуры и низкое энергопотребление." },
                { title: "Система крема", desc: "Одно- или многослойное нанесение крема на вафли. Настраиваемая система для различных типов крема." },
                { title: "Охлаждающий тоннель", desc: "Эффективная система охлаждения для быстрого затвердевания. Энергосберегающая конструкция." },
                { title: "Режущая машина", desc: "Точная резка по размеру. Настраивается для различных размеров и форм." },
                { title: "Упаковка", desc: "Финальная упаковка flow pack или overwrapping. Интегрированные решения." }
            ],
            specsTitle: "Варианты",
            specsHighlight: "мощности",
            specsHeaders: ["Модель", "Производительность", "Размер пластины", "Количество пластин", "Мощность"]
        },
        "cereal-bar": {
            title: "Линии производства",
            titleHighlight: "зерновых батончиков",
            heroDesc: "Линии производства зерновых и гранола батончиков. Комплексные решения с системами смешивания, прессования, резки и упаковки.",
            overviewTitle: "Решения для производства",
            overviewHighlight: "зерновых батончиков",
            overviewP1: "Рынок зерновых и гранола батончиков быстро растет. В Girisim Makina мы предлагаем комплектные линии производства батончиков для переработки овса, воздушного риса, кукурузных хлопьев и других злаков.",
            overviewP2: "Индивидуальные системы для батончиков с медом, сахарным сиропом или шоколадными связующими. Блоки смешивания, формования, охлаждения и резки.",
            ctaTitle: "Получить предложение на линию зерновых батончиков",
            videos: ["Производство зерновых батончиков", "Линия гранола батончиков"],
            featuresTitle: "Компоненты",
            featuresHighlight: "Линии",
            features: [
                { title: "Система смешивания", desc: "Автоматическое дозирование и смешивание для однородной смеси злаков, орехов, мёда и других связующих." },
                { title: "Варка/Нагрев", desc: "Контролируемая система нагрева для медовых смесей. Регулируемая температура и продолжительность." },
                { title: "Формование", desc: "Формование батончиков различных размеров и толщины. Роликовые или прессовые системы." },
                { title: "Охлаждающий тоннель", desc: "Быстрое и контролируемое охлаждение. Система оптимизирована для стабильности батончиков." },
                { title: "Система резки", desc: "Ультразвуковая или ножевая резка. Точный контроль размеров." },
                { title: "Упаковка", desc: "Интеграция упаковки flow pack. Варианты одиночной или групповой упаковки." }
            ],
            specsTitle: "Варианты",
            specsHighlight: "мощности",
            specsHeaders: ["Модель", "Производительность", "Размер батончика", "Ширина линии", "Мощность"]
        },
        "protein-bar": {
            title: "Линии производства",
            titleHighlight: "протеиновых батончиков",
            heroDesc: "Комплектные линии для производства протеиновых батончиков, энергетических батончиков, нуги и карамельных батончиков. Включая смешивание, формование, покрытие и упаковку.",
            overviewTitle: "Решения для производства",
            overviewHighlight: "протеиновых батончиков",
            overviewP1: "Рынок протеиновых батончиков быстро растет. В Girisim Makina мы предлагаем комплектные линии производства батончиков для переработки нуги, карамели, ореховой пасты и других начинок.",
            overviewP2: "Экструзионные или слябовые формовочные системы, шоколадное покрытие, охлаждающий тоннель и интегрированные решения для флоу-пак упаковки.",
            ctaTitle: "Получить предложение на линию протеиновых батончиков",
            videos: ["Линия нуги батончиков", "Линия кокосовых батончиков"]
        },
        "chocolate-coating": {
            title: "Системы",
            titleHighlight: "шоколадного покрытия",
            heroDesc: "Машины для глазирования шоколадом и охлаждающие тоннели. Профессиональные решения для покрытия печенья, вафель, батончиков и кондитерских изделий.",
            overviewTitle: "Решения для",
            overviewHighlight: "шоколадного покрытия",
            overviewP1: "Наши машины для глазирования покрывают ваши продукты полным или половинным шоколадным покрытием. Обеспечивает точный контроль температуры и равномерную толщину покрытия.",
            overviewP2: "Мы предлагаем интегрированные системы с охлаждающими тоннелями. Доступны декоративные блоки, системы поливки и варианты нижнего покрытия.",
            ctaTitle: "Получить предложение на систему шоколадного покрытия",
            videos: ["Система глазирования", "Охлаждающий тоннель", "Примеры покрытия"],
            featuresTitle: "Компоненты",
            featuresHighlight: "системы",
            features: [
                { title: "Темперирование", desc: "Автоматический блок темперирования шоколада. Контроль кристаллизации." },
                { title: "Завеса покрытия", desc: "Система верхнего и нижнего покрытия. Регулируемая толщина." },
                { title: "Охлаждающий тоннель", desc: "Контролируемое охлаждение. Оптимизировано для глянцевой поверхности." },
                { title: "Декорирование", desc: "Системы поливки и посыпки. Индивидуальный дизайн." },
                { title: "Рециркуляция", desc: "Возврат излишков шоколада. Эффективная система." },
                { title: "ПЛК управление", desc: "Полностью автоматическое управление. Сохранение рецептов." }
            ]
        },
        "biscuit-sandwiching": {
            title: "Машины для",
            titleHighlight: "сэндвич-печенья",
            heroDesc: "Машины для нанесения крема и соединения печенья для производства сэндвич-печенья. Высокая скорость, точная дозировка крема и легкая очистка.",
            overviewTitle: "Решения для производства",
            overviewHighlight: "сэндвич-печенья",
            overviewP1: "Машины для сэндвич-печенья создают сэндвич-печенье, нанося крем на круглое или квадратное печенье. Подходит для различных типов крема (шоколад, ваниль, фундук).",
            overviewP2: "Точная дозировка серводвигателя, автоматическое выравнивание печенья и система соединения. Варианты подачи на ребро или плоской подачи.",
            ctaTitle: "Получить предложение на машину для сэндвич-печенья",
            videos: ["Линия производства печенья"]
        },
        "flow-pack": {
            title: "Машины",
            titleHighlight: "Flow Pack",
            heroDesc: "Горизонтальные упаковочные машины flow pack (HFFS). Высокоскоростная упаковка для печенья, вафель, шоколада, мыла, хлеба и многого другого.",
            overviewTitle: "Решения для упаковки",
            overviewHighlight: "Flow Pack",
            overviewP1: "Наши машины flow pack работают по принципу горизонтального формования-наполнения-запечатывания. Предлагает варианты одиночной, множественной или лотковой упаковки. Точные системы резки и запечатывания серводвигателем.",
            overviewP2: "Доступны варианты вакуума и MAP (Модифицированная атмосферная упаковка). Может работать интегрированно с автоматическими системами подачи и счетчиками.",
            ctaTitle: "Получить предложение на машину Flow Pack",
            videos: ["Упаковка вафель", "Упаковка мыла", "Упаковка хлеба", "Влажные салфетки", "Упаковка батончиков"]
        },
        overwrapping: {
            title: "Машины",
            titleHighlight: "Overwrapping",
            heroDesc: "Машины для упаковки конвертного типа. Профессиональная упаковка для рисовых кексов, печенья, мыла, коробок и продуктов с плоской поверхностью.",
            overviewTitle: "Упаковка",
            overviewHighlight: "конвертного типа",
            overviewP1: "Машины overwrapping заворачивают продукты в стиле конверта, обеспечивая плотную и элегантную упаковку. Идеально подходит особенно для рисовых кексов, упаковок печенья, мыла и коробочных продуктов.",
            overviewP2: "Могут быть предложены как комбинации flow pack, так и X-fold overwrap. Совместимы с различными типами пленки: OPP, BOPP, целлофан.",
            ctaTitle: "Получить предложение на машину Overwrapping",
            videos: ["Упаковка рисовых кексов", "Автоматическая упаковка", "Автоматическая подача"]
        },
        thermoform: {
            title: "Термоформовочная",
            titleHighlight: "упаковка",
            heroDesc: "Термоформовочные упаковочные машины. Вакуумная и MAP упаковка для сыра, мяса, овощей, фруктов и готовых блюд.",
            overviewTitle: "Решения для",
            overviewHighlight: "термоформовочной упаковки",
            overviewP1: "Термоформовочные машины упаковывают, помещая продукт на термоформованную нижнюю пленку и запечатывая верхней пленкой. Продлевает срок хранения с помощью вакуума или газа (MAP).",
            overviewP2: "Идеально подходит для сыра, мяса, овощей, фруктов, готовых блюд и медицинских продуктов. Различные размеры форм и многосекционные варианты.",
            ctaTitle: "Получить предложение на термоформовочную машину",
            videos: ["Упаковка сыра"]
        },
        vffs: {
            title: "Вертикальные",
            titleHighlight: "фасовочные машины VFFS",
            heroDesc: "Вертикальные упаковочные машины (VFFS). Системы взвешивания и фасовки для гранул, порошка, орехов, сахара, кофе и снеков.",
            overviewTitle: "Решения для вертикальной",
            overviewHighlight: "фасовки VFFS",
            overviewP1: "Наши машины VFFS работают по принципу вертикального формования-наполнения-запечатывания. Многоголовочные весовые системы обеспечивают точный контроль веса.",
            overviewP2: "Различные системы фасовки для гранул, порошка, жидких и липких продуктов. Варианты стик-пак, подушечная упаковка, пакет с боковыми складками и дойпак.",
            ctaTitle: "Получить предложение на машину VFFS",
            videos: ["Фасовка орехов", "Упаковка бобовых", "Многоголовочное взвешивание"],
            featuresTitle: "Характеристики",
            featuresHighlight: "машины",
            features: [
                { title: "Многоголовочные весы", desc: "Комбинационные весы с 10-14-16 головками. Высокая точность." },
                { title: "Форматы упаковки", desc: "Подушечная, с боковыми складками, дойпак, стик-пак варианты." },
                { title: "Газонаполнение", desc: "MAP упаковка с азотом. Увеличенный срок хранения." },
                { title: "Высокая скорость", desc: "Производительность до 120 упаковок/минуту." },
                { title: "Кодирование", desc: "Интеграция кодирования даты и номера партии." },
                { title: "Серводвигатель", desc: "Точное управление. Быстрая смена формата." }
            ]
        },
        halvah: {
            title: "Упаковка",
            titleHighlight: "халвы",
            heroDesc: "Машины для нарезки и упаковки халвы. Решения для нарезки, взвешивания и упаковки тахинной халвы, мучной халвы, пишмание и аналогичных продуктов.",
            overviewTitle: "Решения для",
            overviewHighlight: "обработки халвы",
            overviewP1: "Машины для упаковки халвы предназначены для нарезки блочной халвы или прямой упаковки. Варианты ультразвуковой резки, проволочной резки и резки лезвием.",
            overviewP2: "Могут быть интегрированы с упаковкой flow pack или термоформовочной упаковкой. Точные весовые системы для различных весов.",
            ctaTitle: "Получить предложение на машину для упаковки халвы",
            videos: ["Упаковка брикетного типа"]
        },
        "chocolate-cooling": {
            title: "Шоколадные Охлаждающие",
            titleHighlight: "Туннели",
            heroDesc: "Шоколадные охлаждающие тоннели. Профессиональные решения для контролируемого охлаждения шоколадных изделий после покрытия и формования.",
            overviewTitle: "Решения для",
            overviewHighlight: "шоколадного охлаждения",
            overviewP1: "Наши шоколадные охлаждающие тоннели обеспечивают контролируемое охлаждение шоколадных изделий после глазирования и формования. Оптимизированный профиль охлаждения с несколькими температурными зонами.",
            overviewP2: "Решения для любой производительности с различными вариантами длины и ширины. Энергоэффективные компрессоры и конструкция из нержавеющей стали.",
            ctaTitle: "Получить предложение на шоколадный охлаждающий тоннель",
            videos: ["Охлаждающий тоннель"],
            featuresTitle: "Характеристики",
            featuresHighlight: "системы",
            features: [
                { title: "Множество температурных зон", desc: "3-5 независимых зон охлаждения. Каждая зона управляется отдельно." },
                { title: "Циркуляция воздуха", desc: "Оптимизированный воздушный поток. Однородное распределение охлаждения." },
                { title: "Регулируемая скорость", desc: "Управление скоростью ленты. Регулировка времени охлаждения по типу продукта." },
                { title: "Энергоэффективность", desc: "Высокоэффективные компрессоры. Низкое энергопотребление." },
                { title: "ПЛК управление", desc: "Панель управления с сенсорным экраном. Все параметры контролируемы." },
                { title: "Нержавеющая сталь", desc: "Полностью из нержавеющей стали. Гигиеничная конструкция." }
            ],
            specsTitle: "Варианты",
            specsHighlight: "моделей",
            specsHeaders: ["Модель", "Длина", "Ширина ленты", "Холодильная мощность", "Мощность"]
        },
        "coconut-bar": {
            title: "Кокосовые Батончики",
            titleHighlight: "Линия Производства",
            heroDesc: "Линии производства кокосовых батончиков. Комплексные решения с подготовкой глюкозы, смешиванием, формованием, охлаждением и шоколадным покрытием.",
            overviewTitle: "Решения для производства",
            overviewHighlight: "кокосовых батончиков",
            overviewP1: "Линии производства кокосовых батончиков включают подготовку глюкозного сиропа, смешивание кокоса, формование и шоколадное покрытие.",
            overviewP2: "Настраиваемые системы для различных размеров и весов батончиков. Интеграция шоколадного покрытия и охлаждающего тоннеля.",
            ctaTitle: "Получить предложение на линию кокосовых батончиков",
            videos: ["Производство кокосовых батончиков"],
            featuresTitle: "Компоненты",
            featuresHighlight: "Линии",
            features: [
                { title: "Глюкозный танк", desc: "Система хранения и дозирования глюкозного сиропа. Автоматический контроль температуры." },
                { title: "Варка сиропа", desc: "Танк для варки инвертного сиропа. Точный контроль температуры и консистенции." },
                { title: "Z-образный миксер", desc: "Смешивание кокоса и сиропа. Получение однородной массы." },
                { title: "Формовочная машина", desc: "Прессование кокосовой массы в форму батончика. Различные варианты форм." },
                { title: "Охлаждающий тоннель", desc: "Охлаждение сформованных батончиков. Стабилизация перед покрытием." },
                { title: "Шоколадное покрытие", desc: "Система полного покрытия. Интеграция с охлаждающим тоннелем." }
            ],
            specsTitle: "Варианты",
            specsHighlight: "мощности",
            specsHeaders: ["Модель", "Производительность", "Вес батончика", "Ширина линии", "Мощность"]
        },
        "filling-machines": {
            title: "Дозирующие",
            titleHighlight: "Машины",
            heroDesc: "Системы дозирования и взвешивания для порошковых и гранулированных продуктов. Шнековые, линейные, многоголовочные и объёмные варианты дозирования.",
            overviewTitle: "Решения для",
            overviewHighlight: "систем дозирования",
            overviewP1: "Наши дозирующие машины обеспечивают точное взвешивание и дозирование порошковых, гранулированных и кусковых продуктов. Шнековые, линейные и многоголовочные варианты взвешивания.",
            overviewP2: "Полная интеграция с машинами VFFS. Индивидуальные решения дозирования для различных типов продуктов.",
            ctaTitle: "Получить предложение на дозирующую машину",
            videos: ["Система дозирования"],
            featuresTitle: "Типы",
            featuresHighlight: "систем",
            features: [
                { title: "Шнековое дозирование", desc: "Шнековая система взвешивания для порошковых продуктов. Мука, сахар, специи и т.д." },
                { title: "Линейные весы", desc: "Линейные системы взвешивания с 2-4 головками. Для гранулированных и кусковых продуктов." },
                { title: "Многоголовочные весы", desc: "Многоголовочные системы с 10-16 головками. Высокая скорость и точность." },
                { title: "Объёмное дозирование", desc: "Стаканчиковая система для продуктов фиксированного объёма. Быстро и экономично." },
                { title: "ПЛК управление", desc: "Управление с сенсорным экраном. Сохранение и вызов рецептов." },
                { title: "Интеграция с VFFS", desc: "Полная интеграция с вертикальными упаковочными машинами. Синхронная работа." }
            ],
            specsTitle: "Варианты",
            specsHighlight: "моделей",
            specsHeaders: ["Модель", "Тип", "Производительность", "Диапазон взвешивания", "Точность"]
        },
        "chocolate-preparation": {
            title: "Шоколадная",
            titleHighlight: "Кухня",
            heroDesc: "Оборудование шоколадной кухни. Танки для плавления жира, миксеры, шаровые мельницы, стоковые танки и темперирующие машины.",
            overviewTitle: "Решения для",
            overviewHighlight: "подготовки шоколада",
            overviewP1: "Наше оборудование для шоколадной кухни включает плавление какао-масла, смешивание сырья, тонкий помол и темперирование.",
            overviewP2: "Шаровые мельницы достигают тонкости 20-25 микрон. Комплексные решения со стоковыми танками и темперирующими машинами.",
            ctaTitle: "Получить предложение на шоколадную кухню",
            videos: ["Подготовка шоколада"],
            featuresTitle: "Компоненты",
            featuresHighlight: "кухни",
            features: [
                { title: "Танк для плавления жира", desc: "Плавление какао-масла и других жиров. Система нагрева водяной баней." },
                { title: "Миксер предварительного смешивания", desc: "Предварительное смешивание шоколадного сырья. Получение однородной массы." },
                { title: "Шаровая мельница", desc: "Система тонкого помола. Размер частиц 20-25 микрон." },
                { title: "Стоковый танк", desc: "Хранение готового шоколада. С контролем температуры." },
                { title: "Мельница для сахарной пудры", desc: "Помол кристаллического сахара в пудру. Высокая тонкость." },
                { title: "Темперирующая машина", desc: "Темперирование для кристаллизации шоколада. Глянцевая поверхность." }
            ],
            specsTitle: "Варианты",
            specsHighlight: "мощности",
            specsHeaders: ["Оборудование", "Модель", "Производительность", "Мощность"]
        },
        "sugar-mill": {
            title: "Сахарная",
            titleHighlight: "Пудра Мельница",
            heroDesc: "Мельницы для сахарной пудры. Высокопроизводительные и энергоэффективные мельницы для помола кристаллического сахара в пудру.",
            overviewTitle: "Решения для",
            overviewHighlight: "мельниц сахарной пудры",
            overviewP1: "Наши мельницы для сахарной пудры измельчают кристаллический сахар до нужной тонкости. Система охлаждения предотвращает кристаллизацию сахара.",
            overviewP2: "Подходит для мелкого и крупного производства с различными вариантами мощности. Конструкция из нержавеющей стали и лёгкое обслуживание.",
            ctaTitle: "Получить предложение на мельницу сахарной пудры",
            videos: ["Помол сахарной пудры"],
            featuresTitle: "Характеристики",
            featuresHighlight: "мельницы",
            features: [
                { title: "Высокая производительность", desc: "Производительность помола до 900 кг/час. Непрерывная работа." },
                { title: "Тонкий помол", desc: "Размер частиц 50-100 микрон. Регулируемая тонкость." },
                { title: "Низкое энергопотребление", desc: "Оптимизированная конструкция ротора. Эффективное использование энергии." },
                { title: "Нержавеющая сталь", desc: "Все контактирующие с пищей детали из нержавеющей стали." },
                { title: "Система охлаждения", desc: "Контроль температуры при помоле. Сахар не кристаллизуется." },
                { title: "Лёгкое обслуживание", desc: "Быстрая очистка и обслуживание. Лёгкая замена деталей." }
            ],
            specsTitle: "Варианты",
            specsHighlight: "моделей",
            specsHeaders: ["Модель", "Производительность", "Тонкость", "Мощность двигателя", "Вес"]
        },
        "cookie-capping": {
            title: "Cookie Capping",
            titleHighlight: "Машины",
            heroDesc: "Машины cookie capping и маршмеллоу-сэндвич. Комплектные линии с подачей печенья, наполнением маршмеллоу, накрыванием и шоколадным покрытием.",
            overviewTitle: "Решения для производства",
            overviewHighlight: "Cookie Capping",
            overviewP1: "Машины cookie capping наносят маршмеллоу или крем на основание печенья и накрывают верхним печеньем. Комплектные линии с интеграцией шоколадного покрытия.",
            overviewP2: "Настраиваемые системы для различных размеров печенья и типов начинки. Интеграция упаковки flow pack.",
            ctaTitle: "Получить предложение на машину Cookie Capping",
            videos: ["Линия Cookie Capping"],
            featuresTitle: "Компоненты",
            featuresHighlight: "Линии",
            features: [
                { title: "Система подачи печенья", desc: "Автоматическая подача и сортировка печенья. Адаптируется к различным размерам." },
                { title: "Подготовка маршмеллоу", desc: "Оборудование для приготовления и варки маршмеллоу. Контроль консистенции." },
                { title: "Дозатор", desc: "Точное дозирование маршмеллоу. Регулируемое количество начинки." },
                { title: "Система накрывания", desc: "Автоматическое размещение верхнего печенья. Быстро и точно." },
                { title: "Шоколадное покрытие", desc: "Система полного покрытия. Различные варианты покрытия." },
                { title: "Упаковка", desc: "Интеграция упаковки flow pack. Одиночная или групповая упаковка." }
            ],
            specsTitle: "Варианты",
            specsHighlight: "мощности",
            specsHeaders: ["Модель", "Производительность", "Диаметр печенья", "Количество начинки", "Мощность"]
        }
    },
    ar: {
        common: {
            tag_production: "خطوط الإنتاج",
            tag_production_machinery: "آلات الإنتاج",
            tag_packaging: "آلات التعبئة والتغليف",
            getQuote: "احصل على عرض سعر",
            whatsapp: "واتساب",
            email: "البريد الإلكتروني",
            videos: "فيديوهات",
            countries: "دولة",
            support: "الدعم",
            perMin: "عبوة/دقيقة",
            perHour: "كجم/ساعة",
            cycleMin: "دورة/دقيقة",
            pcsMin: "قطعة/دقيقة",
            featuresTag: "المميزات",
            specsTag: "المواصفات الفنية",
            specsNote: "* قد تختلف قيم السعة حسب نوع المنتج والتركيبة.",
            relatedTag: "منتجات ذات صلة",
            relatedTitle: "آلاتنا",
            relatedHighlight: "الأخرى",
            ctaDesc: "فريقنا المتخصص جاهز لتقديم الحل الأنسب لمشروعكم",
            watchVideos: "شاهد الفيديوهات"
        },
        wafer: {
            title: "خطوط إنتاج",
            titleHighlight: "الويفر",
            heroDesc: "خطوط إنتاج ويفر كاملة. حلول متكاملة من تحضير العجين إلى القطع، ومن الكريمة إلى التعبئة.",
            overviewTitle: "حلول إنتاج",
            overviewHighlight: "الويفر",
            overviewP1: "في جيريشيم ماكينا، نصنع خطوط إنتاج ويفر عالمية المستوى. نقدم حلولاً كاملة مع التحضير التلقائي للعجين والأفران عالية السعة وأنظمة الكريمة ووحدات القطع.",
            overviewP2: "أفراننا متوفرة بخيارات 39-51-63-75 لوحة لسعات مختلفة. خطوط مخصصة لإنتاج الويفر المسطح والويفر المحشو وعصا الويفر ومخروط الويفر.",
            ctaTitle: "احصل على عرض سعر لخط إنتاج الويفر",
            videos: ["فرن الويفر", "كريمة الويفر", "قطع الويفر"],
            featuresTitle: "مكونات",
            featuresHighlight: "الخط",
            features: [
                { title: "تحضير العجين", desc: "أنظمة جرعات وخلط أوتوماتيكية للعجين المتجانس. نظام أوتوماتيكي بالكامل بتحكم PLC." },
                { title: "أفران الويفر", desc: "أفران غاز أو كهربائية عالية السعة. تحكم دقيق في درجة الحرارة واستهلاك منخفض للطاقة." },
                { title: "نظام الكريمة", desc: "نظام كريمة ويفر أحادي أو متعدد الطبقات. نظام قابل للتعديل لأنواع الكريمة المختلفة." },
                { title: "نفق التبريد", desc: "نظام تبريد فعال للتصلب السريع. تصميم موفر للطاقة." },
                { title: "آلة القطع", desc: "قطع دقيق بالحجم. قابل للتعديل لأحجام وأشكال مختلفة." },
                { title: "التعبئة", desc: "تعبئة نهائية بفلو باك أو أوفرراپينگ. حلول متكاملة." }
            ],
            specsTitle: "خيارات",
            specsHighlight: "السعة",
            specsHeaders: ["الموديل", "السعة", "حجم اللوحة", "عدد اللوحات", "القدرة"]
        },
        "cereal-bar": {
            title: "خطوط إنتاج",
            titleHighlight: "ألواح الحبوب",
            heroDesc: "خطوط إنتاج ألواح الحبوب والجرانولا. حلول كاملة مع أنظمة الخلط والضغط والقطع والتعبئة.",
            overviewTitle: "حلول إنتاج",
            overviewHighlight: "ألواح الحبوب",
            overviewP1: "سوق ألواح الحبوب والجرانولا ينمو بسرعة. في جيريشيم ماكينا، نقدم خطوط إنتاج ألواح كاملة يمكنها معالجة الشوفان والأرز المنفوخ ورقائق الذرة والحبوب الأخرى.",
            overviewP2: "أنظمة مخصصة للألواح بالعسل أو شراب السكر أو مواد ربط الشوكولاتة. وحدات الخلط والقولبة والتبريد والقطع.",
            ctaTitle: "احصل على عرض سعر لخط ألواح الحبوب",
            videos: ["إنتاج ألواح الحبوب", "خط ألواح الجرانولا"],
            featuresTitle: "مكونات",
            featuresHighlight: "الخط",
            features: [
                { title: "نظام الخلط", desc: "جرعات وخلط أوتوماتيكي لمزيج متجانس من الحبوب والمكسرات والعسل والمواد الرابطة الأخرى." },
                { title: "الطبخ/التسخين", desc: "نظام تسخين متحكم للخلطات القائمة على العسل. درجة حرارة ومدة قابلة للتعديل." },
                { title: "التشكيل", desc: "تشكيل الألواح بأحجام وسماكات مختلفة. أنظمة بكرات أو ضغط." },
                { title: "نفق التبريد", desc: "تبريد سريع ومتحكم. نظام محسّن لاستقرار الألواح." },
                { title: "نظام القطع", desc: "قطع بالموجات فوق الصوتية أو بالشفرة. تحكم دقيق بالحجم." },
                { title: "التعبئة", desc: "تكامل تعبئة فلو باك. خيارات تعبئة فردية أو متعددة." }
            ],
            specsTitle: "خيارات",
            specsHighlight: "السعة",
            specsHeaders: ["الموديل", "السعة", "حجم اللوح", "عرض الخط", "القدرة"]
        },
        "protein-bar": {
            title: "خطوط إنتاج",
            titleHighlight: "ألواح البروتين",
            heroDesc: "خطوط كاملة لإنتاج ألواح البروتين وألواح الطاقة وألواح النوجا وألواح الكراميل. بما في ذلك الخلط والتشكيل والتغليف والتعبئة.",
            overviewTitle: "حلول إنتاج",
            overviewHighlight: "ألواح البروتين",
            overviewP1: "سوق ألواح البروتين ينمو بسرعة. في جيريشيم ماكينا، نقدم خطوط إنتاج ألواح كاملة يمكنها معالجة النوجا والكراميل ومعجون المكسرات والحشوات الأخرى.",
            overviewP2: "أنظمة البثق أو التشكيل بالألواح، تغطية الشوكولاتة، نفق التبريد وحلول التعبئة فلو باك المتكاملة.",
            ctaTitle: "احصل على عرض سعر لخط ألواح البروتين",
            videos: ["خط ألواح النوجا", "خط ألواح جوز الهند"]
        },
        "chocolate-coating": {
            title: "أنظمة",
            titleHighlight: "تغليف الشوكولاتة",
            heroDesc: "آلات تغليف الشوكولاتة وأنفاق التبريد. حلول تغليف احترافية للبسكويت والويفر والألواح ومنتجات الحلويات.",
            overviewTitle: "حلول",
            overviewHighlight: "تغليف الشوكولاتة",
            overviewP1: "آلات تغليف الشوكولاتة لدينا تغطي منتجاتك بتغليف شوكولاتة كامل أو نصفي. توفر تحكمًا دقيقًا في درجة الحرارة وسمك تغليف موحد.",
            overviewP2: "نقدم أنظمة متكاملة مع أنفاق التبريد. وحدات الديكور وأنظمة الرش وخيارات التغليف السفلي متاحة.",
            ctaTitle: "احصل على عرض سعر لنظام تغليف الشوكولاتة",
            videos: ["نظام التغليف", "نفق التبريد", "أمثلة التغليف"],
            featuresTitle: "مكونات",
            featuresHighlight: "النظام",
            features: [
                { title: "التمبيرينغ", desc: "وحدة تمبيرينغ شوكولاتة أوتوماتيكية. التحكم في التبلور." },
                { title: "ستارة التغليف", desc: "نظام تغليف علوي وسفلي. سماكة قابلة للتعديل." },
                { title: "نفق التبريد", desc: "تبريد متحكم. محسّن للسطح اللامع." },
                { title: "الديكور", desc: "أنظمة الرش والنثر. تصاميم مخصصة." },
                { title: "إعادة التدوير", desc: "استرداد الشوكولاتة الزائدة. نظام فعال." },
                { title: "تحكم PLC", desc: "تحكم أوتوماتيكي بالكامل. حفظ الوصفات." }
            ]
        },
        "biscuit-sandwiching": {
            title: "آلات",
            titleHighlight: "بسكويت الساندويتش",
            heroDesc: "آلات دهن الكريمة وتجميع البسكويت لإنتاج بسكويت الساندويتش. سرعة عالية، جرعات كريمة دقيقة وتنظيف سهل.",
            overviewTitle: "حلول إنتاج",
            overviewHighlight: "بسكويت الساندويتش",
            overviewP1: "آلات بسكويت الساندويتش تصنع بسكويت الساندويتش عن طريق دهن الكريمة على البسكويت الدائري أو المربع. مناسبة لأنواع الكريمة المختلفة (الشوكولاتة والفانيليا والبندق).",
            overviewP2: "جرعات دقيقة بمحرك سيرفو، محاذاة تلقائية للبسكويت ونظام تجميع. خيارات التغذية على الحافة أو المسطحة.",
            ctaTitle: "احصل على عرض سعر لآلة بسكويت الساندويتش",
            videos: ["خط إنتاج البسكويت"]
        },
        "flow-pack": {
            title: "آلات",
            titleHighlight: "فلو باك",
            heroDesc: "آلات تعبئة فلو باك الأفقية (HFFS). تعبئة عالية السرعة للبسكويت والويفر والشوكولاتة والصابون والخبز والمزيد.",
            overviewTitle: "حلول تعبئة",
            overviewHighlight: "فلو باك",
            overviewP1: "آلات فلو باك لدينا تعمل على مبدأ التشكيل-الملء-الختم الأفقي. تقدم خيارات التعبئة الفردية أو المتعددة أو الصينية. أنظمة قطع وختم دقيقة بمحرك سيرفو.",
            overviewP2: "خيارات الفراغ وMAP (تعبئة الغلاف الجوي المعدل) متاحة. يمكن أن تعمل متكاملة مع أنظمة التغذية التلقائية والعدادات.",
            ctaTitle: "احصل على عرض سعر لآلة فلو باك",
            videos: ["تعبئة الويفر", "تعبئة الصابون", "تعبئة الخبز", "المناديل المبللة", "تعبئة الألواح"]
        },
        overwrapping: {
            title: "آلات",
            titleHighlight: "أوفرراپينگ",
            heroDesc: "آلات لف نوع المغلف. تعبئة احترافية لكعك الأرز والبسكويت والصابون والصناديق والمنتجات ذات السطح المسطح.",
            overviewTitle: "تعبئة",
            overviewHighlight: "نوع المغلف",
            overviewP1: "آلات أوفرراپينگ تلف المنتجات بأسلوب المغلف، مما يوفر تعبئة محكمة وأنيقة. مثالية خاصة لكعك الأرز وعبوات البسكويت والصابون والمنتجات المعبأة.",
            overviewP2: "يمكن تقديم كل من تركيبات فلو باك وأوفرراپ X-fold. متوافقة مع أنواع الأفلام المختلفة: OPP وBOPP والسيلوفان.",
            ctaTitle: "احصل على عرض سعر لآلة أوفرراپينگ",
            videos: ["تعبئة كعك الأرز", "التعبئة التلقائية", "التغذية التلقائية"]
        },
        thermoform: {
            title: "تعبئة",
            titleHighlight: "ثيرموفورم",
            heroDesc: "آلات تعبئة ثيرموفورم. تعبئة الفراغ وMAP للجبن واللحوم والخضروات والفواكه والوجبات الجاهزة.",
            overviewTitle: "حلول تعبئة",
            overviewHighlight: "ثيرموفورم",
            overviewP1: "آلات ثيرموفورم تعبئ عن طريق وضع المنتج على فيلم سفلي مشكل بالحرارة والختم بفيلم علوي. تمدد العمر الافتراضي بالفراغ أو الغاز (MAP).",
            overviewP2: "مثالية للجبن واللحوم والخضروات والفواكه والوجبات الجاهزة والمنتجات الطبية. أحجام قوالب مختلفة وخيارات متعددة الأقسام.",
            ctaTitle: "احصل على عرض سعر لآلة ثيرموفورم",
            videos: ["تعبئة الجبن"]
        },
        vffs: {
            title: "آلات التعبئة",
            titleHighlight: "العمودية VFFS",
            heroDesc: "آلات التعبئة والتغليف العمودية (VFFS). أنظمة الوزن والتعبئة للحبيبات والمساحيق والمكسرات والسكر والقهوة ومنتجات السناك.",
            overviewTitle: "حلول التعبئة",
            overviewHighlight: "العمودية VFFS",
            overviewP1: "آلات VFFS لدينا تعمل على مبدأ التشكيل-الملء-الختم العمودي. أنظمة الوزن متعددة الرؤوس توفر تحكمًا دقيقًا في الوزن.",
            overviewP2: "أنظمة تعبئة مختلفة للحبيبات والمساحيق والسوائل والمنتجات اللزجة. خيارات عبوة العصا والكيس الوسادة والكيس المطوي ودويباك.",
            ctaTitle: "احصل على عرض سعر لآلة VFFS",
            videos: ["تعبئة المكسرات", "تعبئة البقوليات", "الوزن متعدد الرؤوس"],
            featuresTitle: "مميزات",
            featuresHighlight: "الآلة",
            features: [
                { title: "ميزان متعدد الرؤوس", desc: "ميزان تركيبي بـ 10-14-16 رأسًا. دقة عالية." },
                { title: "أشكال العبوات", desc: "خيارات الوسادة والطيات الجانبية ودويباك وعبوة العصا." },
                { title: "ملء الغاز", desc: "تعبئة MAP بغاز النيتروجين. عمر افتراضي ممتد." },
                { title: "سرعة عالية", desc: "سعة إنتاجية تصل إلى 120 عبوة/دقيقة." },
                { title: "الترميز", desc: "تكامل ترميز التاريخ ورقم الدفعة." },
                { title: "محرك سيرفو", desc: "تحكم دقيق. تغيير سريع للشكل." }
            ]
        },
        halvah: {
            title: "تعبئة",
            titleHighlight: "الحلاوة",
            heroDesc: "آلات تقطيع وتعبئة الحلاوة. حلول التقطيع والوزن والتعبئة لحلاوة الطحينية وحلاوة الدقيق والبسمانية والمنتجات المماثلة.",
            overviewTitle: "حلول معالجة",
            overviewHighlight: "الحلاوة",
            overviewP1: "آلات تعبئة الحلاوة مصممة لتقطيع الحلاوة الكتلية أو التعبئة المباشرة. خيارات القطع بالموجات فوق الصوتية والقطع بالسلك والقطع بالشفرة.",
            overviewP2: "يمكن دمجها مع تعبئة فلو باك أو تعبئة ثيرموفورم. أنظمة وزن دقيقة لأوزان مختلفة.",
            ctaTitle: "احصل على عرض سعر لآلة تعبئة الحلاوة",
            videos: ["تعبئة النوع البريكيت"]
        },
        "chocolate-cooling": {
            title: "أنفاق تبريد",
            titleHighlight: "الشوكولاتة",
            heroDesc: "أنفاق تبريد الشوكولاتة. حلول احترافية للتبريد المتحكم لمنتجات الشوكولاتة بعد التغليف والقولبة.",
            overviewTitle: "حلول تبريد",
            overviewHighlight: "الشوكولاتة",
            overviewP1: "أنفاق تبريد الشوكولاتة لدينا توفر تبريدًا متحكمًا لمنتجات الشوكولاتة بعد التغليف والقولبة. ملف تبريد محسّن بمناطق حرارية متعددة.",
            overviewP2: "حلول لكل سعة بخيارات طول وعرض مختلفة. ضواغط موفرة للطاقة وبناء من الفولاذ المقاوم للصدأ.",
            ctaTitle: "احصل على عرض سعر لنفق تبريد الشوكولاتة",
            videos: ["نفق التبريد"],
            featuresTitle: "مميزات",
            featuresHighlight: "النظام",
            features: [
                { title: "مناطق حرارية متعددة", desc: "3-5 مناطق تبريد مستقلة. كل منطقة يمكن التحكم بها بشكل منفصل." },
                { title: "دوران الهواء", desc: "تدفق هواء محسّن. توزيع تبريد متجانس." },
                { title: "سرعة قابلة للتعديل", desc: "التحكم في سرعة الحزام. تعديل وقت التبريد حسب نوع المنتج." },
                { title: "كفاءة الطاقة", desc: "ضواغط عالية الكفاءة. استهلاك منخفض للطاقة." },
                { title: "تحكم PLC", desc: "لوحة تحكم بشاشة لمسية. جميع المعلمات قابلة للمراقبة." },
                { title: "فولاذ مقاوم للصدأ", desc: "بناء كامل من الفولاذ المقاوم للصدأ. تصميم صحي." }
            ],
            specsTitle: "خيارات",
            specsHighlight: "الموديل",
            specsHeaders: ["الموديل", "الطول", "عرض الحزام", "سعة التبريد", "القدرة"]
        },
        "coconut-bar": {
            title: "خطوط إنتاج",
            titleHighlight: "قوالب جوز الهند",
            heroDesc: "خطوط إنتاج قوالب جوز الهند. حلول كاملة مع تحضير الجلوكوز والخلط والقولبة والتبريد وتغليف الشوكولاتة.",
            overviewTitle: "حلول إنتاج",
            overviewHighlight: "قوالب جوز الهند",
            overviewP1: "خطوط إنتاج قوالب جوز الهند تشمل تحضير شراب الجلوكوز وخلط جوز الهند والقولبة وتغليف الشوكولاتة.",
            overviewP2: "أنظمة قابلة للتعديل لأحجام وأوزان ألواح مختلفة. تكامل تغليف الشوكولاتة ونفق التبريد.",
            ctaTitle: "احصل على عرض سعر لخط قوالب جوز الهند",
            videos: ["إنتاج قوالب جوز الهند"],
            featuresTitle: "مكونات",
            featuresHighlight: "الخط",
            features: [
                { title: "خزان الجلوكوز", desc: "نظام تخزين وجرعات شراب الجلوكوز. تحكم أوتوماتيكي في درجة الحرارة." },
                { title: "طبخ الشراب", desc: "خزان طبخ الشراب المقلوب. تحكم دقيق في درجة الحرارة والقوام." },
                { title: "خلاط من النوع Z", desc: "خلط جوز الهند والشراب. إنتاج كتلة متجانسة." },
                { title: "آلة القولبة", desc: "ضغط كتلة جوز الهند إلى شكل لوح. خيارات قوالب مختلفة." },
                { title: "نفق التبريد", desc: "تبريد الألواح المقولبة. تثبيت قبل التغليف." },
                { title: "تغليف الشوكولاتة", desc: "نظام تغليف كامل. تكامل مع نفق تبريد الشوكولاتة." }
            ],
            specsTitle: "خيارات",
            specsHighlight: "السعة",
            specsHeaders: ["الموديل", "السعة", "وزن اللوح", "عرض الخط", "القدرة"]
        },
        "filling-machines": {
            title: "آلات",
            titleHighlight: "التعبئة",
            heroDesc: "أنظمة التعبئة والوزن للمنتجات المسحوقة والحبيبية. خيارات تعبئة لولبية وخطية ومتعددة الرؤوس وحجمية.",
            overviewTitle: "حلول",
            overviewHighlight: "أنظمة التعبئة",
            overviewP1: "آلات التعبئة لدينا توفر وزنًا وجرعات دقيقة للمنتجات المسحوقة والحبيبية والقطعية. خيارات وزن لولبية وخطية ومتعددة الرؤوس.",
            overviewP2: "تكامل كامل مع آلات VFFS. حلول تعبئة مخصصة لأنواع المنتجات المختلفة.",
            ctaTitle: "احصل على عرض سعر لآلة التعبئة",
            videos: ["نظام التعبئة"],
            featuresTitle: "أنواع",
            featuresHighlight: "الأنظمة",
            features: [
                { title: "التعبئة اللولبية", desc: "نظام وزن لولبي للمنتجات المسحوقة. الدقيق والسكر والتوابل وغيرها." },
                { title: "الميزان الخطي", desc: "أنظمة وزن خطية بـ 2-4 رؤوس. للمنتجات الحبيبية والقطعية." },
                { title: "الميزان متعدد الرؤوس", desc: "أنظمة متعددة الرؤوس بـ 10-16 رأسًا. سرعة عالية ودقة." },
                { title: "التعبئة الحجمية", desc: "نظام الكوب للمنتجات ذات الحجم الثابت. سريع واقتصادي." },
                { title: "تحكم PLC", desc: "تحكم بشاشة لمسية. حفظ واستدعاء الوصفات." },
                { title: "تكامل VFFS", desc: "تكامل كامل مع آلات التعبئة العمودية. تشغيل متزامن." }
            ],
            specsTitle: "خيارات",
            specsHighlight: "الموديل",
            specsHeaders: ["الموديل", "النوع", "السعة", "نطاق الوزن", "الدقة"]
        },
        "chocolate-preparation": {
            title: "مطبخ تحضير",
            titleHighlight: "الشوكولاتة",
            heroDesc: "معدات مطبخ تحضير الشوكولاتة. خزانات إذابة الدهون والخلاطات والمطاحن الكروية وخزانات التخزين وآلات التمبيرينغ.",
            overviewTitle: "حلول تحضير",
            overviewHighlight: "الشوكولاتة",
            overviewP1: "معدات مطبخ تحضير الشوكولاتة لدينا تشمل إذابة زبدة الكاكاو وخلط المواد الخام والطحن الناعم والتمبيرينغ.",
            overviewP2: "المطاحن الكروية تحقق نعومة 20-25 ميكرون. حلول كاملة مع خزانات التخزين وآلات التمبيرينغ.",
            ctaTitle: "احصل على عرض سعر لمطبخ تحضير الشوكولاتة",
            videos: ["تحضير الشوكولاتة"],
            featuresTitle: "مكونات",
            featuresHighlight: "المطبخ",
            features: [
                { title: "خزان إذابة الدهون", desc: "إذابة زبدة الكاكاو والدهون الأخرى. نظام تسخين بالحمام المائي." },
                { title: "خلاط الخلط المسبق", desc: "خلط مسبق للمواد الخام للشوكولاتة. إنتاج كتلة متجانسة." },
                { title: "المطحنة الكروية", desc: "نظام طحن ناعم. حجم جزيئات 20-25 ميكرون." },
                { title: "خزان التخزين", desc: "تخزين الشوكولاتة المحضرة. متحكم في درجة الحرارة." },
                { title: "مطحنة السكر البودرة", desc: "طحن السكر البلوري إلى بودرة. نعومة عالية." },
                { title: "آلة التمبيرينغ", desc: "تمبيرينغ لتبلور الشوكولاتة. سطح لامع." }
            ],
            specsTitle: "خيارات",
            specsHighlight: "السعة",
            specsHeaders: ["المعدات", "الموديل", "السعة", "القدرة"]
        },
        "sugar-mill": {
            title: "طاحونة",
            titleHighlight: "السكر البودرة",
            heroDesc: "طواحين السكر البودرة. طواحين عالية السعة وموفرة للطاقة لطحن السكر البلوري إلى بودرة.",
            overviewTitle: "حلول",
            overviewHighlight: "طواحين السكر البودرة",
            overviewP1: "طواحين السكر البودرة لدينا تطحن السكر البلوري إلى النعومة المطلوبة. نظام التبريد يمنع تبلور السكر.",
            overviewP2: "مناسبة للإنتاج الصغير والكبير بخيارات سعة مختلفة. بناء من الفولاذ المقاوم للصدأ وصيانة سهلة.",
            ctaTitle: "احصل على عرض سعر لطاحونة السكر البودرة",
            videos: ["طحن السكر البودرة"],
            featuresTitle: "مميزات",
            featuresHighlight: "الطاحونة",
            features: [
                { title: "سعة عالية", desc: "سعة طحن تصل إلى 900 كجم/ساعة. تشغيل مستمر." },
                { title: "طحن ناعم", desc: "حجم جزيئات 50-100 ميكرون. نعومة قابلة للتعديل." },
                { title: "طاقة منخفضة", desc: "تصميم دوار محسّن. استخدام فعال للطاقة." },
                { title: "فولاذ مقاوم للصدأ", desc: "جميع الأجزاء الملامسة للغذاء من الفولاذ المقاوم للصدأ." },
                { title: "نظام التبريد", desc: "التحكم في درجة الحرارة أثناء الطحن. السكر لا يتبلور." },
                { title: "صيانة سهلة", desc: "تنظيف وصيانة سريعة. استبدال سهل للأجزاء." }
            ],
            specsTitle: "خيارات",
            specsHighlight: "الموديل",
            specsHeaders: ["الموديل", "السعة", "النعومة", "قدرة المحرك", "الوزن"]
        },
        "cookie-capping": {
            title: "آلات",
            titleHighlight: "Cookie Capping",
            heroDesc: "آلات cookie capping وساندويتش المارشميلو. خطوط كاملة مع تغذية البسكويت وملء المارشميلو والتغطية وتغليف الشوكولاتة.",
            overviewTitle: "حلول إنتاج",
            overviewHighlight: "Cookie Capping",
            overviewP1: "آلات cookie capping تضع المارشميلو أو الكريمة على قاعدة البسكويت وتغطيها بالبسكويت العلوي. خطوط كاملة مع تكامل تغليف الشوكولاتة.",
            overviewP2: "أنظمة قابلة للتعديل لأحجام البسكويت وأنواع الحشو المختلفة. تكامل تعبئة فلو باك.",
            ctaTitle: "احصل على عرض سعر لآلة Cookie Capping",
            videos: ["خط Cookie Capping"],
            featuresTitle: "مكونات",
            featuresHighlight: "الخط",
            features: [
                { title: "نظام تغذية البسكويت", desc: "تغذية وفرز أوتوماتيكي للبسكويت. يتكيف مع الأحجام المختلفة." },
                { title: "تحضير المارشميلو", desc: "معدات تحضير وطبخ المارشميلو. التحكم في القوام." },
                { title: "الموزع", desc: "جرعات دقيقة للمارشميلو. كمية حشو قابلة للتعديل." },
                { title: "نظام التغطية", desc: "وضع أوتوماتيكي للبسكويت العلوي. سريع ودقيق." },
                { title: "تغليف الشوكولاتة", desc: "نظام تغليف كامل. خيارات تغليف متنوعة." },
                { title: "التعبئة", desc: "تكامل تعبئة فلو باك. تعبئة فردية أو متعددة." }
            ],
            specsTitle: "خيارات",
            specsHighlight: "السعة",
            specsHeaders: ["الموديل", "السعة", "قطر البسكويت", "كمية الحشو", "القدرة"]
        }
    },
    fr: {
        common: {
            tag_production: "Lignes de production",
            tag_production_machinery: "Machines de production",
            tag_packaging: "Machines d'emballage",
            getQuote: "Obtenir un devis",
            whatsapp: "WhatsApp",
            email: "E-mail",
            videos: "Vidéos",
            countries: "Pays",
            support: "Support",
            perMin: "Paquets/min",
            perHour: "kg/heure",
            cycleMin: "Cycles/min",
            pcsMin: "pcs/min",
            featuresTag: "Caractéristiques",
            specsTag: "Spécifications techniques",
            specsNote: "* Les valeurs de capacité peuvent varier selon le type de produit et la formulation.",
            relatedTag: "Produits associés",
            relatedTitle: "Nos autres",
            relatedHighlight: "Machines",
            ctaDesc: "Notre équipe d'experts est prête à vous proposer la solution la plus adaptée à votre projet",
            watchVideos: "Voir les vidéos"
        },
        wafer: {
            title: "Lignes de production",
            titleHighlight: "de gaufrettes",
            heroDesc: "Lignes de production de gaufrettes complètes. Solutions clé en main de la préparation de la pâte à la découpe, du crémage à l'emballage.",
            overviewTitle: "Solutions de production",
            overviewHighlight: "de gaufrettes",
            overviewP1: "Chez Girisim Makina, nous fabriquons des lignes de production de gaufrettes de classe mondiale. Nous offrons des solutions complètes avec préparation automatique de la pâte, fours haute capacité, systèmes de crémage et unités de découpe.",
            overviewP2: "Nos fours sont disponibles avec des options 39-51-63-75 plaques pour différentes capacités. Lignes personnalisées pour la production de gaufrettes plates, gaufrettes fourrées, bâtonnets de gaufrette et cornets de gaufrette.",
            ctaTitle: "Obtenir un devis pour une ligne de production de gaufrettes",
            videos: ["Four à gaufrettes", "Crémage de gaufrettes", "Découpe de gaufrettes"],
            featuresTitle: "Composants",
            featuresHighlight: "de la ligne",
            features: [
                { title: "Préparation de la pâte", desc: "Systèmes automatiques de dosage et de mélange pour une pâte homogène. Système entièrement automatique contrôlé par PLC." },
                { title: "Fours à gaufrettes", desc: "Fours à gaz ou électriques haute capacité. Contrôle précis de la température et faible consommation d'énergie." },
                { title: "Système de crémage", desc: "Crémage de gaufrettes simple ou multicouche. Système réglable pour différents types de crème." },
                { title: "Tunnel de refroidissement", desc: "Système de refroidissement efficace pour une solidification rapide. Conception économe en énergie." },
                { title: "Machine de découpe", desc: "Découpe de taille précise. Réglable pour différentes tailles et formes." },
                { title: "Emballage", desc: "Emballage final par flow pack ou overwrapping. Solutions intégrées." }
            ],
            specsTitle: "Options",
            specsHighlight: "de capacité",
            specsHeaders: ["Modèle", "Capacité", "Taille de plaque", "Nombre de plaques", "Puissance"]
        },
        "cereal-bar": {
            title: "Lignes de production",
            titleHighlight: "de barres de céréales",
            heroDesc: "Lignes de production de barres de céréales et de granola. Solutions complètes avec systèmes de mélange, pressage, découpe et emballage.",
            overviewTitle: "Solutions de production",
            overviewHighlight: "de barres de céréales",
            overviewP1: "Le marché des barres de céréales et de granola connaît une croissance rapide. Chez Girisim Makina, nous offrons des lignes de production de barres complètes pouvant traiter l'avoine, le riz soufflé, les corn flakes et autres céréales.",
            overviewP2: "Systèmes personnalisés pour les barres au miel, sirop de sucre ou liants au chocolat. Unités de mélange, moulage, refroidissement et découpe.",
            ctaTitle: "Obtenir un devis pour une ligne de barres de céréales",
            videos: ["Production de barres de céréales", "Ligne de barres granola"],
            featuresTitle: "Composants",
            featuresHighlight: "de la ligne",
            features: [
                { title: "Système de mélange", desc: "Dosage et mélange automatiques pour un mélange homogène de céréales, noix, miel et autres liants." },
                { title: "Cuisson/Chauffage", desc: "Système de chauffage contrôlé pour les mélanges à base de miel. Température et durée réglables." },
                { title: "Formage", desc: "Formage de barres dans différentes tailles et épaisseurs. Systèmes à rouleaux ou à presse." },
                { title: "Tunnel de refroidissement", desc: "Refroidissement rapide et contrôlé. Système optimisé pour la stabilité des barres." },
                { title: "Système de découpe", desc: "Découpe ultrasonique ou à lame. Contrôle précis des dimensions." },
                { title: "Emballage", desc: "Intégration d'emballage flow pack. Options d'emballage simple ou multiple." }
            ],
            specsTitle: "Options",
            specsHighlight: "de capacité",
            specsHeaders: ["Modèle", "Capacité", "Taille de barre", "Largeur de ligne", "Puissance"]
        },
        "protein-bar": {
            title: "Lignes de production",
            titleHighlight: "de barres protéinées",
            heroDesc: "Lignes complètes pour la production de barres protéinées, barres énergétiques, barres de nougat et barres de caramel. Y compris mélange, formage, enrobage et emballage.",
            overviewTitle: "Solutions de production",
            overviewHighlight: "de barres protéinées",
            overviewP1: "Le marché des barres protéinées connaît une croissance rapide. Chez Girisim Makina, nous offrons des lignes de production de barres complètes pouvant traiter le nougat, le caramel, la pâte de noix et autres garnitures.",
            overviewP2: "Systèmes d'extrusion ou de formage en plaques, enrobage au chocolat, tunnel de refroidissement et solutions d'emballage flow pack intégrées.",
            ctaTitle: "Obtenir un devis pour une ligne de barres protéinées",
            videos: ["Ligne de barres nougat", "Ligne de barres coco"]
        },
        "chocolate-coating": {
            title: "Systèmes",
            titleHighlight: "d'enrobage chocolat",
            heroDesc: "Machines d'enrobage au chocolat et tunnels de refroidissement. Solutions d'enrobage professionnelles pour biscuits, gaufrettes, barres et produits de confiserie.",
            overviewTitle: "Solutions",
            overviewHighlight: "d'enrobage chocolat",
            overviewP1: "Nos machines d'enrobage au chocolat enrobent vos produits d'un enrobage chocolat complet ou partiel. Fournit un contrôle précis de la température et une épaisseur d'enrobage uniforme.",
            overviewP2: "Nous offrons des systèmes intégrés avec tunnels de refroidissement. Unités de décoration, systèmes de nappage et options d'enrobage de fond disponibles.",
            ctaTitle: "Obtenir un devis pour un système d'enrobage chocolat",
            videos: ["Système d'enrobage", "Tunnel de refroidissement", "Exemples d'enrobage"],
            featuresTitle: "Composants",
            featuresHighlight: "du système",
            features: [
                { title: "Tempérage", desc: "Unité de tempérage automatique du chocolat. Contrôle de la cristallisation." },
                { title: "Rideau d'enrobage", desc: "Système d'enrobage supérieur et inférieur. Épaisseur réglable." },
                { title: "Tunnel de refroidissement", desc: "Refroidissement contrôlé. Optimisé pour une finition brillante." },
                { title: "Décoration", desc: "Systèmes de filetage et de saupoudrage. Designs personnalisés." },
                { title: "Recyclage", desc: "Récupération du chocolat excédentaire. Système efficace." },
                { title: "Commande PLC", desc: "Contrôle entièrement automatique. Sauvegarde des recettes." }
            ]
        },
        "biscuit-sandwiching": {
            title: "Machines à",
            titleHighlight: "biscuits sandwich",
            heroDesc: "Machines de tartinage de crème et d'assemblage de biscuits pour la production de biscuits sandwich. Haute vitesse, dosage précis de la crème et nettoyage facile.",
            overviewTitle: "Solutions de production",
            overviewHighlight: "de biscuits sandwich",
            overviewP1: "Les machines à biscuits sandwich créent des biscuits sandwich en tartinant de la crème sur des biscuits ronds ou carrés. Convient aux différents types de crème (chocolat, vanille, noisette).",
            overviewP2: "Dosage précis par servomoteur, alignement automatique des biscuits et système d'assemblage. Options d'alimentation sur chant ou à plat.",
            ctaTitle: "Obtenir un devis pour une machine à biscuits sandwich",
            videos: ["Ligne de production de biscuits"]
        },
        "flow-pack": {
            title: "Machines",
            titleHighlight: "Flow Pack",
            heroDesc: "Machines d'emballage flow pack horizontales (HFFS). Emballage haute vitesse pour biscuits, gaufrettes, chocolat, savon, pain et plus encore.",
            overviewTitle: "Solutions d'emballage",
            overviewHighlight: "Flow Pack",
            overviewP1: "Nos machines flow pack fonctionnent sur le principe du formage-remplissage-scellage horizontal. Offrent des options d'emballage simple, multiple ou en barquette. Systèmes de coupe et de scellage précis par servomoteur.",
            overviewP2: "Options de vide et MAP (Emballage sous Atmosphère Modifiée) disponibles. Peuvent fonctionner intégrées avec des systèmes d'alimentation automatiques et des compteurs.",
            ctaTitle: "Obtenir un devis pour une machine Flow Pack",
            videos: ["Emballage de gaufrettes", "Emballage de savon", "Emballage de pain", "Lingettes humides", "Emballage de barres"]
        },
        overwrapping: {
            title: "Machines",
            titleHighlight: "d'overwrapping",
            heroDesc: "Machines d'emballage type enveloppe. Emballage professionnel pour galettes de riz, biscuits, savon, boîtes et produits à surface plate.",
            overviewTitle: "Emballage",
            overviewHighlight: "type enveloppe",
            overviewP1: "Les machines d'overwrapping emballent les produits en style enveloppe, offrant un emballage serré et élégant. Idéales notamment pour les galettes de riz, paquets de biscuits, savon et produits en boîte.",
            overviewP2: "Des combinaisons flow pack et overwrap X-fold peuvent être proposées. Compatibles avec différents types de films: OPP, BOPP, cellophane.",
            ctaTitle: "Obtenir un devis pour une machine d'overwrapping",
            videos: ["Emballage de galettes de riz", "Emballage automatique", "Alimentation automatique"]
        },
        thermoform: {
            title: "Emballage",
            titleHighlight: "thermoformé",
            heroDesc: "Machines d'emballage thermoformé. Emballage sous vide et MAP pour fromage, viande, légumes, fruits et plats préparés.",
            overviewTitle: "Solutions d'emballage",
            overviewHighlight: "thermoformé",
            overviewP1: "Les machines thermoformées emballent en plaçant le produit sur un film inférieur thermoformé et en scellant avec un film supérieur. Prolonge la durée de conservation avec le vide ou le gaz (MAP).",
            overviewP2: "Idéales pour fromage, viande, légumes, fruits, plats préparés et produits médicaux. Différentes tailles de moules et options multi-compartiments.",
            ctaTitle: "Obtenir un devis pour une machine thermoformée",
            videos: ["Emballage de fromage"]
        },
        vffs: {
            title: "Machines de remplissage",
            titleHighlight: "verticales VFFS",
            heroDesc: "Machines d'emballage verticales (VFFS). Systèmes de pesage et de remplissage pour granulés, poudre, noix, sucre, café et produits snack.",
            overviewTitle: "Solutions de remplissage",
            overviewHighlight: "verticales VFFS",
            overviewP1: "Nos machines VFFS fonctionnent sur le principe du formage-remplissage-scellage vertical. Les systèmes de pesage multi-têtes assurent un contrôle précis du poids.",
            overviewP2: "Différents systèmes de remplissage pour granulés, poudre, liquides et produits collants. Options stick pack, sachet coussin, sachet à soufflets et doypack.",
            ctaTitle: "Obtenir un devis pour une machine VFFS",
            videos: ["Remplissage de noix", "Emballage de légumineuses", "Pesage multi-têtes"],
            featuresTitle: "Caractéristiques",
            featuresHighlight: "de la machine",
            features: [
                { title: "Peseuse multihead", desc: "Peseuse combinée à 10-14-16 têtes. Haute précision." },
                { title: "Formats d'emballage", desc: "Options sachet coussin, à soufflets, doypack, stick pack." },
                { title: "Remplissage de gaz", desc: "Emballage MAP à l'azote. Durée de conservation prolongée." },
                { title: "Haute vitesse", desc: "Capacité de production jusqu'à 120 paquets/minute." },
                { title: "Codage", desc: "Intégration de codage de date et numéro de lot." },
                { title: "Servomoteur", desc: "Contrôle précis. Changement de format rapide." }
            ]
        },
        halvah: {
            title: "Emballage",
            titleHighlight: "de halva",
            heroDesc: "Machines de découpe et d'emballage de halva. Solutions de découpe, pesage et emballage pour halva au tahini, halva à la farine, pismanie et produits similaires.",
            overviewTitle: "Solutions de traitement",
            overviewHighlight: "du halva",
            overviewP1: "Les machines d'emballage de halva sont conçues pour découper le halva en bloc ou l'emballage direct. Options de coupe ultrasonique, coupe au fil et coupe à la lame.",
            overviewP2: "Peuvent être intégrées avec l'emballage flow pack ou thermoformé. Systèmes de pesage précis pour différents poids.",
            ctaTitle: "Obtenir un devis pour une machine d'emballage de halva",
            videos: ["Emballage type briquet"]
        },
        "chocolate-cooling": {
            title: "Tunnels de refroidissement",
            titleHighlight: "de chocolat",
            heroDesc: "Tunnels de refroidissement pour chocolat. Solutions professionnelles pour le refroidissement contrôlé des produits en chocolat après enrobage et moulage.",
            overviewTitle: "Solutions de refroidissement",
            overviewHighlight: "du chocolat",
            overviewP1: "Nos tunnels de refroidissement pour chocolat assurent un refroidissement contrôlé des produits en chocolat après l'enrobage et le moulage. Profil de refroidissement optimisé avec plusieurs zones de température.",
            overviewP2: "Solutions pour toutes les capacités avec différentes options de longueur et de largeur. Compresseurs économes en énergie et construction en acier inoxydable.",
            ctaTitle: "Obtenir un devis pour un tunnel de refroidissement chocolat",
            videos: ["Tunnel de refroidissement"],
            featuresTitle: "Caractéristiques",
            featuresHighlight: "du système",
            features: [
                { title: "Zones de température multiples", desc: "3 à 5 zones de refroidissement indépendantes. Chaque zone contrôlable individuellement." },
                { title: "Circulation d'air", desc: "Flux d'air optimisé. Distribution de refroidissement homogène." },
                { title: "Vitesse réglable", desc: "Contrôle de la vitesse de bande. Ajustement du temps de refroidissement selon le type de produit." },
                { title: "Efficacité énergétique", desc: "Compresseurs à haute efficacité. Faible consommation d'énergie." },
                { title: "Commande PLC", desc: "Panneau de commande à écran tactile. Tous les paramètres surveillables." },
                { title: "Acier inoxydable", desc: "Construction entièrement en acier inoxydable. Conception hygiénique." }
            ],
            specsTitle: "Options",
            specsHighlight: "de modèle",
            specsHeaders: ["Modèle", "Longueur", "Largeur de bande", "Capacité de refroidissement", "Puissance"]
        },
        "coconut-bar": {
            title: "Lignes de production",
            titleHighlight: "de barres de coco",
            heroDesc: "Lignes de production de barres de noix de coco. Solutions complètes avec préparation de glucose, mélange, moulage, refroidissement et enrobage au chocolat.",
            overviewTitle: "Solutions de production",
            overviewHighlight: "de barres de coco",
            overviewP1: "Les lignes de production de barres de noix de coco couvrent la préparation du sirop de glucose, le mélange de la noix de coco, le moulage et l'enrobage au chocolat.",
            overviewP2: "Systèmes réglables pour différentes tailles et poids de barres. Intégration de l'enrobage au chocolat et du tunnel de refroidissement.",
            ctaTitle: "Obtenir un devis pour une ligne de barres de coco",
            videos: ["Production de barres coco"],
            featuresTitle: "Composants",
            featuresHighlight: "de la ligne",
            features: [
                { title: "Réservoir de glucose", desc: "Système de stockage et de dosage du sirop de glucose. Contrôle automatique de la température." },
                { title: "Cuisson du sirop", desc: "Cuve de cuisson du sirop inverti. Contrôle précis de la température et de la consistance." },
                { title: "Mélangeur type Z", desc: "Mélange de noix de coco et de sirop. Production de masse homogène." },
                { title: "Machine de moulage", desc: "Pressage de la masse de noix de coco en forme de barre. Différentes options de moules." },
                { title: "Tunnel de refroidissement", desc: "Refroidissement des barres moulées. Stabilisation avant enrobage." },
                { title: "Enrobage au chocolat", desc: "Système d'enrobage complet. Intégration du tunnel de refroidissement chocolat." }
            ],
            specsTitle: "Options",
            specsHighlight: "de capacité",
            specsHeaders: ["Modèle", "Capacité", "Poids de barre", "Largeur de ligne", "Puissance"]
        },
        "filling-machines": {
            title: "Machines",
            titleHighlight: "de remplissage",
            heroDesc: "Systèmes de remplissage et de pesage pour produits en poudre et granulés. Options de remplissage à vis, linéaire, multihead et volumétrique.",
            overviewTitle: "Solutions de",
            overviewHighlight: "systèmes de remplissage",
            overviewP1: "Nos machines de remplissage assurent un pesage et un dosage précis pour les produits en poudre, granulés et particules. Options de pesage à vis, linéaire et multihead.",
            overviewP2: "Intégration complète avec les machines VFFS. Solutions de remplissage personnalisées pour différents types de produits.",
            ctaTitle: "Obtenir un devis pour une machine de remplissage",
            videos: ["Système de remplissage"],
            featuresTitle: "Types",
            featuresHighlight: "de systèmes",
            features: [
                { title: "Remplissage à vis", desc: "Système de pesage à vis pour produits en poudre. Farine, sucre, épices, etc." },
                { title: "Peseuse linéaire", desc: "Systèmes de pesage linéaire à 2-4 têtes. Pour produits granulés et en particules." },
                { title: "Peseuse multihead", desc: "Systèmes multihead à 10-16 têtes. Haute vitesse et précision." },
                { title: "Remplissage volumétrique", desc: "Système à godets pour produits à volume fixe. Rapide et économique." },
                { title: "Commande PLC", desc: "Commande à écran tactile. Sauvegarde et rappel de recettes." },
                { title: "Intégration VFFS", desc: "Intégration complète avec les machines d'emballage vertical. Fonctionnement synchronisé." }
            ],
            specsTitle: "Options",
            specsHighlight: "de modèle",
            specsHeaders: ["Modèle", "Type", "Capacité", "Plage de pesage", "Précision"]
        },
        "chocolate-preparation": {
            title: "Cuisine de préparation",
            titleHighlight: "du chocolat",
            heroDesc: "Équipements de cuisine de préparation du chocolat. Fonte des graisses, mélange, broyeur à billes, cuve de stockage et machines de tempérage.",
            overviewTitle: "Solutions de préparation",
            overviewHighlight: "du chocolat",
            overviewP1: "Nos équipements de cuisine de préparation du chocolat couvrent la fonte du beurre de cacao, le mélange des matières premières, le broyage fin et les processus de tempérage.",
            overviewP2: "Les broyeurs à billes atteignent une finesse de 20-25 microns. Solutions complètes avec cuves de stockage et machines de tempérage.",
            ctaTitle: "Obtenir un devis pour une cuisine de préparation chocolat",
            videos: ["Préparation du chocolat"],
            featuresTitle: "Composants",
            featuresHighlight: "de la cuisine",
            features: [
                { title: "Cuve de fonte des graisses", desc: "Fonte du beurre de cacao et autres graisses. Système de chauffage au bain-marie." },
                { title: "Mélangeur de prémélange", desc: "Prémélange des matières premières du chocolat. Production de masse homogène." },
                { title: "Broyeur à billes", desc: "Système de broyage fin. Taille de particules de 20-25 microns." },
                { title: "Cuve de stockage", desc: "Stockage du chocolat préparé. Température contrôlée." },
                { title: "Moulin à sucre glace", desc: "Broyage du sucre cristal en poudre. Haute finesse." },
                { title: "Machine de tempérage", desc: "Tempérage pour la cristallisation du chocolat. Finition brillante." }
            ],
            specsTitle: "Options",
            specsHighlight: "de capacité",
            specsHeaders: ["Équipement", "Modèle", "Capacité", "Puissance"]
        },
        "sugar-mill": {
            title: "Moulin à",
            titleHighlight: "sucre glace",
            heroDesc: "Moulins à sucre glace. Moulins haute capacité et économes en énergie pour broyer le sucre cristal en poudre.",
            overviewTitle: "Solutions de moulins",
            overviewHighlight: "à sucre glace",
            overviewP1: "Nos moulins à sucre glace broient le sucre cristal à la finesse souhaitée. Le système de refroidissement empêche la cristallisation du sucre.",
            overviewP2: "Adaptés à la production petite et grande échelle avec différentes options de capacité. Construction en acier inoxydable et entretien facile.",
            ctaTitle: "Obtenir un devis pour un moulin à sucre glace",
            videos: ["Broyage de sucre glace"],
            featuresTitle: "Caractéristiques",
            featuresHighlight: "du moulin",
            features: [
                { title: "Haute capacité", desc: "Capacité de broyage jusqu'à 900 kg/heure. Fonctionnement continu." },
                { title: "Broyage fin", desc: "Taille de particules de 50-100 microns. Finesse réglable." },
                { title: "Faible consommation", desc: "Conception de rotor optimisée. Utilisation efficace de l'énergie." },
                { title: "Acier inoxydable", desc: "Toutes les pièces en contact alimentaire en acier inoxydable." },
                { title: "Système de refroidissement", desc: "Contrôle de la température pendant le broyage. Le sucre ne cristallise pas." },
                { title: "Entretien facile", desc: "Nettoyage et entretien rapides. Remplacement facile des pièces." }
            ],
            specsTitle: "Options",
            specsHighlight: "de modèle",
            specsHeaders: ["Modèle", "Capacité", "Finesse", "Puissance moteur", "Poids"]
        },
        "cookie-capping": {
            title: "Machines de",
            titleHighlight: "cookie capping",
            heroDesc: "Machines de cookie capping et de sandwich marshmallow. Lignes complètes avec alimentation en biscuits, remplissage de marshmallow, capuchonnage et enrobage au chocolat.",
            overviewTitle: "Solutions de production",
            overviewHighlight: "cookie capping",
            overviewP1: "Les machines de cookie capping remplissent du marshmallow ou de la crème sur une base de biscuit et capuchonnent avec un biscuit supérieur. Lignes complètes avec intégration d'enrobage au chocolat.",
            overviewP2: "Systèmes réglables pour différentes tailles de biscuits et types de garniture. Intégration d'emballage flow pack.",
            ctaTitle: "Obtenir un devis pour une machine de cookie capping",
            videos: ["Ligne de cookie capping"],
            featuresTitle: "Composants",
            featuresHighlight: "de la ligne",
            features: [
                { title: "Système d'alimentation en biscuits", desc: "Alimentation et tri automatiques des biscuits. S'adapte à différentes tailles." },
                { title: "Préparation du marshmallow", desc: "Équipements de préparation et de cuisson du marshmallow. Contrôle de la consistance." },
                { title: "Déposeur", desc: "Dosage précis du marshmallow. Quantité de garniture réglable." },
                { title: "Système de capuchonnage", desc: "Placement automatique du biscuit supérieur. Rapide et précis." },
                { title: "Enrobage au chocolat", desc: "Système d'enrobage complet. Diverses options d'enrobage." },
                { title: "Emballage", desc: "Intégration d'emballage flow pack. Emballage simple ou multiple." }
            ],
            specsTitle: "Options",
            specsHighlight: "de capacité",
            specsHeaders: ["Modèle", "Capacité", "Diamètre de biscuit", "Quantité de garniture", "Puissance"]
        }
    },
    pt: {
        common: {
            tag_production: "Linhas de Produção",
            tag_production_machinery: "Máquinas de Produção",
            tag_packaging: "Máquinas de Embalagem",
            getQuote: "Solicitar Orçamento",
            whatsapp: "WhatsApp",
            email: "E-mail",
            videos: "Vídeos",
            countries: "Países",
            support: "Suporte",
            perMin: "pacotes/min",
            perHour: "kg/hora",
            cycleMin: "ciclos/min",
            pcsMin: "peças/min",
            featuresTag: "Características",
            specsTag: "Especificações técnicas",
            specsNote: "* Os valores de capacidade podem variar dependendo do tipo de produto e da formulação.",
            relatedTag: "Produtos relacionados",
            relatedTitle: "Nossas outras",
            relatedHighlight: "Máquinas",
            ctaDesc: "Nossa equipe de especialistas está pronta para oferecer a solução mais adequada para o seu projeto",
            watchVideos: "Assistir vídeos"
        },
        wafer: {
            title: "Linhas de Produção de",
            titleHighlight: "Wafer",
            heroDesc: "Linhas completas de produção de wafer. Soluções chave na mão desde a preparação da massa até ao corte, do recheio até à embalagem.",
            overviewTitle: "Soluções de Produção de",
            overviewHighlight: "Wafer",
            overviewP1: "Na Girisim Makina, fabricamos linhas de produção de wafer de classe mundial. Oferecemos soluções completas com preparação automática de massa, fornos de alta capacidade, sistemas de recheio e unidades de corte.",
            overviewP2: "Os nossos fornos estão disponíveis com opções de 39-51-63-75 placas para diferentes capacidades. Linhas personalizadas para produção de wafer plano, wafer recheado, palitos de wafer e cones de wafer.",
            ctaTitle: "Solicitar Orçamento para Linha de Wafer",
            videos: ["Forno de Wafer", "Recheio de Wafer", "Corte de Wafer"],
            featuresTitle: "Componentes",
            featuresHighlight: "da Linha",
            features: [
                { title: "Preparacao da Massa", desc: "Sistemas automaticos de dosagem e mistura para uma massa homogenea. Sistema totalmente automatico controlado por PLC." },
                { title: "Fornos de Wafer", desc: "Fornos a gas ou eletricos de alta capacidade. Controle preciso de temperatura e baixo consumo de energia." },
                { title: "Sistema de Recheio", desc: "Recheio de wafer simples ou multicamadas. Sistema ajustavel para diferentes tipos de creme." },
                { title: "Tunel de Resfriamento", desc: "Sistema de resfriamento eficiente para solidificacao rapida. Design com economia de energia." },
                { title: "Maquina de Corte", desc: "Corte de tamanho preciso. Ajustavel para diferentes tamanhos e formatos." },
                { title: "Embalagem", desc: "Embalagem final com flow pack ou overwrapping. Solucoes integradas." }
            ],
            specsTitle: "Opcoes",
            specsHighlight: "de Capacidade",
            specsHeaders: ["Modelo", "Capacidade", "Tamanho da Placa", "Quantidade de Placas", "Potencia"]
        },
        "cereal-bar": {
            title: "Linhas de Produção de",
            titleHighlight: "Barras de Cereais",
            heroDesc: "Linhas de produção de barras de cereais e granola. Soluções completas com sistemas de mistura, prensagem, corte e embalagem.",
            overviewTitle: "Soluções de Produção de",
            overviewHighlight: "Barras de Cereais",
            overviewP1: "O mercado de barras de cereais e granola está em rápido crescimento. Na Girisim Makina, oferecemos linhas completas de produção de barras que podem processar aveia, arroz tufado, flocos de milho e outros cereais.",
            overviewP2: "Sistemas personalizados para barras com mel, xarope de açúcar ou chocolate como aglutinante. Unidades de mistura, moldagem, resfriamento e corte.",
            ctaTitle: "Solicitar Orçamento para Linha de Barras de Cereais",
            videos: ["Produção de Barras de Cereais", "Linha de Barras de Granola"],
            featuresTitle: "Componentes",
            featuresHighlight: "da Linha",
            features: [
                { title: "Sistema de Mistura", desc: "Dosagem e mistura automaticas para uma mistura homogenea de cereais, nozes, mel e outros aglutinantes." },
                { title: "Cozimento/Aquecimento", desc: "Sistema de aquecimento controlado para misturas a base de mel. Temperatura e duracao ajustaveis." },
                { title: "Moldagem", desc: "Moldagem de barras em diferentes tamanhos e espessuras. Sistemas de rolo ou prensa." },
                { title: "Tunel de Resfriamento", desc: "Resfriamento rapido e controlado. Sistema otimizado para estabilidade das barras." },
                { title: "Sistema de Corte", desc: "Corte ultrasonico ou por lamina. Controle preciso de dimensoes." },
                { title: "Embalagem", desc: "Integracao de embalagem flow pack. Opcoes de embalagem simples ou multipla." }
            ],
            specsTitle: "Opcoes",
            specsHighlight: "de Capacidade",
            specsHeaders: ["Modelo", "Capacidade", "Tamanho da Barra", "Largura da Linha", "Potencia"]
        },
        "protein-bar": {
            title: "Linhas de Produção de",
            titleHighlight: "Barras de Proteína",
            heroDesc: "Linhas completas para produção de barras de proteína, barras energéticas, barras de nougat e barras de caramelo. Inclui mistura, moldagem, cobertura e embalagem.",
            overviewTitle: "Soluções de Produção de",
            overviewHighlight: "Barras de Proteína",
            overviewP1: "O mercado de barras de proteína está em rápido crescimento. Na Girisim Makina, oferecemos linhas completas de produção de barras que podem processar nougat, caramelo, pasta de nozes e outros recheios.",
            overviewP2: "Sistemas de extrusão ou moldagem de placa, cobertura de chocolate, túneis de resfriamento e soluções integradas de embalagem flow pack.",
            ctaTitle: "Solicitar Orçamento para Linha de Barras de Proteína",
            videos: ["Linha de Barras de Nougat", "Linha de Barras de Coco"]
        },
        "chocolate-coating": {
            title: "Sistemas de Cobertura de",
            titleHighlight: "Chocolate",
            heroDesc: "Máquinas de cobertura de chocolate e túneis de resfriamento. Soluções profissionais de cobertura para biscoitos, wafers, barras e confeitaria.",
            overviewTitle: "Soluções de Cobertura de",
            overviewHighlight: "Chocolate",
            overviewP1: "As nossas máquinas de cobertura de chocolate cobrem os seus produtos com cobertura total ou parcial. Oferece controle preciso de temperatura e espessura uniforme da cobertura.",
            overviewP2: "Oferecemos sistemas integrados com túneis de resfriamento. Unidades de decoração, sistemas de drizzle e opções de cobertura de fundo disponíveis.",
            ctaTitle: "Solicitar Orçamento para Sistema de Cobertura de Chocolate",
            videos: ["Sistema de Cobertura", "Túnel de Resfriamento", "Exemplos de Cobertura"],
            featuresTitle: "Componentes",
            featuresHighlight: "do Sistema",
            features: [
                { title: "Temperagem", desc: "Unidade automatica de temperagem de chocolate. Controle de cristalizacao." },
                { title: "Cortina de Cobertura", desc: "Sistema de cobertura superior e inferior. Espessura ajustavel." },
                { title: "Tunel de Resfriamento", desc: "Resfriamento controlado. Otimizado para acabamento brilhante." },
                { title: "Decoracao", desc: "Sistemas de filetagem e polvilhamento. Designs personalizados." },
                { title: "Reciclagem", desc: "Recuperacao do chocolate excedente. Sistema eficiente." },
                { title: "Controle PLC", desc: "Controle totalmente automatico. Armazenamento de receitas." }
            ]
        },
        "biscuit-sandwiching": {
            title: "Máquinas de Sanduíche de",
            titleHighlight: "Biscoitos",
            heroDesc: "Máquinas de aplicação de creme e sanduíche de biscoitos para produção de biscoitos sanduíche. Alta velocidade, dosagem precisa de creme e fácil limpeza.",
            overviewTitle: "Soluções de Produção de",
            overviewHighlight: "Biscoitos Sanduíche",
            overviewP1: "As máquinas de sanduíche de biscoitos criam biscoitos sanduíche aplicando creme em biscoitos redondos ou quadrados. Adequado para vários tipos de creme (chocolate, baunilha, avelã).",
            overviewP2: "Dosagem precisa por servomotor, alinhamento automático de biscoitos e sistema de sanduíche. Opções de alimentação na borda ou plana.",
            ctaTitle: "Solicitar Orçamento para Máquina de Sanduíche de Biscoitos",
            videos: ["Linha de Produção de Biscoitos"]
        },
        "flow-pack": {
            title: "Máquinas",
            titleHighlight: "Flow Pack",
            heroDesc: "Máquinas de embalagem Flow Pack horizontal (HFFS). Embalagem de alta velocidade para biscoitos, wafers, chocolate, sabão, pão e muito mais.",
            overviewTitle: "Soluções de Embalagem",
            overviewHighlight: "Flow Pack",
            overviewP1: "As nossas máquinas flow pack operam com o princípio horizontal de formar-encher-selar. Oferecem opções de embalagem simples, múltipla ou em bandeja. Sistemas precisos de corte e selagem por servomotor.",
            overviewP2: "Opções de vácuo e MAP (Embalagem em Atmosfera Modificada) disponíveis. Podem trabalhar integradas com sistemas de alimentação automática e contadores.",
            ctaTitle: "Solicitar Orçamento para Máquina Flow Pack",
            videos: ["Embalagem de Wafer", "Embalagem de Sabão", "Embalagem de Pão", "Toalhetes Húmidos", "Embalagem de Barras"]
        },
        overwrapping: {
            title: "Máquinas de",
            titleHighlight: "Overwrapping",
            heroDesc: "Máquinas de embalagem tipo envelope. Embalagem profissional para bolachas de arroz, biscoitos, sabão, caixas e produtos com superfície plana.",
            overviewTitle: "Embalagem Tipo",
            overviewHighlight: "Envelope",
            overviewP1: "As máquinas de overwrapping embalam produtos no estilo envelope, proporcionando embalagem apertada e elegante. Ideal especialmente para bolachas de arroz, pacotes de biscoitos, sabão e produtos em caixa.",
            overviewP2: "Combinações de flow pack e overwrap X-fold podem ser oferecidas. Compatível com vários tipos de filme: OPP, BOPP, celofane.",
            ctaTitle: "Solicitar Orçamento para Máquina de Overwrapping",
            videos: ["Embalagem de Bolachas de Arroz", "Embalagem Automática", "Alimentação Automática"]
        },
        thermoform: {
            title: "Embalagem",
            titleHighlight: "Termoformada",
            heroDesc: "Máquinas de embalagem termoformada. Embalagem a vácuo e MAP para queijo, carne, vegetais, frutas e refeições prontas.",
            overviewTitle: "Soluções de Embalagem",
            overviewHighlight: "Termoformada",
            overviewP1: "As máquinas termoformadas embalam colocando o produto num filme inferior termoformado e selando com filme superior. Prolonga a validade com vácuo ou gás (MAP).",
            overviewP2: "Ideal para queijo, carne, vegetais, frutas, refeições prontas e produtos médicos. Vários tamanhos de molde e opções multicâmara.",
            ctaTitle: "Solicitar Orçamento para Máquina Termoformada",
            videos: ["Embalagem de Queijo"]
        },
        vffs: {
            title: "VFFS Máquinas de",
            titleHighlight: "Enchimento Vertical",
            heroDesc: "Máquinas de embalagem vertical Form-Fill-Seal (VFFS). Sistemas de pesagem e enchimento para granulados, pós, nozes, açúcar, café e produtos snack.",
            overviewTitle: "Soluções de Enchimento",
            overviewHighlight: "Vertical VFFS",
            overviewP1: "As nossas máquinas VFFS operam com o princípio vertical de formar-encher-selar. Os sistemas de pesagem multicabeça fornecem controle preciso de peso.",
            overviewP2: "Vários sistemas de enchimento para granulados, pós, líquidos e produtos pegajosos. Opções de stick pack, saquetas almofada, saquetas com fole lateral e doypack.",
            ctaTitle: "Solicitar Orçamento para Máquina VFFS",
            videos: ["Enchimento de Nozes", "Embalagem de Leguminosas", "Pesagem Multicabeça"],
            featuresTitle: "Caracteristicas",
            featuresHighlight: "da Maquina",
            features: [
                { title: "Pesadora Multicabeca", desc: "Pesadora combinada de 10-14-16 cabecas. Alta precisao." },
                { title: "Formatos de Embalagem", desc: "Opcoes de saqueta almofada, com fole, doypack, stick pack." },
                { title: "Enchimento de Gas", desc: "Embalagem MAP com nitrogenio. Vida util prolongada." },
                { title: "Alta Velocidade", desc: "Capacidade de producao ate 120 pacotes/minuto." },
                { title: "Codificacao", desc: "Integracao de codificacao de data e numero de lote." },
                { title: "Servomotor", desc: "Controle preciso. Troca rapida de formato." }
            ]
        },
        halvah: {
            title: "Embalagem de",
            titleHighlight: "Halva",
            heroDesc: "Máquinas de corte e embalagem de halva. Soluções de corte, pesagem e embalagem para halva de tahini, halva de farinha, pismaniye e produtos similares.",
            overviewTitle: "Soluções de Processamento de",
            overviewHighlight: "Halva",
            overviewP1: "As máquinas de embalagem de halva são projetadas para cortar halva em bloco ou embalar diretamente. Opções de corte ultrassônico, corte por fio e corte por lâmina.",
            overviewP2: "Podem ser integradas com embalagem flow pack ou termoformada. Sistemas de pesagem precisos para vários pesos.",
            ctaTitle: "Solicitar Orçamento para Máquina de Embalagem de Halva",
            videos: ["Embalagem Tipo Briquete"]
        },
        "chocolate-cooling": {
            title: "Tuneis de Resfriamento",
            titleHighlight: "de Chocolate",
            heroDesc: "Tuneis de resfriamento de chocolate. Solucoes profissionais para o resfriamento controlado de produtos de chocolate apos cobertura e moldagem.",
            overviewTitle: "Solucoes de Resfriamento",
            overviewHighlight: "de Chocolate",
            overviewP1: "Nossos tuneis de resfriamento de chocolate proporcionam resfriamento controlado dos produtos de chocolate apos cobertura e moldagem. Perfil de resfriamento otimizado com multiplas zonas de temperatura.",
            overviewP2: "Solucoes para todas as capacidades com diferentes opcoes de comprimento e largura. Compressores eficientes em energia e construcao em aco inoxidavel.",
            ctaTitle: "Solicitar Orcamento para Tunel de Resfriamento de Chocolate",
            videos: ["Tunel de Resfriamento"],
            featuresTitle: "Caracteristicas",
            featuresHighlight: "do Sistema",
            features: [
                { title: "Multiplas Zonas de Temperatura", desc: "3 a 5 zonas de resfriamento independentes. Cada zona controlavel individualmente." },
                { title: "Circulacao de Ar", desc: "Fluxo de ar otimizado. Distribuicao homogenea de resfriamento." },
                { title: "Velocidade Ajustavel", desc: "Controle de velocidade da esteira. Ajuste do tempo de resfriamento por tipo de produto." },
                { title: "Eficiencia Energetica", desc: "Compressores de alta eficiencia. Baixo consumo de energia." },
                { title: "Controle PLC", desc: "Painel de controle com tela tatil. Todos os parametros monitoraveis." },
                { title: "Aco Inoxidavel", desc: "Construcao totalmente em aco inoxidavel. Design higienico." }
            ],
            specsTitle: "Opcoes",
            specsHighlight: "de Modelo",
            specsHeaders: ["Modelo", "Comprimento", "Largura da Esteira", "Capacidade de Resfriamento", "Potencia"]
        },
        "coconut-bar": {
            title: "Linhas de Producao de",
            titleHighlight: "Barras de Coco",
            heroDesc: "Linhas de producao de barras de coco. Solucoes completas com preparacao de glicose, mistura, moldagem, resfriamento e cobertura de chocolate.",
            overviewTitle: "Solucoes de Producao de",
            overviewHighlight: "Barras de Coco",
            overviewP1: "As linhas de producao de barras de coco abrangem a preparacao do xarope de glicose, mistura de coco, moldagem e cobertura de chocolate.",
            overviewP2: "Sistemas ajustaveis para diferentes tamanhos e pesos de barras. Integracao de cobertura de chocolate e tunel de resfriamento.",
            ctaTitle: "Solicitar Orcamento para Linha de Barras de Coco",
            videos: ["Producao de Barras de Coco"],
            featuresTitle: "Componentes",
            featuresHighlight: "da Linha",
            features: [
                { title: "Tanque de Glicose", desc: "Sistema de armazenamento e dosagem de xarope de glicose. Controle automatico de temperatura." },
                { title: "Cozimento do Xarope", desc: "Tanque de cozimento de xarope invertido. Controle preciso de temperatura e consistencia." },
                { title: "Misturador Tipo Z", desc: "Mistura de coco e xarope. Producao de massa homogenea." },
                { title: "Maquina de Moldagem", desc: "Prensagem da massa de coco em forma de barra. Diferentes opcoes de moldes." },
                { title: "Tunel de Resfriamento", desc: "Resfriamento das barras moldadas. Estabilizacao antes da cobertura." },
                { title: "Cobertura de Chocolate", desc: "Sistema de cobertura completo. Integracao do tunel de resfriamento de chocolate." }
            ],
            specsTitle: "Opcoes",
            specsHighlight: "de Capacidade",
            specsHeaders: ["Modelo", "Capacidade", "Peso da Barra", "Largura da Linha", "Potencia"]
        },
        "filling-machines": {
            title: "Maquinas",
            titleHighlight: "de Enchimento",
            heroDesc: "Sistemas de enchimento e pesagem para produtos em po e granulados. Opcoes de enchimento por rosca, linear, multicabeca e volumetrico.",
            overviewTitle: "Solucoes de",
            overviewHighlight: "Sistemas de Enchimento",
            overviewP1: "Nossas maquinas de enchimento proporcionam pesagem e dosagem precisas para produtos em po, granulados e particulados. Opcoes de pesagem por rosca, linear e multicabeca.",
            overviewP2: "Integracao total com maquinas VFFS. Solucoes de enchimento personalizadas para diferentes tipos de produtos.",
            ctaTitle: "Solicitar Orcamento para Maquina de Enchimento",
            videos: ["Sistema de Enchimento"],
            featuresTitle: "Tipos",
            featuresHighlight: "de Sistemas",
            features: [
                { title: "Enchimento por Rosca", desc: "Sistema de pesagem por rosca para produtos em po. Farinha, acucar, especiarias, etc." },
                { title: "Pesadora Linear", desc: "Sistemas de pesagem linear de 2-4 cabecas. Para produtos granulados e particulados." },
                { title: "Pesadora Multicabeca", desc: "Sistemas multicabeca de 10-16 cabecas. Alta velocidade e precisao." },
                { title: "Enchimento Volumetrico", desc: "Sistema de copos para produtos de volume fixo. Rapido e economico." },
                { title: "Controle PLC", desc: "Controle por tela tatil. Armazenamento e recuperacao de receitas." },
                { title: "Integracao VFFS", desc: "Integracao total com maquinas de embalagem vertical. Operacao sincronizada." }
            ],
            specsTitle: "Opcoes",
            specsHighlight: "de Modelo",
            specsHeaders: ["Modelo", "Tipo", "Capacidade", "Faixa de Pesagem", "Precisao"]
        },
        "chocolate-preparation": {
            title: "Cozinha de Preparacao",
            titleHighlight: "de Chocolate",
            heroDesc: "Equipamentos de cozinha de preparacao de chocolate. Fusao de gorduras, mistura, moinho de bolas, tanque de estoque e maquinas de temperagem.",
            overviewTitle: "Solucoes de Preparacao",
            overviewHighlight: "de Chocolate",
            overviewP1: "Nossos equipamentos de cozinha de preparacao de chocolate abrangem a fusao de manteiga de cacau, mistura de materias-primas, moagem fina e processos de temperagem.",
            overviewP2: "Os moinhos de bolas alcancam finura de 20-25 microns. Solucoes completas com tanques de estoque e maquinas de temperagem.",
            ctaTitle: "Solicitar Orcamento para Cozinha de Preparacao de Chocolate",
            videos: ["Preparacao de Chocolate"],
            featuresTitle: "Componentes",
            featuresHighlight: "da Cozinha",
            features: [
                { title: "Tanque de Fusao de Gorduras", desc: "Fusao de manteiga de cacau e outras gorduras. Sistema de aquecimento em banho-maria." },
                { title: "Misturador de Pre-mistura", desc: "Pre-mistura das materias-primas do chocolate. Producao de massa homogenea." },
                { title: "Moinho de Bolas", desc: "Sistema de moagem fina. Tamanho de particula de 20-25 microns." },
                { title: "Tanque de Estoque", desc: "Armazenamento do chocolate preparado. Temperatura controlada." },
                { title: "Moinho de Acucar de Confeiteiro", desc: "Moagem de acucar cristal em po. Alta finura." },
                { title: "Maquina de Temperagem", desc: "Temperagem para cristalizacao do chocolate. Acabamento brilhante." }
            ],
            specsTitle: "Opcoes",
            specsHighlight: "de Capacidade",
            specsHeaders: ["Equipamento", "Modelo", "Capacidade", "Potencia"]
        },
        "sugar-mill": {
            title: "Moinho de",
            titleHighlight: "Acucar de Confeiteiro",
            heroDesc: "Moinhos de acucar de confeiteiro. Moinhos de alta capacidade e eficiencia energetica para moer acucar cristal em po.",
            overviewTitle: "Solucoes de Moinhos",
            overviewHighlight: "de Acucar de Confeiteiro",
            overviewP1: "Nossos moinhos de acucar de confeiteiro moem acucar cristal na finura desejada. O sistema de resfriamento evita a cristalizacao do acucar.",
            overviewP2: "Adequados para producao em pequena e grande escala com diferentes opcoes de capacidade. Construcao em aco inoxidavel e manutencao facil.",
            ctaTitle: "Solicitar Orcamento para Moinho de Acucar de Confeiteiro",
            videos: ["Moagem de Acucar de Confeiteiro"],
            featuresTitle: "Caracteristicas",
            featuresHighlight: "do Moinho",
            features: [
                { title: "Alta Capacidade", desc: "Capacidade de moagem ate 900 kg/hora. Operacao continua." },
                { title: "Moagem Fina", desc: "Tamanho de particula de 50-100 microns. Finura ajustavel." },
                { title: "Baixo Consumo", desc: "Design de rotor otimizado. Uso eficiente de energia." },
                { title: "Aco Inoxidavel", desc: "Todas as pecas em contato com alimentos em aco inoxidavel." },
                { title: "Sistema de Resfriamento", desc: "Controle de temperatura durante a moagem. O acucar nao cristaliza." },
                { title: "Manutencao Facil", desc: "Limpeza e manutencao rapidas. Substituicao facil de pecas." }
            ],
            specsTitle: "Opcoes",
            specsHighlight: "de Modelo",
            specsHeaders: ["Modelo", "Capacidade", "Finura", "Potencia do Motor", "Peso"]
        },
        "cookie-capping": {
            title: "Maquinas de",
            titleHighlight: "Cookie Capping",
            heroDesc: "Maquinas de cookie capping e sanduiche de marshmallow. Linhas completas com alimentacao de biscoitos, enchimento de marshmallow, cobertura e revestimento de chocolate.",
            overviewTitle: "Solucoes de Producao de",
            overviewHighlight: "Cookie Capping",
            overviewP1: "As maquinas de cookie capping preenchem marshmallow ou creme sobre uma base de biscoito e cobrem com um biscoito superior. Linhas completas com integracao de cobertura de chocolate.",
            overviewP2: "Sistemas ajustaveis para diferentes tamanhos de biscoitos e tipos de recheio. Integracao de embalagem flow pack.",
            ctaTitle: "Solicitar Orcamento para Maquina de Cookie Capping",
            videos: ["Linha de Cookie Capping"],
            featuresTitle: "Componentes",
            featuresHighlight: "da Linha",
            features: [
                { title: "Sistema de Alimentacao de Biscoitos", desc: "Alimentacao e classificacao automatica de biscoitos. Adapta-se a diferentes tamanhos." },
                { title: "Preparacao de Marshmallow", desc: "Equipamentos de preparacao e cozimento de marshmallow. Controle de consistencia." },
                { title: "Depositador", desc: "Dosagem precisa de marshmallow. Quantidade de recheio ajustavel." },
                { title: "Sistema de Cobertura", desc: "Colocacao automatica do biscoito superior. Rapido e preciso." },
                { title: "Cobertura de Chocolate", desc: "Sistema de cobertura completo. Varias opcoes de cobertura." },
                { title: "Embalagem", desc: "Integracao de embalagem flow pack. Embalagem simples ou multipla." }
            ],
            specsTitle: "Opcoes",
            specsHighlight: "de Capacidade",
            specsHeaders: ["Modelo", "Capacidade", "Diametro do Biscoito", "Quantidade de Recheio", "Potencia"]
        }
    },
    es: {
        common: {
            tag_production: "Líneas de producción",
            tag_production_machinery: "Maquinaria de producción",
            tag_packaging: "Máquinas de envasado",
            getQuote: "Solicitar presupuesto",
            whatsapp: "WhatsApp",
            email: "Correo electrónico",
            videos: "Videos",
            countries: "Países",
            support: "Soporte",
            perMin: "Paquetes/min",
            perHour: "kg/hora",
            cycleMin: "Ciclos/min",
            pcsMin: "piezas/min",
            featuresTag: "Características",
            specsTag: "Especificaciones técnicas",
            specsNote: "* Los valores de capacidad pueden variar según el tipo de producto y la formulación.",
            relatedTag: "Productos relacionados",
            relatedTitle: "Nuestras otras",
            relatedHighlight: "Máquinas",
            ctaDesc: "Nuestro equipo de expertos está listo para ofrecer la solución más adecuada para su proyecto",
            watchVideos: "Ver videos"
        },
        wafer: {
            title: "Líneas de producción",
            titleHighlight: "de wafer",
            heroDesc: "Líneas completas de producción de wafer. Soluciones llave en mano desde la preparación de la masa hasta el corte, desde el cremado hasta el envasado.",
            overviewTitle: "Soluciones de producción",
            overviewHighlight: "de wafer",
            overviewP1: "En Girisim Makina, fabricamos líneas de producción de wafer de clase mundial. Ofrecemos soluciones completas con preparación automática de masa, hornos de alta capacidad, sistemas de cremado y unidades de corte.",
            overviewP2: "Nuestros hornos están disponibles con opciones de 39-51-63-75 placas para diferentes capacidades. Líneas personalizadas para la producción de wafer plano, wafer relleno, sticks de wafer y conos de wafer.",
            ctaTitle: "Solicitar presupuesto para línea de producción de wafer",
            videos: ["Horno de wafer", "Cremado de wafer", "Corte de wafer"],
            featuresTitle: "Componentes",
            featuresHighlight: "de la línea",
            features: [
                { title: "Preparación de la masa", desc: "Sistemas automáticos de dosificación y mezcla para una masa homogénea. Sistema totalmente automático controlado por PLC." },
                { title: "Hornos de wafer", desc: "Hornos de gas o eléctricos de alta capacidad. Control preciso de temperatura y bajo consumo de energía." },
                { title: "Sistema de cremado", desc: "Cremado de wafer simple o multicapa. Sistema ajustable para diferentes tipos de crema." },
                { title: "Túnel de enfriamiento", desc: "Sistema de enfriamiento eficiente para solidificación rápida. Diseño de ahorro energético." },
                { title: "Máquina de corte", desc: "Corte de tamaño preciso. Ajustable para diferentes tamaños y formas." },
                { title: "Envasado", desc: "Envasado final con flow pack u overwrapping. Soluciones integradas." }
            ],
            specsTitle: "Opciones",
            specsHighlight: "de capacidad",
            specsHeaders: ["Modelo", "Capacidad", "Tamaño de placa", "Cantidad de placas", "Potencia"]
        },
        "cereal-bar": {
            title: "Líneas de producción",
            titleHighlight: "de barras de cereales",
            heroDesc: "Líneas de producción de barras de cereales y granola. Soluciones completas con sistemas de mezcla, prensado, corte y envasado.",
            overviewTitle: "Soluciones de producción",
            overviewHighlight: "de barras de cereales",
            overviewP1: "El mercado de barras de cereales y granola está creciendo rápidamente. En Girisim Makina, ofrecemos líneas completas de producción de barras que pueden procesar avena, arroz inflado, copos de maíz y otros cereales.",
            overviewP2: "Sistemas personalizados para barras con miel, jarabe de azúcar o aglutinantes de chocolate. Unidades de mezcla, moldeo, enfriamiento y corte.",
            ctaTitle: "Solicitar presupuesto para línea de barras de cereales",
            videos: ["Producción de barras de cereales", "Línea de barras de granola"],
            featuresTitle: "Componentes",
            featuresHighlight: "de la línea",
            features: [
                { title: "Sistema de mezcla", desc: "Dosificación y mezcla automáticas para una mezcla homogénea de cereales, frutos secos, miel y otros aglutinantes." },
                { title: "Cocción/Calentamiento", desc: "Sistema de calentamiento controlado para mezclas a base de miel. Temperatura y duración ajustables." },
                { title: "Formado", desc: "Formado de barras en diferentes tamaños y espesores. Sistemas de rodillo o prensa." },
                { title: "Túnel de enfriamiento", desc: "Enfriamiento rápido y controlado. Sistema optimizado para la estabilidad de las barras." },
                { title: "Sistema de corte", desc: "Corte ultrasónico o por cuchilla. Control preciso de dimensiones." },
                { title: "Envasado", desc: "Integración de envasado flow pack. Opciones de envasado simple o múltiple." }
            ],
            specsTitle: "Opciones",
            specsHighlight: "de capacidad",
            specsHeaders: ["Modelo", "Capacidad", "Tamaño de barra", "Ancho de línea", "Potencia"]
        },
        "protein-bar": {
            title: "Líneas de producción",
            titleHighlight: "de barras de proteína",
            heroDesc: "Líneas completas para la producción de barras de proteína, barras energéticas, barras de turrón y barras de caramelo. Incluyendo mezcla, formado, recubrimiento y envasado.",
            overviewTitle: "Soluciones de producción",
            overviewHighlight: "de barras de proteína",
            overviewP1: "El mercado de barras de proteína está creciendo rápidamente. En Girisim Makina, ofrecemos líneas completas de producción de barras que pueden procesar turrón, caramelo, pasta de frutos secos y otros rellenos.",
            overviewP2: "Sistemas de extrusión o formado de losas, recubrimiento de chocolate, túnel de enfriamiento y soluciones integradas de envasado flow pack.",
            ctaTitle: "Solicitar presupuesto para línea de barras de proteína",
            videos: ["Línea de barras de turrón", "Línea de barras de coco"]
        },
        "chocolate-coating": {
            title: "Sistemas de",
            titleHighlight: "recubrimiento de chocolate",
            heroDesc: "Máquinas de recubrimiento de chocolate y túneles de enfriamiento. Soluciones profesionales de recubrimiento para galletas, wafers, barras y productos de confitería.",
            overviewTitle: "Soluciones de",
            overviewHighlight: "recubrimiento de chocolate",
            overviewP1: "Nuestras máquinas de recubrimiento de chocolate recubren sus productos con recubrimiento de chocolate completo o parcial. Proporciona control preciso de temperatura y espesor de recubrimiento uniforme.",
            overviewP2: "Ofrecemos sistemas integrados con túneles de enfriamiento. Unidades de decoración, sistemas de drizzle y opciones de recubrimiento inferior disponibles.",
            ctaTitle: "Solicitar presupuesto para sistema de recubrimiento de chocolate",
            videos: ["Sistema de recubrimiento", "Túnel de enfriamiento", "Ejemplos de recubrimiento"],
            featuresTitle: "Componentes",
            featuresHighlight: "del sistema",
            features: [
                { title: "Temperado", desc: "Unidad automática de temperado de chocolate. Control de cristalización." },
                { title: "Cortina de recubrimiento", desc: "Sistema de recubrimiento superior e inferior. Espesor ajustable." },
                { title: "Túnel de enfriamiento", desc: "Enfriamiento controlado. Optimizado para acabado brillante." },
                { title: "Decoración", desc: "Sistemas de fileteado y espolvoreado. Diseños personalizados." },
                { title: "Reciclaje", desc: "Recuperación del chocolate excedente. Sistema eficiente." },
                { title: "Control PLC", desc: "Control totalmente automático. Almacenamiento de recetas." }
            ]
        },
        "biscuit-sandwiching": {
            title: "Máquinas de",
            titleHighlight: "galletas sandwich",
            heroDesc: "Máquinas de aplicación de crema y ensamblaje de galletas para producción de galletas sandwich. Alta velocidad, dosificación precisa de crema y fácil limpieza.",
            overviewTitle: "Soluciones de producción",
            overviewHighlight: "de galletas sandwich",
            overviewP1: "Las máquinas de galletas sandwich crean galletas sandwich aplicando crema en galletas redondas o cuadradas. Adecuado para diferentes tipos de crema (chocolate, vainilla, avellana).",
            overviewP2: "Dosificación precisa por servomotor, alineación automática de galletas y sistema de ensamblaje. Opciones de alimentación de canto o plana.",
            ctaTitle: "Solicitar presupuesto para máquina de galletas sandwich",
            videos: ["Línea de producción de galletas"]
        },
        "flow-pack": {
            title: "Máquinas",
            titleHighlight: "Flow Pack",
            heroDesc: "Máquinas de envasado flow pack horizontal (HFFS). Envasado de alta velocidad para galletas, wafers, chocolate, jabón, pan y más.",
            overviewTitle: "Soluciones de envasado",
            overviewHighlight: "Flow Pack",
            overviewP1: "Nuestras máquinas flow pack funcionan con el principio de formado-llenado-sellado horizontal. Ofrecen opciones de envasado individual, múltiple o en bandeja. Sistemas de corte y sellado precisos por servomotor.",
            overviewP2: "Opciones de vacío y MAP (Envasado en Atmósfera Modificada) disponibles. Pueden trabajar integradas con sistemas de alimentación automática y contadores.",
            ctaTitle: "Solicitar presupuesto para máquina Flow Pack",
            videos: ["Envasado de wafer", "Envasado de jabón", "Envasado de pan", "Toallitas húmedas", "Envasado de barras"]
        },
        overwrapping: {
            title: "Máquinas de",
            titleHighlight: "overwrapping",
            heroDesc: "Máquinas de envoltura tipo sobre. Envasado profesional para tortitas de arroz, galletas, jabón, cajas y productos de superficie plana.",
            overviewTitle: "Envasado",
            overviewHighlight: "tipo sobre",
            overviewP1: "Las máquinas de overwrapping envuelven productos en estilo sobre, proporcionando un envasado ajustado y elegante. Ideal especialmente para tortitas de arroz, paquetes de galletas, jabón y productos en caja.",
            overviewP2: "Se pueden ofrecer combinaciones de flow pack y overwrap X-fold. Compatible con diferentes tipos de película: OPP, BOPP, celofán.",
            ctaTitle: "Solicitar presupuesto para máquina de overwrapping",
            videos: ["Envasado de tortitas de arroz", "Envasado automático", "Alimentación automática"]
        },
        thermoform: {
            title: "Envasado",
            titleHighlight: "termoformado",
            heroDesc: "Máquinas de envasado termoformado. Envasado al vacío y MAP para queso, carne, verduras, frutas y comidas preparadas.",
            overviewTitle: "Soluciones de envasado",
            overviewHighlight: "termoformado",
            overviewP1: "Las máquinas termoformadas envasan colocando el producto en una película inferior termoformada y sellando con película superior. Extiende la vida útil con vacío o gas (MAP).",
            overviewP2: "Ideal para queso, carne, verduras, frutas, comidas preparadas y productos médicos. Diferentes tamaños de molde y opciones multi-compartimento.",
            ctaTitle: "Solicitar presupuesto para máquina termoformada",
            videos: ["Envasado de queso"]
        },
        vffs: {
            title: "Máquinas de llenado",
            titleHighlight: "vertical VFFS",
            heroDesc: "Máquinas de envasado vertical (VFFS). Sistemas de pesaje y llenado para gránulos, polvo, frutos secos, azúcar, café y productos snack.",
            overviewTitle: "Soluciones de llenado",
            overviewHighlight: "vertical VFFS",
            overviewP1: "Nuestras máquinas VFFS funcionan con el principio de formado-llenado-sellado vertical. Los sistemas de pesaje multicabezal proporcionan control preciso del peso.",
            overviewP2: "Diferentes sistemas de llenado para gránulos, polvo, líquidos y productos pegajosos. Opciones de stick pack, bolsa almohada, bolsa con fuelle y doypack.",
            ctaTitle: "Solicitar presupuesto para máquina VFFS",
            videos: ["Llenado de frutos secos", "Envasado de legumbres", "Pesaje multicabezal"],
            featuresTitle: "Características",
            featuresHighlight: "de la máquina",
            features: [
                { title: "Pesadora multicabezal", desc: "Pesadora combinada de 10-14-16 cabezales. Alta precisión." },
                { title: "Formatos de envasado", desc: "Opciones de bolsa almohada, con fuelle, doypack, stick pack." },
                { title: "Llenado de gas", desc: "Envasado MAP con nitrógeno. Vida útil prolongada." },
                { title: "Alta velocidad", desc: "Capacidad de producción hasta 120 paquetes/minuto." },
                { title: "Codificación", desc: "Integración de codificación de fecha y número de lote." },
                { title: "Servomotor", desc: "Control preciso. Cambio rápido de formato." }
            ]
        },
        halvah: {
            title: "Envasado de",
            titleHighlight: "halva",
            heroDesc: "Máquinas de corte y envasado de halva. Soluciones de corte, pesaje y envasado para halva de tahini, halva de harina, pismanie y productos similares.",
            overviewTitle: "Soluciones de procesamiento",
            overviewHighlight: "de halva",
            overviewP1: "Las máquinas de envasado de halva están diseñadas para cortar halva en bloque o envasado directo. Opciones de corte ultrasónico, corte con alambre y corte con cuchilla.",
            overviewP2: "Pueden integrarse con envasado flow pack o termoformado. Sistemas de pesaje precisos para diferentes pesos.",
            ctaTitle: "Solicitar presupuesto para máquina de envasado de halva",
            videos: ["Envasado tipo briqueta"]
        },
        "chocolate-cooling": {
            title: "Túneles de enfriamiento",
            titleHighlight: "de chocolate",
            heroDesc: "Túneles de enfriamiento de chocolate. Soluciones profesionales para el enfriamiento controlado de productos de chocolate después del recubrimiento y moldeo.",
            overviewTitle: "Soluciones de enfriamiento",
            overviewHighlight: "de chocolate",
            overviewP1: "Nuestros túneles de enfriamiento de chocolate proporcionan un enfriamiento controlado de los productos de chocolate después del recubrimiento y moldeo. Perfil de enfriamiento optimizado con múltiples zonas de temperatura.",
            overviewP2: "Soluciones para todas las capacidades con diferentes opciones de longitud y ancho. Compresores eficientes en energía y construcción en acero inoxidable.",
            ctaTitle: "Solicitar presupuesto para túnel de enfriamiento de chocolate",
            videos: ["Túnel de enfriamiento"],
            featuresTitle: "Características",
            featuresHighlight: "del sistema",
            features: [
                { title: "Múltiples zonas de temperatura", desc: "3 a 5 zonas de enfriamiento independientes. Cada zona controlable individualmente." },
                { title: "Circulación de aire", desc: "Flujo de aire optimizado. Distribución homogénea de enfriamiento." },
                { title: "Velocidad ajustable", desc: "Control de velocidad de cinta. Ajuste del tiempo de enfriamiento por tipo de producto." },
                { title: "Eficiencia energética", desc: "Compresores de alta eficiencia. Bajo consumo de energía." },
                { title: "Control PLC", desc: "Panel de control con pantalla táctil. Todos los parámetros monitorizables." },
                { title: "Acero inoxidable", desc: "Construcción totalmente en acero inoxidable. Diseño higiénico." }
            ],
            specsTitle: "Opciones",
            specsHighlight: "de modelo",
            specsHeaders: ["Modelo", "Longitud", "Ancho de cinta", "Capacidad de enfriamiento", "Potencia"]
        },
        "coconut-bar": {
            title: "Líneas de producción",
            titleHighlight: "de barras de coco",
            heroDesc: "Líneas de producción de barras de coco. Soluciones completas con preparación de glucosa, mezcla, moldeo, enfriamiento y recubrimiento de chocolate.",
            overviewTitle: "Soluciones de producción",
            overviewHighlight: "de barras de coco",
            overviewP1: "Las líneas de producción de barras de coco abarcan la preparación del jarabe de glucosa, mezcla de coco, moldeo y recubrimiento de chocolate.",
            overviewP2: "Sistemas ajustables para diferentes tamaños y pesos de barras. Integración de recubrimiento de chocolate y túnel de enfriamiento.",
            ctaTitle: "Solicitar presupuesto para línea de barras de coco",
            videos: ["Producción de barras de coco"],
            featuresTitle: "Componentes",
            featuresHighlight: "de la línea",
            features: [
                { title: "Tanque de glucosa", desc: "Sistema de almacenamiento y dosificación de jarabe de glucosa. Control automático de temperatura." },
                { title: "Cocción del jarabe", desc: "Tanque de cocción de jarabe invertido. Control preciso de temperatura y consistencia." },
                { title: "Mezclador tipo Z", desc: "Mezcla de coco y jarabe. Producción de masa homogénea." },
                { title: "Máquina de moldeo", desc: "Prensado de la masa de coco en forma de barra. Diferentes opciones de moldes." },
                { title: "Túnel de enfriamiento", desc: "Enfriamiento de las barras moldeadas. Estabilización antes del recubrimiento." },
                { title: "Recubrimiento de chocolate", desc: "Sistema de recubrimiento completo. Integración del túnel de enfriamiento de chocolate." }
            ],
            specsTitle: "Opciones",
            specsHighlight: "de capacidad",
            specsHeaders: ["Modelo", "Capacidad", "Peso de barra", "Ancho de línea", "Potencia"]
        },
        "filling-machines": {
            title: "Máquinas",
            titleHighlight: "de llenado",
            heroDesc: "Sistemas de llenado y pesaje para productos en polvo y granulados. Opciones de llenado por tornillo, lineal, multicabezal y volumétrico.",
            overviewTitle: "Soluciones de",
            overviewHighlight: "sistemas de llenado",
            overviewP1: "Nuestras máquinas de llenado proporcionan pesaje y dosificación precisos para productos en polvo, granulados y partículas. Opciones de pesaje por tornillo, lineal y multicabezal.",
            overviewP2: "Integración total con máquinas VFFS. Soluciones de llenado personalizadas para diferentes tipos de productos.",
            ctaTitle: "Solicitar presupuesto para máquina de llenado",
            videos: ["Sistema de llenado"],
            featuresTitle: "Tipos",
            featuresHighlight: "de sistemas",
            features: [
                { title: "Llenado por tornillo", desc: "Sistema de pesaje por tornillo para productos en polvo. Harina, azúcar, especias, etc." },
                { title: "Pesadora lineal", desc: "Sistemas de pesaje lineal de 2-4 cabezales. Para productos granulados y partículas." },
                { title: "Pesadora multicabezal", desc: "Sistemas multicabezal de 10-16 cabezales. Alta velocidad y precisión." },
                { title: "Llenado volumétrico", desc: "Sistema de vasos para productos de volumen fijo. Rápido y económico." },
                { title: "Control PLC", desc: "Control por pantalla táctil. Almacenamiento y recuperación de recetas." },
                { title: "Integración VFFS", desc: "Integración total con máquinas de envasado vertical. Operación sincronizada." }
            ],
            specsTitle: "Opciones",
            specsHighlight: "de modelo",
            specsHeaders: ["Modelo", "Tipo", "Capacidad", "Rango de pesaje", "Precisión"]
        },
        "chocolate-preparation": {
            title: "Cocina de preparación",
            titleHighlight: "de chocolate",
            heroDesc: "Equipos de cocina de preparación de chocolate. Fusión de grasas, mezcla, molino de bolas, tanque de almacenamiento y máquinas de temperado.",
            overviewTitle: "Soluciones de preparación",
            overviewHighlight: "de chocolate",
            overviewP1: "Nuestros equipos de cocina de preparación de chocolate cubren la fusión de manteca de cacao, mezcla de materias primas, molienda fina y procesos de temperado.",
            overviewP2: "Los molinos de bolas alcanzan una finura de 20-25 micrones. Soluciones completas con tanques de almacenamiento y máquinas de temperado.",
            ctaTitle: "Solicitar presupuesto para cocina de preparación de chocolate",
            videos: ["Preparación de chocolate"],
            featuresTitle: "Componentes",
            featuresHighlight: "de la cocina",
            features: [
                { title: "Tanque de fusión de grasas", desc: "Fusión de manteca de cacao y otras grasas. Sistema de calentamiento al baño maría." },
                { title: "Mezclador de premezcla", desc: "Premezcla de materias primas del chocolate. Producción de masa homogénea." },
                { title: "Molino de bolas", desc: "Sistema de molienda fina. Tamaño de partícula de 20-25 micrones." },
                { title: "Tanque de almacenamiento", desc: "Almacenamiento del chocolate preparado. Temperatura controlada." },
                { title: "Molino de azúcar glas", desc: "Molienda de azúcar cristal en polvo. Alta finura." },
                { title: "Máquina de temperado", desc: "Temperado para cristalización del chocolate. Acabado brillante." }
            ],
            specsTitle: "Opciones",
            specsHighlight: "de capacidad",
            specsHeaders: ["Equipo", "Modelo", "Capacidad", "Potencia"]
        },
        "sugar-mill": {
            title: "Molino de",
            titleHighlight: "azúcar glas",
            heroDesc: "Molinos de azúcar glas. Molinos de alta capacidad y eficiencia energética para moler azúcar cristal en polvo.",
            overviewTitle: "Soluciones de molinos",
            overviewHighlight: "de azúcar glas",
            overviewP1: "Nuestros molinos de azúcar glas muelen el azúcar cristal a la finura deseada. El sistema de enfriamiento evita la cristalización del azúcar.",
            overviewP2: "Adecuados para producción a pequeña y gran escala con diferentes opciones de capacidad. Construcción en acero inoxidable y mantenimiento fácil.",
            ctaTitle: "Solicitar presupuesto para molino de azúcar glas",
            videos: ["Molienda de azúcar glas"],
            featuresTitle: "Características",
            featuresHighlight: "del molino",
            features: [
                { title: "Alta capacidad", desc: "Capacidad de molienda hasta 900 kg/hora. Operación continua." },
                { title: "Molienda fina", desc: "Tamaño de partícula de 50-100 micrones. Finura ajustable." },
                { title: "Bajo consumo", desc: "Diseño de rotor optimizado. Uso eficiente de energía." },
                { title: "Acero inoxidable", desc: "Todas las piezas en contacto con alimentos en acero inoxidable." },
                { title: "Sistema de enfriamiento", desc: "Control de temperatura durante la molienda. El azúcar no cristaliza." },
                { title: "Mantenimiento fácil", desc: "Limpieza y mantenimiento rápidos. Reemplazo fácil de piezas." }
            ],
            specsTitle: "Opciones",
            specsHighlight: "de modelo",
            specsHeaders: ["Modelo", "Capacidad", "Finura", "Potencia del motor", "Peso"]
        },
        "cookie-capping": {
            title: "Máquinas de",
            titleHighlight: "cookie capping",
            heroDesc: "Máquinas de cookie capping y sándwich de malvavisco. Líneas completas con alimentación de galletas, relleno de malvavisco, cobertura y recubrimiento de chocolate.",
            overviewTitle: "Soluciones de producción",
            overviewHighlight: "de cookie capping",
            overviewP1: "Las máquinas de cookie capping rellenan malvavisco o crema sobre una base de galleta y cubren con una galleta superior. Líneas completas con integración de recubrimiento de chocolate.",
            overviewP2: "Sistemas ajustables para diferentes tamaños de galletas y tipos de relleno. Integración de envasado flow pack.",
            ctaTitle: "Solicitar presupuesto para máquina de cookie capping",
            videos: ["Línea de cookie capping"],
            featuresTitle: "Componentes",
            featuresHighlight: "de la línea",
            features: [
                { title: "Sistema de alimentación de galletas", desc: "Alimentación y clasificación automática de galletas. Se adapta a diferentes tamaños." },
                { title: "Preparación de malvavisco", desc: "Equipos de preparación y cocción de malvavisco. Control de consistencia." },
                { title: "Depositador", desc: "Dosificación precisa de malvavisco. Cantidad de relleno ajustable." },
                { title: "Sistema de cobertura", desc: "Colocación automática de la galleta superior. Rápido y preciso." },
                { title: "Recubrimiento de chocolate", desc: "Sistema de recubrimiento completo. Varias opciones de recubrimiento." },
                { title: "Envasado", desc: "Integración de envasado flow pack. Envasado simple o múltiple." }
            ],
            specsTitle: "Opciones",
            specsHighlight: "de capacidad",
            specsHeaders: ["Modelo", "Capacidad", "Diámetro de galleta", "Cantidad de relleno", "Potencia"]
        }
    }
};

// Get current language from localStorage or default to Turkish
let productCurrentLang = localStorage.getItem('girisim_lang') || 'tr';

// Get product key from URL
function getProductKey() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    return filename;
}

// Apply translations to product page
function applyProductTranslations() {
    const productKey = getProductKey();
    const lang = productTranslations[productCurrentLang];

    if (!lang || !lang[productKey]) {
        console.log('Translation not found for:', productKey, productCurrentLang);
        return;
    }

    const product = lang[productKey];
    const common = lang.common;

    // Update page title
    document.title = `${product.title} ${product.titleHighlight} | Girişim Makina`;

    // Hero section
    const heroTag = document.querySelector('.product-tag');
    if (heroTag) {
        var machineryProducts = ['chocolate-cooling', 'chocolate-preparation', 'sugar-mill'];
        var productionProducts = ['wafer', 'chocolate-coating', 'biscuit-sandwiching', 'cookie-capping'];
        if (machineryProducts.indexOf(productKey) !== -1) {
            heroTag.textContent = common.tag_production_machinery;
        } else if (productKey.includes('bar') || productionProducts.indexOf(productKey) !== -1) {
            heroTag.textContent = common.tag_production;
        } else {
            heroTag.textContent = common.tag_packaging;
        }
    }

    const heroTitle = document.querySelector('.product-hero-content h1');
    if (heroTitle) {
        heroTitle.innerHTML = `${product.title} <span class="highlight">${product.titleHighlight}</span>`;
    }

    const heroDesc = document.querySelector('.product-hero-content p');
    if (heroDesc) {
        heroDesc.textContent = product.heroDesc;
    }

    const heroBtn = document.querySelector('.product-hero-buttons .btn');
    if (heroBtn) {
        heroBtn.innerHTML = `<i class="fab fa-whatsapp"></i> ${common.getQuote}`;
    }

    // Overview section
    const overviewTitle = document.querySelector('.overview-content h2');
    if (overviewTitle) {
        overviewTitle.innerHTML = `${product.overviewTitle} <span class="highlight">${product.overviewHighlight}</span>`;
    }

    const overviewParagraphs = document.querySelectorAll('.overview-content > p');
    if (overviewParagraphs[0]) overviewParagraphs[0].textContent = product.overviewP1;
    if (overviewParagraphs[1]) overviewParagraphs[1].textContent = product.overviewP2;

    // Features section
    const featuresTag = document.querySelector('.product-features .section-tag');
    if (featuresTag && common.featuresTag) featuresTag.textContent = common.featuresTag;

    const featuresTitle = document.querySelector('.product-features .section-header h2');
    if (featuresTitle && product.featuresTitle) {
        featuresTitle.innerHTML = `${product.featuresTitle} <span class="highlight">${product.featuresHighlight || ''}</span>`;
    }

    if (product.features) {
        const featureCards = document.querySelectorAll('.product-features .feature-card');
        featureCards.forEach((card, index) => {
            if (product.features[index]) {
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                if (h3) h3.textContent = product.features[index].title;
                if (p) p.textContent = product.features[index].desc;
            }
        });
    }

    // Specs section
    const specsTag = document.querySelector('.product-specs .section-tag');
    if (specsTag && common.specsTag) specsTag.textContent = common.specsTag;

    const specsTitle = document.querySelector('.product-specs .section-header h2');
    if (specsTitle && product.specsTitle) {
        specsTitle.innerHTML = `${product.specsTitle} <span class="highlight">${product.specsHighlight || ''}</span>`;
    }

    if (product.specsHeaders) {
        const ths = document.querySelectorAll('.specs-table thead th');
        ths.forEach((th, index) => {
            if (product.specsHeaders[index]) th.textContent = product.specsHeaders[index];
        });
    }

    const specsNote = document.querySelector('.specs-note');
    if (specsNote && common.specsNote) specsNote.textContent = common.specsNote;

    // Related products section
    const relatedTag = document.querySelector('.related-products .section-tag');
    if (relatedTag && common.relatedTag) relatedTag.textContent = common.relatedTag;

    const relatedTitle = document.querySelector('.related-products .section-header h2');
    if (relatedTitle && common.relatedTitle) {
        relatedTitle.innerHTML = `${common.relatedTitle} <span class="highlight">${common.relatedHighlight}</span>`;
    }

    // CTA description
    const ctaDesc = document.querySelector('.product-cta p');
    if (ctaDesc && common.ctaDesc) ctaDesc.textContent = common.ctaDesc;

    // Hero second button (watch videos)
    const heroButtons = document.querySelectorAll('.product-hero-buttons .btn');
    if (heroButtons[1] && common.watchVideos) {
        heroButtons[1].innerHTML = `<i class="fab fa-youtube"></i> ${common.watchVideos}`;
    }

    // Stats labels
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels.forEach(label => {
        const text = label.textContent.toLowerCase();
        if (text.includes('ülke') || text.includes('countr')) label.textContent = common.countries;
        else if (text.includes('destek') || text.includes('support')) label.textContent = common.support;
        else if (text.includes('paket/dk') || text.includes('pack')) label.textContent = common.perMin;
        else if (text.includes('kg/saat') || text.includes('kg/h')) label.textContent = common.perHour;
        else if (text.includes('cycle') || text.includes('cyle')) label.textContent = common.cycleMin;
        else if (text.includes('adet') || text.includes('pcs')) label.textContent = common.pcsMin;
    });

    // Videos section
    const videosTag = document.querySelector('.product-videos .section-tag');
    if (videosTag) videosTag.textContent = common.videos;

    const videosTitle = document.querySelector('.product-videos .section-header h2');
    if (videosTitle) {
        const parts = product.title.split(' ');
        videosTitle.innerHTML = `${parts[0]} <span class="highlight">${common.videos}</span>`;
    }

    // Video titles
    const videoTitles = document.querySelectorAll('.video-card h4');
    if (product.videos) {
        videoTitles.forEach((title, index) => {
            if (product.videos[index]) {
                title.textContent = product.videos[index];
            }
        });
    }

    // CTA section
    const ctaTitle = document.querySelector('.product-cta h2');
    if (ctaTitle) ctaTitle.textContent = product.ctaTitle;

    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    if (ctaButtons[0]) ctaButtons[0].innerHTML = `<i class="fab fa-whatsapp"></i> ${common.whatsapp}`;
    if (ctaButtons[1]) ctaButtons[1].innerHTML = `<i class="fas fa-envelope"></i> ${common.email}`;

    // Navigation is handled by data-translate attributes in translations.js

    // Handle RTL for Arabic
    if (productCurrentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl');
    }
}

// Navigation translations removed - now handled by data-translate attributes in translations.js

// Set language for product page
function setProductLanguage(lang) {
    if (productTranslations[lang]) {
        productCurrentLang = lang;
        localStorage.setItem('girisim_lang', lang);
        applyProductTranslations();
        updateProductLanguageSelector();
        // Also apply flowpack translations if available
        if (typeof applyFlowpackTranslations === 'function') {
            applyFlowpackTranslations();
        }
    }
}

// Update language selector UI
function updateProductLanguageSelector() {
    document.querySelectorAll('.languages a').forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-lang') === productCurrentLang) {
            el.classList.add('active');
        }
    });
}

// Initialize language selector
function initProductLanguageSelector() {
    const languageLinks = document.querySelectorAll('.languages a[data-lang]');
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setProductLanguage(lang);
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add language selector if not exists
    const topBarContent = document.querySelector('.top-bar-content');
    if (topBarContent && !document.querySelector('.languages')) {
        const langSelector = document.createElement('div');
        langSelector.className = 'languages';
        langSelector.id = 'languageSelector';
        langSelector.innerHTML = `
            <a href="#" data-lang="tr" class="${productCurrentLang === 'tr' ? 'active' : ''}">TR</a>
            <a href="#" data-lang="en" class="${productCurrentLang === 'en' ? 'active' : ''}">EN</a>
            <a href="#" data-lang="ru" class="${productCurrentLang === 'ru' ? 'active' : ''}">RU</a>
            <a href="#" data-lang="ar" class="${productCurrentLang === 'ar' ? 'active' : ''}">AR</a>
            <a href="#" data-lang="fr" class="${productCurrentLang === 'fr' ? 'active' : ''}">FR</a>
            <a href="#" data-lang="pt" class="${productCurrentLang === 'pt' ? 'active' : ''}">PT</a>
            <a href="#" data-lang="es" class="${productCurrentLang === 'es' ? 'active' : ''}">ES</a>
        `;
        topBarContent.appendChild(langSelector);
    }

    initProductLanguageSelector();
    applyProductTranslations();
});
