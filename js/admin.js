// Admin Panel JavaScript - Powered by Supabase
let siteContent = null;
let currentUser = null;
let DEMO_MODE = false;

// HTML escape utility to prevent XSS in template literals
function escHtml(str) {
    if (str == null) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// Demo mode is disabled when Supabase is configured
let DEMO_EMAIL = '';
let DEMO_PASSWORD = '';

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const adminPanel = document.getElementById('adminPanel');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const saveAllBtn = document.getElementById('saveAllBtn');
const userEmailSpan = document.getElementById('userEmail');
const pageTitle = document.getElementById('pageTitle');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initNavigation();
    initSidebar();
});

// Authentication - Supabase
function initAuth() {
    // Check if Supabase is configured
    const isSupabaseConfigured = typeof supabase !== 'undefined' && SUPABASE_URL;

    if (isSupabaseConfigured) {
        // Check current session
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
                currentUser = session.user;
                showAdminPanel();
                loadContent();
            } else {
                showLoginScreen();
            }
        });

        // Listen for auth changes
        supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                currentUser = session.user;
                showAdminPanel();
                loadContent();
            } else {
                currentUser = null;
                showLoginScreen();
            }
        });
    } else {
        // Demo mode - Supabase not configured
        DEMO_MODE = true;
        console.log('Supabase not configured - Running in DEMO MODE');

        // Check if already logged in (demo mode session)
        const demoSession = localStorage.getItem('girisim_demo_session');
        if (demoSession) {
            currentUser = JSON.parse(demoSession);
            showAdminPanel();
            loadContent();
        } else {
            showLoginScreen();
        }
    }

    loginForm.addEventListener('submit', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    loginError.style.display = 'none';

    // Demo mode login
    if (DEMO_MODE) {
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
            currentUser = { email: DEMO_EMAIL };
            // Save demo session to localStorage
            localStorage.setItem('girisim_demo_session', JSON.stringify(currentUser));
            showAdminPanel();
            await loadContent();
            showToast('Demo modunda giriş yapıldı', 'warning');
        } else {
            loginError.textContent = 'Geçersiz e-posta veya şifre';
            loginError.style.display = 'block';
        }
        return;
    }

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) throw error;
    } catch (error) {
        loginError.textContent = getErrorMessage(error.message);
        loginError.style.display = 'block';
    }
}

async function handleLogout() {
    if (DEMO_MODE) {
        currentUser = null;
        // Remove demo session from localStorage
        localStorage.removeItem('girisim_demo_session');
        showLoginScreen();
        return;
    }

    try {
        await supabase.auth.signOut();
    } catch (error) {
        showToast('Çıkış yapılırken hata oluştu', 'error');
    }
}

function getErrorMessage(message) {
    const messages = {
        'Invalid login credentials': 'Geçersiz e-posta veya şifre',
        'Email not confirmed': 'E-posta doğrulanmamış',
        'User not found': 'Kullanıcı bulunamadı',
        'Invalid email': 'Geçersiz e-posta adresi'
    };
    return messages[message] || message || 'Giriş başarısız';
}

function showLoginScreen() {
    loginScreen.style.display = 'flex';
    adminPanel.style.display = 'none';
}

function showAdminPanel() {
    loginScreen.style.display = 'none';
    adminPanel.style.display = 'flex';
    userEmailSpan.textContent = currentUser.email;
}

// Content Management - Supabase
async function loadContent() {
    // Demo mode - use localStorage
    if (DEMO_MODE) {
        const saved = localStorage.getItem('girisim_site_content');
        if (saved) {
            siteContent = JSON.parse(saved);
        } else {
            siteContent = { ...defaultSiteContent };
            localStorage.setItem('girisim_site_content', JSON.stringify(siteContent));
        }
        document.getElementById('supabaseStatus').textContent = 'Demo Mod (localStorage)';
        document.getElementById('supabaseStatus').style.color = '#ff9800';
        populateAllForms();
        updateLastUpdateTime();
        return;
    }

    try {
        const { data, error } = await supabase
            .from('site_content')
            .select('content')
            .eq('id', 'main')
            .single();

        if (error && error.code === 'PGRST116') {
            // No data found, initialize with default
            siteContent = { ...defaultSiteContent };
            await supabase.from('site_content').insert({
                id: 'main',
                content: siteContent
            });
            document.getElementById('supabaseStatus').textContent = 'Supabase Bağlı';
            document.getElementById('supabaseStatus').style.color = '#4caf50';
        } else if (error) {
            throw error;
        } else {
            siteContent = data.content;
            document.getElementById('supabaseStatus').textContent = 'Supabase Bağlı';
            document.getElementById('supabaseStatus').style.color = '#4caf50';
        }

        populateAllForms();
        updateLastUpdateTime();
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('supabaseStatus').textContent = 'Bağlantı hatası';
        document.getElementById('supabaseStatus').style.color = '#f44336';

        // Use default content for offline editing
        siteContent = { ...defaultSiteContent };
        populateAllForms();
        showToast('Supabase bağlantısı kurulamadı. Lütfen yapılandırmayı kontrol edin.', 'error');
    }
}

function populateAllForms() {
    // Populate simple inputs with data-path attribute
    document.querySelectorAll('[data-path]').forEach(input => {
        const path = input.getAttribute('data-path');
        const value = getNestedValue(siteContent, path);
        if (value !== undefined) {
            input.value = value;
        }

        // Add change listener
        input.addEventListener('input', () => {
            setNestedValue(siteContent, path, input.value);
            markAsChanged();
        });

        // Image preview for URL inputs
        if (input.type === 'url' && path.includes('image') || path.includes('Image') || path.includes('thumbnail')) {
            input.addEventListener('change', () => updateImagePreview(input));
            updateImagePreview(input);
        }
    });

    // Populate complex sections
    renderHeroStats();
    renderHeroSlides();
    renderFeaturedSearchItems();
    renderAboutFeatures();
    renderMachineItems();
    renderPackagingItems();
    renderSectorItems();
    renderWhyUsItems();
    renderTestimonialItems();
    renderCertificateItems();
    renderFeaturedVideo();
    renderVideoItems();
    renderFuarItems();
    renderContactPhones();
    renderContactEmails();
    renderContactInfo();
    renderBlogPosts();
    loadGoogleAdsSettings();
    loadTikTokPixelSettings();
}

// Contact Info (Office Phone, WhatsApp, Email)
function renderContactInfo() {
    if (!siteContent.contactInfo) {
        siteContent.contactInfo = {
            officePhone: '+90 212 879 29 27',
            officePhone2: '',
            mobilePhone: '',
            fax: '',
            whatsapp: '+90 546 879 29 27',
            whatsapp2: '',
            email: 'info@girisimmak.com',
            salesEmail: ''
        };
    }

    // Populate all contact info fields
    const fields = {
        'topbar-office-phone': 'officePhone',
        'topbar-office-phone2': 'officePhone2',
        'topbar-mobile-phone': 'mobilePhone',
        'topbar-fax': 'fax',
        'topbar-phone': 'whatsapp',
        'topbar-phone2': 'whatsapp2',
        'topbar-email': 'email',
        'topbar-email2': 'salesEmail'
    };

    for (const [inputId, fieldKey] of Object.entries(fields)) {
        const input = document.getElementById(inputId);
        if (input && siteContent.contactInfo[fieldKey] !== undefined) {
            input.value = siteContent.contactInfo[fieldKey] || '';
        }
    }
}

function updateContactInfo() {
    if (!siteContent.contactInfo) {
        siteContent.contactInfo = {};
    }

    // Update all contact info fields
    const fields = {
        'topbar-office-phone': 'officePhone',
        'topbar-office-phone2': 'officePhone2',
        'topbar-mobile-phone': 'mobilePhone',
        'topbar-fax': 'fax',
        'topbar-phone': 'whatsapp',
        'topbar-phone2': 'whatsapp2',
        'topbar-email': 'email',
        'topbar-email2': 'salesEmail'
    };

    for (const [inputId, fieldKey] of Object.entries(fields)) {
        const input = document.getElementById(inputId);
        if (input) {
            siteContent.contactInfo[fieldKey] = input.value;
        }
    }

    markAsChanged();
}

// Helper functions for nested object access
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

function setNestedValue(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => {
        if (!current[key]) current[key] = {};
        return current[key];
    }, obj);
    target[lastKey] = value;
}

// Image Preview
function updateImagePreview(input) {
    const previewId = 'preview-' + input.id.replace(/-/g, '-');
    let preview = document.getElementById(previewId);

    if (!preview) {
        preview = input.parentElement.parentElement.querySelector('.image-preview');
    }

    if (preview && input.value) {
        preview.innerHTML = `<img src="${input.value}" alt="Preview" onerror="this.parentElement.innerHTML='Görsel yüklenemedi'">`;
    } else if (preview) {
        preview.innerHTML = '';
    }
}

// Image Upload Handler - uses Supabase Storage when available, base64 fallback
async function handleImageUpload(fileInput, targetInputId) {
    const file = fileInput.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        showToast('Dosya boyutu çok büyük! Maksimum 5MB olmalı.', 'error');
        fileInput.value = '';
        return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
        showToast('Sadece görsel dosyaları yüklenebilir!', 'error');
        fileInput.value = '';
        return;
    }

    const targetInput = document.getElementById(targetInputId);
    if (!targetInput) return;

    // Try Supabase Storage first
    if (!DEMO_MODE && typeof uploadImage === 'function') {
        try {
            showToast('Görsel yükleniyor...', 'info');
            const publicUrl = await uploadImage(file, 'site-images');
            targetInput.value = publicUrl;
            const event = new Event('input', { bubbles: true });
            targetInput.dispatchEvent(event);
            updateImagePreview(targetInput);
            showToast('Görsel Supabase Storage\'a yüklendi!', 'success');
            return;
        } catch (error) {
            console.warn('Supabase Storage upload failed, falling back to base64:', error);
        }
    }

    // Fallback: base64 (for demo mode or if Storage fails)
    const reader = new FileReader();
    reader.onload = function(e) {
        targetInput.value = e.target.result;
        const event = new Event('input', { bubbles: true });
        targetInput.dispatchEvent(event);
        updateImagePreview(targetInput);
        showToast('Görsel yüklendi (base64)', 'success');
    };
    reader.onerror = function() {
        showToast('Görsel yüklenirken hata oluştu!', 'error');
    };
    reader.readAsDataURL(file);
}

// Clear uploaded image
function clearUploadedImage(inputId) {
    const targetInput = document.getElementById(inputId);
    if (targetInput) {
        targetInput.value = '';
        updateImagePreview(targetInput);
    }
    showToast('Görsel silindi', 'info');
}

// Hero Stats
function renderHeroStats() {
    const container = document.getElementById('hero-stats-editor');
    if (!container || !siteContent.hero?.stats) return;

    container.innerHTML = siteContent.hero.stats.map((stat, index) => `
        <div class="stat-item" data-index="${index}">
            <div class="form-group">
                <label>Sayı</label>
                <input type="text" value="${escHtml(stat.number)}" onchange="updateHeroStat(${index}, 'number', this.value)">
            </div>
            <div class="form-group">
                <label>Metin</label>
                <input type="text" value="${escHtml(stat.text)}" onchange="updateHeroStat(${index}, 'text', this.value)">
            </div>
        </div>
    `).join('');
}

function updateHeroStat(index, field, value) {
    siteContent.hero.stats[index][field] = value;
    markAsChanged();
}

// ========================================
// HERO SLIDES MANAGEMENT
// ========================================

let currentHeroSlideIndex = 0;

function initHeroSlides() {
    if (!siteContent.heroSlides) {
        siteContent.heroSlides = [
            {
                tag: 'Anahtar Teslim Üretim',
                title: 'WAFER & CEREAL BAR',
                titleHighlight: 'ÜRETİM HATLARI',
                description: 'Komple wafer ve cereal bar üretim hatları. Hamur hazırlamadan paketlemeye anahtar teslim çözümler.',
                stats: [
                    { number: '57+', text: 'Ülkeye İhracat' },
                    { number: '12.000', text: 'M² Tesis' },
                    { number: '30+', text: 'Yıl Tecrübe' },
                    { number: '500+', text: 'Mutlu Müşteri' }
                ],
                button1Text: 'HEMEN TEKLİF AL',
                button1Link: 'https://wa.me/905468792927',
                button2Text: 'VİDEOLARI İZLE',
                button2Link: '#videos',
                image: 'images/hero/wafer-line.png'
            },
            {
                tag: 'Paketleme Çözümleri',
                title: 'FLOWPACK',
                titleHighlight: 'PAKETLEME MAKİNELERİ',
                description: 'Yatay paketleme makineleri. Bisküvi, wafer, çikolata, sabun ve daha fazlası için yüksek hızlı çözümler.',
                stats: [
                    { number: '800', text: 'Paket/Dakika' },
                    { number: '10+', text: 'Farklı Model' },
                    { number: '%99', text: 'Verimlilik' },
                    { number: '24/7', text: 'Destek' }
                ],
                button1Text: 'HEMEN TEKLİF AL',
                button1Link: 'https://wa.me/905468792927',
                button2Text: 'MAKİNELERİ İNCELE',
                button2Link: 'products/flow-pack.html',
                image: 'images/hero/flowpack.png'
            },
            {
                tag: 'Yüksek Hız',
                title: 'HIGH SPEED',
                titleHighlight: 'OTOMATİK BESLEME',
                description: 'Yüksek hızlı otomatik beslemeli flowpack makineleri. Tam otomatik üretim hatları için ideal çözüm.',
                stats: [
                    { number: '500+', text: 'Paket/Dakika' },
                    { number: '%100', text: 'Otomasyon' },
                    { number: 'CE', text: 'Sertifikalı' },
                    { number: '2', text: 'Yıl Garanti' }
                ],
                button1Text: 'HEMEN TEKLİF AL',
                button1Link: 'https://wa.me/905468792927',
                button2Text: 'DETAYLI BİLGİ',
                button2Link: 'products/flow-pack.html',
                image: 'images/hero/high-speed.png'
            }
        ];
    }
}

function renderHeroSlides() {
    initHeroSlides();

    const tabsContainer = document.getElementById('sliderTabs');
    const editorContainer = document.getElementById('heroSlidesEditor');

    if (!tabsContainer || !editorContainer) return;

    // Render tabs
    tabsContainer.innerHTML = siteContent.heroSlides.map((slide, index) => `
        <button class="slider-tab ${index === currentHeroSlideIndex ? 'active' : ''}"
                onclick="switchHeroSlideTab(${index})">
            Slide ${index + 1}
        </button>
    `).join('');

    // Render current slide editor
    const slide = siteContent.heroSlides[currentHeroSlideIndex];
    if (!slide) return;

    editorContainer.innerHTML = `
        <div class="slide-editor-card">
            <div class="slide-header">
                <h3><i class="fas fa-desktop"></i> Slide ${currentHeroSlideIndex + 1}</h3>
                ${siteContent.heroSlides.length > 1 ? `
                    <button class="btn btn-danger btn-sm" onclick="deleteHeroSlide(${currentHeroSlideIndex})">
                        <i class="fas fa-trash"></i> Slide'ı Sil
                    </button>
                ` : ''}
            </div>

            <div class="form-section">
                <h4><i class="fas fa-heading"></i> Başlık Bilgileri</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Etiket (Tag)</label>
                        <input type="text" value="${escHtml(slide.tag || '')}"
                               onchange="updateHeroSlide(${currentHeroSlideIndex}, 'tag', this.value)"
                               placeholder="Örn: Anahtar Teslim Üretim">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Ana Başlık</label>
                        <input type="text" value="${escHtml(slide.title || '')}"
                               onchange="updateHeroSlide(${currentHeroSlideIndex}, 'title', this.value)"
                               placeholder="Örn: WAFER & CEREAL BAR">
                    </div>
                    <div class="form-group">
                        <label>Vurgulu Başlık</label>
                        <input type="text" value="${escHtml(slide.titleHighlight || '')}"
                               onchange="updateHeroSlide(${currentHeroSlideIndex}, 'titleHighlight', this.value)"
                               placeholder="Örn: ÜRETİM HATLARI">
                    </div>
                </div>
                <div class="form-group">
                    <label>Açıklama</label>
                    <textarea rows="3" onchange="updateHeroSlide(${currentHeroSlideIndex}, 'description', this.value)"
                              placeholder="Slide açıklaması...">${slide.description || ''}</textarea>
                </div>
            </div>

            <div class="form-section">
                <h4><i class="fas fa-chart-bar"></i> İstatistikler</h4>
                <div class="stats-grid" id="slideStatsEditor-${currentHeroSlideIndex}">
                    ${(slide.stats || []).map((stat, statIndex) => `
                        <div class="stat-edit-item">
                            <input type="text" value="${escHtml(stat.number)}"
                                   onchange="updateHeroSlideStat(${currentHeroSlideIndex}, ${statIndex}, 'number', this.value)"
                                   placeholder="57+">
                            <input type="text" value="${escHtml(stat.text)}"
                                   onchange="updateHeroSlideStat(${currentHeroSlideIndex}, ${statIndex}, 'text', this.value)"
                                   placeholder="Ülkeye İhracat">
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="form-section">
                <h4><i class="fas fa-mouse-pointer"></i> Butonlar</h4>
                <div class="form-row">
                    <div class="form-group">
                        <label>Buton 1 Metni</label>
                        <input type="text" value="${escHtml(slide.button1Text || '')}"
                               onchange="updateHeroSlide(${currentHeroSlideIndex}, 'button1Text', this.value)"
                               placeholder="HEMEN TEKLİF AL">
                    </div>
                    <div class="form-group">
                        <label>Buton 1 Linki</label>
                        <input type="text" value="${escHtml(slide.button1Link || '')}"
                               onchange="updateHeroSlide(${currentHeroSlideIndex}, 'button1Link', this.value)"
                               placeholder="https://wa.me/905468792927">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Buton 2 Metni</label>
                        <input type="text" value="${escHtml(slide.button2Text || '')}"
                               onchange="updateHeroSlide(${currentHeroSlideIndex}, 'button2Text', this.value)"
                               placeholder="VİDEOLARI İZLE">
                    </div>
                    <div class="form-group">
                        <label>Buton 2 Linki</label>
                        <input type="text" value="${escHtml(slide.button2Link || '')}"
                               onchange="updateHeroSlide(${currentHeroSlideIndex}, 'button2Link', this.value)"
                               placeholder="#videos">
                    </div>
                </div>
            </div>

            <div class="form-section">
                <h4><i class="fas fa-image"></i> Görsel</h4>
                <div class="form-group">
                    <label>Görsel URL</label>
                    <input type="text" value="${escHtml(slide.image || '')}"
                           onchange="updateHeroSlide(${currentHeroSlideIndex}, 'image', this.value)"
                           placeholder="images/hero/slide.png">
                </div>
                ${slide.image ? `<div class="image-preview"><img src="${slide.image}" alt="Preview"></div>` : ''}
            </div>
        </div>
    `;
}

function switchHeroSlideTab(index) {
    currentHeroSlideIndex = index;
    renderHeroSlides();
}

function updateHeroSlide(slideIndex, field, value) {
    if (!siteContent.heroSlides[slideIndex]) return;
    siteContent.heroSlides[slideIndex][field] = value;
    markAsChanged();
}

function updateHeroSlideStat(slideIndex, statIndex, field, value) {
    if (!siteContent.heroSlides[slideIndex]?.stats[statIndex]) return;
    siteContent.heroSlides[slideIndex].stats[statIndex][field] = value;
    markAsChanged();
}

function addHeroSlide() {
    initHeroSlides();

    const newSlide = {
        tag: 'Yeni Slide',
        title: 'BAŞLIK',
        titleHighlight: 'VURGULU METİN',
        description: 'Slide açıklaması buraya gelecek.',
        stats: [
            { number: '100+', text: 'İstatistik 1' },
            { number: '50+', text: 'İstatistik 2' },
            { number: '25+', text: 'İstatistik 3' },
            { number: '10+', text: 'İstatistik 4' }
        ],
        button1Text: 'BUTON 1',
        button1Link: '#',
        button2Text: 'BUTON 2',
        button2Link: '#',
        image: ''
    };

    siteContent.heroSlides.push(newSlide);
    currentHeroSlideIndex = siteContent.heroSlides.length - 1;
    renderHeroSlides();
    markAsChanged();
    showToast('Yeni slide eklendi', 'success');
}

function deleteHeroSlide(index) {
    if (siteContent.heroSlides.length <= 1) {
        showToast('En az 1 slide olmalı', 'error');
        return;
    }

    if (!confirm('Bu slide\'ı silmek istediğinize emin misiniz?')) return;

    siteContent.heroSlides.splice(index, 1);
    if (currentHeroSlideIndex >= siteContent.heroSlides.length) {
        currentHeroSlideIndex = siteContent.heroSlides.length - 1;
    }
    renderHeroSlides();
    markAsChanged();
    showToast('Slide silindi', 'info');
}

// ========================================
// END HERO SLIDES MANAGEMENT
// ========================================

// ========================================
// FEATURED SEARCH ITEMS MANAGEMENT
// ========================================

function initFeaturedSearchItems() {
    if (!siteContent.featuredSearchItems) {
        siteContent.featuredSearchItems = [
            { title: 'Yatay Flowpack Paketleme', url: 'products/flow-pack.html', icon: 'fas fa-box' },
            { title: 'Gofret Üretim Hatları', url: 'products/wafer.html', icon: 'fas fa-cookie' },
            { title: 'Tahıl Bar Üretim Hatları', url: 'products/cereal-bar.html', icon: 'fas fa-seedling' },
            { title: 'Çikolata Kaplama Makinası', url: 'products/chocolate-coating.html', icon: 'fas fa-candy-cane' },
            { title: 'Dikey Paketleme (VFFS)', url: 'products/vffs.html', icon: 'fas fa-arrows-alt-v' },
            { title: 'Bisküvi Kremalama', url: 'products/biscuit-sandwiching.html', icon: 'fas fa-cookie-bite' }
        ];
    }
}

function renderFeaturedSearchItems() {
    initFeaturedSearchItems();
    const container = document.getElementById('featured-search-editor');
    if (!container) return;

    container.innerHTML = siteContent.featuredSearchItems.map((item, index) => `
        <div class="item-row" data-index="${index}">
            <div class="item-drag"><i class="fas fa-grip-vertical"></i></div>
            <div class="item-icon">
                <i class="${item.icon || 'fas fa-cog'}"></i>
            </div>
            <div class="item-inputs">
                <input type="text" value="${escHtml(item.title)}"
                       onchange="updateFeaturedSearchItem(${index}, 'title', this.value)"
                       placeholder="Makine Adı">
                <input type="text" value="${escHtml(item.url)}"
                       onchange="updateFeaturedSearchItem(${index}, 'url', this.value)"
                       placeholder="products/xxx.html">
                <input type="text" value="${escHtml(item.icon || 'fas fa-cog')}"
                       onchange="updateFeaturedSearchItem(${index}, 'icon', this.value)"
                       placeholder="fas fa-icon">
            </div>
            <button class="item-delete" onclick="deleteFeaturedSearchItem(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function updateFeaturedSearchItem(index, field, value) {
    if (!siteContent.featuredSearchItems[index]) return;
    siteContent.featuredSearchItems[index][field] = value;
    markAsChanged();
}

function addFeaturedSearchItem() {
    initFeaturedSearchItems();
    siteContent.featuredSearchItems.push({
        title: 'Yeni Makine',
        url: 'products/',
        icon: 'fas fa-cog'
    });
    renderFeaturedSearchItems();
    markAsChanged();
    showToast('Yeni makine eklendi', 'success');
}

function deleteFeaturedSearchItem(index) {
    if (!confirm('Bu makineyi silmek istediğinize emin misiniz?')) return;
    siteContent.featuredSearchItems.splice(index, 1);
    renderFeaturedSearchItems();
    markAsChanged();
    showToast('Makine silindi', 'info');
}

// ========================================
// END FEATURED SEARCH ITEMS MANAGEMENT
// ========================================

// About Features
function renderAboutFeatures() {
    const container = document.getElementById('about-features-editor');
    if (!container || !siteContent.about?.features) return;

    container.innerHTML = siteContent.about.features.map((feature, index) => `
        <div class="feature-item" data-index="${index}">
            <div class="form-group">
                <label>İkon (Font Awesome)</label>
                <input type="text" value="${escHtml(feature.icon)}" onchange="updateAboutFeature(${index}, 'icon', this.value)" placeholder="fas fa-icon">
            </div>
            <div class="form-group">
                <label>Metin</label>
                <input type="text" value="${escHtml(feature.text)}" onchange="updateAboutFeature(${index}, 'text', this.value)">
            </div>
        </div>
    `).join('');
}

function updateAboutFeature(index, field, value) {
    siteContent.about.features[index][field] = value;
    markAsChanged();
}

// Machine Items
function renderMachineItems() {
    const container = document.getElementById('machines-items-editor');
    if (!container || !siteContent.machines?.items) return;

    container.innerHTML = siteContent.machines.items.map((item, index) => `
        <div class="item-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="fas fa-cog"></i> Makine ${index + 1}</h4>
                <button class="delete-item" onclick="deleteMachineItem(${index})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" value="${escHtml(item.title)}" onchange="updateMachineItem(${index}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>Görsel URL</label>
                    <input type="url" value="${escHtml(item.image)}" onchange="updateMachineItem(${index}, 'image', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Açıklama</label>
                <textarea onchange="updateMachineItem(${index}, 'description', this.value)" rows="2">${escHtml(item.description)}</textarea>
            </div>
            <div class="form-group">
                <label>Özellikler</label>
                <div class="machine-features-list">
                    ${item.features.map((feature, fIndex) => `
                        <div class="feature-input">
                            <input type="text" value="${escHtml(feature)}" onchange="updateMachineFeature(${index}, ${fIndex}, this.value)">
                            <button onclick="deleteMachineFeature(${index}, ${fIndex})"><i class="fas fa-times"></i></button>
                        </div>
                    `).join('')}
                </div>
                <button class="add-feature-btn" onclick="addMachineFeature(${index})"><i class="fas fa-plus"></i> Özellik Ekle</button>
            </div>
        </div>
    `).join('');
}

function updateMachineItem(index, field, value) {
    siteContent.machines.items[index][field] = value;
    markAsChanged();
}

function updateMachineFeature(itemIndex, featureIndex, value) {
    siteContent.machines.items[itemIndex].features[featureIndex] = value;
    markAsChanged();
}

function addMachineFeature(itemIndex) {
    siteContent.machines.items[itemIndex].features.push('Yeni özellik');
    renderMachineItems();
    markAsChanged();
}

function deleteMachineFeature(itemIndex, featureIndex) {
    siteContent.machines.items[itemIndex].features.splice(featureIndex, 1);
    renderMachineItems();
    markAsChanged();
}

function addMachineItem() {
    siteContent.machines.items.push({
        title: 'Yeni Makine',
        description: 'Makine açıklaması',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        features: ['Özellik 1', 'Özellik 2', 'Özellik 3']
    });
    renderMachineItems();
    markAsChanged();
}

function deleteMachineItem(index) {
    if (confirm('Bu makineyi silmek istediğinizden emin misiniz?')) {
        siteContent.machines.items.splice(index, 1);
        renderMachineItems();
        markAsChanged();
    }
}

// Packaging Items
function renderPackagingItems() {
    const container = document.getElementById('packaging-items-editor');
    if (!container || !siteContent.packaging?.items) return;

    container.innerHTML = siteContent.packaging.items.map((item, index) => `
        <div class="item-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="fas fa-box"></i> ${item.title}</h4>
                <button class="delete-item" onclick="deletePackagingItem(${index})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" value="${escHtml(item.title)}" onchange="updatePackagingItem(${index}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>Sayfa Linki</label>
                    <input type="text" value="${escHtml(item.link || '')}" onchange="updatePackagingItem(${index}, 'link', this.value)" placeholder="products/flow-pack.html">
                </div>
            </div>
            <div class="form-group">
                <label>Görsel URL</label>
                <input type="url" value="${escHtml(item.image || '')}" onchange="updatePackagingItem(${index}, 'image', this.value)" placeholder="https://img.youtube.com/vi/...">
            </div>
            <div class="form-group">
                <label>Açıklama</label>
                <textarea onchange="updatePackagingItem(${index}, 'description', this.value)" rows="2">${escHtml(item.description)}</textarea>
            </div>
        </div>
    `).join('');
}

function updatePackagingItem(index, field, value) {
    siteContent.packaging.items[index][field] = value;
    markAsChanged();
}

function addPackagingItem() {
    siteContent.packaging.items.push({
        title: 'Yeni Paketleme Türü',
        description: 'Paketleme türü açıklaması',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        link: 'products/yeni-paketleme.html'
    });
    renderPackagingItems();
    markAsChanged();
}

function deletePackagingItem(index) {
    if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
        siteContent.packaging.items.splice(index, 1);
        renderPackagingItems();
        markAsChanged();
    }
}

// Sector Items
function renderSectorItems() {
    const container = document.getElementById('sectors-items-editor');
    if (!container || !siteContent.sectors?.items) return;

    container.innerHTML = siteContent.sectors.items.map((item, index) => `
        <div class="item-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="${item.icon}"></i> ${item.title}</h4>
                <button class="delete-item" onclick="deleteSectorItem(${index})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>İkon (Font Awesome)</label>
                    <input type="text" value="${escHtml(item.icon)}" onchange="updateSectorItem(${index}, 'icon', this.value)" placeholder="fas fa-cookie">
                </div>
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" value="${escHtml(item.title)}" onchange="updateSectorItem(${index}, 'title', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Sayfa Linki</label>
                <input type="text" value="${escHtml(item.link || '')}" onchange="updateSectorItem(${index}, 'link', this.value)" placeholder="packaging-by-product.html">
            </div>
        </div>
    `).join('');
}

function updateSectorItem(index, field, value) {
    siteContent.sectors.items[index][field] = value;
    markAsChanged();
}

function addSectorItem() {
    siteContent.sectors.items.push({
        icon: 'fas fa-box',
        title: 'Yeni Ürün',
        link: 'packaging-by-product.html'
    });
    renderSectorItems();
    markAsChanged();
}

function deleteSectorItem(index) {
    if (confirm('Bu sektörü silmek istediğinizden emin misiniz?')) {
        siteContent.sectors.items.splice(index, 1);
        renderSectorItems();
        markAsChanged();
    }
}

// Why Us Items
function renderWhyUsItems() {
    const container = document.getElementById('whyus-items-editor');
    if (!container || !siteContent.whyUs?.items) return;

    container.innerHTML = siteContent.whyUs.items.map((item, index) => `
        <div class="item-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="${item.icon}"></i> ${item.title}</h4>
                <button class="delete-item" onclick="deleteWhyUsItem(${index})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>İkon (Font Awesome)</label>
                    <input type="text" value="${escHtml(item.icon)}" onchange="updateWhyUsItem(${index}, 'icon', this.value)">
                </div>
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" value="${escHtml(item.title)}" onchange="updateWhyUsItem(${index}, 'title', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Açıklama</label>
                <textarea onchange="updateWhyUsItem(${index}, 'description', this.value)" rows="2">${escHtml(item.description)}</textarea>
            </div>
        </div>
    `).join('');
}

function updateWhyUsItem(index, field, value) {
    siteContent.whyUs.items[index][field] = value;
    markAsChanged();
}

function addWhyUsItem() {
    siteContent.whyUs.items.push({
        icon: 'fas fa-check',
        title: 'Yeni Özellik',
        description: 'Açıklama'
    });
    renderWhyUsItems();
    markAsChanged();
}

function deleteWhyUsItem(index) {
    if (confirm('Bu öğeyi silmek istediğinizden emin misiniz?')) {
        siteContent.whyUs.items.splice(index, 1);
        renderWhyUsItems();
        markAsChanged();
    }
}

// Testimonial Items
function renderTestimonialItems() {
    const container = document.getElementById('testimonials-items-editor');
    if (!container || !siteContent.testimonials?.items) return;

    container.innerHTML = siteContent.testimonials.items.map((item, index) => `
        <div class="item-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="fas fa-quote-left"></i> ${item.author}</h4>
                <button class="delete-item" onclick="deleteTestimonialItem(${index})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-group">
                <label>Yorum</label>
                <textarea onchange="updateTestimonialItem(${index}, 'text', this.value)" rows="3">${escHtml(item.text)}</textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Müşteri Adı</label>
                    <input type="text" value="${escHtml(item.author)}" onchange="updateTestimonialItem(${index}, 'author', this.value)">
                </div>
                <div class="form-group">
                    <label>Pozisyon / Ülke</label>
                    <input type="text" value="${escHtml(item.role)}" onchange="updateTestimonialItem(${index}, 'role', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Bayrak Görseli URL</label>
                <input type="text" value="${escHtml(item.flag)}" onchange="updateTestimonialItem(${index}, 'flag', this.value)">
            </div>
        </div>
    `).join('');
}

function updateTestimonialItem(index, field, value) {
    siteContent.testimonials.items[index][field] = value;
    markAsChanged();
}

function addTestimonialItem() {
    siteContent.testimonials.items.push({
        text: 'Müşteri yorumu',
        author: 'Müşteri Adı',
        role: 'Pozisyon - Ülke',
        flag: 'images/flags/tr.svg'
    });
    renderTestimonialItems();
    markAsChanged();
}

function deleteTestimonialItem(index) {
    if (confirm('Bu yorumu silmek istediğinizden emin misiniz?')) {
        siteContent.testimonials.items.splice(index, 1);
        renderTestimonialItems();
        markAsChanged();
    }
}

// Certificate Items
function renderCertificateItems() {
    const container = document.getElementById('certificates-editor');
    if (!container) return;

    if (!siteContent.certificates) {
        siteContent.certificates = {
            tag: 'Sertifikalarımız',
            title: 'CE',
            titleHighlight: 'Sertifikaları',
            subtitle: 'Makinelerimiz Avrupa CE standartlarına uygun olarak üretilmektedir',
            items: [
                { title: 'Horizontal Flow Pack CE', description: 'Yatay paketleme makineleri CE sertifikası', pdfUrl: 'sertifika/Horizontal CE.pdf' },
                { title: 'Thermoform CE', description: 'Termoform paketleme makineleri CE sertifikası', pdfUrl: 'sertifika/Termoform CE.pdf' },
                { title: 'Vertical VFFS CE', description: 'Dikey dolum makineleri CE sertifikası', pdfUrl: 'sertifika/Vertical CE.pdf' }
            ]
        };
    }

    container.innerHTML = siteContent.certificates.items.map((item, index) => `
        <div class="item-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="fas fa-certificate"></i> ${item.title}</h4>
                <button class="delete-item" onclick="deleteCertificateItem(${index})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Sertifika Adı</label>
                    <input type="text" value="${escHtml(item.title)}" onchange="updateCertificateItem(${index}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>PDF URL</label>
                    <input type="text" value="${escHtml(item.pdfUrl)}" onchange="updateCertificateItem(${index}, 'pdfUrl', this.value)" placeholder="sertifika/dosya.pdf">
                </div>
            </div>
            <div class="form-group">
                <label>Açıklama</label>
                <textarea onchange="updateCertificateItem(${index}, 'description', this.value)" rows="2">${escHtml(item.description)}</textarea>
            </div>
        </div>
    `).join('');
}

function updateCertificateItem(index, field, value) {
    siteContent.certificates.items[index][field] = value;
    markAsChanged();
}

function addCertificate() {
    if (!siteContent.certificates) {
        siteContent.certificates = { items: [] };
    }
    siteContent.certificates.items.push({
        title: 'Yeni Sertifika',
        description: 'Sertifika açıklaması',
        pdfUrl: 'sertifika/yeni-sertifika.pdf'
    });
    renderCertificateItems();
    markAsChanged();
}

function deleteCertificateItem(index) {
    if (confirm('Bu sertifikayı silmek istediğinizden emin misiniz?')) {
        siteContent.certificates.items.splice(index, 1);
        renderCertificateItems();
        markAsChanged();
    }
}

// Featured Video
function renderFeaturedVideo() {
    if (!siteContent.featuredVideo) {
        siteContent.featuredVideo = {
            title: 'Girişim Makina - Fuar Röportajı',
            videoId: '03u4_rZC1nA',
            subtitle: 'Kurucumuz ile özel röportaj',
            badge: 'Öne Çıkan'
        };
    }

    const fv = siteContent.featuredVideo;
    document.getElementById('featured-video-title').value = fv.title || '';
    document.getElementById('featured-video-id').value = fv.videoId || '';
    document.getElementById('featured-video-subtitle').value = fv.subtitle || '';
    document.getElementById('featured-video-badge').value = fv.badge || 'Öne Çıkan';

    // Update preview
    const preview = document.getElementById('featured-video-preview');
    if (preview && fv.videoId) {
        preview.innerHTML = `
            <img src="https://img.youtube.com/vi/${fv.videoId}/mqdefault.jpg" alt="Öne Çıkan Video" style="width:200px; border-radius:8px;">
            <a href="https://www.youtube.com/watch?v=${fv.videoId}" target="_blank" class="btn btn-outline btn-sm" style="margin-left:15px;">
                <i class="fab fa-youtube"></i> Videoyu Gör
            </a>
        `;
    }
}

function updateFeaturedVideo() {
    if (!siteContent.featuredVideo) {
        siteContent.featuredVideo = {};
    }

    siteContent.featuredVideo.title = document.getElementById('featured-video-title').value;
    siteContent.featuredVideo.videoId = document.getElementById('featured-video-id').value;
    siteContent.featuredVideo.subtitle = document.getElementById('featured-video-subtitle').value;
    siteContent.featuredVideo.badge = document.getElementById('featured-video-badge').value;

    // Update preview
    renderFeaturedVideo();
    markAsChanged();
}

// Video Items
function renderVideoItems() {
    const container = document.getElementById('videos-items-editor');
    if (!container || !siteContent.videos?.items) return;

    container.innerHTML = siteContent.videos.items.map((item, index) => `
        <div class="item-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="fas fa-video"></i> ${item.title}</h4>
                <button class="delete-item" onclick="deleteVideoItem(${index})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" value="${escHtml(item.title)}" onchange="updateVideoItem(${index}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>YouTube Video ID</label>
                    <input type="text" value="${escHtml(item.videoId)}" onchange="updateVideoItem(${index}, 'videoId', this.value)" placeholder="dQw4w9WgXcQ">
                </div>
            </div>
            <div class="form-group">
                <label>Thumbnail URL</label>
                <input type="url" value="${escHtml(item.thumbnail)}" onchange="updateVideoItem(${index}, 'thumbnail', this.value)">
            </div>
        </div>
    `).join('');
}

function updateVideoItem(index, field, value) {
    siteContent.videos.items[index][field] = value;
    markAsChanged();
}

function addVideoItem() {
    siteContent.videos.items.push({
        title: 'Yeni Video',
        thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        videoId: ''
    });
    renderVideoItems();
    markAsChanged();
}

function deleteVideoItem(index) {
    if (confirm('Bu videoyu silmek istediğinizden emin misiniz?')) {
        siteContent.videos.items.splice(index, 1);
        renderVideoItems();
        markAsChanged();
    }
}

// Fuarlar (Exhibitions)
function renderFuarItems() {
    const container = document.getElementById('fuarlar-items-editor');
    if (!container) return;

    // Initialize fuarlar if not exists
    if (!siteContent.fuarlar) {
        siteContent.fuarlar = {
            tag: 'Fuarlar',
            title: 'Fuar Katılımlarımız',
            subtitle: 'Uluslararası fuarlarda Türkiye\'yi temsil ediyoruz',
            items: [
                { title: 'CNR FOTEG 2022', videoId: 'NYe_58LMnNM' },
                { title: 'Gulfood Manufacturing 2024', videoId: '_pMe5CT0ptQ' },
                { title: 'Interpack 2023', videoId: 'BVQdeQya0Cw' },
                { title: 'PackExpo 2024', videoId: 'rBRjOWLoHvE' }
            ]
        };
    }

    const items = siteContent.fuarlar.items || [];

    container.innerHTML = items.map((item, index) => `
        <div class="item-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="fas fa-calendar-alt"></i> ${item.title}</h4>
                <div class="item-actions">
                    <button class="move-item" onclick="moveFuarItem(${index}, -1)" ${index === 0 ? 'disabled' : ''} title="Yukarı"><i class="fas fa-arrow-up"></i></button>
                    <button class="move-item" onclick="moveFuarItem(${index}, 1)" ${index === items.length - 1 ? 'disabled' : ''} title="Aşağı"><i class="fas fa-arrow-down"></i></button>
                    <button class="delete-item" onclick="deleteFuarItem(${index})" title="Sil"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Fuar Adı</label>
                    <input type="text" value="${escHtml(item.title)}" onchange="updateFuarItem(${index}, 'title', this.value)" placeholder="Gulfood Manufacturing 2024">
                </div>
                <div class="form-group">
                    <label>YouTube Video ID</label>
                    <input type="text" value="${escHtml(item.videoId)}" onchange="updateFuarItem(${index}, 'videoId', this.value)" placeholder="NYe_58LMnNM">
                </div>
            </div>
            <div class="video-preview">
                <img src="https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg" alt="${item.title}" style="width:120px; border-radius:8px;">
                <a href="https://www.youtube.com/watch?v=${item.videoId}" target="_blank" class="btn btn-outline btn-xs" style="margin-left:10px;">
                    <i class="fab fa-youtube"></i> Videoyu Gör
                </a>
            </div>
        </div>
    `).join('');

    // Update header inputs
    document.getElementById('fuarlar-tag').value = siteContent.fuarlar.tag || 'Fuarlar';
    document.getElementById('fuarlar-title').value = siteContent.fuarlar.title || 'Fuar Katılımlarımız';
    document.getElementById('fuarlar-subtitle').value = siteContent.fuarlar.subtitle || '';
}

function updateFuarItem(index, field, value) {
    if (!siteContent.fuarlar?.items) return;
    siteContent.fuarlar.items[index][field] = value;
    renderFuarItems();
    markAsChanged();
}

function addFuarItem() {
    if (!siteContent.fuarlar) {
        siteContent.fuarlar = { tag: 'Fuarlar', title: 'Fuar Katılımlarımız', subtitle: '', items: [] };
    }
    if (!siteContent.fuarlar.items) {
        siteContent.fuarlar.items = [];
    }
    siteContent.fuarlar.items.push({
        title: 'Yeni Fuar',
        videoId: ''
    });
    renderFuarItems();
    markAsChanged();
}

function deleteFuarItem(index) {
    if (confirm('Bu fuar videosunu silmek istediğinizden emin misiniz?')) {
        siteContent.fuarlar.items.splice(index, 1);
        renderFuarItems();
        markAsChanged();
    }
}

function moveFuarItem(index, direction) {
    const items = siteContent.fuarlar.items;
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) return;

    [items[index], items[newIndex]] = [items[newIndex], items[index]];
    renderFuarItems();
    markAsChanged();
}

function updateFuarSettings() {
    if (!siteContent.fuarlar) {
        siteContent.fuarlar = { items: [] };
    }
    siteContent.fuarlar.tag = document.getElementById('fuarlar-tag').value;
    siteContent.fuarlar.title = document.getElementById('fuarlar-title').value;
    siteContent.fuarlar.subtitle = document.getElementById('fuarlar-subtitle').value;
    markAsChanged();
}

// Contact Phones
function renderContactPhones() {
    const container = document.getElementById('contact-phones-editor');
    if (!container || !siteContent.contact?.phones) return;

    container.innerHTML = siteContent.contact.phones.map((phone, index) => `
        <div class="array-item">
            <input type="tel" value="${escHtml(phone)}" onchange="updateContactPhone(${index}, this.value)">
            <button class="delete-array-item" onclick="deleteContactPhone(${index})"><i class="fas fa-times"></i></button>
        </div>
    `).join('');
}

function updateContactPhone(index, value) {
    siteContent.contact.phones[index] = value;
    markAsChanged();
}

function addPhoneNumber() {
    siteContent.contact.phones.push('+90 XXX XXX XX XX');
    renderContactPhones();
    markAsChanged();
}

function deleteContactPhone(index) {
    siteContent.contact.phones.splice(index, 1);
    renderContactPhones();
    markAsChanged();
}

// Contact Emails
function renderContactEmails() {
    const container = document.getElementById('contact-emails-editor');
    if (!container || !siteContent.contact?.emails) return;

    container.innerHTML = siteContent.contact.emails.map((email, index) => `
        <div class="array-item">
            <input type="email" value="${escHtml(email)}" onchange="updateContactEmail(${index}, this.value)">
            <button class="delete-array-item" onclick="deleteContactEmail(${index})"><i class="fas fa-times"></i></button>
        </div>
    `).join('');
}

function updateContactEmail(index, value) {
    siteContent.contact.emails[index] = value;
    markAsChanged();
}

function addEmail() {
    siteContent.contact.emails.push('yeni@girisimmak.com');
    renderContactEmails();
    markAsChanged();
}

function deleteContactEmail(index) {
    siteContent.contact.emails.splice(index, 1);
    renderContactEmails();
    markAsChanged();
}

// Navigation
function initNavigation() {
    document.querySelectorAll('.sidebar-nav li').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            navigateToSection(section);
        });
    });

    saveAllBtn.addEventListener('click', saveAllContent);
}

function navigateToSection(section) {
    // Update sidebar active state
    document.querySelectorAll('.sidebar-nav li').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === section) {
            item.classList.add('active');
        }
    });

    // Update section visibility
    document.querySelectorAll('.admin-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById('section-' + section)?.classList.add('active');

    // Update page title
    const titles = {
        dashboard: 'Dashboard',
        header: 'Header Yönetimi',
        topbar: 'Üst Bar',
        hero: 'Hero Bölümü',
        about: 'Hakkımızda',
        machines: 'Gıda İşleme Makinelerimiz',
        packaging: 'Paketleme Makinelerimiz',
        sectors: 'Paketlediğimiz Ürünler',
        whyus: 'Neden Girişim Makina?',
        testimonials: 'Müşterilerimiz Ne Diyor?',
        videos: 'Videolar',
        cta: 'CTA Bölümü',
        contact: 'İletişim',
        footer: 'Footer',
        blog: 'Blog Yönetimi',
        products: 'Ürün Sayfaları',
        hr: 'İK Sayfası',
        certificates: 'Sertifikalarımız',
        catalog: 'Katalog',
        seo: 'SEO Ayarları',
        analytics: 'Analitik & İzleme',
        translations: 'Çeviriler',
        settings: 'Ayarlar'
    };
    pageTitle.textContent = titles[section] || section;

    // Initialize section-specific content
    if (section === 'translations' || section === 'settings') {
        initTranslations();
    }
    if (section === 'analytics') {
        initAnalytics();
    }
    if (section === 'header') {
        if (typeof initHeaderManagement === 'function') initHeaderManagement();
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 992) {
        sidebar.classList.remove('open');
    }
}

// Sidebar Toggle
function initSidebar() {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 &&
            !sidebar.contains(e.target) &&
            !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

// Save Content - Supabase
async function saveAllContent() {
    saveAllBtn.disabled = true;
    saveAllBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Kaydediliyor...';

    // Demo mode - save to localStorage
    if (DEMO_MODE) {
        localStorage.setItem('girisim_site_content', JSON.stringify(siteContent));
        if (typeof clearSiteCache === 'function') clearSiteCache();
        sessionStorage.removeItem('girisim_site_cache');
        showToast('Demo modunda kaydedildi (localStorage)', 'success');
        updateLastUpdateTime();
        saveAllBtn.classList.remove('btn-warning');
        saveAllBtn.classList.add('btn-success');
        saveAllBtn.disabled = false;
        saveAllBtn.innerHTML = '<i class="fas fa-save"></i> Tümünü Kaydet';
        return;
    }

    try {
        const { error } = await supabase
            .from('site_content')
            .upsert({
                id: 'main',
                content: siteContent,
                updated_at: new Date().toISOString()
            });

        if (error) throw error;

        // Clear site cache so live site picks up new content
        if (typeof clearSiteCache === 'function') clearSiteCache();
        sessionStorage.removeItem('girisim_site_cache');

        showToast('Tüm değişiklikler kaydedildi!', 'success');
        updateLastUpdateTime();
        saveAllBtn.classList.remove('btn-warning');
        saveAllBtn.classList.add('btn-success');
    } catch (error) {
        console.error('Error saving content:', error);
        showToast('Kaydetme hatası: ' + error.message, 'error');
    } finally {
        saveAllBtn.disabled = false;
        saveAllBtn.innerHTML = '<i class="fas fa-save"></i> Tümünü Kaydet';
    }
}

function markAsChanged() {
    saveAllBtn.classList.remove('btn-success');
    saveAllBtn.classList.add('btn-warning');
}

function updateLastUpdateTime() {
    const now = new Date();
    document.getElementById('lastUpdate').textContent = now.toLocaleString('tr-TR');
}

// Toast Notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show ' + type;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// =============================================
// Translation Management
// =============================================

// Translation content structure - dynamically built from siteContent
// Falls back to defaults if siteContent is not loaded yet
const turkishContentDefaults = {
    nav: { about: "Hakkımızda", production: "Üretim Hatları", packaging: "Paketleme", sectors: "Sektörler", videos: "Videolar", contact: "İletişim", getQuote: "TEKLİF AL" },
    hero: { title1: "WAFER & CEREAL BAR", title2: "ÜRETİM HATLARI", title3: "& PAKETLEME", description: "1985'ten beri gıda işleme ve paketleme makineleri üretiyoruz.", stat1: "Ülkeye İhracat", stat2: "m² Üretim Alanı", stat3: "Yıllık Tecrübe", cta1: "HEMEN TEKLİF AL", cta2: "VİDEOLARI İZLE" },
    about: { tag: "Hakkımızda", title1: "Gıda Üreticilerinin", title2: "Global Büyüme Ortağı", p1: "", p2: "", feature1: "3 Üretim Tesisi", feature2: "57+ Ülke İhracat", feature3: "7/24 Teknik Destek", catalog: "Katalogları İndir" },
    production: { tag: "Üretim Hatları", title1: "Gıda İşleme", title2: "Makinelerimiz", subtitle: "" },
    packaging: { tag: "Paketleme Çözümleri", title1: "Paketleme", title2: "Makinelerimiz", subtitle: "" },
    sectors: { tag: "Uzmanlık Alanlarımız", title1: "Paketlediğimiz", title2: "Ürünler", subtitle: "" },
    whyUs: { tag: "Neden Biz?", title1: "Neden", title2: "Girişim Makina?" },
    videos: { tag: "Video Galeri", title1: "Makinelerimizi", title2: "İzleyin", subtitle: "", cta: "YouTube Kanalımız" },
    cta: { title: "Projeniz İçin Ücretsiz Teklif Alın", subtitle: "" },
    contact: { tag: "İletişim", title1: "Bizimle", title2: "İletişime Geçin", address: "Adres", whatsapp: "WhatsApp", email: "E-Posta", hours: "Çalışma Saatleri", formTitle: "Teklif Formu", formSubmit: "Teklif İste" },
    footer: { desc: "", production: "Üretim Hatları", packaging: "Paketleme", corporate: "Kurumsal", copyright: "" },
    products: { wafer: { title: "Wafer Üretim Hatları", desc: "" }, cereal: { title: "Cereal Bar Hatları", desc: "" }, protein: { title: "Protein Bar Hatları", desc: "" }, chocolate: { title: "Çikolata Kaplama", desc: "" }, biscuit: { title: "Bisküvi Kremalama", desc: "" }, flowpack: { title: "Flow Pack", desc: "" }, overwrap: { title: "Overwrapping", desc: "" }, thermoform: { title: "Thermoform", desc: "" }, vffs: { title: "VFFS Dikey Dolum", desc: "" }, halvah: { title: "Helva Paketleme", desc: "" } }
};

// Build turkishContent dynamically from current siteContent
function getTurkishContent() {
    if (!siteContent) return turkishContentDefaults;

    const sc = siteContent;
    return {
        nav: turkishContentDefaults.nav,
        hero: {
            title1: sc.heroSlides?.[0]?.title || sc.hero?.title || turkishContentDefaults.hero.title1,
            title2: sc.heroSlides?.[0]?.titleHighlight || sc.hero?.titleHighlight || turkishContentDefaults.hero.title2,
            title3: turkishContentDefaults.hero.title3,
            description: sc.heroSlides?.[0]?.description || sc.hero?.description || turkishContentDefaults.hero.description,
            stat1: sc.hero?.stats?.[0]?.text || turkishContentDefaults.hero.stat1,
            stat2: sc.hero?.stats?.[1]?.text || turkishContentDefaults.hero.stat2,
            stat3: sc.hero?.stats?.[2]?.text || turkishContentDefaults.hero.stat3,
            cta1: sc.heroSlides?.[0]?.button1Text || turkishContentDefaults.hero.cta1,
            cta2: sc.heroSlides?.[0]?.button2Text || turkishContentDefaults.hero.cta2
        },
        about: {
            tag: sc.about?.tag || turkishContentDefaults.about.tag,
            title1: sc.about?.title || turkishContentDefaults.about.title1,
            title2: sc.about?.titleHighlight || turkishContentDefaults.about.title2,
            p1: sc.about?.paragraph1 || turkishContentDefaults.about.p1,
            p2: sc.about?.paragraph2 || turkishContentDefaults.about.p2,
            feature1: sc.about?.features?.[0]?.text || turkishContentDefaults.about.feature1,
            feature2: sc.about?.features?.[1]?.text || turkishContentDefaults.about.feature2,
            feature3: sc.about?.features?.[2]?.text || turkishContentDefaults.about.feature3,
            catalog: turkishContentDefaults.about.catalog
        },
        production: {
            tag: sc.machines?.tag || turkishContentDefaults.production.tag,
            title1: sc.machines?.title || turkishContentDefaults.production.title1,
            title2: sc.machines?.titleHighlight || turkishContentDefaults.production.title2,
            subtitle: sc.machines?.subtitle || turkishContentDefaults.production.subtitle
        },
        packaging: {
            tag: sc.packaging?.tag || turkishContentDefaults.packaging.tag,
            title1: sc.packaging?.title || turkishContentDefaults.packaging.title1,
            title2: sc.packaging?.titleHighlight || turkishContentDefaults.packaging.title2,
            subtitle: sc.packaging?.subtitle || turkishContentDefaults.packaging.subtitle
        },
        sectors: {
            tag: sc.sectors?.tag || turkishContentDefaults.sectors.tag,
            title1: sc.sectors?.title || turkishContentDefaults.sectors.title1,
            title2: sc.sectors?.titleHighlight || turkishContentDefaults.sectors.title2,
            subtitle: sc.sectors?.subtitle || turkishContentDefaults.sectors.subtitle
        },
        whyUs: {
            tag: sc.whyUs?.tag || turkishContentDefaults.whyUs.tag,
            title1: sc.whyUs?.title || turkishContentDefaults.whyUs.title1,
            title2: sc.whyUs?.titleHighlight || turkishContentDefaults.whyUs.title2
        },
        videos: {
            tag: sc.videos?.tag || turkishContentDefaults.videos.tag,
            title1: sc.videos?.title || turkishContentDefaults.videos.title1,
            title2: sc.videos?.titleHighlight || turkishContentDefaults.videos.title2,
            subtitle: sc.videos?.subtitle || turkishContentDefaults.videos.subtitle,
            cta: turkishContentDefaults.videos.cta
        },
        cta: {
            title: sc.cta?.title || turkishContentDefaults.cta.title,
            subtitle: sc.cta?.description || turkishContentDefaults.cta.subtitle
        },
        contact: {
            tag: sc.contact?.tag || turkishContentDefaults.contact.tag,
            title1: sc.contact?.title || turkishContentDefaults.contact.title1,
            title2: sc.contact?.titleHighlight || turkishContentDefaults.contact.title2,
            address: turkishContentDefaults.contact.address,
            whatsapp: turkishContentDefaults.contact.whatsapp,
            email: turkishContentDefaults.contact.email,
            hours: turkishContentDefaults.contact.hours,
            formTitle: turkishContentDefaults.contact.formTitle,
            formSubmit: turkishContentDefaults.contact.formSubmit
        },
        footer: {
            desc: sc.footer?.description || turkishContentDefaults.footer.desc,
            production: turkishContentDefaults.footer.production,
            packaging: turkishContentDefaults.footer.packaging,
            corporate: turkishContentDefaults.footer.corporate,
            copyright: sc.footer?.copyright || turkishContentDefaults.footer.copyright
        },
        products: turkishContentDefaults.products
    };
}

// Backward compatibility - turkishContent is now a getter
Object.defineProperty(window, 'turkishContent', {
    get: function() { return getTurkishContent(); }
});

// Stored translations
let customTranslations = {};

// Language labels
const langLabels = {
    en: "🇬🇧 İngilizce",
    ru: "🇷🇺 Rusça",
    ar: "🇸🇦 Arapça",
    fr: "🇫🇷 Fransızca",
    pt: "🇧🇷 Portekizce",
    es: "🇪🇸 İspanyolca"
};

// Initialize translation section
function initTranslations() {
    // Load saved translations from siteContent (Supabase) or localStorage
    if (siteContent && siteContent.translations && Object.keys(siteContent.translations).length > 0) {
        customTranslations = siteContent.translations;
    } else {
        const saved = localStorage.getItem('girisim_custom_translations');
        if (saved) {
            customTranslations = JSON.parse(saved);
        }
    }

    // Load API settings
    loadApiSettings();

    // Update status badges
    updateTranslationStatus();

    // Load initial content
    loadTranslationContent();
}

// Load translation content for selected language and section
function loadTranslationContent() {
    const lang = document.getElementById('targetLanguage').value;
    const section = document.getElementById('translationSection').value;

    // Update target language label
    document.getElementById('targetLangLabel').textContent = langLabels[lang] + ' (Hedef)';

    // Get source content
    const sourceData = turkishContent[section];
    if (!sourceData) {
        document.getElementById('sourceContent').innerHTML = '<p>Bu bölüm için içerik bulunamadı.</p>';
        document.getElementById('targetContent').innerHTML = '';
        return;
    }

    // Render source content
    let sourceHtml = '';
    let targetHtml = '';

    Object.entries(sourceData).forEach(([key, value]) => {
        if (typeof value === 'object') {
            Object.entries(value).forEach(([subKey, subValue]) => {
                const fullKey = `${section}.${key}.${subKey}`;
                const existingTranslation = customTranslations[lang]?.[section]?.[key]?.[subKey] || '';

                sourceHtml += `
                    <div class="translation-item">
                        <label>${key}.${subKey}</label>
                        <div class="source-text">${subValue}</div>
                    </div>
                `;

                targetHtml += `
                    <div class="translation-item">
                        <label>${key}.${subKey}</label>
                        <input type="text" data-key="${fullKey}" value="${escHtml(existingTranslation)}" placeholder="Çeviri girin...">
                    </div>
                `;
            });
        } else {
            const fullKey = `${section}.${key}`;
            const existingTranslation = customTranslations[lang]?.[section]?.[key] || '';

            sourceHtml += `
                <div class="translation-item">
                    <label>${key}</label>
                    <div class="source-text">${value}</div>
                </div>
            `;

            targetHtml += `
                <div class="translation-item">
                    <label>${key}</label>
                    <input type="text" data-key="${fullKey}" value="${escHtml(existingTranslation)}" placeholder="Çeviri girin...">
                </div>
            `;
        }
    });

    document.getElementById('sourceContent').innerHTML = sourceHtml;
    document.getElementById('targetContent').innerHTML = targetHtml;
}

// Auto-translate section using OpenAI API
async function autoTranslateSection() {
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
        showToast('Lütfen önce Ayarlar bölümünden OpenAI API anahtarınızı girin.', 'error');
        navigateToSection('settings');
        return;
    }

    const lang = document.getElementById('targetLanguage').value;
    const section = document.getElementById('translationSection').value;
    const model = localStorage.getItem('openai_model') || 'gpt-4o-mini';

    const langNames = {
        en: 'English',
        ru: 'Russian',
        ar: 'Arabic',
        fr: 'French',
        pt: 'Portuguese',
        es: 'Spanish'
    };

    const sourceData = turkishContent[section];
    if (!sourceData) {
        showToast('Çevrilecek içerik bulunamadı.', 'error');
        return;
    }

    // Show loading state
    const translateBtn = document.querySelector('.translation-actions .btn-primary');
    const originalBtnText = translateBtn.innerHTML;
    translateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Çevriliyor...';
    translateBtn.disabled = true;

    try {
        // Flatten the content for translation
        const textsToTranslate = [];
        const flattenContent = (obj, prefix = '') => {
            Object.entries(obj).forEach(([key, value]) => {
                const fullKey = prefix ? `${prefix}.${key}` : key;
                if (typeof value === 'object') {
                    flattenContent(value, fullKey);
                } else {
                    textsToTranslate.push({ key: fullKey, text: value });
                }
            });
        };
        flattenContent(sourceData);

        // Create prompt for ChatGPT
        const textsJson = JSON.stringify(textsToTranslate.map(t => t.text));

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: [
                    {
                        role: 'system',
                        content: `You are a professional translator specializing in industrial machinery and food processing equipment. Translate the following Turkish texts to ${langNames[lang]}. Maintain technical accuracy and professional tone. Return ONLY a JSON array of translated strings in the same order as input, no explanations.`
                    },
                    {
                        role: 'user',
                        content: `Translate these Turkish texts to ${langNames[lang]}:\n${textsJson}`
                    }
                ],
                temperature: 0.3
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API hatası');
        }

        const data = await response.json();
        const translatedTexts = JSON.parse(data.choices[0].message.content);

        // Initialize language object if not exists
        if (!customTranslations[lang]) {
            customTranslations[lang] = {};
        }
        if (!customTranslations[lang][section]) {
            customTranslations[lang][section] = {};
        }

        // Map translations back to structure
        textsToTranslate.forEach((item, index) => {
            const keys = item.key.split('.');
            let target = customTranslations[lang][section];

            for (let i = 0; i < keys.length - 1; i++) {
                if (!target[keys[i]]) {
                    target[keys[i]] = {};
                }
                target = target[keys[i]];
            }
            target[keys[keys.length - 1]] = translatedTexts[index];
        });

        // Save translations to siteContent + localStorage
        if (siteContent) {
            siteContent.translations = customTranslations;
            markAsChanged();
        }
        localStorage.setItem('girisim_custom_translations', JSON.stringify(customTranslations));

        // Update UI
        loadTranslationContent();
        updateTranslationStatus();

        showToast(`${langLabels[lang]} çevirisi tamamlandı!`, 'success');

    } catch (error) {
        console.error('Translation error:', error);
        showToast('Çeviri hatası: ' + error.message, 'error');
    } finally {
        translateBtn.innerHTML = originalBtnText;
        translateBtn.disabled = false;
    }
}

// Auto-translate ALL languages for ALL sections at once
async function autoTranslateAll() {
    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
        showToast('Lütfen önce Ayarlar bölümünden OpenAI API anahtarınızı girin.', 'error');
        navigateToSection('settings');
        return;
    }

    const model = localStorage.getItem('openai_model') || 'gpt-4o-mini';
    const allLangs = ['en', 'ru', 'ar', 'fr', 'pt', 'es'];
    const langNames = { en: 'English', ru: 'Russian', ar: 'Arabic', fr: 'French', pt: 'Portuguese', es: 'Spanish' };
    const sections = Object.keys(turkishContent);

    // Show progress
    const btn = document.getElementById('btnTranslateAll');
    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tüm diller çevriliyor...';
        btn.disabled = true;
    }

    let completed = 0;
    const total = allLangs.length * sections.length;

    try {
        for (const lang of allLangs) {
            if (!customTranslations[lang]) customTranslations[lang] = {};

            for (const section of sections) {
                const sourceData = turkishContent[section];
                if (!sourceData) continue;

                // Flatten content
                const textsToTranslate = [];
                const flattenContent = (obj, prefix = '') => {
                    Object.entries(obj).forEach(([key, value]) => {
                        const fullKey = prefix ? `${prefix}.${key}` : key;
                        if (typeof value === 'object') {
                            flattenContent(value, fullKey);
                        } else {
                            textsToTranslate.push({ key: fullKey, text: value });
                        }
                    });
                };
                flattenContent(sourceData);

                if (textsToTranslate.length === 0) continue;

                const textsJson = JSON.stringify(textsToTranslate.map(t => t.text));

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: [
                            {
                                role: 'system',
                                content: `You are a professional translator specializing in industrial machinery and food processing equipment. Translate the following Turkish texts to ${langNames[lang]}. Maintain technical accuracy and professional tone. Return ONLY a JSON array of translated strings in the same order as input, no explanations.`
                            },
                            {
                                role: 'user',
                                content: `Translate these Turkish texts to ${langNames[lang]}:\n${textsJson}`
                            }
                        ],
                        temperature: 0.3
                    })
                });

                if (!response.ok) continue;

                const data = await response.json();
                const translatedTexts = JSON.parse(data.choices[0].message.content);

                if (!customTranslations[lang][section]) customTranslations[lang][section] = {};

                textsToTranslate.forEach((item, index) => {
                    const keys = item.key.split('.');
                    let target = customTranslations[lang][section];
                    for (let i = 0; i < keys.length - 1; i++) {
                        if (!target[keys[i]]) target[keys[i]] = {};
                        target = target[keys[i]];
                    }
                    target[keys[keys.length - 1]] = translatedTexts[index];
                });

                completed++;
                if (btn) btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${completed}/${total} bölüm çevrildi...`;
            }
        }

        // Save all translations
        if (siteContent) {
            siteContent.translations = customTranslations;
            markAsChanged();
        }
        localStorage.setItem('girisim_custom_translations', JSON.stringify(customTranslations));
        updateTranslationStatus();
        loadTranslationContent();

        showToast('Tüm diller başarıyla çevrildi! "Tümünü Kaydet" ile yayınlayın.', 'success');
    } catch (error) {
        console.error('Bulk translation error:', error);
        showToast('Toplu çeviri hatası: ' + error.message, 'error');
    } finally {
        if (btn) {
            btn.innerHTML = '<i class="fas fa-language"></i> Tüm Dilleri Çevir';
            btn.disabled = false;
        }
    }
}

// Save current translation
function saveTranslation() {
    const lang = document.getElementById('targetLanguage').value;
    const section = document.getElementById('translationSection').value;

    // Get all translation inputs
    const inputs = document.querySelectorAll('#targetContent input[data-key]');

    // Initialize language object if not exists
    if (!customTranslations[lang]) {
        customTranslations[lang] = {};
    }
    if (!customTranslations[lang][section]) {
        customTranslations[lang][section] = {};
    }

    // Save each translation
    inputs.forEach(input => {
        const keyPath = input.getAttribute('data-key');
        const value = input.value.trim();

        if (value) {
            const keys = keyPath.split('.');
            let target = customTranslations[lang];

            for (let i = 0; i < keys.length - 1; i++) {
                if (!target[keys[i]]) {
                    target[keys[i]] = {};
                }
                target = target[keys[i]];
            }
            target[keys[keys.length - 1]] = value;
        }
    });

    // Save to siteContent + localStorage
    if (siteContent) {
        siteContent.translations = customTranslations;
        markAsChanged();
    }
    localStorage.setItem('girisim_custom_translations', JSON.stringify(customTranslations));
    updateTranslationStatus();

    showToast('Çeviri kaydedildi! "Tümünü Kaydet" ile Supabase\'e aktarın.', 'success');
}

// Publish translations to translation files
async function publishTranslations() {
    if (Object.keys(customTranslations).length === 0) {
        showToast('Yayınlanacak çeviri bulunamadı.', 'warning');
        return;
    }

    // Generate translation file content
    const translationsFileContent = generateTranslationsFile();

    // In a real implementation, this would update the translations.js file
    // For demo purposes, we'll show the content and provide download option

    // Create downloadable file
    const blob = new Blob([translationsFileContent], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'translations-updated.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Çeviriler dışa aktarıldı! Dosyayı js/translations.js ile değiştirin.', 'success');
}

// Generate translations JavaScript file
function generateTranslationsFile() {
    // This would merge custom translations with existing translations
    let output = '// Updated translations - Generated by Admin Panel\n';
    output += '// Replace js/translations.js with this file\n\n';
    output += 'const customTranslationsData = ' + JSON.stringify(customTranslations, null, 2) + ';\n';
    return output;
}

// Update translation status badges
function updateTranslationStatus() {
    const languages = ['en', 'ru', 'ar', 'fr', 'pt', 'es'];

    languages.forEach(lang => {
        const badge = document.getElementById(`status-${lang}`);
        if (badge) {
            if (customTranslations[lang] && Object.keys(customTranslations[lang]).length > 0) {
                const sectionCount = Object.keys(customTranslations[lang]).length;
                badge.textContent = `${sectionCount} bölüm`;
                badge.className = 'status-badge complete';
            } else {
                badge.textContent = 'Bekliyor';
                badge.className = 'status-badge pending';
            }
        }
    });
}

// =============================================
// Settings Management
// =============================================

function loadApiSettings() {
    // Load API key
    const apiKey = localStorage.getItem('openai_api_key');
    if (apiKey) {
        document.getElementById('openaiApiKey').value = apiKey;
    }

    // Load model preference
    const model = localStorage.getItem('openai_model') || 'gpt-4o-mini';
    document.getElementById('openaiModel').value = model;

    // Load language settings
    const defaultLang = localStorage.getItem('default_language') || 'tr';
    document.getElementById('defaultLanguage').value = defaultLang;

    // Load active languages
    const activeLanguages = JSON.parse(localStorage.getItem('active_languages') || '["en","ru","ar","fr","pt","es"]');
    activeLanguages.forEach(lang => {
        const checkbox = document.getElementById(`lang-${lang}-active`);
        if (checkbox) checkbox.checked = true;
    });
}

function saveApiKey() {
    const apiKey = document.getElementById('openaiApiKey').value.trim();
    if (apiKey) {
        localStorage.setItem('openai_api_key', apiKey);
        showToast('API anahtarı kaydedildi', 'success');
    }
}

function saveApiSettings() {
    const model = document.getElementById('openaiModel').value;
    localStorage.setItem('openai_model', model);
    showToast('Model ayarı kaydedildi', 'success');
}

function toggleApiKeyVisibility() {
    const input = document.getElementById('openaiApiKey');
    const btn = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        input.type = 'password';
        btn.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

async function testApiConnection() {
    const apiKey = document.getElementById('openaiApiKey').value.trim();
    const resultSpan = document.getElementById('apiTestResult');

    if (!apiKey) {
        resultSpan.textContent = '❌ API anahtarı girilmedi';
        resultSpan.className = 'error';
        return;
    }

    resultSpan.textContent = '⏳ Test ediliyor...';
    resultSpan.className = '';

    try {
        const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (response.ok) {
            resultSpan.textContent = '✅ Bağlantı başarılı!';
            resultSpan.className = 'success';
            // Save the working key
            localStorage.setItem('openai_api_key', apiKey);
        } else {
            const error = await response.json();
            resultSpan.textContent = '❌ ' + (error.error?.message || 'Bağlantı hatası');
            resultSpan.className = 'error';
        }
    } catch (error) {
        resultSpan.textContent = '❌ ' + error.message;
        resultSpan.className = 'error';
    }
}

function saveLanguageSettings() {
    // Save default language
    const defaultLang = document.getElementById('defaultLanguage').value;
    localStorage.setItem('default_language', defaultLang);

    // Save active languages
    const activeLanguages = [];
    ['en', 'ru', 'ar', 'fr', 'de', 'es'].forEach(lang => {
        const checkbox = document.getElementById(`lang-${lang}-active`);
        if (checkbox && checkbox.checked) {
            activeLanguages.push(lang);
        }
    });
    localStorage.setItem('active_languages', JSON.stringify(activeLanguages));

    showToast('Dil ayarları kaydedildi', 'success');
}

function exportTranslations() {
    const data = JSON.stringify(customTranslations, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'girisim-translations.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Çeviriler dışa aktarıldı', 'success');
}

function importTranslations() {
    document.getElementById('importFile').click();
}

function handleImportFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            customTranslations = { ...customTranslations, ...imported };
            localStorage.setItem('girisim_custom_translations', JSON.stringify(customTranslations));
            updateTranslationStatus();
            loadTranslationContent();
            showToast('Çeviriler içe aktarıldı', 'success');
        } catch (error) {
            showToast('Geçersiz dosya formatı', 'error');
        }
    };
    reader.readAsText(file);
}

function resetAllTranslations() {
    if (confirm('Tüm çevirileri silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.')) {
        customTranslations = {};
        localStorage.removeItem('girisim_custom_translations');
        updateTranslationStatus();
        loadTranslationContent();
        showToast('Tüm çeviriler silindi', 'warning');
    }
}

// Section-specific init is now handled directly in navigateToSection()

// =============================================
// Analytics & Tracking Management
// =============================================

// Initialize analytics section
function initAnalytics() {
    loadAnalyticsSettings();
    updateActiveIntegrations();
}

// Load analytics settings from siteContent/localStorage
function loadAnalyticsSettings() {
    // Try siteContent first (Supabase), then localStorage
    let settings = null;
    if (siteContent && siteContent.analytics) {
        settings = siteContent.analytics;
    } else {
        const saved = localStorage.getItem('girisim_analytics_settings');
        if (saved) settings = JSON.parse(saved);
    }
    if (settings) {

        // Populate form fields
        if (settings.googleAnalytics) {
            const el = document.getElementById('analytics-ga4');
            if (el) el.value = settings.googleAnalytics;
        }
        if (settings.googleTagManager) {
            const el = document.getElementById('analytics-gtm');
            if (el) el.value = settings.googleTagManager;
        }
        if (settings.facebookPixel) {
            const el = document.getElementById('analytics-fbPixel');
            if (el) el.value = settings.facebookPixel;
        }
        if (settings.googleSearchConsole) {
            const el = document.getElementById('analytics-gsc');
            if (el) el.value = settings.googleSearchConsole;
        }
        if (settings.yandexWebmaster) {
            const el = document.getElementById('analytics-yandexWM');
            if (el) el.value = settings.yandexWebmaster;
        }
        if (settings.yandexMetrica) {
            const el = document.getElementById('analytics-yandexMetrica');
            if (el) el.value = settings.yandexMetrica;
        }
        if (settings.youtubeChannel) {
            const el = document.getElementById('analytics-ytChannel');
            if (el) el.value = settings.youtubeChannel;
        }
        if (settings.linkedinInsight) {
            const el = document.getElementById('analytics-linkedinInsight');
            if (el) el.value = settings.linkedinInsight;
        }
        if (settings.microsoftClarity) {
            const el = document.getElementById('analytics-clarity');
            if (el) el.value = settings.microsoftClarity;
        }
        if (settings.googleAdsConversionId) {
            const el = document.getElementById('analytics-googleAdsId');
            if (el) el.value = settings.googleAdsConversionId;
        }
        if (settings.googleAdsConversionLabel) {
            const el = document.getElementById('analytics-googleAdsLabel');
            if (el) el.value = settings.googleAdsConversionLabel;
        }
        if (settings.tiktokPixel) {
            const el = document.getElementById('analytics-tiktokPixel');
            if (el) el.value = settings.tiktokPixel;
        }
        if (settings.customHeadCode) {
            const el = document.getElementById('analytics-customHead');
            if (el) el.value = settings.customHeadCode;
        }
        if (settings.customBodyCode) {
            const el = document.getElementById('analytics-customBody');
            if (el) el.value = settings.customBodyCode;
        }
    }
}

// Save analytics settings
function saveAnalyticsSettings() {
    const settings = {
        googleAnalytics: document.getElementById('analytics-ga4')?.value?.trim() || '',
        googleTagManager: document.getElementById('analytics-gtm')?.value?.trim() || '',
        facebookPixel: document.getElementById('analytics-fbPixel')?.value?.trim() || '',
        googleSearchConsole: document.getElementById('analytics-gsc')?.value?.trim() || '',
        yandexWebmaster: document.getElementById('analytics-yandexWM')?.value?.trim() || '',
        yandexMetrica: document.getElementById('analytics-yandexMetrica')?.value?.trim() || '',
        youtubeChannel: document.getElementById('analytics-ytChannel')?.value?.trim() || '',
        linkedinInsight: document.getElementById('analytics-linkedinInsight')?.value?.trim() || '',
        microsoftClarity: document.getElementById('analytics-clarity')?.value?.trim() || '',
        googleAdsConversionId: document.getElementById('analytics-googleAdsId')?.value?.trim() || '',
        googleAdsConversionLabel: document.getElementById('analytics-googleAdsLabel')?.value?.trim() || '',
        tiktokPixel: document.getElementById('analytics-tiktokPixel')?.value?.trim() || '',
        customHeadCode: document.getElementById('analytics-customHead')?.value || '',
        customBodyCode: document.getElementById('analytics-customBody')?.value || ''
    };

    // Save to siteContent (will persist to Supabase on "Save All")
    if (siteContent) {
        siteContent.analytics = settings;
    }
    // Also keep localStorage as fast cache for instant analytics loading
    localStorage.setItem('girisim_analytics_settings', JSON.stringify(settings));
    markAsChanged();

    updateActiveIntegrations();
    showToast('Analitik ayarları kaydedildi! "Tümünü Kaydet" ile Supabase\'e aktarın.', 'success');
}

// Update active integrations display
function updateActiveIntegrations() {
    const container = document.getElementById('activeIntegrations');
    if (!container) return;

    const saved = localStorage.getItem('girisim_analytics_settings');
    const settings = saved ? JSON.parse(saved) : {};

    let badges = '';

    if (settings.googleAnalytics) {
        badges += '<span class="integration-badge active"><i class="fab fa-google"></i> GA4</span>';
    }
    if (settings.googleTagManager) {
        badges += '<span class="integration-badge active"><i class="fab fa-google"></i> GTM</span>';
    }
    if (settings.googleAdsConversionId) {
        badges += '<span class="integration-badge active"><i class="fab fa-google"></i> Google Ads</span>';
    }
    if (settings.facebookPixel) {
        badges += '<span class="integration-badge active"><i class="fab fa-facebook"></i> Pixel</span>';
    }
    if (settings.tiktokPixel) {
        badges += '<span class="integration-badge active"><i class="fab fa-tiktok"></i> TikTok</span>';
    }
    if (settings.googleSearchConsole) {
        badges += '<span class="integration-badge active"><i class="fab fa-google"></i> GSC</span>';
    }
    if (settings.yandexWebmaster) {
        badges += '<span class="integration-badge active"><i class="fab fa-yandex"></i> Yandex WM</span>';
    }
    if (settings.yandexMetrica) {
        badges += '<span class="integration-badge active"><i class="fab fa-yandex"></i> Metrica</span>';
    }
    if (settings.youtubeChannel) {
        badges += '<span class="integration-badge active"><i class="fab fa-youtube"></i> YouTube</span>';
    }
    if (settings.linkedinInsight) {
        badges += '<span class="integration-badge active"><i class="fab fa-linkedin"></i> LinkedIn</span>';
    }
    if (settings.microsoftClarity) {
        badges += '<span class="integration-badge active"><i class="fas fa-fire"></i> Clarity</span>';
    }

    if (!badges) {
        badges = '<span class="integration-badge inactive">Henüz entegrasyon yok</span>';
    }

    container.innerHTML = badges;
}

// Generate tracking code for preview
function generateTrackingCode() {
    const saved = localStorage.getItem('girisim_analytics_settings');
    const settings = saved ? JSON.parse(saved) : {};

    let headCode = '';
    let bodyCode = '';

    // Google Search Console verification
    if (settings.googleSearchConsole) {
        headCode += `<!-- Google Search Console -->\n<meta name="google-site-verification" content="${settings.googleSearchConsole}">\n\n`;
    }

    // Yandex Webmaster verification
    if (settings.yandexWebmaster) {
        headCode += `<!-- Yandex Webmaster -->\n<meta name="yandex-verification" content="${settings.yandexWebmaster}">\n\n`;
    }

    // Google Analytics 4
    if (settings.googleAnalytics) {
        headCode += `<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalytics}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${settings.googleAnalytics}');
</script>\n\n`;
    }

    // Google Tag Manager (Head)
    if (settings.googleTagManager) {
        headCode += `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${settings.googleTagManager}');</script>
<!-- End Google Tag Manager -->\n\n`;

        bodyCode += `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${settings.googleTagManager}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->\n\n`;
    }

    // Facebook Pixel
    if (settings.facebookPixel) {
        headCode += `<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${settings.facebookPixel}');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=${settings.facebookPixel}&ev=PageView&noscript=1"/></noscript>
<!-- End Facebook Pixel -->\n\n`;
    }

    // Yandex Metrica
    if (settings.yandexMetrica) {
        headCode += `<!-- Yandex.Metrica -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(${settings.yandexMetrica}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/${settings.yandexMetrica}" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrica -->\n\n`;
    }

    // LinkedIn Insight Tag
    if (settings.linkedinInsight) {
        headCode += `<!-- LinkedIn Insight Tag -->
<script type="text/javascript">
_linkedin_partner_id = "${settings.linkedinInsight}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=${settings.linkedinInsight}&fmt=gif" />
</noscript>
<!-- End LinkedIn Insight Tag -->\n\n`;
    }

    // Microsoft Clarity
    if (settings.microsoftClarity) {
        headCode += `<!-- Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${settings.microsoftClarity}");
</script>
<!-- End Microsoft Clarity -->\n\n`;
    }

    // Custom head code
    if (settings.customHeadCode) {
        headCode += `<!-- Custom Head Code -->\n${settings.customHeadCode}\n\n`;
    }

    // Custom body code
    if (settings.customBodyCode) {
        bodyCode += `<!-- Custom Body Code -->\n${settings.customBodyCode}\n\n`;
    }

    // Display the code
    const preview = document.getElementById('trackingCodePreview');
    const codeElement = document.getElementById('generatedTrackingCode');

    let fullCode = '';
    if (headCode) {
        fullCode += '<!-- ===== HEAD İÇİNE EKLE ===== -->\n' + headCode;
    }
    if (bodyCode) {
        fullCode += '\n<!-- ===== BODY SONUNA EKLE ===== -->\n' + bodyCode;
    }

    if (!fullCode) {
        fullCode = '// Henüz izleme kodu eklenmedi. Yukarıdaki alanları doldurun.';
    }

    codeElement.textContent = fullCode;
    preview.style.display = 'block';
}

// Copy tracking code to clipboard
function copyTrackingCode() {
    const codeElement = document.getElementById('generatedTrackingCode');
    navigator.clipboard.writeText(codeElement.textContent).then(() => {
        showToast('Kod panoya kopyalandı!', 'success');
    }).catch(() => {
        showToast('Kopyalama başarısız!', 'error');
    });
}

// Test analytics integration
function testAnalyticsIntegration() {
    const saved = localStorage.getItem('girisim_analytics_settings');
    const settings = saved ? JSON.parse(saved) : {};

    let results = [];

    // Check each integration
    if (settings.googleAnalytics) {
        if (settings.googleAnalytics.startsWith('G-')) {
            results.push('✅ Google Analytics 4 ID formatı doğru');
        } else {
            results.push('❌ Google Analytics 4 ID "G-" ile başlamalı');
        }
    }

    if (settings.googleTagManager) {
        if (settings.googleTagManager.startsWith('GTM-')) {
            results.push('✅ Google Tag Manager ID formatı doğru');
        } else {
            results.push('❌ GTM ID "GTM-" ile başlamalı');
        }
    }

    if (settings.facebookPixel) {
        if (/^\d{15,16}$/.test(settings.facebookPixel)) {
            results.push('✅ Facebook Pixel ID formatı doğru');
        } else {
            results.push('❌ Facebook Pixel ID 15-16 haneli sayı olmalı');
        }
    }

    if (settings.yandexMetrica) {
        if (/^\d+$/.test(settings.yandexMetrica)) {
            results.push('✅ Yandex Metrica ID formatı doğru');
        } else {
            results.push('❌ Yandex Metrica ID sayı olmalı');
        }
    }

    if (settings.googleSearchConsole) {
        results.push('✅ Google Search Console doğrulama kodu mevcut');
    }

    if (settings.yandexWebmaster) {
        results.push('✅ Yandex Webmaster doğrulama kodu mevcut');
    }

    if (results.length === 0) {
        results.push('ℹ️ Henüz analitik entegrasyonu eklenmedi');
    }

    alert('Entegrasyon Test Sonuçları:\n\n' + results.join('\n'));
}

// =============================================
// Blog Management
// =============================================

// Initialize blog posts in siteContent if not exists
function initBlogPosts() {
    if (!siteContent.blog) {
        siteContent.blog = {
            posts: []
        };
    }
}

// Render blog posts
function renderBlogPosts() {
    initBlogPosts();
    const container = document.getElementById('blog-posts-editor');
    if (!container) return;

    if (siteContent.blog.posts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-blog"></i>
                <p>Henüz blog yazısı eklenmedi.</p>
                <button class="btn btn-primary" onclick="addBlogPost()">
                    <i class="fas fa-plus"></i> İlk Yazıyı Ekle
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = siteContent.blog.posts.map((post, index) => `
        <div class="item-card blog-card" data-index="${index}">
            <div class="item-header">
                <h4><i class="fas fa-file-alt"></i> ${post.title || 'Başlıksız Yazı'}</h4>
                <div class="item-actions">
                    <span class="post-status ${post.published ? 'published' : 'draft'}">
                        ${post.published ? 'Yayında' : 'Taslak'}
                    </span>
                    <button class="btn-icon" onclick="editBlogPost(${index})" title="Düzenle">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon delete" onclick="deleteBlogPost(${index})" title="Sil">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="blog-card-content">
                <div class="blog-meta">
                    <span><i class="fas fa-calendar"></i> ${post.date || 'Tarih yok'}</span>
                    <span><i class="fas fa-folder"></i> ${post.category || 'Kategori yok'}</span>
                    <span><i class="fas fa-user"></i> ${post.author || 'Yazar yok'}</span>
                </div>
                <p class="blog-excerpt">${(post.excerpt || post.content || '').substring(0, 150)}...</p>
                ${post.image ? `<img src="${post.image}" alt="${post.title}" class="blog-thumbnail">` : ''}
            </div>
        </div>
    `).join('');
}

// Add new blog post
function addBlogPost() {
    initBlogPosts();

    const today = new Date().toISOString().split('T')[0];

    siteContent.blog.posts.unshift({
        id: Date.now(),
        title: 'Yeni Blog Yazısı',
        slug: 'yeni-blog-yazisi-' + Date.now(),
        excerpt: 'Blog yazısının kısa açıklaması...',
        content: 'Blog yazısının içeriği buraya gelecek...',
        image: '',
        category: 'Genel',
        author: 'Admin',
        date: today,
        published: false,
        tags: []
    });

    renderBlogPosts();
    markAsChanged();
    showToast('Yeni blog yazısı eklendi', 'success');

    // Open editor for new post
    editBlogPost(0);
}

// Edit blog post with multi-language support
function editBlogPost(index) {
    initBlogPosts();
    const post = siteContent.blog.posts[index];
    if (!post) return;

    // Initialize translations if not exists
    if (!post.translations) {
        post.translations = {};
    }

    const languages = [
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' }
    ];

    // Create modal for editing
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'blogEditModal';
    modal.innerHTML = `
        <div class="modal-content blog-editor-modal" style="max-width: 900px;">
            <div class="modal-header">
                <h3><i class="fas fa-edit"></i> Blog Yazısını Düzenle</h3>
                <button class="modal-close" onclick="closeBlogEditor()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <!-- Language Tabs -->
                <div class="blog-lang-tabs" style="display: flex; gap: 5px; margin-bottom: 20px; flex-wrap: wrap;">
                    ${languages.map((lang, i) => `
                        <button type="button" class="blog-lang-tab ${i === 0 ? 'active' : ''}"
                                data-lang="${lang.code}"
                                onclick="switchBlogLang('${lang.code}')"
                                style="padding: 8px 16px; border: 2px solid #e0e0e0; background: ${i === 0 ? 'var(--primary-color)' : 'white'}; color: ${i === 0 ? 'white' : '#333'}; border-radius: 20px; cursor: pointer; font-size: 13px;">
                            ${lang.flag} ${lang.name}
                        </button>
                    `).join('')}
                </div>

                <!-- TR Content (Default - always visible first) -->
                <div class="blog-lang-content active" data-lang-content="tr">
                    <div class="form-row">
                        <div class="form-group flex-2">
                            <label>Başlık * (Türkçe)</label>
                            <input type="text" id="blog-edit-title-tr" value="${escHtml(post.title || '')}" placeholder="Blog yazısı başlığı">
                        </div>
                        <div class="form-group">
                            <label>Kategori</label>
                            <select id="blog-edit-category">
                                <option value="Genel" ${post.category === 'Genel' ? 'selected' : ''}>Genel</option>
                                <option value="Ürünler" ${post.category === 'Ürünler' ? 'selected' : ''}>Ürünler</option>
                                <option value="Sektör" ${post.category === 'Sektör' ? 'selected' : ''}>Sektör</option>
                                <option value="Fuarlar" ${post.category === 'Fuarlar' ? 'selected' : ''}>Fuarlar</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Kısa Açıklama (Türkçe)</label>
                        <textarea id="blog-edit-excerpt-tr" rows="2" placeholder="Yazının kısa özeti...">${post.excerpt || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label>İçerik * (Türkçe)</label>
                        <div id="blog-edit-content-tr" class="blog-quill-editor" style="height: 250px;"></div>
                    </div>
                </div>

                <!-- Other Languages -->
                ${languages.filter(l => l.code !== 'tr').map(lang => `
                    <div class="blog-lang-content" data-lang-content="${lang.code}" style="display: none;">
                        <div class="form-group">
                            <label>Başlık (${lang.name}) ${lang.flag}</label>
                            <input type="text" id="blog-edit-title-${lang.code}"
                                   value="${escHtml(post.translations[lang.code]?.title || '')}"
                                   placeholder="Blog title in ${lang.name}">
                        </div>
                        <div class="form-group">
                            <label>Kısa Açıklama (${lang.name})</label>
                            <textarea id="blog-edit-excerpt-${lang.code}" rows="2"
                                      placeholder="Short description in ${lang.name}...">${post.translations[lang.code]?.excerpt || ''}</textarea>
                        </div>
                        <div class="form-group">
                            <label>İçerik (${lang.name})</label>
                            <div id="blog-edit-content-${lang.code}" class="blog-quill-editor" style="height: 250px;"></div>
                        </div>
                        <button type="button" class="btn btn-outline btn-sm" onclick="autoTranslateBlog('tr', '${lang.code}')" style="margin-top: 10px;">
                            <i class="fas fa-language"></i> Türkçe'den Otomatik Çevir
                        </button>
                    </div>
                `).join('')}

                <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;">

                <!-- Common Settings -->
                <div class="form-row">
                    <div class="form-group">
                        <label>Blog Görseli</label>
                        <div id="blogImagePreview" style="${post.image ? '' : 'display:none;'} margin-bottom:10px;">
                            <img src="${post.image || ''}" id="blogImagePreviewImg" alt="Preview"
                                 style="max-width:100%; max-height:200px; border-radius:8px; object-fit:cover;">
                            <button type="button" class="btn btn-sm btn-outline" onclick="removeBlogImage()" style="margin-top:8px;">
                                <i class="fas fa-trash"></i> Görseli Kaldır
                            </button>
                        </div>
                        <div style="display:flex; gap:10px; align-items:end; flex-wrap:wrap;">
                            <div>
                                <input type="file" id="blog-image-file" accept="image/*" onchange="handleBlogImageSelect(this)" style="display:none;">
                                <button type="button" class="btn btn-outline" onclick="document.getElementById('blog-image-file').click()">
                                    <i class="fas fa-upload"></i> Görsel Yükle
                                </button>
                                <span id="blogImageFileName" style="margin-left:10px; font-size:13px; color:#888;"></span>
                            </div>
                            <div style="flex:1; min-width:200px;">
                                <input type="url" id="blog-edit-image" value="${escHtml(post.image || '')}" placeholder="veya URL yapıştırın..." style="width:100%;">
                            </div>
                        </div>
                        <div id="blogImageUploadProgress" style="display:none; margin-top:10px;">
                            <div style="background:#e0e0e0; border-radius:4px; height:6px; overflow:hidden;">
                                <div id="blogImageProgressBar" style="background:var(--primary-color); height:100%; width:0%; transition:width 0.3s;"></div>
                            </div>
                            <span style="font-size:12px; color:#888;">Yükleniyor...</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Tarih</label>
                        <input type="date" id="blog-edit-date" value="${escHtml(post.date || '')}">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Yazar</label>
                        <input type="text" id="blog-edit-author" value="${escHtml(post.author || '')}" placeholder="Yazar adı">
                    </div>
                    <div class="form-group">
                        <label>URL Slug</label>
                        <input type="text" id="blog-edit-slug" value="${escHtml(post.slug || '')}" placeholder="blog-yazisi-url">
                    </div>
                </div>

                <div class="form-group">
                    <label>Etiketler (virgülle ayırın)</label>
                    <input type="text" id="blog-edit-tags" value="${escHtml((post.tags || []).join(', '))}" placeholder="etiket1, etiket2, etiket3">
                </div>

                <div class="form-group checkbox-group">
                    <label>
                        <input type="checkbox" id="blog-edit-published" ${post.published ? 'checked' : ''}>
                        <span>Yayınla</span>
                    </label>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" onclick="closeBlogEditor()">İptal</button>
                <button class="btn btn-primary" onclick="saveBlogPost(${index})">
                    <i class="fas fa-save"></i> Kaydet
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Initialize Quill editors
    const quillToolbar = [
        [{ 'header': [2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['blockquote', 'link', 'image'],
        ['clean']
    ];

    window._blogQuillInstances = {};

    // TR Quill
    const quillTr = new Quill('#blog-edit-content-tr', {
        theme: 'snow',
        modules: { toolbar: quillToolbar },
        placeholder: 'Blog içeriğini yazın...'
    });
    quillTr.root.innerHTML = post.content || '';
    window._blogQuillInstances['tr'] = quillTr;

    // Other languages
    const otherLangs = ['en', 'ru', 'ar', 'fr', 'pt', 'es'];
    otherLangs.forEach(lang => {
        const q = new Quill(`#blog-edit-content-${lang}`, {
            theme: 'snow',
            modules: { toolbar: quillToolbar },
            placeholder: `Content in ${lang.toUpperCase()}...`
        });
        q.root.innerHTML = post.translations[lang]?.content || '';
        window._blogQuillInstances[lang] = q;
    });

    // Image URL input → preview sync
    document.getElementById('blog-edit-image').addEventListener('input', function() {
        const url = this.value.trim();
        const preview = document.getElementById('blogImagePreview');
        const img = document.getElementById('blogImagePreviewImg');
        if (url) {
            img.src = url;
            preview.style.display = '';
        } else {
            preview.style.display = 'none';
        }
    });

    // Auto-generate slug from title
    document.getElementById('blog-edit-title-tr').addEventListener('input', function() {
        const slug = this.value
            .toLowerCase()
            .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
            .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        document.getElementById('blog-edit-slug').value = slug;
    });
}

// Switch blog language tab
function switchBlogLang(lang) {
    // Update tab buttons
    document.querySelectorAll('.blog-lang-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.style.background = 'white';
        tab.style.color = '#333';
    });
    const activeTab = document.querySelector(`.blog-lang-tab[data-lang="${lang}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.style.background = 'var(--primary-color)';
        activeTab.style.color = 'white';
    }

    // Show/hide content sections
    document.querySelectorAll('.blog-lang-content').forEach(content => {
        content.style.display = 'none';
    });
    const activeContent = document.querySelector(`.blog-lang-content[data-lang-content="${lang}"]`);
    if (activeContent) {
        activeContent.style.display = 'block';
    }
}

// Auto translate blog content using OpenAI API
async function autoTranslateBlog(fromLang, toLang) {
    const title = document.getElementById(`blog-edit-title-${fromLang}`).value;
    const excerpt = document.getElementById(`blog-edit-excerpt-${fromLang}`).value;
    const fromQuill = window._blogQuillInstances?.[fromLang];
    const content = fromQuill ? fromQuill.root.innerHTML : '';

    if (!title && (!content || content === '<p><br></p>')) {
        showToast('Çevrilecek içerik yok', 'warning');
        return;
    }

    const apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
        // Fallback: copy content if no API key
        document.getElementById(`blog-edit-title-${toLang}`).value = title;
        document.getElementById(`blog-edit-excerpt-${toLang}`).value = excerpt;
        const toQuill = window._blogQuillInstances?.[toLang];
        if (toQuill) toQuill.root.innerHTML = content;
        showToast('API anahtarı yok. İçerik kopyalandı, Ayarlar\'dan OpenAI API key girin.', 'warning');
        return;
    }

    const langNames = { tr: 'Turkish', en: 'English', ru: 'Russian', ar: 'Arabic', fr: 'French', pt: 'Portuguese', es: 'Spanish' };
    const model = localStorage.getItem('openai_model') || 'gpt-4o-mini';

    showToast('AI ile çevriliyor...', 'info');

    try {
        const textsToTranslate = [];
        if (title) textsToTranslate.push(title);
        if (excerpt) textsToTranslate.push(excerpt);
        const hasContent = content && content !== '<p><br></p>';
        if (hasContent) textsToTranslate.push(content);

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
            body: JSON.stringify({
                model: model,
                messages: [
                    { role: 'system', content: `You are a professional translator for an industrial machinery company blog. Translate from ${langNames[fromLang] || fromLang} to ${langNames[toLang] || toLang}. If the text contains HTML tags, preserve them exactly. Return ONLY a JSON array of translated strings in the same order, no explanations.` },
                    { role: 'user', content: JSON.stringify(textsToTranslate) }
                ],
                temperature: 0.3
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error?.message || 'API hatası');
        }

        const data = await response.json();
        const translated = JSON.parse(data.choices[0].message.content);

        let idx = 0;
        if (title) document.getElementById(`blog-edit-title-${toLang}`).value = translated[idx++];
        if (excerpt) document.getElementById(`blog-edit-excerpt-${toLang}`).value = translated[idx++];
        if (hasContent) {
            const toQuill = window._blogQuillInstances?.[toLang];
            if (toQuill) toQuill.root.innerHTML = translated[idx];
        }

        showToast(`Blog ${langNames[toLang] || toLang} diline çevrildi!`, 'success');
    } catch (error) {
        console.error('Blog translation error:', error);
        showToast('Çeviri hatası: ' + error.message, 'error');
    }
}

// Save blog post with translations
function saveBlogPost(index) {
    initBlogPosts();

    const title = document.getElementById('blog-edit-title-tr').value.trim();
    const trQuill = window._blogQuillInstances?.['tr'];
    const content = trQuill ? trQuill.root.innerHTML.trim() : '';
    const isEmptyContent = !content || content === '<p><br></p>';

    if (!title) {
        showToast('Başlık zorunludur', 'error');
        return;
    }

    if (isEmptyContent) {
        showToast('İçerik zorunludur', 'error');
        return;
    }

    const tagsInput = document.getElementById('blog-edit-tags').value;
    const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(t => t) : [];

    // Collect translations
    const translations = {};
    const languages = ['en', 'ru', 'ar', 'fr', 'pt', 'es'];

    languages.forEach(lang => {
        const langTitle = document.getElementById(`blog-edit-title-${lang}`)?.value.trim();
        const langExcerpt = document.getElementById(`blog-edit-excerpt-${lang}`)?.value.trim();
        const langQuill = window._blogQuillInstances?.[lang];
        let langContent = langQuill ? langQuill.root.innerHTML.trim() : '';
        if (langContent === '<p><br></p>') langContent = '';

        if (langTitle || langExcerpt || langContent) {
            translations[lang] = {
                title: langTitle || '',
                excerpt: langExcerpt || '',
                content: langContent || ''
            };
        }
    });

    siteContent.blog.posts[index] = {
        ...siteContent.blog.posts[index],
        title: title,
        slug: document.getElementById('blog-edit-slug').value.trim() || title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: document.getElementById('blog-edit-excerpt-tr').value.trim(),
        content: content,
        image: document.getElementById('blog-edit-image').value.trim(),
        category: document.getElementById('blog-edit-category').value,
        author: document.getElementById('blog-edit-author').value.trim() || 'Admin',
        date: document.getElementById('blog-edit-date').value,
        published: document.getElementById('blog-edit-published').checked,
        tags: tags,
        translations: translations,
        updatedAt: new Date().toISOString()
    };

    closeBlogEditor();
    renderBlogPosts();
    markAsChanged();
    showToast('Blog yazısı kaydedildi', 'success');
}

// Delete blog post
function deleteBlogPost(index) {
    if (confirm('Bu blog yazısını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.')) {
        initBlogPosts();
        siteContent.blog.posts.splice(index, 1);
        renderBlogPosts();
        markAsChanged();
        showToast('Blog yazısı silindi', 'warning');
    }
}

// Close blog editor modal
function closeBlogEditor() {
    // Clean up Quill instances
    if (window._blogQuillInstances) {
        Object.keys(window._blogQuillInstances).forEach(lang => {
            delete window._blogQuillInstances[lang];
        });
        window._blogQuillInstances = null;
    }
    const modal = document.getElementById('blogEditModal');
    if (modal) {
        modal.remove();
    }
}

// Handle blog image file selection and upload
async function handleBlogImageSelect(input) {
    const file = input.files[0];
    if (!file) return;

    // Validate file
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
        showToast('Geçersiz dosya formatı. JPG, PNG, WebP veya GIF kullanın.', 'error');
        input.value = '';
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        showToast('Dosya boyutu 5MB\'dan küçük olmalıdır.', 'error');
        input.value = '';
        return;
    }

    // Show progress
    const progress = document.getElementById('blogImageUploadProgress');
    const progressBar = document.getElementById('blogImageProgressBar');
    const fileName = document.getElementById('blogImageFileName');
    progress.style.display = '';
    progressBar.style.width = '20%';
    fileName.textContent = file.name;

    try {
        progressBar.style.width = '50%';

        // Upload to Supabase Storage
        const timestamp = Date.now();
        const ext = file.name.split('.').pop();
        const path = `blog/${timestamp}.${ext}`;
        const publicUrl = await uploadImage(file, path);

        progressBar.style.width = '100%';

        if (publicUrl) {
            // Set URL in input and show preview
            document.getElementById('blog-edit-image').value = publicUrl;
            const preview = document.getElementById('blogImagePreview');
            const img = document.getElementById('blogImagePreviewImg');
            img.src = publicUrl;
            preview.style.display = '';
            showToast('Görsel yüklendi!', 'success');
        } else {
            showToast('Görsel yüklenemedi', 'error');
        }
    } catch (error) {
        console.error('Blog image upload error:', error);
        showToast('Görsel yükleme hatası: ' + error.message, 'error');
    } finally {
        setTimeout(() => {
            progress.style.display = 'none';
            progressBar.style.width = '0%';
        }, 1000);
        input.value = '';
    }
}

// Remove blog image
function removeBlogImage() {
    document.getElementById('blog-edit-image').value = '';
    document.getElementById('blogImagePreview').style.display = 'none';
    document.getElementById('blogImagePreviewImg').src = '';
    document.getElementById('blogImageFileName').textContent = '';
}

// =============================================
// Google Ads Conversion Tracking
// =============================================

function saveGoogleAdsSettings() {
    const conversionId = document.getElementById('analytics-googleAdsId')?.value?.trim() || '';
    const conversionLabel = document.getElementById('analytics-googleAdsLabel')?.value?.trim() || '';

    const saved = localStorage.getItem('girisim_analytics_settings');
    const settings = saved ? JSON.parse(saved) : {};

    settings.googleAdsConversionId = conversionId;
    settings.googleAdsConversionLabel = conversionLabel;

    localStorage.setItem('girisim_analytics_settings', JSON.stringify(settings));

    if (siteContent) {
        if (!siteContent.analytics) siteContent.analytics = {};
        siteContent.analytics.googleAdsConversionId = conversionId;
        siteContent.analytics.googleAdsConversionLabel = conversionLabel;
    }

    updateActiveIntegrations();
    showToast('Google Ads ayarları kaydedildi!', 'success');
}

// =============================================
// TikTok Pixel
// =============================================

function saveTikTokPixelSettings() {
    const pixelId = document.getElementById('analytics-tiktokPixel')?.value?.trim() || '';

    const saved = localStorage.getItem('girisim_analytics_settings');
    const settings = saved ? JSON.parse(saved) : {};

    settings.tiktokPixel = pixelId;

    localStorage.setItem('girisim_analytics_settings', JSON.stringify(settings));

    if (siteContent) {
        if (!siteContent.analytics) siteContent.analytics = {};
        siteContent.analytics.tiktokPixel = pixelId;
    }

    updateActiveIntegrations();
    showToast('TikTok Pixel ayarları kaydedildi!', 'success');
}

// Load Google Ads settings
function loadGoogleAdsSettings() {
    const saved = localStorage.getItem('girisim_analytics_settings');
    if (saved) {
        const settings = JSON.parse(saved);
        if (settings.googleAdsConversionId) {
            const input = document.getElementById('analytics-googleAdsId');
            if (input) input.value = settings.googleAdsConversionId;
        }
        if (settings.googleAdsConversionLabel) {
            const input = document.getElementById('analytics-googleAdsLabel');
            if (input) input.value = settings.googleAdsConversionLabel;
        }
    }
}

// Load TikTok Pixel settings
function loadTikTokPixelSettings() {
    const saved = localStorage.getItem('girisim_analytics_settings');
    if (saved) {
        const settings = JSON.parse(saved);
        if (settings.tiktokPixel) {
            const input = document.getElementById('analytics-tiktokPixel');
            if (input) input.value = settings.tiktokPixel;
        }
    }
}

// All integration badges are now handled in the main updateActiveIntegrations() function above

// =============================================
// Header Management
// =============================================

const defaultHeaderConfig = {
    showTopBar: true,
    showLanguages: true,
    showSocial: true,
    showWhatsappButton: true,
    social: {
        youtube: 'https://www.youtube.com/@girisimpackagingmachinery',
        linkedin: 'https://www.linkedin.com/company/girisim-food-processing-and-packaging-machinery-turkey',
        instagram: 'https://www.instagram.com/girisim.machinery.turkey',
        facebook: 'https://www.facebook.com/PackagingMachineryTurkey',
        tiktok: 'https://www.tiktok.com/@girisim.makina.turkiye'
    },
    menuItems: [
        { label: 'Kurumsal', href: '#about', type: 'dropdown', visible: true },
        { label: 'Makinalarımız', href: '#production', type: 'mega-menu', visible: true },
        { label: 'Paketleme Tercihiniz', href: '#packaging-choice', type: 'dropdown', visible: true },
        { label: 'Videolar', href: '#videos', type: 'link', visible: true },
        { label: 'İletişim', href: '#contact', type: 'link', visible: true }
    ],
    corporateMenu: [
        { label: 'Hakkımızda', href: '#about', visible: true },
        { label: 'Misyonumuz & Vizyonumuz', href: '#mission', visible: true },
        { label: 'Değerlerimiz', href: '#values', visible: true },
        { label: 'Neden Girişim Makina?', href: '#why-us', visible: true },
        { label: 'AR-GE', href: '#rnd', visible: true },
        { label: 'Satış Sonrası Servis', href: '#service', visible: true },
        { label: 'Sertifikalarımız', href: '#certificates', visible: true },
        { label: 'İnsan Kaynakları', href: 'hr.html', visible: true }
    ],
    productionMenu: [
        { label: 'Gofret Üretim Hatları', href: 'products/wafer.html', visible: true },
        { label: 'Tahıl Bar Üretim Hatları', href: 'products/cereal-bar.html', visible: true },
        { label: 'Hindistan Cevizi Dolgulu Bar', href: 'products/coconut-bar.html', visible: true },
        { label: 'Bisküvi Kremalama Makinaları', href: 'products/biscuit-sandwiching.html', visible: true },
        { label: 'Cookie Capping (Chocopie)', href: 'products/cookie-capping.html', visible: true },
        { label: 'Çikolata Kaplama Makinası', href: 'products/chocolate-coating.html', visible: true },
        { label: 'Çikolata Soğutma Tüneli', href: 'products/chocolate-cooling.html', visible: true },
        { label: 'Çikolata Hazırlama Mutfağı', href: 'products/chocolate-preparation.html', visible: true },
        { label: 'Pudra Şekeri Değirmeni', href: 'products/sugar-mill.html', visible: true }
    ],
    packagingMenu: [
        { label: 'Yatay Flowpack Paketleme', href: 'products/flow-pack.html', visible: true },
        { label: 'Dikey Paketleme (VFFS)', href: 'products/vffs.html', visible: true },
        { label: 'Zarf Tipi Paketleme', href: 'products/overwrapping.html', visible: true },
        { label: 'Thermoform Paketleme', href: 'products/thermoform.html', visible: true },
        { label: 'Dolum Makinaları', href: 'products/filling-machines.html', visible: true }
    ]
};

function loadHeaderConfig() {
    // Try siteContent first (Supabase), then localStorage fallback
    if (siteContent && siteContent.headerConfig) {
        return { ...defaultHeaderConfig, ...siteContent.headerConfig };
    }
    const saved = localStorage.getItem('girisim_header_config');
    if (saved) {
        return { ...defaultHeaderConfig, ...JSON.parse(saved) };
    }
    return { ...defaultHeaderConfig };
}

function saveHeaderConfig(config) {
    // Save to siteContent (will be persisted to Supabase on "Save All")
    if (siteContent) {
        siteContent.headerConfig = config;
    }
    // Also keep localStorage as fast cache
    localStorage.setItem('girisim_header_config', JSON.stringify(config));
    markAsChanged();
}

function updateHeaderSetting(key, value) {
    const config = loadHeaderConfig();
    config[key] = value;
    saveHeaderConfig(config);
    showToast('Ayar güncellendi', 'success');
}

function initHeaderManagement() {
    const config = loadHeaderConfig();
    const topbarEl = document.getElementById('header-show-topbar');
    const langEl = document.getElementById('header-show-languages');
    const socialEl = document.getElementById('header-show-social');
    const waEl = document.getElementById('header-show-whatsapp-btn');
    if (topbarEl) topbarEl.checked = config.showTopBar;
    if (langEl) langEl.checked = config.showLanguages;
    if (socialEl) socialEl.checked = config.showSocial;
    if (waEl) waEl.checked = config.showWhatsappButton;
    if (config.social) {
        ['youtube', 'linkedin', 'instagram', 'facebook', 'tiktok'].forEach(field => {
            const input = document.getElementById('header-' + field);
            if (input && config.social[field]) input.value = config.social[field];
        });
    }
    renderHeaderMenuItems(config);
    renderCorporateMenuItems(config);
    renderProductionMenuItems(config);
    renderPackagingMenuItems(config);
}

function renderHeaderMenuItems(config) {
    const container = document.getElementById('header-menu-editor');
    if (!container) return;
    container.innerHTML = config.menuItems.map((item, index) => `
        <div class="menu-item-row" data-index="${index}">
            <label class="visibility-toggle"><input type="checkbox" ${item.visible ? 'checked' : ''} onchange="toggleHeaderMenuItem(${index}, this.checked)"></label>
            <input type="text" value="${escHtml(item.label)}" class="menu-label-input" onchange="updateHeaderMenuLabel(${index}, this.value)" placeholder="Menü adı">
            <span class="menu-type-badge">${item.type}</span>
        </div>
    `).join('');
}

function renderCorporateMenuItems(config) {
    const container = document.getElementById('header-corporate-editor');
    if (!container) return;
    container.innerHTML = config.corporateMenu.map((item, index) => `
        <div class="submenu-item-row" data-index="${index}">
            <label class="visibility-toggle"><input type="checkbox" ${item.visible ? 'checked' : ''} onchange="toggleCorporateMenuItem(${index}, this.checked)"></label>
            <input type="text" value="${escHtml(item.label)}" class="menu-label-input" onchange="updateCorporateMenuLabel(${index}, this.value)">
            <input type="text" value="${escHtml(item.href)}" class="menu-href-input" onchange="updateCorporateMenuHref(${index}, this.value)">
            <button class="btn-icon delete" onclick="deleteCorporateMenuItem(${index})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

function renderProductionMenuItems(config) {
    const container = document.getElementById('header-production-editor');
    if (!container) return;
    container.innerHTML = config.productionMenu.map((item, index) => `
        <div class="submenu-item-row" data-index="${index}">
            <label class="visibility-toggle"><input type="checkbox" ${item.visible ? 'checked' : ''} onchange="toggleProductionMenuItem(${index}, this.checked)"></label>
            <input type="text" value="${escHtml(item.label)}" class="menu-label-input" onchange="updateProductionMenuLabel(${index}, this.value)">
            <button class="btn-icon delete" onclick="deleteProductionMenuItem(${index})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

function renderPackagingMenuItems(config) {
    const container = document.getElementById('header-packaging-menu-editor');
    if (!container) return;
    container.innerHTML = config.packagingMenu.map((item, index) => `
        <div class="submenu-item-row" data-index="${index}">
            <label class="visibility-toggle"><input type="checkbox" ${item.visible ? 'checked' : ''} onchange="togglePackagingMenuItem(${index}, this.checked)"></label>
            <input type="text" value="${escHtml(item.label)}" class="menu-label-input" onchange="updatePackagingMenuLabel(${index}, this.value)">
            <button class="btn-icon delete" onclick="deletePackagingMenuItem(${index})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

function toggleHeaderMenuItem(index, visible) { const config = loadHeaderConfig(); config.menuItems[index].visible = visible; saveHeaderConfig(config); }
function toggleCorporateMenuItem(index, visible) { const config = loadHeaderConfig(); config.corporateMenu[index].visible = visible; saveHeaderConfig(config); }
function toggleProductionMenuItem(index, visible) { const config = loadHeaderConfig(); config.productionMenu[index].visible = visible; saveHeaderConfig(config); }
function togglePackagingMenuItem(index, visible) { const config = loadHeaderConfig(); config.packagingMenu[index].visible = visible; saveHeaderConfig(config); }

function updateHeaderMenuLabel(index, label) { const config = loadHeaderConfig(); config.menuItems[index].label = label; saveHeaderConfig(config); }
function updateCorporateMenuLabel(index, label) { const config = loadHeaderConfig(); config.corporateMenu[index].label = label; saveHeaderConfig(config); }
function updateCorporateMenuHref(index, href) { const config = loadHeaderConfig(); config.corporateMenu[index].href = href; saveHeaderConfig(config); }
function updateProductionMenuLabel(index, label) { const config = loadHeaderConfig(); config.productionMenu[index].label = label; saveHeaderConfig(config); }
function updatePackagingMenuLabel(index, label) { const config = loadHeaderConfig(); config.packagingMenu[index].label = label; saveHeaderConfig(config); }

function addHeaderMenuItem() { const config = loadHeaderConfig(); config.menuItems.push({ label: 'Yeni Menü', href: '#', type: 'link', visible: true }); saveHeaderConfig(config); renderHeaderMenuItems(config); showToast('Yeni menü öğesi eklendi', 'success'); }
function addCorporateMenuItem() { const config = loadHeaderConfig(); config.corporateMenu.push({ label: 'Yeni Alt Menü', href: '#', visible: true }); saveHeaderConfig(config); renderCorporateMenuItems(config); showToast('Yeni alt menü eklendi', 'success'); }
function addProductionMenuItem() { const config = loadHeaderConfig(); config.productionMenu.push({ label: 'Yeni Ürün', href: 'products/new.html', visible: true }); saveHeaderConfig(config); renderProductionMenuItems(config); showToast('Yeni üretim makinası eklendi', 'success'); }
function addPackagingMenuItem() { const config = loadHeaderConfig(); config.packagingMenu.push({ label: 'Yeni Paketleme', href: 'products/new.html', visible: true }); saveHeaderConfig(config); renderPackagingMenuItems(config); showToast('Yeni paketleme makinası eklendi', 'success'); }

function deleteCorporateMenuItem(index) { if (confirm('Silmek istediğinizden emin misiniz?')) { const config = loadHeaderConfig(); config.corporateMenu.splice(index, 1); saveHeaderConfig(config); renderCorporateMenuItems(config); showToast('Menü öğesi silindi', 'warning'); }}
function deleteProductionMenuItem(index) { if (confirm('Silmek istediğinizden emin misiniz?')) { const config = loadHeaderConfig(); config.productionMenu.splice(index, 1); saveHeaderConfig(config); renderProductionMenuItems(config); showToast('Menü öğesi silindi', 'warning'); }}
function deletePackagingMenuItem(index) { if (confirm('Silmek istediğinizden emin misiniz?')) { const config = loadHeaderConfig(); config.packagingMenu.splice(index, 1); saveHeaderConfig(config); renderPackagingMenuItems(config); showToast('Menü öğesi silindi', 'warning'); }}

// =============================================
// Product Package Images Management
// =============================================

function getProductPackageImages() {
    // Try siteContent first
    if (siteContent && siteContent.products) {
        return siteContent.products;
    }
    return JSON.parse(localStorage.getItem('girisim_product_package_images') || '{}');
}
function saveProductPackageImages(config) {
    // Save to siteContent (Supabase on "Save All")
    if (siteContent) {
        siteContent.products = config;
        markAsChanged();
    }
    localStorage.setItem('girisim_product_package_images', JSON.stringify(config));
}

function editProduct(productId) {
    const images = getProductPackageImages();
    const productImages = images[productId] || [];
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'productEditModal';
    modal.innerHTML = `
        <div class="modal-content product-editor-modal">
            <div class="modal-header">
                <h3><i class="fas fa-images"></i> ${productId} - Paket Görselleri</h3>
                <button class="modal-close" onclick="closeProductEditor()"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <p class="settings-desc">Ürün sayfasında makina görsellerinin altında gösterilecek paket görsellerini ekleyin.</p>
                <div class="package-images-list" id="package-images-list">
                    ${productImages.map((img, i) => `
                        <div class="package-image-item" data-index="${i}">
                            <img src="${img.url}" alt="Paket ${i+1}" class="package-preview">
                            <div class="package-image-info">
                                <input type="text" value="${escHtml(img.title||'')}" placeholder="Başlık" onchange="updatePackageImageTitle('${productId}',${i},this.value)">
                                <input type="url" value="${escHtml(img.url)}" placeholder="URL" onchange="updatePackageImageUrl('${productId}',${i},this.value)">
                            </div>
                            <button class="btn-icon delete" onclick="deletePackageImage('${productId}',${i})"><i class="fas fa-trash"></i></button>
                        </div>
                    `).join('') || '<p class="empty-message">Henüz paket görseli eklenmedi.</p>'}
                </div>
                <div class="add-package-image">
                    <h4>Yeni Görsel Ekle</h4>
                    <div class="form-row">
                        <div class="form-group"><label>Görsel URL</label><input type="url" id="new-package-url" placeholder="https://..."></div>
                        <div class="form-group"><label>Başlık</label><input type="text" id="new-package-title" placeholder="Paket adı"></div>
                    </div>
                    <button class="btn btn-primary" onclick="addPackageImage('${productId}')"><i class="fas fa-plus"></i> Görsel Ekle</button>
                </div>
            </div>
            <div class="modal-footer"><button class="btn btn-outline" onclick="closeProductEditor()">Kapat</button></div>
        </div>`;
    document.body.appendChild(modal);
}

function addPackageImage(productId) {
    const url = document.getElementById('new-package-url').value.trim();
    if (!url) { showToast('Görsel URL gerekli', 'error'); return; }
    const images = getProductPackageImages();
    if (!images[productId]) images[productId] = [];
    images[productId].push({ url: url, title: document.getElementById('new-package-title').value.trim() });
    saveProductPackageImages(images);
    closeProductEditor();
    editProduct(productId);
    showToast('Paket görseli eklendi', 'success');
}

function updatePackageImageUrl(productId, index, url) { const images = getProductPackageImages(); if (images[productId]?.[index]) { images[productId][index].url = url; saveProductPackageImages(images); }}
function updatePackageImageTitle(productId, index, title) { const images = getProductPackageImages(); if (images[productId]?.[index]) { images[productId][index].title = title; saveProductPackageImages(images); }}
function deletePackageImage(productId, index) { if (confirm('Görseli silmek istediğinizden emin misiniz?')) { const images = getProductPackageImages(); if (images[productId]) { images[productId].splice(index,1); saveProductPackageImages(images); closeProductEditor(); editProduct(productId); showToast('Görsel silindi','warning'); }}}
function closeProductEditor() { const modal = document.getElementById('productEditModal'); if (modal) modal.remove(); }
