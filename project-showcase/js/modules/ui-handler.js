export class UIHandler {
    constructor() {
        this.modal = document.getElementById('project-modal');
        this.toastContainer = document.getElementById('toast-container');
    }

    init() {
        this.initModal();
        this.initThemeToggle();
        this.initAddProjectToggle();
        this.initSmoothScroll();
        this.initTooltips();
    }

    initModal() {
        if (!this.modal) return;
        
        // Close modal on click outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    initThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (!themeToggle) return;
        
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('sicoder-theme');
        if (savedTheme) {
            document.body.className = `${savedTheme}-theme`;
        }
    }

    toggleTheme() {
        const isDark = document.body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        
        document.body.className = `${newTheme}-theme`;
        localStorage.setItem('sicoder-theme', newTheme);
        
        this.showToast(`Switched to ${newTheme} mode`, 'success');
        
        // Play sound
        this.playSound('click');
    }

    initAddProjectToggle() {
        const toggleBtn = document.querySelector('.add-project-toggle');
        const form = document.querySelector('.add-project-form');
        
        if (!toggleBtn || !form) return;
        
        toggleBtn.addEventListener('click', () => {
            form.classList.toggle('hidden');
            
            // Rotate icon
            const icon = toggleBtn.querySelector('i');
            if (form.classList.contains('hidden')) {
                icon.className = 'fas fa-plus';
                toggleBtn.querySelector('span').textContent = 'Add New Project';
            } else {
                icon.className = 'fas fa-minus';
                toggleBtn.querySelector('span').textContent = 'Hide Form';
            }
        });
    }

    initSmoothScroll() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initTooltips() {
        // Initialize tooltips for interactive elements
        const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');
        
        elementsWithTooltip.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target, e.target.dataset.tooltip);
            });
            
            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    showTooltip(element, text) {
        // Remove existing tooltip
        this.hideTooltip();
        
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        
        // Position tooltip
        const rect = element.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.top = `${rect.top - 40}px`;
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.transform = 'translateX(-50%)';
        
        // Add to document
        document.body.appendChild(tooltip);
        
        // Store reference
        this.currentTooltip = tooltip;
    }

    hideTooltip() {
        if (this.currentTooltip) {
            this.currentTooltip.remove();
            this.currentTooltip = null;
        }
    }

    showToast(message, type = 'info', duration = 5000) {
        if (!this.toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        toast.innerHTML = `
            <i class="toast-icon ${icons[type] || icons.info}"></i>
            <div class="toast-content">
                <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        this.toastContainer.appendChild(toast);
        
        // Add close event
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            this.removeToast(toast);
        });
        
        // Auto remove after duration
        setTimeout(() => {
            this.removeToast(toast);
        }, duration);
        
        // Play sound
        this.playSound(type === 'error' ? 'error' : 'click');
    }

    removeToast(toast) {
        toast.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            if (toast.parentNode === this.toastContainer) {
                this.toastContainer.removeChild(toast);
            }
        }, 300);
    }

    playSound(type) {
        // Optional: Implement sound effects
        // This would require audio files to be loaded
        try {
            // Example implementation:
            // const audio = new Audio(`assets/${type}.mp3`);
            // audio.volume = 0.3;
            // audio.play().catch(() => {});
        } catch (error) {
            // Sound play failed, that's okay
        }
    }

    // Confirmation dialog
    showConfirmation(message, onConfirm, onCancel) {
        const overlay = document.createElement('div');
        overlay.className = 'confirmation-overlay';
        
        const dialog = document.createElement('div');
        dialog.className = 'confirmation-dialog';
        
        dialog.innerHTML = `
            <div class="confirmation-content">
                <h3>Confirm Action</h3>
                <p>${message}</p>
                <div class="confirmation-buttons">
                    <button class="btn btn-secondary cancel-btn">Cancel</button>
                    <button class="btn btn-primary confirm-btn">Confirm</button>
                </div>
            </div>
        `;
        
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        
        // Add event listeners
        const confirmBtn = dialog.querySelector('.confirm-btn');
        const cancelBtn = dialog.querySelector('.cancel-btn');
        
        confirmBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
            if (onConfirm) onConfirm();
        });
        
        cancelBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
            if (onCancel) onCancel();
        });
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
                if (onCancel) onCancel();
            }
        });
    }
}