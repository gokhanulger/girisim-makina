// Product Content Loader - Loads dynamic content from productPages defaults + Supabase admin overrides
// Handles both main product format (feature cards, multi-col specs) and flowpack format (keyFeatures strip, featuresList, 2-col specs, applications)

(function() {
    'use strict';

    // Determine product ID from URL
    function getProductId() {
        var path = window.location.pathname;
        var filename = path.split('/').pop().replace('.html', '');
        return filename;
    }

    // Get base path (../ or ../../ depending on depth)
    function getBasePath() {
        var path = window.location.pathname;
        var parts = path.split('/').filter(Boolean);
        // products/flowpack/flm-1000.html -> ../../
        // products/wafer.html -> ../
        var depth = 0;
        for (var i = 0; i < parts.length; i++) {
            if (parts[i] === 'products') { depth = parts.length - i - 1; break; }
        }
        if (depth >= 2) return '../../';
        return '../';
    }

    // Shallow merge: admin overrides win over defaults
    function mergeProductData(defaults, overrides) {
        if (!defaults && !overrides) return null;
        if (!defaults) return overrides;
        if (!overrides) return defaults;
        var merged = {};
        var key;
        for (key in defaults) {
            if (defaults.hasOwnProperty(key)) merged[key] = defaults[key];
        }
        for (key in overrides) {
            if (overrides.hasOwnProperty(key) && overrides[key] !== undefined && overrides[key] !== null && overrides[key] !== '') {
                merged[key] = overrides[key];
            }
        }
        return merged;
    }

    // Hide a section if it has no data
    function hideSection(selector) {
        var el = document.querySelector(selector);
        if (el) el.style.display = 'none';
    }

    // Detect format: flowpack has keyFeatures or featuresList; main has features[] with {icon,title,desc}
    function isFlowpackFormat(data) {
        return !!(data.keyFeatures || data.featuresList || (data.specs && data.specs.length > 0 && data.specs[0].label));
    }

    // Apply product content to the DOM
    function applyProductContent(data) {
        if (!data) return;

        var bp = getBasePath();
        var isFlowpack = isFlowpackFormat(data);

        // === HERO SECTION ===
        applyHero(data, bp);

        // === KEY FEATURES STRIP ===
        if (data.keyFeatures && data.keyFeatures.length) {
            applyKeyFeatures(data.keyFeatures);
        } else {
            hideSection('.product-key-features');
        }

        // === OVERVIEW / DESCRIPTION ===
        applyOverview(data, bp);

        // === FEATURE CARDS (main format) ===
        if (!isFlowpack && data.features && data.features.length) {
            applyFeatureCards(data.features);
        } else if (!data.features || !data.features.length) {
            hideSection('.product-features');
        }

        // === FEATURE LIST (flowpack/description format) ===
        if (data.featuresList && data.featuresList.length) {
            applyFeatureList(data.featuresList);
        }

        // === SPECS TABLE ===
        if ((data.specs && data.specs.length) || data.specsHeaders) {
            applySpecs(data, isFlowpack);
        } else {
            hideSection('.tech-specs');
            hideSection('.product-specs');
        }

        // === APPLICATIONS ===
        if (data.applications && data.applications.length) {
            applyApplications(data.applications);
        } else {
            hideSection('.product-applications');
        }

        // === VIDEOS ===
        if (data.videos && data.videos.length) {
            applyVideos(data.videos, bp);
        } else {
            hideSection('.product-videos');
        }

        // === CTA ===
        applyCTA(data);

        // === RELATED PRODUCTS ===
        if (data.relatedProducts && data.relatedProducts.length) {
            applyRelatedProducts(data.relatedProducts, bp);
        } else {
            hideSection('.related-products');
        }

        // === WHATSAPP LINKS ===
        if (data.whatsappText) {
            applyWhatsAppLinks(data.whatsappText);
        }

        // === SEO CONTENT ===
        if (data.seoContent) {
            var seoArea = document.getElementById('seoContentArea');
            if (seoArea) {
                var seoText = seoArea.querySelector('.seo-text');
                if (seoText) seoText.innerHTML = data.seoContent;
            }
        }

        // === ADMIN PACKAGE IMAGES ===
        if (data.packageImages) {
            applyPackageImages(data.packageImages);
        }

        // Re-apply translations
        if (typeof applyTranslations === 'function') {
            setTimeout(applyTranslations, 100);
        }
    }

    // --- Hero Section ---
    function applyHero(data, bp) {
        // Tag
        if (data.tag) {
            var tagEl = document.querySelector('.product-tag');
            if (tagEl) tagEl.textContent = data.tag;
        }

        // Title
        if (data.title) {
            var h1 = document.querySelector('.product-hero h1');
            if (h1) {
                h1.innerHTML = data.title + (data.titleHighlight ? ' <span class="highlight">' + data.titleHighlight + '</span>' : '');
            }
        }

        // Description
        if (data.description) {
            var heroP = document.querySelector('.product-hero-content > p');
            if (heroP) heroP.textContent = data.description;
        }

        // Gallery images
        if (data.heroImages && data.heroImages.length) {
            var mainImg = document.querySelector('.product-main-image img');
            var thumbContainer = document.querySelector('.product-thumbnails');

            if (mainImg) {
                mainImg.src = bp + data.heroImages[0];
                mainImg.alt = (data.title || '') + ' ' + (data.titleHighlight || '');
            }

            if (thumbContainer && data.heroImages.length > 0) {
                thumbContainer.innerHTML = data.heroImages.map(function(img, i) {
                    var src = bp + img;
                    return '<div class="product-thumbnail' + (i === 0 ? ' active' : '') + '">' +
                        '<img src="' + src + '" data-full="' + src + '" alt="' + (data.title || '') + ' - ' + (i + 1) + '">' +
                        '</div>';
                }).join('');

                // Re-init gallery click handlers
                if (window.productGallery) {
                    setTimeout(function() {
                        var thumbs = thumbContainer.querySelectorAll('.product-thumbnail');
                        thumbs.forEach(function(thumb, idx) {
                            thumb.addEventListener('click', function() {
                                window.productGallery.setActiveImage(idx);
                            });
                        });
                    }, 50);
                }
            }

            // Hero bg image (for pages using background-image style)
            var heroBg = document.querySelector('.product-hero-bg');
            if (heroBg) {
                heroBg.style.backgroundImage = 'url("' + bp + data.heroImages[0] + '")';
            }
        }
    }

    // --- Key Features Strip (flowpack format) ---
    function applyKeyFeatures(keyFeatures) {
        var grid = document.querySelector('.key-features-grid');
        if (!grid) return;

        grid.innerHTML = keyFeatures.map(function(kf) {
            return '<div class="key-feature">' +
                '<i class="' + (kf.icon || 'fas fa-check') + '"></i>' +
                '<div>' +
                '<strong>' + kf.value + '</strong>' +
                '<span>' + kf.label + '</span>' +
                '</div>' +
                '</div>';
        }).join('');
    }

    // --- Overview / Description ---
    function applyOverview(data, bp) {
        // Overview title
        if (data.overviewTitle) {
            // Try flowpack description section first, then main overview section
            var h2 = document.querySelector('.description-content h2') || document.querySelector('.overview-content h2');
            if (h2) {
                h2.innerHTML = data.overviewTitle + (data.overviewTitleHighlight ? ' <span class="highlight">' + data.overviewTitleHighlight + '</span>' : '');
            }
        }

        // Overview description paragraphs
        if (data.overviewDesc && data.overviewDesc.length) {
            var contentEl = document.querySelector('.description-content') || document.querySelector('.overview-content');
            if (contentEl) {
                var paragraphs = contentEl.querySelectorAll(':scope > p');
                data.overviewDesc.forEach(function(text, i) {
                    if (paragraphs[i]) {
                        paragraphs[i].textContent = text;
                    }
                });
            }
        }
    }

    // --- Feature Cards (main products) ---
    function applyFeatureCards(features) {
        var grid = document.querySelector('.features-grid');
        if (!grid) return;

        grid.innerHTML = features.map(function(f) {
            return '<div class="feature-card">' +
                '<div class="feature-icon"><i class="' + (f.icon || 'fas fa-cog') + '"></i></div>' +
                '<h3>' + f.title + '</h3>' +
                '<p>' + f.desc + '</p>' +
                '</div>';
        }).join('');
    }

    // --- Feature List (flowpack format) ---
    function applyFeatureList(featuresList) {
        var listEl = document.querySelector('.feature-list');
        if (!listEl) return;

        listEl.innerHTML = featuresList.map(function(text) {
            return '<div class="feature-list-item">' +
                '<i class="fas fa-check-circle"></i>' +
                '<span>' + text + '</span>' +
                '</div>';
        }).join('');
    }

    // --- Specs Table ---
    function applySpecs(data, isFlowpack) {
        var tableWrapper = document.querySelector('.specs-table-wrapper');
        if (!tableWrapper) return;

        if (isFlowpack && data.specs && data.specs.length && data.specs[0].label) {
            // 2-column format: label / value
            tableWrapper.innerHTML = '<table class="specs-table">' +
                '<tr><th>Özellik</th><th>Değer</th></tr>' +
                data.specs.map(function(row) {
                    return '<tr><td>' + row.label + '</td><td>' + row.value + '</td></tr>';
                }).join('') +
                '</table>';
        } else if (data.specsHeaders && data.specs && data.specs.length) {
            // Multi-column format: headers + cells
            var headerHTML = '<thead><tr>' + data.specsHeaders.map(function(h) {
                return '<th>' + h + '</th>';
            }).join('') + '</tr></thead>';

            var bodyHTML = '<tbody>' + data.specs.map(function(row) {
                return '<tr>' + row.cells.map(function(cell) {
                    return '<td>' + cell + '</td>';
                }).join('') + '</tr>';
            }).join('') + '</tbody>';

            tableWrapper.innerHTML = '<table class="specs-table">' + headerHTML + bodyHTML + '</table>';
        }
    }

    // --- Applications Grid ---
    function applyApplications(applications) {
        var grid = document.querySelector('.applications-grid');
        if (!grid) return;

        grid.innerHTML = applications.map(function(app) {
            return '<div class="application-item">' +
                '<i class="' + (app.icon || 'fas fa-box') + '"></i>' +
                '<span>' + app.label + '</span>' +
                '</div>';
        }).join('');
    }

    // --- Videos ---
    function applyVideos(videos, bp) {
        var grid = document.querySelector('.videos-grid');
        if (!grid) return;

        grid.innerHTML = videos.map(function(v) {
            var thumbSrc = 'https://img.youtube.com/vi/' + v.videoId + '/hqdefault.jpg';
            return '<div class="video-card" onclick="openVideo(\'' + v.videoId + '\')">' +
                '<div class="video-thumbnail">' +
                '<img src="' + thumbSrc + '" alt="' + v.title + '">' +
                '<div class="play-button"><i class="fas fa-play"></i></div>' +
                '</div>' +
                '<h4>' + v.title + '</h4>' +
                '</div>';
        }).join('');
    }

    // --- CTA ---
    function applyCTA(data) {
        var ctaSection = document.querySelector('.product-cta');
        if (!ctaSection) return;

        if (data.ctaTitle) {
            var ctaH2 = ctaSection.querySelector('h2');
            if (ctaH2) ctaH2.textContent = data.ctaTitle;
        }
        if (data.ctaDesc) {
            var ctaP = ctaSection.querySelector('p');
            if (ctaP) ctaP.textContent = data.ctaDesc;
        }
    }

    // --- Related Products ---
    function applyRelatedProducts(relatedIds, bp) {
        var grid = document.querySelector('.related-grid');
        if (!grid) return;

        // Get all product data to find related product info
        var allProducts = window.__defaultProductPages || {};
        var adminProducts = (window.__siteContent && window.__siteContent.productPages) || {};

        var cards = relatedIds.map(function(relId) {
            var relData = mergeProductData(allProducts[relId], adminProducts[relId]);
            if (!relData) return '';

            // Determine href based on product location
            var href = relId + '.html';
            var imgSrc = bp + ((relData.heroImages && relData.heroImages[0]) || 'images/pexels-factory-machinery.jpg');
            var title = relData.title + (relData.titleHighlight ? ' ' + relData.titleHighlight : '');
            var shortDesc = relData.tag || '';

            return '<a href="' + href + '" class="related-card">' +
                '<div class="related-image"><img src="' + imgSrc + '" alt="' + title + '"></div>' +
                '<h4>' + title + '</h4>' +
                (shortDesc ? '<p>' + shortDesc + '</p>' : '') +
                '</a>';
        }).filter(Boolean);

        if (cards.length) {
            grid.innerHTML = cards.join('');
        }
    }

    // --- WhatsApp Links ---
    function applyWhatsAppLinks(text) {
        var encoded = encodeURIComponent(text);
        var links = document.querySelectorAll('a[href*="wa.me"]');
        links.forEach(function(link) {
            // Only update links that have text= parameter (not the quote form ones)
            if (link.href.indexOf('text=') > -1) {
                link.href = 'https://wa.me/905468792927?text=' + encoded;
            }
        });
    }

    // --- Package Images ---
    function applyPackageImages(images) {
        if (!images) return;
        Object.keys(images).forEach(function(selector) {
            var el = document.querySelector(selector);
            if (el && el.tagName === 'IMG') {
                el.src = images[selector];
            }
        });
    }

    // === MAIN INIT ===
    function initProductLoader() {
        var productId = getProductId();
        if (!productId) return;

        // Get defaults from product-data.js
        var defaults = (window.__defaultProductPages && window.__defaultProductPages[productId]) || null;

        // Get admin overrides from siteContent
        var siteContent = window.__siteContent;
        var adminOverrides = (siteContent && siteContent.productPages && siteContent.productPages[productId]) || null;

        // Merge: admin overrides win
        var productData = mergeProductData(defaults, adminOverrides);

        if (productData) {
            applyProductContent(productData);
        }
    }

    // Poll for siteContent (async loaded) then init
    var attempts = 0;
    var interval = setInterval(function() {
        attempts++;
        if (window.__siteContent || attempts > 50) {
            clearInterval(interval);
            initProductLoader();
            // Hide loader after product content is fully applied
            if (typeof window._hidePageLoader === 'function') {
                window._hidePageLoader();
            }
        }
    }, 100);
})();
