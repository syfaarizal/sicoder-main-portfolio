export class ProjectManager {
    constructor() {
        this.projects = [];
        this.filteredProjects = [];
        this.currentFilter = 'all';
        this.currentSearch = '';
    }

    async init() {
        await this.loadProjects();
        this.renderProjects();
        this.renderTemplates();
    }

    async loadProjects() {
        try {
            // Load from localStorage or use default projects
            const savedProjects = localStorage.getItem('sicoder-projects');
            
            if (savedProjects) {
                this.projects = JSON.parse(savedProjects);
            } else {
                // Load default projects
                await this.loadDefaultProjects();
            }
        } catch (error) {
            console.error('Error loading projects:', error);
            await this.loadDefaultProjects();
        }
    }

    async loadDefaultProjects() {
        // Default projects data
        this.projects = [
            {
                id: 1,
                title: "Login Page Showcase",
                description: "A collection of creative and modern login page templates with smooth animations and responsive design.",
                category: "web",
                technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
                liveUrl: "https://syfaarizal.github.io/showcase-login-page/",
                githubUrl: "https://github.com/syfaarizal/showcase-login-page",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Dark/Light mode", "Form validation", "Animations", "Responsive"],
                year: 2025
            },
            {
                id: 2,
                title: "Digital CV Portfolio",
                description: "Interactive digital CV with modern design, animations, and project showcase.",
                category: "personal",
                technologies: ["HTML", "CSS", "JavaScript", "Particles.js"],
                liveUrl: "https://syfaarizal.github.io/landing-page-sicoder/",
                githubUrl: "https://github.com/syfaarizal/landing-page-sicoder",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
                features: ["Interactive design", "Theme toggle", "Responsive layout", "Contact form"],
                year: 2025
            },
            {
                id: 3,
                title: "CruisePoint Landing Page",
                description: "Professional landing page for a cruise recruitment agency with modern UI/UX.",
                category: "web",
                technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
                liveUrl: "https://syfaarizal.github.io/cruishpoint-indonesia/",
                githubUrl: "https://github.com/syfaarizal/cruishpoint-indonesia",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Modern design", "Fast loading", "Mobile responsive", "Clean code"],
                year: 2025
            },
            {
                id: 4,
                title: "Weather App",
                description: "Real-time weather application with location detection and forecast.",
                category: "api",
                technologies: ["JavaScript", "API Integration", "CSS", "Async/Await"],
                liveUrl: "#",
                githubUrl: "#",
                image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Live weather data", "5-day forecast", "Location detection", "Dark mode"],
                year: 2025
            },
            {
                id: 5,
                title: "Task Manager",
                description: "Modern task management application with drag & drop functionality.",
                category: "js",
                technologies: ["JavaScript", "LocalStorage", "CSS Grid", "Drag API"],
                liveUrl: "#",
                githubUrl: "#",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Drag & drop", "Local storage", "Categories", "Progress tracking"],
                year: 2025
            },
            {
                id: 6,
                title: "UI Design System",
                description: "Complete design system with reusable components and documentation.",
                category: "design",
                technologies: ["Figma", "Design Tokens", "Component Library", "Documentation"],
                liveUrl: "#",
                githubUrl: "#",
                image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Design tokens", "60+ components", "Dark theme", "Accessibility"],
                year: 2025
            }
        ];
        
        this.saveProjects();
    }

    saveProjects() {
        try {
            localStorage.setItem('sicoder-projects', JSON.stringify(this.projects));
        } catch (error) {
            console.error('Error saving projects:', error);
        }
    }

    addProject(projectData) {
        const newProject = {
            id: Date.now(),
            ...projectData,
            year: new Date().getFullYear()
        };
        
        this.projects.unshift(newProject);
        this.saveProjects();
        this.filterProjects(this.currentFilter, this.currentSearch);
        
        return newProject;
    }

    updateProject(id, updatedData) {
        const index = this.projects.findIndex(p => p.id === id);
        if (index !== -1) {
            this.projects[index] = { ...this.projects[index], ...updatedData };
            this.saveProjects();
            this.filterProjects(this.currentFilter, this.currentSearch);
            return true;
        }
        return false;
    }

    deleteProject(id) {
        const index = this.projects.findIndex(p => p.id === id);
        if (index !== -1) {
            this.projects.splice(index, 1);
            this.saveProjects();
            this.filterProjects(this.currentFilter, this.currentSearch);
            return true;
        }
        return false;
    }

    filterProjects(filter = 'all', search = '') {
        this.currentFilter = filter;
        this.currentSearch = search.toLowerCase();
        
        this.filteredProjects = this.projects.filter(project => {
            // Apply filter
            if (filter !== 'all' && project.category !== filter) {
                return false;
            }
            
            // Apply search
            if (search) {
                const searchFields = [
                    project.title,
                    project.description,
                    project.technologies.join(' '),
                    project.features?.join(' ') || ''
                ].join(' ').toLowerCase();
                
                return searchFields.includes(this.currentSearch);
            }
            
            return true;
        });
        
        this.renderProjects();
    }

    searchProjects(searchTerm) {
        this.filterProjects(this.currentFilter, searchTerm);
    }

    getProjectById(id) {
        return this.projects.find(project => project.id === id);
    }

    renderProjects() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        if (this.filteredProjects.length === 0) {
            grid.innerHTML = `
                <div class="no-projects">
                    <i class="fas fa-search"></i>
                    <h3>No projects found</h3>
                    <p>Try changing your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        this.filteredProjects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            grid.appendChild(projectCard);
        });
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card animate-on-scroll';
        card.dataset.id = project.id;
        card.dataset.category = project.category;
        
        // Fallback image if not provided
        const imageUrl = project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        
        card.innerHTML = `
            <img src="${imageUrl}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-content">
                <span class="project-category">${this.getCategoryLabel(project.category)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-technologies">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                
                <div class="project-links">
                    <a href="${project.liveUrl}" class="project-link demo" target="_blank" rel="noopener">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                    </a>
                    <a href="${project.githubUrl}" class="project-link github" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i>
                        <span>Code</span>
                    </a>
                </div>
            </div>
        `;
        
        // Add click event to open modal
        card.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                this.openProjectModal(project.id);
            }
        });
        
        return card;
    }

    renderTemplates() {
        const grid = document.getElementById('template-grid');
        if (!grid) return;
        
        const templates = [
            {
                title: "E-commerce Website",
                description: "Modern online store with cart, checkout, and product management.",
                category: "web",
                technologies: ["React", "Node.js", "MongoDB", "Stripe"]
            },
            {
                title: "Social Media Dashboard",
                description: "Analytics dashboard for social media platforms with real-time data.",
                category: "api",
                technologies: ["API", "Chart.js", "WebSocket", "Firebase"]
            },
            {
                title: "Fitness Tracking App",
                description: "Mobile app for tracking workouts, nutrition, and progress.",
                category: "design",
                technologies: ["Figma", "UI Design", "Prototyping", "User Testing"]
            },
            {
                title: "Blog Platform",
                description: "Modern blogging platform with markdown support and themes.",
                category: "web",
                technologies: ["Next.js", "Markdown", "Auth", "SEO"]
            }
        ];
        
        templates.forEach((template, index) => {
            const templateCard = this.createTemplateCard(template, index + 1);
            grid.appendChild(templateCard);
        });
    }

    createTemplateCard(template, number) {
        const card = document.createElement('div');
        card.className = 'template-card animate-on-scroll';
        
        card.innerHTML = `
            <div class="template-placeholder">
                <i class="fas fa-plus-circle"></i>
                <h3>Template ${number}</h3>
                <p>${template.title}</p>
                <div class="project-technologies">
                    ${template.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <button class="btn btn-outline use-template" style="margin-top: 1.5rem;">
                    <i class="fas fa-copy"></i>
                    <span>Use Template</span>
                </button>
            </div>
        `;
        
        // Add click event to use template
        const useBtn = card.querySelector('.use-template');
        useBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.useTemplate(template);
        });
        
        return card;
    }

    useTemplate(template) {
        // Fill form with template data
        document.getElementById('project-title').value = template.title;
        document.getElementById('project-description').value = template.description;
        document.getElementById('project-category').value = template.category;
        document.getElementById('project-technologies').value = template.technologies.join(', ');
        
        // Scroll to form
        document.getElementById('add-projects-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        // Open form if closed
        const form = document.querySelector('.add-project-form');
        if (form.classList.contains('hidden')) {
            document.querySelector('.add-project-toggle').click();
        }
    }

    openProjectModal(projectId) {
        const project = this.getProjectById(projectId);
        if (!project) return;
        
        const modalBody = document.getElementById('modal-body');
        if (!modalBody) return;
        
        modalBody.innerHTML = this.createProjectModalContent(project);
        
        const modal = document.getElementById('project-modal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    createProjectModalContent(project) {
        const imageUrl = project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        
        return `
            <div class="project-modal-content">
                <div class="modal-header">
                    <span class="project-category">${this.getCategoryLabel(project.category)}</span>
                    <h2 class="modal-title">${project.title}</h2>
                    <div class="project-year">${project.year}</div>
                </div>
                
                <div class="modal-image">
                    <img src="${imageUrl}" alt="${project.title}" loading="lazy">
                </div>
                
                <div class="modal-body-content">
                    <div class="project-description-full">
                        <h3>About this project</h3>
                        <p>${project.description}</p>
                    </div>
                    
                    <div class="project-details">
                        <div class="detail-section">
                            <h3>Technologies Used</h3>
                            <div class="project-technologies">
                                ${project.technologies.map(tech => 
                                    `<span class="tech-tag">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        ${project.features ? `
                        <div class="detail-section">
                            <h3>Key Features</h3>
                            <ul class="feature-list">
                                ${project.features.map(feature => 
                                    `<li><i class="fas fa-check"></i> ${feature}</li>`
                                ).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        
                        <div class="detail-section">
                            <h3>Project Links</h3>
                            <div class="project-links-modal">
                                <a href="${project.liveUrl}" class="btn btn-primary" target="_blank" rel="noopener">
                                    <i class="fas fa-external-link-alt"></i>
                                    <span>View Live Demo</span>
                                </a>
                                <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank" rel="noopener">
                                    <i class="fab fa-github"></i>
                                    <span>View Source Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getCategoryLabel(category) {
        const labels = {
            'web': 'Web Development',
            'design': 'UI/UX Design',
            'js': 'JavaScript',
            'api': 'API Integration',
            'personal': 'Personal Project',
            'other': 'Other'
        };
        
        return labels[category] || category;
    }
}