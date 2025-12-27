// Site Content Loader - Loads dynamic content from Firebase or localStorage

// Load Analytics & Tracking Codes - Must run ASAP
(function loadAnalyticsTracking() {
    const saved = localStorage.getItem('girisim_analytics_settings');
    if (!saved) return;

    const settings = JSON.parse(saved);

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
        // First check localStorage (demo mode)
        const localContent = localStorage.getItem('girisim_site_content');
        if (localContent) {
            console.log('Loading content from localStorage (Demo Mode)');
            applySiteContent(JSON.parse(localContent));
            return;
        }

        // Try Firebase
        const content = await loadSiteContent();
        if (content) {
            applySiteContent(content);
        }
    } catch (error) {
        console.log('Using static content (Firebase not configured or offline)');
    }
});

function applySiteContent(content) {
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

    // Hero Section
    if (content.hero) {
        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle) {
            heroTitle.innerHTML = `${content.hero.title}<br><span class="highlight">${content.hero.titleHighlight}</span> ${content.hero.titleEnd}`;
        }

        const heroDesc = document.querySelector('.hero-content > p');
        if (heroDesc) heroDesc.textContent = content.hero.description;

        const heroBg = document.querySelector('.hero-bg');
        if (heroBg && content.hero.backgroundImage) {
            heroBg.style.backgroundImage = `url('${content.hero.backgroundImage}')`;
        }

        // Hero Stats
        if (content.hero.stats) {
            const statEls = document.querySelectorAll('.hero-stats .stat');
            content.hero.stats.forEach((stat, index) => {
                if (statEls[index]) {
                    statEls[index].querySelector('.stat-number').textContent = stat.number;
                    statEls[index].querySelector('.stat-text').textContent = stat.text;
                }
            });
        }
    }

    // About Section
    if (content.about) {
        const aboutTag = document.querySelector('#about .section-tag');
        if (aboutTag) aboutTag.textContent = content.about.tag;

        const aboutTitle = document.querySelector('#about .about-content h2');
        if (aboutTitle) {
            aboutTitle.innerHTML = `${content.about.title}<br><span class="highlight">${content.about.titleHighlight}</span>`;
        }

        const aboutParagraphs = document.querySelectorAll('#about .about-content > p');
        if (aboutParagraphs[0]) aboutParagraphs[0].textContent = content.about.paragraph1;
        if (aboutParagraphs[1]) aboutParagraphs[1].textContent = content.about.paragraph2;

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

    // Machines Section
    if (content.machines) {
        const machinesTag = document.querySelector('#machines .section-tag');
        if (machinesTag) machinesTag.textContent = content.machines.tag;

        const machinesTitle = document.querySelector('#machines .section-header h2');
        if (machinesTitle) {
            machinesTitle.innerHTML = `${content.machines.title} <span class="highlight">${content.machines.titleHighlight}</span>`;
        }

        const machinesSubtitle = document.querySelector('#machines .section-header p');
        if (machinesSubtitle) machinesSubtitle.textContent = content.machines.subtitle;

        // Machine Cards
        if (content.machines.items) {
            const machineCards = document.querySelectorAll('#machines .machine-card');
            content.machines.items.forEach((item, index) => {
                if (machineCards[index]) {
                    const card = machineCards[index];
                    card.querySelector('.machine-image img').src = item.image;
                    card.querySelector('.machine-info h3').textContent = item.title;
                    card.querySelector('.machine-info > p').textContent = item.description;

                    const featureEls = card.querySelectorAll('.machine-features li');
                    item.features.forEach((feature, fIndex) => {
                        if (featureEls[fIndex]) {
                            featureEls[fIndex].innerHTML = `<i class="fas fa-check"></i> ${feature}`;
                        }
                    });
                }
            });
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
            const packageCards = document.querySelectorAll('#packaging .package-card');
            content.packaging.items.forEach((item, index) => {
                if (packageCards[index]) {
                    const card = packageCards[index];
                    card.querySelector('.package-icon i').className = item.icon;
                    card.querySelector('h3').textContent = item.title;
                    card.querySelector('p').textContent = item.description;
                }
            });
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
            const sectorCards = document.querySelectorAll('#sectors .sector-card');
            content.sectors.items.forEach((item, index) => {
                if (sectorCards[index]) {
                    const card = sectorCards[index];
                    card.querySelector('.sector-icon i').className = item.icon;
                    card.querySelector('h4').textContent = item.title;
                }
            });
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
            const whyItems = document.querySelectorAll('.why-us-items .why-item');
            content.whyUs.items.forEach((item, index) => {
                if (whyItems[index]) {
                    const el = whyItems[index];
                    el.querySelector('.why-icon i').className = item.icon;
                    el.querySelector('.why-text h4').textContent = item.title;
                    el.querySelector('.why-text p').textContent = item.description;
                }
            });
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
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            content.testimonials.items.forEach((item, index) => {
                if (testimonialCards[index]) {
                    const card = testimonialCards[index];
                    card.querySelector('.testimonial-content p').textContent = item.text;
                    card.querySelector('.author-info h5').textContent = item.author;
                    card.querySelector('.author-info span').textContent = item.role;
                    if (item.flag) {
                        card.querySelector('.country-flag img').src = item.flag;
                    }
                }
            });
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
            const videoCards = document.querySelectorAll('.video-card');
            content.videos.items.forEach((item, index) => {
                if (videoCards[index]) {
                    const card = videoCards[index];
                    card.setAttribute('onclick', `openVideo('${item.videoId}')`);
                    card.querySelector('.video-thumbnail img').src = item.thumbnail;
                    card.querySelector('h4').textContent = item.title;
                }
            });
        }
    }

    // CTA Section
    if (content.cta) {
        const ctaTitle = document.querySelector('.cta-content h2');
        if (ctaTitle) ctaTitle.textContent = content.cta.title;

        const ctaDesc = document.querySelector('.cta-content p');
        if (ctaDesc) ctaDesc.textContent = content.cta.description;

        const whatsappBtn = document.querySelector('.cta-buttons .btn-outline-white');
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
