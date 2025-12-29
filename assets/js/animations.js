class Animations {
    constructor() {
        this.backToTopBtn = document.getElementById('backToTop');
        this.init();
    }

    init() {
        // Back to top button
        window.addEventListener('scroll', () => this.toggleBackToTop());
        this.backToTopBtn.addEventListener('click', () => this.scrollToTop());

        // Intersection Observer for animations
        this.initIntersectionObserver();

        // Initialize skill filter
        this.initSkillFilter();
    }

    toggleBackToTop() {
        if (window.pageYOffset > 300) {
            this.backToTopBtn.classList.add('visible');
        } else {
            this.backToTopBtn.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    initIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Animate progress bars if they exist
                    const progressBars = entry.target.querySelectorAll('.progress-fill');
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width + '%';
                    });
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        const animatableElements = document.querySelectorAll('.reveal-text, .fade-in, .skill-card, .stat-card');
        animatableElements.forEach(el => observer.observe(el));
    }

    initSkillFilter() {
        const skillTabs = document.querySelectorAll('.skill-tab');
        const skillCards = document.querySelectorAll('.skill-card');

        skillTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                skillTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Filter skills
                const filter = tab.getAttribute('data-filter');
                
                skillCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Parallax effect
    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const animations = new Animations();
    animations.initParallax();
});