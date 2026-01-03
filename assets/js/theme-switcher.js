// Enhanced Theme Switcher

class ThemeSwitcher {
    constructor() {
        this.themeSwitch = document.getElementById('theme-switch');
        this.body = document.body;
        this.init();
    }

    init() {
        // Load saved theme from localStorage or prefer-color-scheme
        const savedTheme = this.getSavedTheme();
        this.setTheme(savedTheme);

        // Add event listener to switch
        this.themeSwitch.addEventListener('change', (e) => {
            const theme = e.target.checked ? 'light' : 'dark';
            this.setTheme(theme);
            this.saveTheme(theme);
            this.showThemeNotification(theme);
        });

        // Listen for system theme changes
        this.initSystemThemeListener();
        
        // Add keyboard shortcut (Alt+T)
        this.initKeyboardShortcut();
    }

    getSavedTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }

        // Default to dark
        return 'dark';
    }

    setTheme(theme) {
        // Remove existing theme classes
        this.body.classList.remove('dark-theme', 'light-theme');
        
        // Add new theme class
        this.body.classList.add(`${theme}-theme`);
        
        // Update switch state
        this.themeSwitch.checked = theme === 'light';
        
        // Update meta theme-color for mobile browsers
        this.updateMetaThemeColor(theme);
        
        // Update CSS variables
        this.updateCSSVariables(theme);
        
        // Trigger theme change event
        this.dispatchThemeChangeEvent(theme);
    }

    updateMetaThemeColor(theme) {
        const themeColor = theme === 'light' ? '#f8f9fa' : '#0a0a0a';
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        
        metaThemeColor.setAttribute('content', themeColor);
    }

    updateCSSVariables(theme) {
        const root = document.documentElement;
        
        // You can add theme-specific CSS variable overrides here
        if (theme === 'light') {
            root.style.setProperty('--shadow-intensity', '0.1');
        } else {
            root.style.setProperty('--shadow-intensity', '0.3');
        }
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
        
        // Also save to sessionStorage for cross-tab synchronization
        sessionStorage.setItem('theme', theme);
    }

    initSystemThemeListener() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
            
            // Listen for system theme changes
            mediaQuery.addEventListener('change', (e) => {
                // Only change if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
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
                this.themeSwitch.checked = !this.themeSwitch.checked;
                this.themeSwitch.dispatchEvent(new Event('change'));
            }
        });
    }

    showThemeNotification(theme) {
        if (typeof showToast === 'function') {
            const message = theme === 'light' 
                ? 'Switched to Light Mode ☀️' 
                : 'Switched to Dark Mode 🌙';
            
            showToast(message, 'success', 2000);
        }
    }

    dispatchThemeChangeEvent(theme) {
        const event = new CustomEvent('themechange', {
            detail: { theme }
        });
        document.dispatchEvent(event);
    }

    // Public method to get current theme
    getCurrentTheme() {
        return this.body.classList.contains('light-theme') ? 'light' : 'dark';
    }

    // Public method to toggle theme
    toggleTheme() {
        const currentTheme = this.getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        this.saveTheme(newTheme);
        this.showThemeNotification(newTheme);
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = new ThemeSwitcher();
    
    // Make it globally available
    window.themeSwitcher = themeSwitcher;
    
    // Listen for theme changes to update animations
    document.addEventListener('themechange', (e) => {
        const { theme } = e.detail;
        
        // You can add theme-specific animation adjustments here
        console.log(`Theme changed to: ${theme}`);
    });
});

// Export for use in other modules
window.ThemeSwitcher = ThemeSwitcher;