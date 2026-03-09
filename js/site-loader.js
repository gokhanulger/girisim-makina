// Site Content Loader - Loads dynamic content from Supabase or localStorage

// Load Analytics & Tracking Codes - Must run ASAP
(function loadAnalyticsTracking() {
    // Try localStorage first for instant load (analytics needs to run ASAP)
    let settings = null;
    const saved = localStorage.getItem('girisim_analytics_settings');
    if (saved) {
        settings = JSON.parse(saved);
    }

    // Also try to get from cached site content
    if (!settings) {
        try {
            const cached = sessionStorage.getItem('girisim_site_cache');
            if (cached) {
                const { data } = JSON.parse(cached);
                if (data?.analytics) settings = data.analytics;
            }
        } catch (e) { /* ignore */ }
    }

    if (!settings) return;

    // Create a container for head scripts
    const headScripts = [];

    // Google Search Console verification
    if (settings.googleSearchConsole) {
        const meta = document.createElement('meta');
        meta.name = 'google-site-verification';
        meta.content = settings.googleSearchConsole;
        document.head.appendChild(meta);
    }

    // Yandex Webmaster verification
    if (settings.yandexWebmaster) {
        const meta = document.createElement('meta');
        meta.name = 'yandex-verification';
        meta.content = settings.yandexWebmaster;
        document.head.appendChild(meta);
    }

    // Google Analytics 4
    if (settings.googleAnalytics) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalytics}`;
        document.head.appendChild(gaScript);

        const gaConfig = document.createElement('script');
        gaConfig.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${settings.googleAnalytics}');
        `;
        document.head.appendChild(gaConfig);
        console.log('Google Analytics 4 loaded:', settings.googleAnalytics);
    }

    // Google Tag Manager
    if (settings.googleTagManager) {
        const gtmScript = document.createElement('script');
        gtmScript.textContent = `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${settings.googleTagManager}');
        `;
        document.head.appendChild(gtmScript);

        // GTM noscript (add to body when ready)
        document.addEventListener('DOMContentLoaded', function() {
            const noscript = document.createElement('noscript');
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.googletagmanager.com/ns.html?id=${settings.googleTagManager}`;
            iframe.height = '0';
            iframe.width = '0';
            iframe.style.display = 'none';
            iframe.style.visibility = 'hidden';
            noscript.appendChild(iframe);
            document.body.insertBefore(noscript, document.body.firstChild);
        });
        console.log('Google Tag Manager loaded:', settings.googleTagManager);
    }

    // Facebook Pixel
    if (settings.facebookPixel) {
        const fbScript = document.createElement('script');
        fbScript.textContent = `
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
        `;
        document.head.appendChild(fbScript);

        // Facebook noscript pixel
        document.addEventListener('DOMContentLoaded', function() {
            const noscript = document.createElement('noscript');
            const img = document.createElement('img');
            img.height = 1;
            img.width = 1;
            img.style.display = 'none';
            img.src = `https://www.facebook.com/tr?id=${settings.facebookPixel}&ev=PageView&noscript=1`;
            noscript.appendChild(img);
            document.body.appendChild(noscript);
        });
        console.log('Facebook Pixel loaded:', settings.facebookPixel);
    }

    // Yandex Metrica
    if (settings.yandexMetrica) {
        const ymScript = document.createElement('script');
        ymScript.textContent = `
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
        `;
        document.head.appendChild(ymScript);

        // Yandex noscript
        document.addEventListener('DOMContentLoaded', function() {
            const noscript = document.createElement('noscript');
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = `https://mc.yandex.ru/watch/${settings.yandexMetrica}`;
            img.style.position = 'absolute';
            img.style.left = '-9999px';
            img.alt = '';
            div.appendChild(img);
            noscript.appendChild(div);
            document.body.appendChild(noscript);
        });
        console.log('Yandex Metrica loaded:', settings.yandexMetrica);
    }

    // LinkedIn Insight Tag
    if (settings.linkedinInsight) {
        const liScript = document.createElement('script');
        liScript.textContent = `
            _linkedin_partner_id = "${settings.linkedinInsight}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `;
        document.head.appendChild(liScript);

        const liTracker = document.createElement('script');
        liTracker.async = true;
        liTracker.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
        document.head.appendChild(liTracker);

        // LinkedIn noscript
        document.addEventListener('DOMContentLoaded', function() {
            const noscript = document.createElement('noscript');
            const img = document.createElement('img');
            img.height = 1;
            img.width = 1;
            img.style.display = 'none';
            img.alt = '';
            img.src = `https://px.ads.linkedin.com/collect/?pid=${settings.linkedinInsight}&fmt=gif`;
            noscript.appendChild(img);
            document.body.appendChild(noscript);
        });
        console.log('LinkedIn Insight Tag loaded:', settings.linkedinInsight);
    }

    // Microsoft Clarity
    if (settings.microsoftClarity) {
        const clarityScript = document.createElement('script');
        clarityScript.textContent = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${settings.microsoftClarity}");
        `;
        document.head.appendChild(clarityScript);
        console.log('Microsoft Clarity loaded:', settings.microsoftClarity);
    }

    // Google Ads Conversion Tracking
    if (settings.googleAdsConversionId) {
        const gAdsScript = document.createElement('script');
        gAdsScript.async = true;
        gAdsScript.src = `https://www.googletagmanager.com/gtag/js?id=${settings.googleAdsConversionId}`;
        document.head.appendChild(gAdsScript);

        const gAdsConfig = document.createElement('script');
        gAdsConfig.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${settings.googleAdsConversionId}');

            // Conversion tracking function
            window.trackGoogleAdsConversion = function(label) {
                gtag('event', 'conversion', {
                    'send_to': '${settings.googleAdsConversionId}/' + (label || '${settings.googleAdsConversionLabel || ''}')
                });
            };
        `;
        document.head.appendChild(gAdsConfig);
        console.log('Google Ads loaded:', settings.googleAdsConversionId);
    }

    // TikTok Pixel
    if (settings.tiktokPixel) {
        const ttScript = document.createElement('script');
        ttScript.textContent = `
            !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                ttq.load('${settings.tiktokPixel}');
                ttq.page();
            }(window, document, 'ttq');
        `;
        document.head.appendChild(ttScript);
        console.log('TikTok Pixel loaded:', settings.tiktokPixel);
    }

    // Custom head code
    if (settings.customHeadCode) {
        const customScript = document.createElement('div');
        customScript.innerHTML = settings.customHeadCode;
        Array.from(customScript.children).forEach(child => {
            document.head.appendChild(child.cloneNode(true));
        });
    }

    // Custom body code
    if (settings.customBodyCode) {
        document.addEventListener('DOMContentLoaded', function() {
            const customDiv = document.createElement('div');
            customDiv.innerHTML = settings.customBodyCode;
            Array.from(customDiv.children).forEach(child => {
                document.body.appendChild(child.cloneNode(true));
            });
        });
    }
})();

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Use cached content loader (Supabase → sessionStorage → localStorage → defaults)
        let content = null;

        if (typeof getCachedSiteContent === 'function') {
            content = await getCachedSiteContent();
        } else if (typeof supabase !== 'undefined' && typeof loadSiteContent === 'function') {
            content = await loadSiteContent();
        }

        if (!content) {
            // Fallback to localStorage (demo mode)
            const localContent = localStorage.getItem('girisim_site_content');
            if (localContent) {
                content = JSON.parse(localContent);
            }
        }

        if (content) {
            // Set global for other scripts to use
            window.__siteContent = content;
            console.log('Site content loaded');
            applySiteContent(content);

            // Also update analytics from Supabase content if available
            if (content.analytics) {
                localStorage.setItem('girisim_analytics_settings', JSON.stringify(content.analytics));
            }

            // Merge Supabase translations and re-apply language
            if (typeof mergeSupabaseTranslations === 'function') {
                mergeSupabaseTranslations();
                if (typeof applyTranslations === 'function') {
                    applyTranslations();
                }
            }

            // Re-apply Supabase content AFTER translations for Turkish (default language)
            // Other languages use translations system
            const siteLang = localStorage.getItem('girisim_lang') || 'tr';
            if (siteLang === 'tr') {
                applySiteContent(content);
            }

            // Rebuild mega menu with updated machineCategories from Supabase
            if (typeof window.rebuildMegaMenu === 'function' && content.machineCategories) {
                window.rebuildMegaMenu(content);
            }
        } else {
            console.log('Using static content');
        }
    } catch (error) {
        console.log('Using static content (error):', error);
        const localContent = localStorage.getItem('girisim_site_content');
        if (localContent) {
            const content = JSON.parse(localContent);
            window.__siteContent = content;
            applySiteContent(content);
        }
    }

    // Reveal page after all dynamic content is loaded
    document.body.classList.add('site-ready');

    // Hide page loader - on product pages, product-loader.js handles this
    // On non-product pages, hide it here after content + translations are applied
    if (typeof window._hidePageLoader === 'function' && !document.querySelector('.product-hero, .product-categories')) {
        window._hidePageLoader();
    }
});

// Convert plain text with newlines and *bold* markers to HTML paragraphs
function formatRichText(text) {
    if (!text) return '';
    // Escape HTML entities for safety
    let safe = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Convert *bold* or **bold** to <strong>
    safe = safe.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    safe = safe.replace(/\*(.+?)\*/g, '<strong>$1</strong>');
    // Split by double newlines into paragraphs
    const paragraphs = safe.split(/\n\s*\n/).filter(p => p.trim());
    if (paragraphs.length <= 1) {
        // Single paragraph - convert single newlines to <br>
        return '<p>' + safe.replace(/\n/g, '<br>') + '</p>';
    }
    return paragraphs.map(p => '<p>' + p.trim().replace(/\n/g, '<br>') + '</p>').join('\n');
}

// Fallback: show hero banner after 3s even if Supabase fails
setTimeout(function() {
    var hb = document.querySelector('.hero-banner');
    if (hb && !hb.classList.contains('loaded')) {
        hb.classList.add('loaded');
        if (typeof window.initBannerSlider === 'function') window.initBannerSlider();
    }
}, 3000);

function applySiteContent(content) {
    // Contact Info (Office Phone, WhatsApp, Email) - Header & Footer
    if (content.contactInfo) {
        const ci = content.contactInfo;

        // Update header office phone
        const headerOfficePhone = document.querySelector('.top-bar .office-phone');
        if (headerOfficePhone && ci.officePhone) {
            headerOfficePhone.innerHTML = `<i class="fas fa-phone"></i> ${ci.officePhone}`;
            headerOfficePhone.href = `tel:${ci.officePhone.replace(/\s/g, '')}`;
        }

        // Update header WhatsApp
        const headerWhatsapp = document.querySelector('.top-bar .contact-info a[href*="wa.me"]');
        if (headerWhatsapp && ci.whatsapp) {
            const whatsappNumber = ci.whatsapp.replace(/\s/g, '').replace(/\+/g, '');
            headerWhatsapp.innerHTML = `<i class="fab fa-whatsapp"></i> ${ci.whatsapp}`;
            headerWhatsapp.href = `https://wa.me/${whatsappNumber}`;
        }

        // Update header email
        const headerEmail = document.querySelector('.top-bar .contact-info a[href*="mailto:"]');
        if (headerEmail && ci.email) {
            headerEmail.innerHTML = `<i class="fas fa-envelope"></i> ${ci.email}`;
            headerEmail.href = `mailto:${ci.email}`;
        }

        // Update footer office phone
        const footerOfficePhone = document.querySelector('.footer-contact .office-phone');
        if (footerOfficePhone && ci.officePhone) {
            footerOfficePhone.textContent = ci.officePhone;
            footerOfficePhone.href = `tel:${ci.officePhone.replace(/\s/g, '')}`;
        }

        // Update footer WhatsApp
        const footerWhatsapp = document.querySelector('.footer-contact .whatsapp-phone');
        if (footerWhatsapp && ci.whatsapp) {
            const whatsappNumber = ci.whatsapp.replace(/\s/g, '').replace(/\+/g, '');
            footerWhatsapp.textContent = ci.whatsapp;
            footerWhatsapp.href = `https://wa.me/${whatsappNumber}`;
        }

        // Update WhatsApp float button
        const whatsappFloat = document.querySelector('.whatsapp-float');
        if (whatsappFloat && ci.whatsapp) {
            const whatsappNumber = ci.whatsapp.replace(/\s/g, '').replace(/\+/g, '');
            whatsappFloat.href = `https://wa.me/${whatsappNumber}`;
        }

        // Update header WhatsApp button
        const headerWhatsappBtn = document.querySelector('.header .btn-primary[href*="wa.me"]');
        if (headerWhatsappBtn && ci.whatsapp) {
            const whatsappNumber = ci.whatsapp.replace(/\s/g, '').replace(/\+/g, '');
            headerWhatsappBtn.href = `https://wa.me/${whatsappNumber}?text=Bilgi%20almak%20istiyorum`;
        }
    }

    // Top Bar
    if (content.topBar) {
        const phoneEl = document.querySelector('.top-bar .contact-info a[href^="tel:"]');
        const emailEl = document.querySelector('.top-bar .contact-info a[href^="mailto:"]');
        if (phoneEl) {
            phoneEl.innerHTML = `<i class="fas fa-phone"></i> ${content.topBar.phone}`;
            phoneEl.href = `tel:${content.topBar.phone.replace(/\s/g, '')}`;
        }
        if (emailEl) {
            emailEl.innerHTML = `<i class="fas fa-envelope"></i> ${content.topBar.email}`;
            emailEl.href = `mailto:${content.topBar.email}`;
        }
    }

    // Hero Banner Slider - Dynamic from admin heroSlides
    // Apply if admin has any customized content (title, description, image, or multiple slides)
    const heroCustomized = content.heroSlides && Array.isArray(content.heroSlides) && content.heroSlides.length > 0 &&
        (content.heroSlides.length > 1 ||
         (content.heroSlides[0].backgroundImage && content.heroSlides[0].backgroundImage !== '') ||
         (content.heroSlides[0].image && content.heroSlides[0].image !== '') ||
         (content.heroSlides[0].title && content.heroSlides[0].title !== '') ||
         (content.heroSlides[0].description && content.heroSlides[0].description !== '') ||
         (content.heroSlides[0].tag && content.heroSlides[0].tag !== ''));
    if (heroCustomized) {
        const sliderContainer = document.querySelector('.banner-slider');
        if (sliderContainer) {
            // Build slides HTML
            const slidesHtml = content.heroSlides.map((slide, i) => {
                const bgImage = slide.image || slide.backgroundImage || 'images/fabrika-ici-1.jpeg';

                // Support both formats: buttons[] array AND flat button1Text/button1Link fields
                let buttons = '';
                if (slide.buttons && Array.isArray(slide.buttons) && slide.buttons.length > 0) {
                    buttons = slide.buttons.map((btn, bi) => {
                        const btnClass = bi === 0 ? 'btn btn-primary btn-lg' : 'btn btn-banner-outline btn-lg';
                        const icon = btn.icon ? `<i class="${btn.icon}"></i> ` : '';
                        return `<a href="${btn.url || btn.href || '#'}" ${btn.target === '_blank' ? 'target="_blank"' : ''} class="${btnClass}">${icon}${btn.text || ''}</a>`;
                    }).join('');
                } else {
                    // Flat format from admin: button1Text/button1Link, button2Text/button2Link
                    if (slide.button1Text && slide.button1Link) {
                        buttons += `<a href="${slide.button1Link}" class="btn btn-primary btn-lg">${slide.button1Text}</a>`;
                    }
                    if (slide.button2Text && slide.button2Link) {
                        const isExternal = slide.button2Link.includes('wa.me') || slide.button2Link.startsWith('http');
                        buttons += `<a href="${slide.button2Link}" ${isExternal ? 'target="_blank"' : ''} class="btn btn-banner-outline btn-lg">${slide.button2Text}</a>`;
                    }
                }

                return `
                    <div class="banner-slide${i === 0 ? ' active' : ''}" style="background-image: url('${bgImage}');">
                        <div class="banner-overlay"></div>
                        <div class="container">
                            <div class="banner-content">
                                ${slide.tag ? `<span class="banner-tag">${slide.tag}</span>` : ''}
                                <h1>${slide.title || ''}${slide.titleHighlight ? '<br><span class="highlight">' + slide.titleHighlight + '</span>' : ''}</h1>
                                ${slide.description ? `<p>${slide.description}</p>` : ''}
                                ${buttons ? `<div class="banner-buttons">${buttons}</div>` : ''}
                            </div>
                        </div>
                    </div>`;
            }).join('');

            sliderContainer.innerHTML = slidesHtml;

            // Reinit slider (rebuilds dots + auto-play) with new slides
            if (typeof window.initBannerSlider === 'function') {
                window.initBannerSlider();
            }
        }
    }

    // Show hero banner after content is applied (prevents flash of default content)
    const heroBanner = document.querySelector('.hero-banner');
    if (heroBanner) heroBanner.classList.add('loaded');

    // Hero Stats - apply from heroSlides[0].stats or hero.stats
    const heroStatsData = (content.heroSlides && content.heroSlides[0] && content.heroSlides[0].stats) || (content.hero && content.hero.stats);
    if (heroStatsData && Array.isArray(heroStatsData)) {
        const statEls = document.querySelectorAll('.hero-stats .stat, .banner-stats .stat');
        heroStatsData.forEach((stat, i) => {
            if (statEls[i]) {
                const numEl = statEls[i].querySelector('.stat-number');
                const textEl = statEls[i].querySelector('.stat-text');
                if (numEl && stat.number) numEl.textContent = stat.number;
                if (textEl && stat.text) textEl.textContent = stat.text;
            }
        });
    }

    // About Section
    if (content.about) {
        const aboutTag = document.querySelector('#about .section-tag');
        if (aboutTag) aboutTag.textContent = content.about.tag;

        const aboutTitle = document.querySelector('#about .about-content h2');
        if (aboutTitle) {
            aboutTitle.innerHTML = `${content.about.title}<br><span class="highlight">${content.about.titleHighlight}</span>`;
        }

        // Combine paragraphs and render with formatting + read more
        const aboutContent = document.querySelector('#about .about-content');
        if (aboutContent) {
            const oldParagraphs = aboutContent.querySelectorAll(':scope > p, :scope > .about-text-wrap, :scope > .read-more-btn');
            oldParagraphs.forEach(p => p.remove());

            const fullText = formatRichText(content.about.paragraph1 || '') +
                (content.about.paragraph2 ? formatRichText(content.about.paragraph2) : '');

            const textWrap = document.createElement('div');
            textWrap.className = 'about-text-wrap';
            textWrap.innerHTML = fullText;

            // Insert before about-features
            const aboutFeatures = aboutContent.querySelector('.about-features');
            if (aboutFeatures) {
                aboutContent.insertBefore(textWrap, aboutFeatures);
            } else {
                aboutContent.appendChild(textWrap);
            }

            // Add read more if text is long (more than 300 chars)
            const plainLen = textWrap.textContent.length;
            if (plainLen > 300) {
                textWrap.classList.add('about-text-collapsed');
                const readMoreBtn = document.createElement('button');
                readMoreBtn.className = 'read-more-btn';
                readMoreBtn.innerHTML = '<span data-translate="about.readMore">Daha Fazlasını Oku</span> <i class="fas fa-chevron-down"></i>';
                readMoreBtn.onclick = function() {
                    const isCollapsed = textWrap.classList.toggle('about-text-collapsed');
                    this.querySelector('span').textContent = isCollapsed ? 'Daha Fazlasını Oku' : 'Daha Az Göster';
                    this.querySelector('i').className = isCollapsed ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
                };
                textWrap.after(readMoreBtn);
            }
        }

        const aboutImage = document.querySelector('#about .about-image img');
        if (aboutImage && content.about.image) {
            aboutImage.src = content.about.image;
        }

        const experienceYears = document.querySelector('.experience-badge .years');
        if (experienceYears) experienceYears.textContent = content.about.experienceYears;

        // About Features
        if (content.about.features) {
            const featureEls = document.querySelectorAll('#about .about-features .feature');
            content.about.features.forEach((feature, index) => {
                if (featureEls[index]) {
                    featureEls[index].querySelector('i').className = feature.icon;
                    featureEls[index].querySelector('span').textContent = feature.text;
                }
            });
        }
    }

    // Machines Section (id="production" in index.html)
    if (content.machines) {
        const machinesTag = document.querySelector('#production .section-tag');
        if (machinesTag) machinesTag.textContent = content.machines.tag;

        const machinesTitle = document.querySelector('#production .section-header h2');
        if (machinesTitle) {
            machinesTitle.innerHTML = `${content.machines.title} <span class="highlight">${content.machines.titleHighlight}</span>`;
        }

        const machinesSubtitle = document.querySelector('#production .section-header p');
        if (machinesSubtitle) machinesSubtitle.textContent = content.machines.subtitle;

        // Machine Cards
        if (content.machines.items) {
            const machinesGrid = document.querySelector('#production .machines-grid');
            if (machinesGrid) {
                machinesGrid.innerHTML = content.machines.items.map(item => `
                    <div class="machine-card">
                        <div class="machine-image">
                            <img loading="lazy" src="${item.image}" alt="${item.title}">
                            <div class="machine-overlay"></div>
                        </div>
                        <div class="machine-info">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <ul class="machine-features">
                                ${(item.features || []).map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('');
            }
        }
    }

    // Packaging Section
    if (content.packaging) {
        const packagingTag = document.querySelector('#packaging .section-tag');
        if (packagingTag) packagingTag.textContent = content.packaging.tag;

        const packagingTitle = document.querySelector('#packaging .section-header h2');
        if (packagingTitle) {
            packagingTitle.innerHTML = `${content.packaging.title} <span class="highlight">${content.packaging.titleHighlight}</span>`;
        }

        const packagingSubtitle = document.querySelector('#packaging .section-header p');
        if (packagingSubtitle) packagingSubtitle.textContent = content.packaging.subtitle;

        if (content.packaging.items) {
            const packagingGrid = document.querySelector('#packaging .packaging-grid');
            if (packagingGrid) {
                packagingGrid.innerHTML = content.packaging.items.map(item => `
                    <div class="package-card">
                        <div class="package-icon"><i class="${item.icon}"></i></div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `).join('');
            }
        }
    }

    // Sectors Section
    if (content.sectors) {
        const sectorsTag = document.querySelector('#sectors .section-tag');
        if (sectorsTag) sectorsTag.textContent = content.sectors.tag;

        const sectorsTitle = document.querySelector('#sectors .section-header h2');
        if (sectorsTitle) {
            sectorsTitle.innerHTML = `${content.sectors.title} <span class="highlight">${content.sectors.titleHighlight}</span>`;
        }

        const sectorsSubtitle = document.querySelector('#sectors .section-header p');
        if (sectorsSubtitle) sectorsSubtitle.textContent = content.sectors.subtitle;

        if (content.sectors.items) {
            const sectorsGrid = document.querySelector('#sectors .sectors-grid');
            if (sectorsGrid) {
                sectorsGrid.innerHTML = content.sectors.items.map(item => `
                    <div class="sector-card">
                        <div class="sector-icon"><i class="${item.icon}"></i></div>
                        <h4>${item.title}</h4>
                    </div>
                `).join('');
            }
        }
    }

    // Why Us Section
    if (content.whyUs) {
        const whyUsTag = document.querySelector('.why-us-section .section-tag');
        if (whyUsTag) whyUsTag.textContent = content.whyUs.tag;

        const whyUsTitle = document.querySelector('.why-us-section h2');
        if (whyUsTitle) {
            whyUsTitle.innerHTML = `${content.whyUs.title} <span class="highlight">${content.whyUs.titleHighlight}</span>`;
        }

        const whyUsImage = document.querySelector('.why-us-image > img');
        if (whyUsImage && content.whyUs.image) {
            whyUsImage.src = content.whyUs.image;
        }

        if (content.whyUs.items) {
            const whyContainer = document.querySelector('.why-us-items');
            if (whyContainer) {
                whyContainer.innerHTML = content.whyUs.items.map(item => `
                    <div class="why-item">
                        <div class="why-icon"><i class="${item.icon}"></i></div>
                        <div class="why-text">
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                        </div>
                    </div>
                `).join('');
            }
        }
    }

    // Testimonials Section
    if (content.testimonials) {
        const testimonialsTag = document.querySelector('.testimonials-section .section-tag');
        if (testimonialsTag) testimonialsTag.textContent = content.testimonials.tag;

        const testimonialsTitle = document.querySelector('.testimonials-section .section-header h2');
        if (testimonialsTitle) {
            testimonialsTitle.innerHTML = `${content.testimonials.title} <span class="highlight">${content.testimonials.titleHighlight}</span>`;
        }

        if (content.testimonials.items) {
            const testimonialsSlider = document.querySelector('.testimonials-slider');
            if (testimonialsSlider) {
                testimonialsSlider.innerHTML = content.testimonials.items.map(item => `
                    <div class="testimonial-card">
                        <div class="testimonial-content">
                            <i class="fas fa-quote-left"></i>
                            <p>${item.text}</p>
                        </div>
                        <div class="testimonial-author">
                            <div class="country-flag">
                                <img src="${item.flag || 'images/flags/tr.svg'}" alt="">
                            </div>
                            <div class="author-info">
                                <h5>${item.author}</h5>
                                <span>${item.role}</span>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }
    }

    // Featured Video
    if (content.featuredVideo) {
        const fv = content.featuredVideo;
        const featuredVideoEl = document.querySelector('.featured-video');

        if (featuredVideoEl && fv.videoId) {
            featuredVideoEl.setAttribute('onclick', `openVideo('${fv.videoId}')`);

            const thumbnail = featuredVideoEl.querySelector('.featured-video-thumbnail img');
            if (thumbnail) {
                thumbnail.src = `https://img.youtube.com/vi/${fv.videoId}/maxresdefault.jpg`;
                thumbnail.alt = fv.title || 'Öne Çıkan Video';
            }

            const titleEl = featuredVideoEl.querySelector('.featured-video-overlay h3');
            if (titleEl) titleEl.textContent = fv.title || '';

            const subtitleEl = featuredVideoEl.querySelector('.featured-video-overlay p');
            if (subtitleEl) subtitleEl.textContent = fv.subtitle || '';

            const badgeEl = featuredVideoEl.querySelector('.featured-badge');
            if (badgeEl) badgeEl.innerHTML = `<i class="fas fa-star"></i> ${fv.badge || 'Öne Çıkan'}`;
        }
    }

    // Videos Section
    if (content.videos) {
        const videosTag = document.querySelector('#videos .section-tag');
        if (videosTag) videosTag.textContent = content.videos.tag;

        const videosTitle = document.querySelector('#videos .section-header h2');
        if (videosTitle) {
            videosTitle.innerHTML = `${content.videos.title} <span class="highlight">${content.videos.titleHighlight}</span>`;
        }

        const videosSubtitle = document.querySelector('#videos .section-header p');
        if (videosSubtitle) videosSubtitle.textContent = content.videos.subtitle;

        const youtubeBtn = document.querySelector('#videos .btn-primary');
        if (youtubeBtn && content.videos.youtubeChannel) {
            youtubeBtn.href = content.videos.youtubeChannel;
        }

        if (content.videos.items) {
            const videosGrid = document.querySelector('#videos .videos-grid');
            if (videosGrid) {
                videosGrid.innerHTML = content.videos.items.map(item => `
                    <div class="video-card" onclick="openVideo('${item.videoId}')">
                        <div class="video-thumbnail">
                            <img loading="lazy" src="${item.thumbnail}" alt="${item.title}">
                            <div class="play-button"><i class="fas fa-play"></i></div>
                        </div>
                        <h4>${item.title}</h4>
                    </div>
                `).join('');
            }
        }
    }

    // Fuarlar Section
    if (content.fuarlar && content.fuarlar.items) {
        const fuarTag = document.querySelector('#fuarlar .section-tag');
        if (fuarTag) fuarTag.textContent = content.fuarlar.tag || 'Fuarlar';

        const fuarTitle = document.querySelector('#fuarlar .section-header h2');
        if (fuarTitle) {
            const title1 = content.fuarlar.title?.split(' ')[0] || 'Fuar';
            const title2 = content.fuarlar.title?.split(' ').slice(1).join(' ') || 'Katılımlarımız';
            fuarTitle.innerHTML = `<span data-translate="fuarlar.title1">${title1}</span> <span class="highlight" data-translate="fuarlar.title2">${title2}</span>`;
        }

        const fuarSubtitle = document.querySelector('#fuarlar .section-header p');
        if (fuarSubtitle) fuarSubtitle.textContent = content.fuarlar.subtitle || '';

        // Render fuar items dynamically
        const fuarSlider = document.getElementById('fuarSlider');
        const fuarDots = document.getElementById('fuarDots');

        if (fuarSlider && content.fuarlar.items.length > 0) {
            fuarSlider.innerHTML = content.fuarlar.items.map((item, index) => `
                <div class="fuar-video-card" onclick="openVideo('${item.videoId}')">
                    <div class="fuar-video-thumbnail">
                        <img src="https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg" alt="${item.title}">
                        <div class="play-button">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <h4>${item.title}</h4>
                </div>
            `).join('');

            // Update dots
            if (fuarDots) {
                fuarDots.innerHTML = content.fuarlar.items.map((_, index) => `
                    <span class="fuar-dot ${index === 0 ? 'active' : ''}" onclick="goToFuarSlide(${index})"></span>
                `).join('');
            }

            // Reinitialize slider variables
            window.fuarCards = document.querySelectorAll('.fuar-video-card');
            window.fuarTotalSlides = content.fuarlar.items.length;
            window.fuarCurrentSlide = 0;

            // Reinitialize slider events
            if (typeof initFuarSlider === 'function') {
                initFuarSlider();
            }
        }
    }

    // CTA Section
    if (content.cta) {
        const ctaTitle = document.querySelector('.cta-content h2');
        if (ctaTitle) ctaTitle.textContent = content.cta.title;

        const ctaDesc = document.querySelector('.cta-content p');
        if (ctaDesc) ctaDesc.textContent = content.cta.description;

        const whatsappBtn = document.querySelector('.cta-buttons .btn-primary[href*="wa.me"], .cta-buttons a[href*="wa.me"]');
        if (whatsappBtn && content.cta.whatsapp) {
            whatsappBtn.href = `https://wa.me/${content.cta.whatsapp}`;
        }
    }

    // Contact Section
    if (content.contact) {
        const contactTag = document.querySelector('#contact .section-tag');
        if (contactTag) contactTag.textContent = content.contact.tag;

        const contactTitle = document.querySelector('#contact .section-header h2');
        if (contactTitle) {
            contactTitle.innerHTML = `${content.contact.title} <span class="highlight">${content.contact.titleHighlight}</span>`;
        }

        // Address
        if (content.contact.address) {
            const addressCard = document.querySelector('.contact-card:first-child p');
            if (addressCard) {
                addressCard.innerHTML = `${content.contact.address.line1}<br>${content.contact.address.line2}<br>${content.contact.address.line3}`;
            }
        }

        // Phones
        if (content.contact.phones) {
            const phoneCard = document.querySelectorAll('.contact-card')[1];
            if (phoneCard) {
                const phoneParagraphs = phoneCard.querySelectorAll('p');
                content.contact.phones.forEach((phone, index) => {
                    if (phoneParagraphs[index]) {
                        phoneParagraphs[index].innerHTML = `<a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>`;
                    }
                });
            }
        }

        // Emails
        if (content.contact.emails) {
            const emailCard = document.querySelectorAll('.contact-card')[2];
            if (emailCard) {
                const emailParagraphs = emailCard.querySelectorAll('p');
                content.contact.emails.forEach((email, index) => {
                    if (emailParagraphs[index]) {
                        emailParagraphs[index].innerHTML = `<a href="mailto:${email}">${email}</a>`;
                    }
                });
            }
        }

        // Working Hours
        if (content.contact.workingHours) {
            const hoursCard = document.querySelectorAll('.contact-card')[3];
            if (hoursCard) {
                const hoursParagraphs = hoursCard.querySelectorAll('p');
                if (hoursParagraphs[0]) hoursParagraphs[0].textContent = content.contact.workingHours.weekdays;
                if (hoursParagraphs[1]) hoursParagraphs[1].textContent = content.contact.workingHours.saturday;
            }
        }

        // Map
        if (content.contact.mapEmbed) {
            const mapIframe = document.querySelector('.map-section iframe');
            if (mapIframe) mapIframe.src = content.contact.mapEmbed;
        }
    }

    // Certificates
    if (content.certificates && content.certificates.items && content.certificates.items.length > 0) {
        const certsGrid = document.querySelector('.certificates-grid');
        if (certsGrid) {
            certsGrid.innerHTML = content.certificates.items.map(cert => `
                <div class="certificate-card">
                    <div class="certificate-icon">
                        <i class="${cert.icon || 'fas fa-certificate'}"></i>
                    </div>
                    <h4>${cert.title || ''}</h4>
                    <p>${cert.description || ''}</p>
                    ${cert.file ? `<a href="${cert.file}" target="_blank" class="btn btn-outline btn-sm"><i class="fas fa-download"></i> İndir</a>` : ''}
                </div>
            `).join('');
        }
    }

    // Catalog
    if (content.catalog && content.catalog.url) {
        const catalogLinks = document.querySelectorAll('a[onclick*="openCatalogModal"]');
        // Also update any direct catalog download links
        const catalogBtns = document.querySelectorAll('.catalog-download-btn');
        catalogBtns.forEach(btn => {
            btn.href = content.catalog.url;
        });
    }

    // Footer
    if (content.footer) {
        const footerDesc = document.querySelector('.footer-about p');
        if (footerDesc) footerDesc.textContent = content.footer.description;

        const copyrightText = document.querySelector('.footer-bottom-content p');
        if (copyrightText) copyrightText.innerHTML = `&copy; ${content.footer.copyright}`;

        // Social Links
        if (content.footer.social) {
            const socialLinks = document.querySelectorAll('.footer-social a');
            const socialMap = ['facebook', 'instagram', 'linkedin', 'youtube', 'whatsapp'];

            socialLinks.forEach((link, index) => {
                const platform = socialMap[index];
                if (content.footer.social[platform]) {
                    if (platform === 'whatsapp') {
                        link.href = `https://wa.me/${content.footer.social[platform]}`;
                    } else {
                        link.href = content.footer.social[platform];
                    }
                }
            });

            // WhatsApp Float Button
            const whatsappFloat = document.querySelector('.whatsapp-float');
            if (whatsappFloat && content.footer.social.whatsapp) {
                whatsappFloat.href = `https://wa.me/${content.footer.social.whatsapp}`;
            }
        }
    }
}
