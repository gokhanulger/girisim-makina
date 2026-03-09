// =============================================
// GIRIŞIM MAKİNA - Main JavaScript
// =============================================

// =============================================
// Page Transition Loader
// Loader HTML is inline in <body> for instant display.
// This code hides it on load + shows it on link clicks.
// =============================================
(function() {
    function hideLoader() {
        var el = document.getElementById('pageLoader');
        if (el && !el._hidden && !el._h) {
            el._hidden = true;
            el.classList.add('fade-out');
            setTimeout(function() { el.remove(); }, 500);
        }
    }

    // If page uses _hidePageLoader (product/blog pages), don't auto-hide here
    // Let header-include.js call _hidePageLoader when header is built
    if (typeof window._hidePageLoader !== 'function') {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            hideLoader();
        } else {
            document.addEventListener('DOMContentLoaded', hideLoader);
        }
        setTimeout(hideLoader, 3000);
    }

    // Intercept internal link clicks to show loader
    document.addEventListener('click', function(e) {
        var link = e.target.closest('a[href]');
        if (!link) return;

        var href = link.getAttribute('href');
        if (!href) return;

        // Skip non-navigating links
        if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') ||
            href.startsWith('javascript:') || href.startsWith('https://wa.me') ||
            link.getAttribute('target') === '_blank' || link.hasAttribute('download')) return;

        // Skip external links
        if (href.startsWith('http') && !href.includes(window.location.hostname)) return;

        // Show loader for page transition
        e.preventDefault();
        var loader = document.getElementById('pageLoader');
        if (loader) {
            loader.classList.remove('fade-out');
        } else {
            loader = document.createElement('div');
            loader.className = 'page-loader';
            loader.id = 'pageLoader';
            loader.innerHTML = '<div class="page-loader-text">GİRİŞİM MAKİNA</div><div class="page-loader-sub">PAKETLEME MAKİNALARI</div>';
            document.body.appendChild(loader);
        }

        setTimeout(function() {
            window.location.href = href;
        }, 150);
    });
})();

// Video Modal - available on all pages
function openVideo(videoId) {
    var modal = document.getElementById('videoModal');
    var iframe = document.getElementById('videoFrame');
    if (!modal || !iframe) {
        // Create modal if it doesn't exist (product pages)
        modal = document.createElement('div');
        modal.id = 'videoModal';
        modal.className = 'video-modal';
        modal.style.cssText = 'display:flex;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:10000;align-items:center;justify-content:center;';
        modal.innerHTML = '<div style="position:relative;width:90%;max-width:900px;aspect-ratio:16/9;"><iframe id="videoFrame" src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0" style="width:100%;height:100%;border:none;" allow="autoplay;encrypted-media" allowfullscreen></iframe><button onclick="closeVideo()" style="position:absolute;top:-40px;right:0;background:none;border:none;color:white;font-size:2rem;cursor:pointer;">&times;</button></div>';
        document.body.appendChild(modal);
    } else {
        iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
        modal.style.display = 'flex';
    }
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    var modal = document.getElementById('videoModal');
    if (modal) {
        modal.style.display = 'none';
        var iframe = document.getElementById('videoFrame');
        if (iframe) iframe.src = '';
    }
    document.body.style.overflow = '';
}

// Close video on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeVideo();
});

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation is handled by header-include.js
    // (hamburger menu, overlay, dropdown toggles)

    // Close mobile menu on escape key (uses global function from header-include.js)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && typeof window.closeMobileMenu === 'function') {
            var navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                window.closeMobileMenu();
            }
        }
    });

    // =============================================
    // Sticky Header
    // =============================================
    var header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // =============================================
    // Back to Top Button
    // =============================================
    var backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =============================================
    // Smooth Scroll for Anchor Links
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            // IMPORTANT: Skip dropdown/mega-menu toggles on mobile
            // These are handled by the event delegation on navMenu
            if (window.innerWidth <= 768) {
                var parentLi = this.parentElement;
                if (parentLi && (parentLi.classList.contains('dropdown') || parentLi.classList.contains('has-mega-menu'))) {
                    return; // Let event delegation handle this
                }
            }

            var targetId = this.getAttribute('href');

            // Skip empty or just "#" links
            if (!targetId || targetId === '#') return;

            try {
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    var hdr = document.querySelector('.header');
                    var headerHeight = hdr ? hdr.offsetHeight : 0;
                    var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (typeof window.closeMobileMenu === 'function') {
                        var mNav = document.querySelector('.nav-menu');
                        if (mNav && mNav.classList.contains('active')) {
                            window.closeMobileMenu();
                        }
                    }
                }
            } catch (error) {
                // If selector is invalid, let browser handle it
            }
        });
    });

    // =============================================
    // Intersection Observer for Animations
    // (Only on desktop, skip on mobile for performance)
    // =============================================
    if (window.innerWidth > 768) {
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        var animateElements = document.querySelectorAll(
            '.machine-card, .package-card, .sector-card, .testimonial-card, ' +
            '.video-card, .contact-card, .why-item, .about-grid, .about-image'
        );

        animateElements.forEach(function(el) {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    // =============================================
    // Counter Animation for Stats
    // =============================================
    var stats = document.querySelectorAll('.stat-number');
    var statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        // Try hero-banner first, then hero
        var heroSection = document.querySelector('.hero-banner') || document.querySelector('.hero');
        if (!heroSection) return;

        var heroRect = heroSection.getBoundingClientRect();

        if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
            statsAnimated = true;

            stats.forEach(function(stat) {
                var target = stat.innerText;
                var numericValue = parseInt(target.replace(/\D/g, ''));
                var suffix = target.replace(/[\d]/g, '');
                var current = 0;
                var increment = numericValue / 50;
                var stepTime = 2000 / 50;

                var counter = setInterval(function() {
                    current += increment;
                    if (current >= numericValue) {
                        stat.innerText = numericValue + suffix;
                        clearInterval(counter);
                    } else {
                        stat.innerText = Math.floor(current) + suffix;
                    }
                }, stepTime);
            });
        }
    }

    if (stats.length > 0) {
        window.addEventListener('scroll', animateStats);
        animateStats();
    }

    // =============================================
    // Notification System
    // =============================================
    function showNotification(message) {
        var existingNotification = document.querySelector('.site-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        var notification = document.createElement('div');
        notification.className = 'site-notification';
        notification.innerHTML = '<span>' + message + '</span><button class="notification-close">&times;</button>';

        if (!document.getElementById('notification-styles')) {
            var style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = '.site-notification{position:fixed;top:20px;right:20px;background:#2c3e50;color:white;padding:15px 20px;border-radius:8px;box-shadow:0 4px 15px rgba(0,0,0,0.2);z-index:10000;display:flex;align-items:center;gap:15px;animation:slideIn 0.3s ease}.site-notification .notification-close{background:none;border:none;color:white;font-size:20px;cursor:pointer;padding:0;line-height:1}@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}';
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        notification.querySelector('.notification-close').addEventListener('click', function() {
            notification.remove();
        });

        setTimeout(function() {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 4000);
    }

    window.showNotification = showNotification;

    // =============================================
    // Lazy Loading Images
    // =============================================
    if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function(entries, obs) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    obs.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    // =============================================
    // Preloader
    // =============================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

});

// =============================================
// Utility Functions
// =============================================
function throttle(func, wait) {
    var timeout;
    return function() {
        var args = arguments;
        var context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

function debounce(func, wait) {
    var timeout;
    return function() {
        var args = arguments;
        var context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}
