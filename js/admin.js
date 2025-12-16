// Admin Panel JavaScript
let siteContent = null;
let currentUser = null;
let DEMO_MODE = false;

// Demo credentials
const DEMO_EMAIL = 'admin@girisimmak.com';
const DEMO_PASSWORD = 'admin123';

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

// Authentication
function initAuth() {
    // Check if Firebase is configured
    const isFirebaseConfigured = typeof firebase !== 'undefined' &&
        firebaseConfig.apiKey !== 'YOUR_API_KEY';

    if (isFirebaseConfigured) {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                currentUser = user;
                showAdminPanel();
                await loadContent();
            } else {
                showLoginScreen();
            }
        });
    } else {
        // Demo mode - Firebase not configured
        DEMO_MODE = true;
        console.log('Firebase not configured - Running in DEMO MODE');
        showLoginScreen();
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
            showAdminPanel();
            await loadContent();
            showToast('Demo modunda giriş yapıldı', 'warning');
        } else {
            loginError.textContent = 'Demo giriş: admin@girisimmak.com / admin123';
            loginError.style.display = 'block';
        }
        return;
    }

    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        loginError.textContent = getErrorMessage(error.code);
        loginError.style.display = 'block';
    }
}

async function handleLogout() {
    if (DEMO_MODE) {
        currentUser = null;
        showLoginScreen();
        return;
    }

    try {
        await auth.signOut();
    } catch (error) {
        showToast('Çıkış yapılırken hata oluştu', 'error');
    }
}

function getErrorMessage(code) {
    const messages = {
        'auth/user-not-found': 'Kullanıcı bulunamadı',
        'auth/wrong-password': 'Hatalı şifre',
        'auth/invalid-email': 'Geçersiz e-posta adresi',
        'auth/too-many-requests': 'Çok fazla deneme. Lütfen bekleyin.',
        'auth/invalid-credential': 'Geçersiz kimlik bilgileri'
    };
    return messages[code] || 'Giriş başarısız';
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

// Content Management
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
        document.getElementById('firebaseStatus').textContent = 'Demo Mod (localStorage)';
        document.getElementById('firebaseStatus').style.color = '#ff9800';
        populateAllForms();
        updateLastUpdateTime();
        return;
    }

    try {
        const doc = await db.collection('siteContent').doc('main').get();

        if (doc.exists) {
            siteContent = doc.data();
            document.getElementById('firebaseStatus').textContent = 'Bağlı';
            document.getElementById('firebaseStatus').style.color = '#4caf50';
        } else {
            // Initialize with default content
            siteContent = { ...defaultSiteContent };
            await db.collection('siteContent').doc('main').set(siteContent);
        }

        populateAllForms();
        updateLastUpdateTime();
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('firebaseStatus').textContent = 'Bağlantı hatası';
        document.getElementById('firebaseStatus').style.color = '#f44336';

        // Use default content for offline editing
        siteContent = { ...defaultSiteContent };
        populateAllForms();
        showToast('Firebase bağlantısı kurulamadı. Lütfen yapılandırmayı kontrol edin.', 'error');
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
    renderAboutFeatures();
    renderMachineItems();
    renderPackagingItems();
    renderSectorItems();
    renderWhyUsItems();
    renderTestimonialItems();
    renderVideoItems();
    renderContactPhones();
    renderContactEmails();
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
        preview = input.parentElement.querySelector('.image-preview');
    }

    if (preview && input.value) {
        preview.innerHTML = `<img src="${input.value}" alt="Preview" onerror="this.parentElement.innerHTML='Görsel yüklenemedi'">`;
    } else if (preview) {
        preview.innerHTML = '';
    }
}

// Hero Stats
function renderHeroStats() {
    const container = document.getElementById('hero-stats-editor');
    if (!container || !siteContent.hero?.stats) return;

    container.innerHTML = siteContent.hero.stats.map((stat, index) => `
        <div class="stat-item" data-index="${index}">
            <div class="form-group">
                <label>Sayı</label>
                <input type="text" value="${stat.number}" onchange="updateHeroStat(${index}, 'number', this.value)">
            </div>
            <div class="form-group">
                <label>Metin</label>
                <input type="text" value="${stat.text}" onchange="updateHeroStat(${index}, 'text', this.value)">
            </div>
        </div>
    `).join('');
}

function updateHeroStat(index, field, value) {
    siteContent.hero.stats[index][field] = value;
    markAsChanged();
}

// About Features
function renderAboutFeatures() {
    const container = document.getElementById('about-features-editor');
    if (!container || !siteContent.about?.features) return;

    container.innerHTML = siteContent.about.features.map((feature, index) => `
        <div class="feature-item" data-index="${index}">
            <div class="form-group">
                <label>İkon (Font Awesome)</label>
                <input type="text" value="${feature.icon}" onchange="updateAboutFeature(${index}, 'icon', this.value)" placeholder="fas fa-icon">
            </div>
            <div class="form-group">
                <label>Metin</label>
                <input type="text" value="${feature.text}" onchange="updateAboutFeature(${index}, 'text', this.value)">
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
                    <input type="text" value="${item.title}" onchange="updateMachineItem(${index}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>Görsel URL</label>
                    <input type="url" value="${item.image}" onchange="updateMachineItem(${index}, 'image', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Açıklama</label>
                <textarea onchange="updateMachineItem(${index}, 'description', this.value)" rows="2">${item.description}</textarea>
            </div>
            <div class="form-group">
                <label>Özellikler</label>
                <div class="machine-features-list">
                    ${item.features.map((feature, fIndex) => `
                        <div class="feature-input">
                            <input type="text" value="${feature}" onchange="updateMachineFeature(${index}, ${fIndex}, this.value)">
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
                <h4><i class="${item.icon}"></i> ${item.title}</h4>
                <button class="delete-item" onclick="deletePackagingItem(${index})"><i class="fas fa-trash"></i></button>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>İkon (Font Awesome)</label>
                    <input type="text" value="${item.icon}" onchange="updatePackagingItem(${index}, 'icon', this.value)">
                </div>
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" value="${item.title}" onchange="updatePackagingItem(${index}, 'title', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Açıklama</label>
                <textarea onchange="updatePackagingItem(${index}, 'description', this.value)" rows="2">${item.description}</textarea>
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
        icon: 'fas fa-box',
        title: 'Yeni Paketleme',
        description: 'Açıklama'
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
                    <input type="text" value="${item.icon}" onchange="updateSectorItem(${index}, 'icon', this.value)">
                </div>
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" value="${item.title}" onchange="updateSectorItem(${index}, 'title', this.value)">
                </div>
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
        icon: 'fas fa-industry',
        title: 'Yeni Sektör'
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
                    <input type="text" value="${item.icon}" onchange="updateWhyUsItem(${index}, 'icon', this.value)">
                </div>
                <div class="form-group">
                    <label>Başlık</label>
                    <input type="text" value="${item.title}" onchange="updateWhyUsItem(${index}, 'title', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Açıklama</label>
                <textarea onchange="updateWhyUsItem(${index}, 'description', this.value)" rows="2">${item.description}</textarea>
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
                <textarea onchange="updateTestimonialItem(${index}, 'text', this.value)" rows="3">${item.text}</textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Müşteri Adı</label>
                    <input type="text" value="${item.author}" onchange="updateTestimonialItem(${index}, 'author', this.value)">
                </div>
                <div class="form-group">
                    <label>Pozisyon / Ülke</label>
                    <input type="text" value="${item.role}" onchange="updateTestimonialItem(${index}, 'role', this.value)">
                </div>
            </div>
            <div class="form-group">
                <label>Bayrak Görseli URL</label>
                <input type="text" value="${item.flag}" onchange="updateTestimonialItem(${index}, 'flag', this.value)">
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
                    <input type="text" value="${item.title}" onchange="updateVideoItem(${index}, 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>YouTube Video ID</label>
                    <input type="text" value="${item.videoId}" onchange="updateVideoItem(${index}, 'videoId', this.value)" placeholder="dQw4w9WgXcQ">
                </div>
            </div>
            <div class="form-group">
                <label>Thumbnail URL</label>
                <input type="url" value="${item.thumbnail}" onchange="updateVideoItem(${index}, 'thumbnail', this.value)">
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

// Contact Phones
function renderContactPhones() {
    const container = document.getElementById('contact-phones-editor');
    if (!container || !siteContent.contact?.phones) return;

    container.innerHTML = siteContent.contact.phones.map((phone, index) => `
        <div class="array-item">
            <input type="tel" value="${phone}" onchange="updateContactPhone(${index}, this.value)">
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
            <input type="email" value="${email}" onchange="updateContactEmail(${index}, this.value)">
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
        topbar: 'Üst Bar',
        hero: 'Hero Bölümü',
        about: 'Hakkımızda',
        machines: 'Üretim Hatları',
        packaging: 'Paketleme',
        sectors: 'Sektörler',
        whyus: 'Neden Biz',
        testimonials: 'Referanslar',
        videos: 'Videolar',
        cta: 'CTA Bölümü',
        contact: 'İletişim',
        footer: 'Footer'
    };
    pageTitle.textContent = titles[section] || section;

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

// Save Content
async function saveAllContent() {
    saveAllBtn.disabled = true;
    saveAllBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Kaydediliyor...';

    // Demo mode - save to localStorage
    if (DEMO_MODE) {
        localStorage.setItem('girisim_site_content', JSON.stringify(siteContent));
        showToast('Demo modunda kaydedildi (localStorage)', 'success');
        updateLastUpdateTime();
        saveAllBtn.classList.remove('btn-warning');
        saveAllBtn.classList.add('btn-success');
        saveAllBtn.disabled = false;
        saveAllBtn.innerHTML = '<i class="fas fa-save"></i> Tümünü Kaydet';
        return;
    }

    try {
        await db.collection('siteContent').doc('main').set(siteContent);
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
