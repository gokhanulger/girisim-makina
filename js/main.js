// =============================================
// GIRIŞIM MAKİNA - Main JavaScript
// =============================================

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

    // =============================================
    // Mobile Navigation - Bulletproof approach
    // Move nav-menu to body on mobile to avoid
    // stacking context issues (backdrop-filter,
    // sticky positioning, etc.)
    // =============================================
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');
    var navbar = document.querySelector('.navbar');

    // Create mobile menu overlay
    var mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-menu-overlay';
    document.body.appendChild(mobileOverlay);

    // On mobile, move nav-menu to body so position:fixed works properly
    var navMenuMovedToBody = false;
    var navMenuOriginalParent = navMenu ? navMenu.parentElement : null;
    var navMenuNextSibling = navMenu ? navMenu.nextElementSibling : null;

    function ensureNavMenuInBody() {
        if (navMenu && !navMenuMovedToBody && window.innerWidth <= 768) {
            document.body.appendChild(navMenu);
            navMenuMovedToBody = true;
        }
    }

    function ensureNavMenuInHeader() {
        if (navMenu && navMenuMovedToBody && window.innerWidth > 768) {
            if (navMenuOriginalParent) {
                if (navMenuNextSibling) {
                    navMenuOriginalParent.insertBefore(navMenu, navMenuNextSibling);
                } else {
                    navMenuOriginalParent.appendChild(navMenu);
                }
            }
            navMenuMovedToBody = false;
            navMenu.classList.remove('active');
            hamburger && hamburger.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Move on load if mobile
    ensureNavMenuInBody();

    // Handle resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            ensureNavMenuInBody();
        } else {
            ensureNavMenuInHeader();
        }
    });

    function openMobileMenu() {
        if (!hamburger || !navMenu) return;
        ensureNavMenuInBody();
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        if (!hamburger || !navMenu) return;
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
        // Close all open dropdowns
        navMenu.querySelectorAll('.dropdown.active, .has-mega-menu.active').forEach(function(d) {
            d.classList.remove('active');
        });
    }

    // Hamburger click - toggle menu
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (navMenu && navMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Also handle touch
        hamburger.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (navMenu && navMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Overlay click - close menu
    mobileOverlay.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('touchend', function(e) {
        e.preventDefault();
        closeMobileMenu();
    });

    // Dropdown toggles in mobile menu (event delegation)
    if (navMenu) {
        navMenu.addEventListener('click', function(e) {
            if (window.innerWidth > 768) return;

            // Check if clicked a link inside mega-dropdown sub-links - let it navigate
            var megaLink = e.target.closest('.mega-links a, .dropdown-menu a');
            if (megaLink) {
                // This is a product/page link - allow navigation, just close menu
                closeMobileMenu();
                return; // Don't prevent default - let the link work
            }

            var toggleLink = e.target.closest('.dropdown > a, .has-mega-menu > a');
            if (toggleLink) {
                e.preventDefault();
                e.stopPropagation();
                var parentLi = toggleLink.parentElement;
                var wasActive = parentLi.classList.contains('active');

                // Close other open dropdowns
                navMenu.querySelectorAll('.dropdown.active, .has-mega-menu.active').forEach(function(d) {
                    if (d !== parentLi) d.classList.remove('active');
                });

                parentLi.classList.toggle('active', !wasActive);
                return;
            }

            // If clicked a regular link (not a dropdown toggle), close menu
            var regularLink = e.target.closest('a[href]');
            if (regularLink) {
                closeMobileMenu();
            }
        });
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMobileMenu();
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
                    if (navMenu && navMenu.classList.contains('active')) {
                        closeMobileMenu();
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
            '.video-card, .contact-card, .why-item, .about-content, .about-image'
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
