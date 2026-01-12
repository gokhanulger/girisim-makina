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
        // Remove demo session from localStorage
        localStorage.removeItem('girisim_demo_session');
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
        preview = input.parentElement.parentElement.querySelector('.image-preview');
    }

    if (preview && input.value) {
        preview.innerHTML = `<img src="${input.value}" alt="Preview" onerror="this.parentElement.innerHTML='Görsel yüklenemedi'">`;
    } else if (preview) {
        preview.innerHTML = '';
    }
}

// Image Upload Handler
function handleImageUpload(fileInput, targetInputId) {
    const file = fileInput.files[0];
    if (!file) return;

    // Check file size (max 2MB for localStorage compatibility)
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
        showToast('Dosya boyutu çok büyük! Maksimum 2MB olmalı.', 'error');
        fileInput.value = '';
        return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
        showToast('Sadece görsel dosyaları yüklenebilir!', 'error');
        fileInput.value = '';
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const base64Data = e.target.result;
        const targetInput = document.getElementById(targetInputId);

        if (targetInput) {
            targetInput.value = base64Data;

            // Trigger change event to update siteContent
            const event = new Event('input', { bubbles: true });
            targetInput.dispatchEvent(event);

            // Update preview
            updateImagePreview(targetInput);

            // Save to uploaded images storage
            saveUploadedImage(targetInputId, base64Data, file.name);

            showToast('Görsel başarıyla yüklendi!', 'success');
        }
    };

    reader.onerror = function() {
        showToast('Görsel yüklenirken hata oluştu!', 'error');
    };

    reader.readAsDataURL(file);
}

// Save uploaded images to localStorage
function saveUploadedImage(inputId, base64Data, fileName) {
    let uploadedImages = JSON.parse(localStorage.getItem('girisim_uploaded_images') || '{}');
    uploadedImages[inputId] = {
        data: base64Data,
        fileName: fileName,
        uploadedAt: new Date().toISOString()
    };

    try {
        localStorage.setItem('girisim_uploaded_images', JSON.stringify(uploadedImages));
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            showToast('Depolama alanı dolu! Bazı eski görselleri silin.', 'error');
        }
    }
}

// Get uploaded images list
function getUploadedImages() {
    return JSON.parse(localStorage.getItem('girisim_uploaded_images') || '{}');
}

// Clear uploaded image
function clearUploadedImage(inputId) {
    let uploadedImages = getUploadedImages();
    delete uploadedImages[inputId];
    localStorage.setItem('girisim_uploaded_images', JSON.stringify(uploadedImages));

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
        footer: 'Footer',
        blog: 'Blog Yönetimi',
        products: 'Ürün Sayfaları',
        hr: 'İK Sayfası',
        certificates: 'Sertifikalar',
        catalog: 'Katalog',
        seo: 'SEO Ayarları',
        analytics: 'Analitik & İzleme',
        translations: 'Çeviriler',
        settings: 'Ayarlar'
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

// =============================================
// Translation Management
// =============================================

// Translation content structure for Turkish source
const turkishContent = {
    nav: {
        about: "Hakkımızda",
        production: "Üretim Hatları",
        packaging: "Paketleme",
        sectors: "Sektörler",
        videos: "Videolar",
        contact: "İletişim",
        getQuote: "TEKLİF AL"
    },
    hero: {
        title1: "WAFER & CEREAL BAR",
        title2: "ÜRETİM HATLARI",
        title3: "& PAKETLEME",
        description: "1985'ten beri gıda işleme ve paketleme makineleri üretiyoruz. Türkiye'nin lider üreticisi olarak 57 ülkeye ihracat yapıyoruz.",
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
        p1: "Girişim Makina olarak, 1985 yılından bu yana gıda işleme ve paketleme sektöründe Türkiye'nin lider üreticisiyiz.",
        p2: "Avrupa, Ortadoğu, Afrika ve Asya'da 57'den fazla ülkeye ihracat yaparak, dünya standartlarında kalite sunuyoruz.",
        feature1: "3 Üretim Tesisi",
        feature2: "57+ Ülke İhracat",
        feature3: "7/24 Teknik Destek",
        catalog: "Katalogları İndir"
    },
    production: {
        tag: "Üretim Hatları",
        title1: "Gıda İşleme",
        title2: "Makinelerimiz",
        subtitle: "Komple anahtar teslim üretim hatları ve tek makine çözümleri"
    },
    packaging: {
        tag: "Paketleme Çözümleri",
        title1: "Paketleme",
        title2: "Makinelerimiz",
        subtitle: "Her ürün ve sektör için özelleştirilmiş paketleme çözümleri"
    },
    sectors: {
        tag: "Uzmanlık Alanlarımız",
        title1: "Paketlediğimiz",
        title2: "Ürünler",
        subtitle: "40 yıllık tecrübeyle her sektöre özel çözümler"
    },
    whyUs: {
        tag: "Neden Biz?",
        title1: "Neden",
        title2: "Girişim Makina?"
    },
    videos: {
        tag: "Video Galeri",
        title1: "Makinelerimizi",
        title2: "İzleyin",
        subtitle: "YouTube kanalımızda 100+ makine videosu",
        cta: "YouTube Kanalımız"
    },
    cta: {
        title: "Projeniz İçin Ücretsiz Teklif Alın",
        subtitle: "Uzman ekibimiz size en uygun çözümü sunmak için hazır"
    },
    contact: {
        tag: "İletişim",
        title1: "Bizimle",
        title2: "İletişime Geçin",
        address: "Adres",
        whatsapp: "WhatsApp",
        email: "E-Posta",
        hours: "Çalışma Saatleri",
        formTitle: "Teklif Formu",
        formSubmit: "Teklif İste"
    },
    footer: {
        desc: "1985'ten beri gıda işleme ve paketleme makineleri üretiyoruz.",
        production: "Üretim Hatları",
        packaging: "Paketleme",
        corporate: "Kurumsal",
        copyright: "Girişim Makina Türkiye. Tüm hakları saklıdır."
    },
    products: {
        wafer: { title: "Wafer Üretim Hatları", desc: "Komple wafer üretim hatları" },
        cereal: { title: "Cereal Bar Hatları", desc: "Cereal bar ve granola bar üretim hatları" },
        protein: { title: "Protein Bar Hatları", desc: "Protein bar ve enerji bar üretim hatları" },
        chocolate: { title: "Çikolata Kaplama", desc: "Çikolata enrobing ve soğutma sistemleri" },
        biscuit: { title: "Bisküvi Kremalama", desc: "Sandviç bisküvi üretim makineleri" },
        flowpack: { title: "Flow Pack", desc: "Yatay flow pack paketleme makineleri" },
        overwrap: { title: "Overwrapping", desc: "Zarf tipi sarma makineleri" },
        thermoform: { title: "Thermoform", desc: "Thermoform paketleme makineleri" },
        vffs: { title: "VFFS Dikey Dolum", desc: "Dikey dolum makineleri" },
        halvah: { title: "Helva Paketleme", desc: "Helva dilimleme ve paketleme" }
    }
};

// Stored translations
let customTranslations = {};

// Language labels
const langLabels = {
    en: "🇬🇧 İngilizce",
    ru: "🇷🇺 Rusça",
    ar: "🇸🇦 Arapça",
    fr: "🇫🇷 Fransızca",
    de: "🇩🇪 Almanca",
    es: "🇪🇸 İspanyolca"
};

// Initialize translation section
function initTranslations() {
    // Load saved translations from localStorage
    const saved = localStorage.getItem('girisim_custom_translations');
    if (saved) {
        customTranslations = JSON.parse(saved);
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
                        <input type="text" data-key="${fullKey}" value="${existingTranslation}" placeholder="Çeviri girin...">
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
                    <input type="text" data-key="${fullKey}" value="${existingTranslation}" placeholder="Çeviri girin...">
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
        de: 'German',
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

        // Save translations
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

    // Save to localStorage
    localStorage.setItem('girisim_custom_translations', JSON.stringify(customTranslations));
    updateTranslationStatus();

    showToast('Çeviri kaydedildi!', 'success');
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
    const languages = ['en', 'ru', 'ar', 'fr', 'de', 'es'];

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
    const activeLanguages = JSON.parse(localStorage.getItem('active_languages') || '["en","ru","ar","fr","de","es"]');
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

// Initialize translations when navigating to translations section
document.addEventListener('DOMContentLoaded', () => {
    // Add translations init on section navigation
    const origNavigate = navigateToSection;
    navigateToSection = function(section) {
        origNavigate(section);
        if (section === 'translations' || section === 'settings') {
            initTranslations();
        }
        if (section === 'analytics') {
            initAnalytics();
        }
    };
});

// =============================================
// Analytics & Tracking Management
// =============================================

// Initialize analytics section
function initAnalytics() {
    loadAnalyticsSettings();
    updateActiveIntegrations();
}

// Load analytics settings from localStorage/Firebase
function loadAnalyticsSettings() {
    const saved = localStorage.getItem('girisim_analytics_settings');
    if (saved) {
        const settings = JSON.parse(saved);

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

    // Save to localStorage
    localStorage.setItem('girisim_analytics_settings', JSON.stringify(settings));

    // Also save to siteContent if available
    if (siteContent) {
        siteContent.analytics = settings;
    }

    updateActiveIntegrations();
    showToast('Analitik ayarları kaydedildi!', 'success');
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
    if (settings.facebookPixel) {
        badges += '<span class="integration-badge active"><i class="fab fa-facebook"></i> Pixel</span>';
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

// Edit blog post
function editBlogPost(index) {
    initBlogPosts();
    const post = siteContent.blog.posts[index];
    if (!post) return;

    // Create modal for editing
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'blogEditModal';
    modal.innerHTML = `
        <div class="modal-content blog-editor-modal">
            <div class="modal-header">
                <h3><i class="fas fa-edit"></i> Blog Yazısını Düzenle</h3>
                <button class="modal-close" onclick="closeBlogEditor()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-row">
                    <div class="form-group flex-2">
                        <label>Başlık *</label>
                        <input type="text" id="blog-edit-title" value="${post.title || ''}" placeholder="Blog yazısı başlığı">
                    </div>
                    <div class="form-group">
                        <label>Kategori</label>
                        <select id="blog-edit-category">
                            <option value="Genel" ${post.category === 'Genel' ? 'selected' : ''}>Genel</option>
                            <option value="Ürünler" ${post.category === 'Ürünler' ? 'selected' : ''}>Ürünler</option>
                            <option value="Haberler" ${post.category === 'Haberler' ? 'selected' : ''}>Haberler</option>
                            <option value="Teknoloji" ${post.category === 'Teknoloji' ? 'selected' : ''}>Teknoloji</option>
                            <option value="Fuarlar" ${post.category === 'Fuarlar' ? 'selected' : ''}>Fuarlar</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Kısa Açıklama (Excerpt)</label>
                    <textarea id="blog-edit-excerpt" rows="2" placeholder="Yazının kısa özeti...">${post.excerpt || ''}</textarea>
                </div>

                <div class="form-group">
                    <label>İçerik *</label>
                    <textarea id="blog-edit-content" rows="10" placeholder="Blog yazısının içeriği...">${post.content || ''}</textarea>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Görsel URL</label>
                        <input type="url" id="blog-edit-image" value="${post.image || ''}" placeholder="https://...">
                    </div>
                    <div class="form-group">
                        <label>Tarih</label>
                        <input type="date" id="blog-edit-date" value="${post.date || ''}">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Yazar</label>
                        <input type="text" id="blog-edit-author" value="${post.author || ''}" placeholder="Yazar adı">
                    </div>
                    <div class="form-group">
                        <label>URL Slug</label>
                        <input type="text" id="blog-edit-slug" value="${post.slug || ''}" placeholder="blog-yazisi-url">
                    </div>
                </div>

                <div class="form-group">
                    <label>Etiketler (virgülle ayırın)</label>
                    <input type="text" id="blog-edit-tags" value="${(post.tags || []).join(', ')}" placeholder="etiket1, etiket2, etiket3">
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

    // Auto-generate slug from title
    document.getElementById('blog-edit-title').addEventListener('input', function() {
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

// Save blog post
function saveBlogPost(index) {
    initBlogPosts();

    const title = document.getElementById('blog-edit-title').value.trim();
    const content = document.getElementById('blog-edit-content').value.trim();

    if (!title) {
        showToast('Başlık zorunludur', 'error');
        return;
    }

    if (!content) {
        showToast('İçerik zorunludur', 'error');
        return;
    }

    const tagsInput = document.getElementById('blog-edit-tags').value;
    const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(t => t) : [];

    siteContent.blog.posts[index] = {
        ...siteContent.blog.posts[index],
        title: title,
        slug: document.getElementById('blog-edit-slug').value.trim() || title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: document.getElementById('blog-edit-excerpt').value.trim(),
        content: content,
        image: document.getElementById('blog-edit-image').value.trim(),
        category: document.getElementById('blog-edit-category').value,
        author: document.getElementById('blog-edit-author').value.trim() || 'Admin',
        date: document.getElementById('blog-edit-date').value,
        published: document.getElementById('blog-edit-published').checked,
        tags: tags,
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
    const modal = document.getElementById('blogEditModal');
    if (modal) {
        modal.remove();
    }
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

// Update populateAllForms to include blog
const originalPopulateAllForms = populateAllForms;
populateAllForms = function() {
    originalPopulateAllForms();
    renderBlogPosts();
    loadGoogleAdsSettings();
    loadTikTokPixelSettings();
};

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

// Update active integrations to include new platforms
const originalUpdateActiveIntegrations = updateActiveIntegrations;
updateActiveIntegrations = function() {
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
