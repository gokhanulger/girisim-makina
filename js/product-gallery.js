// Product Gallery with Lightbox
// Girişim Makina

(function() {
    let currentImageIndex = 0;
    let galleryImages = [];

    // Initialize gallery when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initProductGallery();
    });

    function initProductGallery() {
        const gallery = document.querySelector('.product-hero-gallery');
        if (!gallery) return;

        // Get all images
        const mainImage = gallery.querySelector('.product-main-image img');
        const thumbnails = gallery.querySelectorAll('.product-thumbnail img');

        if (mainImage) {
            galleryImages.push(mainImage.src);
        }

        thumbnails.forEach((thumb, index) => {
            const fullSrc = thumb.dataset.full || thumb.src;
            if (!galleryImages.includes(fullSrc)) {
                galleryImages.push(fullSrc);
            }

            // Thumbnail click handler
            thumb.parentElement.addEventListener('click', function() {
                setActiveImage(index);
            });
        });

        // Main image click opens lightbox
        const mainImageContainer = gallery.querySelector('.product-main-image');
        if (mainImageContainer) {
            mainImageContainer.addEventListener('click', function() {
                openLightbox(currentImageIndex);
            });
        }

        // Create lightbox if not exists
        createLightbox();
    }

    function setActiveImage(index) {
        currentImageIndex = index;
        const gallery = document.querySelector('.product-hero-gallery');
        const mainImage = gallery.querySelector('.product-main-image img');
        const thumbnails = gallery.querySelectorAll('.product-thumbnail');

        if (mainImage && galleryImages[index]) {
            mainImage.src = galleryImages[index];
        }

        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    function createLightbox() {
        if (document.querySelector('.product-lightbox')) return;

        const lightbox = document.createElement('div');
        lightbox.className = 'product-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <span class="lightbox-nav lightbox-prev"><i class="fas fa-chevron-left"></i></span>
                <img src="" alt="Product Image">
                <span class="lightbox-nav lightbox-next"><i class="fas fa-chevron-right"></i></span>
                <div class="lightbox-counter">1 / 1</div>
            </div>
        `;

        document.body.appendChild(lightbox);

        // Event listeners
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);
        lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        });
    }

    function openLightbox(index) {
        const lightbox = document.querySelector('.product-lightbox');
        if (!lightbox || galleryImages.length === 0) return;

        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        const lightbox = document.querySelector('.product-lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
        setActiveImage(currentImageIndex);
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
        setActiveImage(currentImageIndex);
    }

    function updateLightboxImage() {
        const lightbox = document.querySelector('.product-lightbox');
        if (!lightbox) return;

        const img = lightbox.querySelector('.lightbox-content img');
        const counter = lightbox.querySelector('.lightbox-counter');

        if (img && galleryImages[currentImageIndex]) {
            img.src = galleryImages[currentImageIndex];
        }

        if (counter) {
            counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
        }

        // Hide nav if only one image
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');
        if (prevBtn && nextBtn) {
            const display = galleryImages.length > 1 ? 'block' : 'none';
            prevBtn.style.display = display;
            nextBtn.style.display = display;
        }
    }

    // Expose functions globally
    window.productGallery = {
        openLightbox,
        closeLightbox,
        setActiveImage
    };
})();

// Watermark function for uploaded images
function addWatermark(imageFile, callback) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;

            // Draw original image
            ctx.drawImage(img, 0, 0);

            // Add watermark
            const watermarkText = 'Girişim Makina';
            const fontSize = Math.max(20, img.width * 0.03);

            ctx.font = `bold ${fontSize}px Arial`;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 2;

            // Position at bottom right
            const textMetrics = ctx.measureText(watermarkText);
            const x = img.width - textMetrics.width - 20;
            const y = img.height - 20;

            ctx.strokeText(watermarkText, x, y);
            ctx.fillText(watermarkText, x, y);

            // Convert to blob
            canvas.toBlob(function(blob) {
                callback(blob, canvas.toDataURL('image/jpeg', 0.9));
            }, 'image/jpeg', 0.9);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);
}
