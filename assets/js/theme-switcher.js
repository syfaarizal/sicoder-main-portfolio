class ThemeSwitcher {
    constructor() {
        this.themeSwitch = document.getElementById('theme-switch');
        this.body = document.body;
        this.init();
    }

    init() {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);

        // Add event listener to switch
        this.themeSwitch.addEventListener('change', (e) => {
            const theme = e.target.checked ? 'light' : 'dark';
            this.setTheme(theme);
            this.saveTheme(theme);
        });
    }

    setTheme(theme) {
        this.body.classList.remove('dark-theme', 'light-theme');
        this.body.classList.add(`${theme}-theme`);
        this.themeSwitch.checked = theme === 'light';
        
        // Update meta theme-color
        const themeColor = theme === 'light' ? '#f8f9fa' : '#0a0a0a';
        document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});