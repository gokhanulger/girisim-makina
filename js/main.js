// =============================================
// GIRIŞIM MAKİNA - Main JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', function() {

    // =============================================
    // Mobile Navigation
    // =============================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Mobile dropdown toggle
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // =============================================
    // Sticky Header
    // =============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // =============================================
    // Back to Top Button
    // =============================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    if (backToTop) {
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip empty or just "#" links
            if (!targetId || targetId === '#') return;

            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navMenu = document.querySelector('.nav-menu');
                    const hamburger = document.querySelector('.hamburger');
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (hamburger) hamburger.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }
            } catch (error) {
                // If selector is invalid, let browser handle it
                console.log('Scroll error:', error);
            }
        });
    });

    // =============================================
    // Contact Form Handling
    // =============================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Simple validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];

            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '';
                }
            });

            // Email validation
            const emailInput = this.querySelector('[name="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value && !emailRegex.test(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = '#e74c3c';
            }

            // Phone validation
            const phoneInput = this.querySelector('[name="phone"]');
            const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
            if (phoneInput.value && !phoneRegex.test(phoneInput.value)) {
                isValid = false;
                phoneInput.style.borderColor = '#e74c3c';
            }

            // Checkbox validation
            const checkbox = this.querySelector('input[type="checkbox"]');
            if (!checkbox.checked) {
                isValid = false;
                checkbox.parentElement.style.color = '#e74c3c';
            } else {
                checkbox.parentElement.style.color = '';
            }

            if (isValid) {
                // Show success message
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Gönderildi!';
                submitBtn.style.backgroundColor = '#27ae60';
                submitBtn.disabled = true;

                // Reset form after delay
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);

                // Here you would normally send the data to a server
                console.log('Form data:', data);
            }
        });

        // Reset field styles on input
        contactForm.querySelectorAll('input, select, textarea').forEach(field => {
            field.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        });
    }

    // =============================================
    // Intersection Observer for Animations
    // =============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.machine-card, .package-card, .sector-card, .testimonial-card, ' +
        '.video-card, .contact-card, .why-item, .about-content, .about-image'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // =============================================
    // Counter Animation for Stats
    // =============================================
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        const heroSection = document.querySelector('.hero');
        const heroRect = heroSection.getBoundingClientRect();

        if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
            statsAnimated = true;

            stats.forEach(stat => {
                const target = stat.innerText;
                const numericValue = parseInt(target.replace(/\D/g, ''));
                const suffix = target.replace(/[\d]/g, '');
                let current = 0;
                const increment = numericValue / 50;
                const duration = 2000;
                const stepTime = duration / 50;

                const counter = setInterval(() => {
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

    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load

    // =============================================
    // Video Modal - Using inline onclick handlers in HTML
    // =============================================
    // Video modal is handled by inline onclick="openVideo(videoId)" in HTML
    // and the openVideo/closeVideo functions defined in index.html

    // =============================================
    // Testimonial Slider (Basic)
    // =============================================
    const testimonialSlider = document.querySelector('.testimonials-slider');

    if (testimonialSlider && window.innerWidth <= 768) {
        let isDown = false;
        let startX;
        let scrollLeft;

        testimonialSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });

        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
        });

        testimonialSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });
    }

    // =============================================
    // Language Switcher - handled by translations.js
    // =============================================
    // Language switching is now managed by js/translations.js

    // =============================================
    // Notification System
    // =============================================
    function showNotification(message) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.site-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'site-notification';
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add styles if not already present
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                .site-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #2c3e50;
                    color: white;
                    padding: 15px 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    animation: slideIn 0.3s ease;
                }
                .site-notification .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    padding: 0;
                    line-height: 1;
                }
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });

        // Auto-remove after 4 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 4000);
    }

    // Make showNotification globally available
    window.showNotification = showNotification;

    // =============================================
    // Lazy Loading Images
    // =============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // =============================================
    // Preloader (Optional)
    // =============================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

});

// =============================================
// Utility Functions
// =============================================

// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
