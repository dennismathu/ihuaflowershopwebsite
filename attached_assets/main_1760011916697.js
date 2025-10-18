// Main JavaScript for Bloom & Petals Landing Page
// Mobile-first, performance-optimized interactive features

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        carouselAutoSlide: 5000, // 5 seconds
        scrollOffset: 80,
        throttleDelay: 100,
        debounceDelay: 250
    };
    
    // Store link URL - Replace with actual store URL
    const STORE_URL = 'https://your-store-link.com';
    
    // Utility functions
    const utils = {
        // Throttle function for scroll events
        throttle: function(func, delay) {
            let timeoutId;
            let lastExecTime = 0;
            return function(...args) {
                const currentTime = Date.now();
                if (currentTime - lastExecTime > delay) {
                    func.apply(this, args);
                    lastExecTime = currentTime;
                } else {
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        func.apply(this, args);
                        lastExecTime = Date.now();
                    }, delay - (currentTime - lastExecTime));
                }
            };
        },
        
        // Debounce function for resize events
        debounce: function(func, delay) {
            let timeoutId;
            return function(...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        },
        
        // Check if element is in viewport
        isInViewport: function(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
        
        // Smooth scroll to element
        smoothScrollTo: function(element, offset = CONFIG.scrollOffset) {
            const targetPosition = element.offsetTop - offset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 800;
            let start = null;
            
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            
            requestAnimationFrame(animation.bind(this));
        },
        
        // Easing function for smooth scroll
        easeInOutQuad: function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
    };
    
    // Carousel functionality
    const carousel = {
        track: null,
        cards: [],
        currentIndex: 0,
        cardWidth: 320, // 300px card + 20px gap
        isAutoPlaying: true,
        autoSlideInterval: null,
        
        init: function() {
            this.track = document.querySelector('.carousel-track');
            this.cards = document.querySelectorAll('.bouquet-card');
            
            if (!this.track || this.cards.length === 0) return;
            
            this.setupEventListeners();
            this.startAutoSlide();
            this.updateCarousel();
            
            // Handle window resize
            window.addEventListener('resize', utils.debounce(() => {
                this.updateCardWidth();
                this.updateCarousel();
            }, CONFIG.debounceDelay));
        },
        
        setupEventListeners: function() {
            const prevBtn = document.querySelector('.carousel-btn.prev');
            const nextBtn = document.querySelector('.carousel-btn.next');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    this.stopAutoSlide();
                    this.moveCarousel(-1);
                    this.startAutoSlide();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    this.stopAutoSlide();
                    this.moveCarousel(1);
                    this.startAutoSlide();
                });
            }
            
            // Pause auto-slide on hover
            this.track.addEventListener('mouseenter', () => this.stopAutoSlide());
            this.track.addEventListener('mouseleave', () => this.startAutoSlide());
            
            // Handle touch events for mobile
            this.setupTouchEvents();
        },
        
        setupTouchEvents: function() {
            let startX = 0;
            let currentX = 0;
            let isDragging = false;
            
            this.track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
                this.stopAutoSlide();
            }, { passive: true });
            
            this.track.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
            }, { passive: true });
            
            this.track.addEventListener('touchend', () => {
                if (!isDragging) return;
                
                const diff = startX - currentX;
                const threshold = 50;
                
                if (Math.abs(diff) > threshold) {
                    if (diff > 0) {
                        this.moveCarousel(1); // Swipe left - next
                    } else {
                        this.moveCarousel(-1); // Swipe right - previous
                    }
                }
                
                isDragging = false;
                this.startAutoSlide();
            }, { passive: true });
        },
        
        updateCardWidth: function() {
            if (window.innerWidth <= 576) {
                this.cardWidth = 300; // Smaller cards on mobile
            } else {
                this.cardWidth = 320; // Standard size
            }
        },
        
        moveCarousel: function(direction) {
            const maxIndex = Math.max(0, this.cards.length - this.getVisibleCards());
            this.currentIndex += direction;
            
            if (this.currentIndex < 0) {
                this.currentIndex = maxIndex;
            } else if (this.currentIndex > maxIndex) {
                this.currentIndex = 0;
            }
            
            this.updateCarousel();
        },
        
        getVisibleCards: function() {
            const containerWidth = this.track.parentElement.clientWidth;
            return Math.floor(containerWidth / this.cardWidth);
        },
        
        updateCarousel: function() {
            const translateX = -this.currentIndex * this.cardWidth;
            this.track.style.transform = `translateX(${translateX}px)`;
        },
        
        startAutoSlide: function() {
            if (!this.isAutoPlaying) return;
            
            this.autoSlideInterval = setInterval(() => {
                this.moveCarousel(1);
            }, CONFIG.carouselAutoSlide);
        },
        
        stopAutoSlide: function() {
            if (this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
                this.autoSlideInterval = null;
            }
        }
    };
    
    // Scroll animations and effects
    const scrollEffects = {
        init: function() {
            this.setupScrollAnimations();
            this.setupStickyEffects();
            this.setupScrollIndicator();
        },
        
        setupScrollAnimations: function() {
            const animatedElements = document.querySelectorAll(
                '.service-card, .bouquet-card, .testimonial-card, .trust-item'
            );
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        },
        
        setupStickyEffects: function() {
            const header = document.querySelector('.hero');
            if (!header) return;
            
            const handleScroll = utils.throttle(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                if (header && scrolled < window.innerHeight) {
                    header.style.transform = `translateY(${rate}px)`;
                }
            }, CONFIG.throttleDelay);
            
            window.addEventListener('scroll', handleScroll, { passive: true });
        },
        
        setupScrollIndicator: function() {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (!scrollIndicator) return;
            
            scrollIndicator.addEventListener('click', () => {
                const trustStrip = document.querySelector('.trust-strip');
                if (trustStrip) {
                    utils.smoothScrollTo(trustStrip);
                }
            });
            
            // Hide scroll indicator after scrolling
            const handleScroll = utils.throttle(() => {
                const scrolled = window.pageYOffset;
                if (scrolled > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            }, CONFIG.throttleDelay);
            
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
    };
    
    // Navigation and smooth scrolling
    const navigation = {
        init: function() {
            this.setupSmoothScrolling();
            this.setupActiveStates();
        },
        
        setupSmoothScrolling: function() {
            document.addEventListener('click', (e) => {
                const link = e.target.closest('a[href^="#"]');
                if (!link) return;
                
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    utils.smoothScrollTo(targetElement);
                }
            });
        },
        
        setupActiveStates: function() {
            const sections = document.querySelectorAll('section[id]');
            if (sections.length === 0) return;
            
            const handleScroll = utils.throttle(() => {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop <= CONFIG.scrollOffset) {
                        current = section.getAttribute('id');
                    }
                });
                
                // Update active navigation states if you have a navigation menu
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            }, CONFIG.throttleDelay);
            
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
    };
    
    // Performance optimization
    const performance = {
        init: function() {
            this.lazyLoadImages();
            this.preloadCriticalAssets();
            this.optimizeAnimations();
        },
        
        lazyLoadImages: function() {
            const images = document.querySelectorAll('img[data-src]');
            
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        },
        
        preloadCriticalAssets: function() {
            // Preload critical fonts and resources
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'font';
            link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        },
        
        optimizeAnimations: function() {
            // Reduce animations on low-end devices
            if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
                document.documentElement.classList.add('reduced-motion');
            }
            
            // Pause animations when tab is not visible
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    carousel.stopAutoSlide();
                } else {
                    carousel.startAutoSlide();
                }
            });
        }
    };
    
    // Global functions for external calls
    window.openStore = function() {
        // Analytics tracking (replace with your analytics)
        if (typeof gtag === 'function') {
            gtag('event', 'click', {
                event_category: 'CTA',
                event_label: 'Shop Now Button'
            });
        }
        
        // Open store in new tab
        window.open(STORE_URL, '_blank', 'noopener,noreferrer');
    };
    
    window.moveCarousel = function(direction) {
        carousel.moveCarousel(direction);
    };
    
    // Initialize everything when DOM is ready
    const init = function() {
        carousel.init();
        scrollEffects.init();
        navigation.init();
        performance.init();
        
        // Add loaded class for CSS transitions
        document.body.classList.add('loaded');
        
        console.log('🌸 Bloom & Petals - Landing page initialized successfully!');
    };
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Error handling
    window.addEventListener('error', (e) => {
        console.error('Landing page error:', e.error);
    });
    
    // Service Worker registration for PWA (optional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
    
})();