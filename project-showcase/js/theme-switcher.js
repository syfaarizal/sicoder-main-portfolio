class ThemeSwitcher {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.currentTheme = this.getCurrentTheme();
        
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // Listen for system theme changes
        this.initSystemThemeListener();
        
        // Add keyboard shortcut
        this.initKeyboardShortcut();
    }

    getCurrentTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('sicoder-theme');
        if (savedTheme) return savedTheme;
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        
        // Default to dark
        return 'dark';
    }

    setTheme(theme) {
        document.body.className = `${theme}-theme`;
        localStorage.setItem('sicoder-theme', theme);
        this.currentTheme = theme;
        
        // Update meta theme color
        this.updateMetaThemeColor(theme);
        
        // Dispatch theme change event
        this.dispatchThemeChange(theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        
        // Show notification
        this.showThemeNotification(newTheme);
        
        // Play sound (optional)
        this.playToggleSound();
    }

    updateMetaThemeColor(theme) {
        const color = theme === 'dark' ? '#0a0a0a' : '#f8f9fa';
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        
        metaThemeColor.content = color;
    }

    initSystemThemeListener() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
            
            mediaQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem('sicoder-theme')) {
                    const theme = e.matches ? 'light' : 'dark';
                    this.setTheme(theme);
                }
            });
        }
    }

    initKeyboardShortcut() {
        document.addEventListener('keydown', (e) => {
            // Alt + T to toggle theme
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    showThemeNotification(theme) {
        // Use toast notification if available
        if (typeof window.uiHandler?.showToast === 'function') {
            const message = theme === 'light' 
                ? 'Switched to Light Mode ☀️' 
                : 'Switched to Dark Mode 🌙';
            
            window.uiHandler.showToast(message, 'success', 2000);
        }
    }

    playToggleSound() {
        // Optional: Play toggle sound
        try {
            // const audio = new Audio('assets/toggle.mp3');
            // audio.volume = 0.3;
            // audio.play().catch(() => {});
        } catch (error) {
            // Sound play failed, that's okay
        }
    }

    dispatchThemeChange(theme) {
        const event = new CustomEvent('themechange', {
            detail: { theme }
        });
        document.dispatchEvent(event);
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = new ThemeSwitcher();
    
    // Make globally available
    window.themeSwitcher = themeSwitcher;
});