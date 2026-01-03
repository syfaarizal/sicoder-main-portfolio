export class FormHandler {
    constructor() {
        this.form = document.getElementById('project-form');
        this.previewBtn = document.getElementById('preview-project');
        this.resetBtn = document.getElementById('reset-form');
        this.previewCard = document.getElementById('preview-card');
    }

    init(projectManager) {
        this.projectManager = projectManager;
        
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                this.handleSubmit(e);
            });
        }
        
        if (this.previewBtn) {
            this.previewBtn.addEventListener('click', () => {
                this.showPreview();
            });
        }
        
        if (this.resetBtn) {
            this.resetBtn.addEventListener('click', () => {
                this.resetForm();
            });
        }
        
        this.initFormValidation();
    }

    initFormValidation() {
        if (!this.form) return;
        
        const inputs = this.form.querySelectorAll('[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    }

    validateField(field) {
        let isValid = true;
        let message = '';
        
        // Clear previous error
        this.clearFieldError(field);
        
        // Check required fields
        if (field.required && !field.value.trim()) {
            isValid = false;
            message = 'This field is required';
        }
        
        // Check email format
        if (field.type === 'email' && field.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }
        
        // Check URL format
        if (field.type === 'url' && field.value.trim()) {
            try {
                new URL(field.value);
            } catch {
                isValid = false;
                message = 'Please enter a valid URL';
            }
        }
        
        if (!isValid) {
            this.showFieldError(field, message);
        }
        
        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = 'var(--error)';
        errorDiv.style.fontSize = '1.2rem';
        errorDiv.style.marginTop = '0.5rem';
        
        field.parentNode.appendChild(errorDiv);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    validateForm() {
        let isValid = true;
        
        const requiredFields = this.form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        if (!this.validateForm()) {
            this.showToast('Please fix the errors in the form', 'error');
            return;
        }
        
        try {
            // Get form data
            const formData = this.getFormData();
            
            // Add project through project manager
            const newProject = this.projectManager.addProject(formData);
            
            // Show success message
            this.showToast('Project added successfully!', 'success');
            
            // Reset form
            this.resetForm();
            
            // Scroll to the new project
            setTimeout(() => {
                const newCard = document.querySelector(`[data-id="${newProject.id}"]`);
                if (newCard) {
                    newCard.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                    
                    // Highlight new card
                    newCard.classList.add('pulse');
                    setTimeout(() => {
                        newCard.classList.remove('pulse');
                    }, 2000);
                }
            }, 500);
            
        } catch (error) {
            console.error('Error adding project:', error);
            this.showToast('Failed to add project. Please try again.', 'error');
        }
    }

    getFormData() {
        return {
            title: document.getElementById('project-title').value.trim(),
            description: document.getElementById('project-description').value.trim(),
            category: document.getElementById('project-category').value,
            technologies: document.getElementById('project-technologies').value
                .split(',')
                .map(tech => tech.trim())
                .filter(tech => tech),
            liveUrl: document.getElementById('project-live').value.trim() || '#',
            githubUrl: document.getElementById('project-github').value.trim() || '#',
            image: document.getElementById('project-image').value.trim() || '',
            features: document.getElementById('project-features').value
                .split(',')
                .map(feature => feature.trim())
                .filter(feature => feature)
        };
    }

    showPreview() {
        if (!this.validateForm()) {
            this.showToast('Please fill in all required fields correctly', 'error');
            return;
        }
        
        const formData = this.getFormData();
        
        this.previewCard.innerHTML = this.createPreviewHTML(formData);
        this.previewCard.classList.remove('hidden');
        
        // Scroll to preview
        this.previewCard.scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    createPreviewHTML(project) {
        const imageUrl = project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        
        return `
            <h4>Project Preview</h4>
            <div class="preview-content">
                <div class="preview-image">
                    <img src="${imageUrl}" alt="Preview" style="width: 100%; border-radius: 8px;">
                </div>
                <div class="preview-details">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="preview-technologies">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="preview-links">
                        <a href="${project.liveUrl}" class="btn btn-outline" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                        <a href="${project.githubUrl}" class="btn btn-outline" target="_blank">
                            <i class="fab fa-github"></i>
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    resetForm() {
        if (this.form) {
            this.form.reset();
            
            // Clear all error states
            const errorFields = this.form.querySelectorAll('.error');
            errorFields.forEach(field => {
                this.clearFieldError(field);
            });
            
            // Hide preview
            this.previewCard.classList.add('hidden');
            
            this.showToast('Form reset successfully', 'info');
        }
    }

    showToast(message, type) {
        // Use UI handler's toast system
        if (window.uiHandler) {
            window.uiHandler.showToast(message, type);
        } else {
            // Fallback
            alert(`${type.toUpperCase()}: ${message}`);
        }
    }
}