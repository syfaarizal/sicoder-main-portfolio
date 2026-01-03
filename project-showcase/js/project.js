import { ProjectManager } from './modules/project-manager.js';
import { UIHandler } from './modules/ui-handler.js';
import { FormHandler } from './modules/form-handler.js';

class ProjectShowcase {
    constructor() {
        this.projectManager = new ProjectManager();
        this.uiHandler = new UIHandler();
        this.formHandler = new FormHandler();
        
        this.init();
    }

    async init() {
        try {
            // Initialize modules
            await this.projectManager.init();
            this.uiHandler.init();
            this.formHandler.init(this.projectManager);
            
            // Set up event listeners
            this.setupEventListeners();
            
            // Hide loading screen
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 1000);
            
            console.log('Project Showcase initialized successfully!');
        } catch (error) {
            console.error('Failed to initialize Project Showcase:', error);
            this.showError('Failed to load projects. Please refresh the page.');
        }
    }

    setupEventListeners() {
        // Window load event
        window.addEventListener('load', () => {
            this.onWindowLoad();
        });

        // Window scroll event
        window.addEventListener('scroll', () => {
            this.onWindowScroll();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                this.onFilterButtonClick(e);
            });
        });

        // Search input
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.onSearchInput(e);
            });
        }

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scroll-top');
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                this.scrollToTop();
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });
    }

    onWindowLoad() {
        // Animate stats counters
        this.animateStats();
        
        // Initialize scroll animations
        this.initScrollAnimations();
        
        // Play welcome sound (optional)
        this.playSound('hover');
    }

    onWindowScroll() {
        // Show/hide scroll to top button
        this.toggleScrollTopButton();
        
        // Update active filter based on scroll position
        this.updateActiveSection();
    }

    onFilterButtonClick(event) {
        const button = event.currentTarget;
        const filter = button.dataset.filter;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Filter projects
        this.projectManager.filterProjects(filter);
        
        // Play sound
        this.playSound('click');
    }

    onSearchInput(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.projectManager.searchProjects(searchTerm);
    }

    async animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.round(current);
            }, 16);
        });
    }

    toggleScrollTopButton() {
        const scrollTopBtn = document.getElementById('scroll-top');
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        this.playSound('click');
    }

    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    updateActiveSection() {
        // This would update which section is currently active in the navigation
        // Could be expanded for a multi-page navigation
    }

    hideLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('loaded');
            
            // Remove from DOM after animation
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.body.classList.add('loaded');
            }, 500);
        }
    }

    playSound(type) {
        // Optional: Add sound effects for interactions
        try {
            const sound = document.getElementById(`${type}-sound`);
            if (sound) {
                sound.currentTime = 0;
                sound.play().catch(() => {
                    // Sound play failed, that's okay
                });
            }
        } catch (error) {
            // Sound play failed, that's okay
        }
    }

    handleKeyboardShortcuts(event) {
        // Escape key closes modal
        if (event.key === 'Escape') {
            this.uiHandler.closeModal();
        }
        
        // Ctrl/Cmd + F focuses search
        if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
            event.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Alt + 1 focuses on first filter
        if (event.altKey && event.key === '1') {
            const firstFilter = document.querySelector('.filter-btn');
            if (firstFilter) {
                firstFilter.click();
            }
        }
    }

    showError(message) {
        // Show error toast
        this.uiHandler.showToast(message, 'error');
        
        // Log error
        console.error(message);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const projectShowcase = new ProjectShowcase();
    
    // Make globally available for debugging
    window.projectShowcase = projectShowcase;
});

// Export for module usage
export { ProjectShowcase };