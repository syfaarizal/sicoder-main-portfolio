// Enhanced Animations JavaScript

class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.initParallax();
        this.initScrollReveal();
        this.initHoverEffects();
        this.initPageTransitions();
    }

    // Parallax Effect
    initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        if (!parallaxElements.length) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Scroll Reveal
    initScrollReveal() {
        const revealElements = document.querySelectorAll('.section-reveal, .stagger-children');
        
        if (!revealElements.length) return;

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Handle staggered children
                    if (entry.target.classList.contains('stagger-children')) {
                        const children = entry.target.children;
                        Array.from(children).forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('revealed');
                            }, index * 100);
                        });
                    }
                    
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // Hover Effects
    initHoverEffects() {
        // 3D tilt effect
        const tiltElements = document.querySelectorAll('.tilt-effect');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                element.style.transition = 'transform 0.5s ease';
            });
            
            element.addEventListener('mouseenter', () => {
                element.style.transition = 'transform 0.1s ease';
            });
        });

        // Ripple effect
        const rippleElements = document.querySelectorAll('.ripple-effect');
        
        rippleElements.forEach(element => {
            element.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Page Transitions
    initPageTransitions() {
        // This would be used for single page application transitions
        // For now, it handles internal link transitions
        
        const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
        
        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Add exit animation to current section
                    const currentSection = document.querySelector('section:target') || document.querySelector('section');
                    if (currentSection) {
                        currentSection.classList.add('page-exit-active');
                    }
                    
                    // Navigate after animation
                    setTimeout(() => {
                        window.location.hash = targetId;
                        
                        // Add enter animation to new section
                        setTimeout(() => {
                            const newSection = document.querySelector(targetId);
                            if (newSection) {
                                newSection.classList.add('page-enter-active');
                                
                                setTimeout(() => {
                                    newSection.classList.remove('page-enter-active');
                                }, 500);
                            }
                        }, 50);
                    }, 300);
                }
            });
        });
    }

    // Text Animation
    static textReveal(element, options = {}) {
        const text = element.textContent;
        element.textContent = '';
        
        const letters = text.split('');
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = options.direction === 'up' ? 'translateY(20px)' : 'translateY(-20px)';
            span.style.transition = `all 0.3s ease ${index * 0.05}s`;
            
            element.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 10);
        });
    }

    // Counter Animation
    static animateCounter(element, target, options = {}) {
        const {
            duration = 2000,
            separator = '',
            prefix = '',
            suffix = ''
        } = options;
        
        let current = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (separator && displayValue >= 1000) {
                displayValue = displayValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
            }
            
            element.textContent = prefix + displayValue + suffix;
        }, 16);
    }

    // Particle System
    static createParticleSystem(container, options = {}) {
        const {
            count = 50,
            color = '#971313',
            sizeRange = [1, 3],
            speedRange = [1, 3],
            opacityRange = [0.2, 0.5]
        } = options;
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
            const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.backgroundColor = color;
            particle.style.opacity = opacity;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationTimingFunction = 'linear';
            particle.style.animationIterationCount = 'infinite';
            
            // Random movement
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            
            const keyframes = `
                @keyframes float-particle-${Date.now()}-${i} {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    25% {
                        transform: translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(90deg);
                    }
                    50% {
                        transform: translate(${Math.cos(angle + Math.PI) * distance}px, ${Math.sin(angle + Math.PI) * distance}px) rotate(180deg);
                    }
                    75% {
                        transform: translate(${Math.cos(angle + Math.PI * 1.5) * distance}px, ${Math.sin(angle + Math.PI * 1.5) * distance}px) rotate(270deg);
                    }
                    100% {
                        transform: translate(0, 0) rotate(360deg);
                    }
                }
            `;
            
            const styleSheet = document.createElement('style');
            styleSheet.textContent = keyframes;
            document.head.appendChild(styleSheet);
            
            particle.style.animationName = `float-particle-${Date.now()}-${i}`;
            
            container.appendChild(particle);
        }
    }
}

// Initialize Animation Manager
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
});

// Export for use in other modules
window.AnimationManager = AnimationManager;