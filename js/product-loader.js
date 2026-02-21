// Product Content Loader - Loads dynamic content from Supabase
// Falls back to static HTML if no Supabase data available

(function() {
    'use strict';

    // Determine product ID from URL
    function getProductId() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '');
        return filename;
    }

    // Get parent category from URL
    function getProductCategory() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(Boolean);
        // products/flowpack/flm-1000.html -> flowpack
        // products/wafer.html -> products
        if (parts.length >= 3 && parts[parts.length - 2] !== 'products') {
            return parts[parts.length - 2];
        }
        return 'products';
    }

    // Apply product content from Supabase to the DOM
    function applyProductContent(productData) {
        if (!productData) return;

        // Hero section
        if (productData.heroTitle) {
            const h1 = document.querySelector('.product-hero h1');
            if (h1) h1.innerHTML = productData.heroTitle;
        }
        if (productData.heroDesc) {
            const p = document.querySelector('.product-hero p');
            if (p) p.textContent = productData.heroDesc;
        }
        if (productData.heroTag) {
            const tag = document.querySelector('.product-tag');
            if (tag) tag.textContent = productData.heroTag;
        }

        // Overview section
        if (productData.overviewTitle) {
            const h2 = document.querySelector('.overview-content h2');
            if (h2) h2.innerHTML = productData.overviewTitle;
        }
        if (productData.overviewDesc) {
            const paragraphs = document.querySelectorAll('.overview-content p');
            const descs = Array.isArray(productData.overviewDesc) ? productData.overviewDesc : [productData.overviewDesc];
            descs.forEach((text, i) => {
                if (paragraphs[i]) paragraphs[i].textContent = text;
            });
        }

        // Features
        if (productData.features && Array.isArray(productData.features)) {
            const cards = document.querySelectorAll('.feature-card');
            productData.features.forEach((feature, i) => {
                if (cards[i]) {
                    const h3 = cards[i].querySelector('h3');
                    const p = cards[i].querySelector('p');
                    if (h3 && feature.title) h3.textContent = feature.title;
                    if (p && feature.desc) p.textContent = feature.desc;
                }
            });
        }

        // Technical specs table
        if (productData.specs && Array.isArray(productData.specs)) {
            const tbody = document.querySelector('.specs-table tbody');
            if (tbody && productData.specs.length > 0) {
                tbody.innerHTML = productData.specs.map(row => {
                    return '<tr>' + row.map(cell => `<td>${cell}</td>`).join('') + '</tr>';
                }).join('');
            }
        }

        // Gallery images
        if (productData.gallery && Array.isArray(productData.gallery)) {
            const mainImg = document.querySelector('.product-main-image img');
            const thumbnails = document.querySelector('.product-thumbnails');
            if (mainImg && productData.gallery.length > 0) {
                mainImg.src = productData.gallery[0].url;
                mainImg.alt = productData.gallery[0].alt || '';
            }
            if (thumbnails && productData.gallery.length > 1) {
                thumbnails.innerHTML = productData.gallery.map((img, i) => `
                    <div class="product-thumbnail ${i === 0 ? 'active' : ''}" onclick="changeProductImage('${img.url}', this)">
                        <img src="${img.url}" alt="${img.alt || ''}">
                    </div>
                `).join('');
            }
        }

        // CTA section
        if (productData.ctaTitle) {
            const ctaH2 = document.querySelector('.product-cta h2');
            if (ctaH2) ctaH2.textContent = productData.ctaTitle;
        }
        if (productData.ctaDesc) {
            const ctaP = document.querySelector('.product-cta p');
            if (ctaP) ctaP.textContent = productData.ctaDesc;
        }

        // SEO content area
        if (productData.seoContent) {
            const seoArea = document.getElementById('seoContentArea');
            if (seoArea) {
                const seoText = seoArea.querySelector('.seo-text');
                if (seoText) seoText.innerHTML = productData.seoContent;
            }
        }

        // Package images (admin-managed)
        if (productData.packageImages) {
            applyPackageImages(productData.packageImages);
        }
    }

    // Apply package images from admin
    function applyPackageImages(images) {
        if (!images) return;
        Object.keys(images).forEach(selector => {
            const el = document.querySelector(selector);
            if (el && el.tagName === 'IMG') {
                el.src = images[selector];
            }
        });
    }

    // Initialize product loader
    async function initProductLoader() {
        const productId = getProductId();
        const category = getProductCategory();

        // Try to get content from Supabase
        let siteContent = window.__siteContent;

        if (!siteContent && typeof getCachedSiteContent === 'function') {
            try {
                siteContent = await getCachedSiteContent();
            } catch (e) {
                // Supabase not available, use static HTML
                return;
            }
        }

        if (!siteContent || !siteContent.products) return;

        // Look for product data: try exact ID, then category/id
        const productData = siteContent.products[productId]
            || siteContent.products[category + '/' + productId]
            || null;

        if (productData) {
            applyProductContent(productData);
        }
    }

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Delay slightly to allow site-loader to set window.__siteContent
            setTimeout(initProductLoader, 100);
        });
    } else {
        setTimeout(initProductLoader, 100);
    }
})();
