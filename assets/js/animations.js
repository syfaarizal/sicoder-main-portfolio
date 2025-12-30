// animations.js - Simplified version focusing on parallax only

class ParallaxAnimation {
    constructor() {
        this.init();
    }

    init() {
        this.initParallax();
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

// Initialize parallax animation
document.addEventListener('DOMContentLoaded', () => {
    new ParallaxAnimation();
});