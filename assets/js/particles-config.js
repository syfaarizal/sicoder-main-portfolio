// Particles Configuration

class ParticlesManager {
    constructor() {
        this.particles = [];
        this.container = document.getElementById('floating-particles');
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.createParticles();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    createParticles() {
        // Clear existing particles
        this.container.innerHTML = '';
        this.particles = [];
        
        // Calculate number of particles based on screen size
        const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000));
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const opacity = Math.random() * 0.5 + 0.2;
        const color = this.getRandomColor();
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = color;
        particle.style.opacity = opacity;
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        this.container.appendChild(particle);
        
        // Store particle data
        this.particles.push({
            element: particle,
            x,
            y,
            speedX,
            speedY,
            size,
            opacity,
            color
        });
    }

    getRandomColor() {
        const colors = [
            '#971313', '#c22e2e', '#ff4757', '#ff6b6b',
            '#0a0a0a', '#161616', '#1a1a1a'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        const animateFrame = () => {
            this.particles.forEach(particle => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Bounce off edges
                if (particle.x <= 0 || particle.x >= window.innerWidth) {
                    particle.speedX *= -1;
                }
                if (particle.y <= 0 || particle.y >= window.innerHeight) {
                    particle.speedY *= -1;
                }
                
                // Apply new position
                particle.element.style.left = `${particle.x}px`;
                particle.element.style.top = `${particle.y}px`;
                
                // Pulsing effect
                const pulse = Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.1 + 0.9;
                particle.element.style.transform = `scale(${pulse})`;
                particle.element.style.opacity = particle.opacity * pulse;
            });
            
            requestAnimationFrame(animateFrame);
        };
        
        animateFrame();
    }

    resize() {
        // Adjust particle positions for new window size
        const scaleX = window.innerWidth / this.container.offsetWidth;
        const scaleY = window.innerHeight / this.container.offsetHeight;
        
        this.particles.forEach(particle => {
            particle.x *= scaleX;
            particle.y *= scaleY;
            
            // Keep particles within bounds
            particle.x = Math.max(0, Math.min(particle.x, window.innerWidth));
            particle.y = Math.max(0, Math.min(particle.y, window.innerHeight));
        });
        
        // Update container size
        this.container.style.width = `${window.innerWidth}px`;
        this.container.style.height = `${window.innerHeight}px`;
    }
}

// Initialize Particles Manager
document.addEventListener('DOMContentLoaded', () => {
    new ParticlesManager();
});