// Site Content Loader - Loads dynamic content from Firebase or localStorage
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
