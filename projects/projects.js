document.addEventListener('DOMContentLoaded', function() {
    initProjectsPage();
});

function initProjectsPage() {
    // Initialize loading screen
    initLoadingScreen();
    
    // Initialize theme switcher
    if (typeof ThemeSwitcher !== 'undefined') {
        new ThemeSwitcher();
    }
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize back to top
    initBackToTop();
    
    // Load projects data
    loadProjectsData();
    
    // Initialize filter functionality
    initFilterProjects();
    
    // Initialize search functionality
    initSearchProjects();
    
    // Initialize sort functionality
    initSortProjects();
    
    // Initialize load more functionality
    initLoadMore();
    
    // Initialize animations
    initProjectAnimations();
}

// Projects Data
const projectsData = [
    {
        id: 1,
        title: "Login Page Showcase",
        description: "A collection of creative login page templates with modern animations and micro-interactions.",
        category: "web",
        tech: ["html", "css", "js", "gsap"],
        date: "2025-09-15",
        featured: true,
        image: "../assets/img/showcase-review.png",
        demo: "https://syfaarizal.github.io/showcase-login-page/",
        code: "https://github.com/syfaarizal/showcase-login-page",
        detail: "./project-detail1.html?id=1"
    },
    {
        id: 2,
        title: "Digital CV Portfolio",
        description: "Modern digital CV integrated with portfolio showcasing skills and projects.",
        category: "personal",
        tech: ["html", "css", "js"],
        date: "2025-08-10",
        featured: false,
        image: "../assets/img/CVDigital.png",
        demo: "https://syfaarizal.github.io/landing-page-sicoder/",
        code: "https://github.com/syfaarizal/landing-page-sicoder",
        detail: "./project-detail2.html?id=2"
    },
    {
        id: 3,
        title: "CruisePoint Indonesia",
        description: "Professional landing page for a travel agency with responsive design.",
        category: "web",
        tech: ["html", "css", "js"],
        date: "2025-07-05",
        featured: false,
        image: "../assets/img/CruisePoint.png",
        demo: "https://syfaarizal.github.io/cruishpoint-indonesia/",
        code: "https://github.com/syfaarizal/cruishpoint-indonesia",
        detail: "./project-detail3.html?id=3"
    },
    {
        id: 4,
        title: "Pomodoro Timer FocusFlow",
        description: "Clean and minimalistic UI design for a Pomodoro timer application.",
        category: "ui",
        tech: ["react", "tailwind"],
        date: "2026-01-14",
        featured: false,
        image: "../assets/img/review-pomodoro-focusflow.png",
        demo: "https://pomodoro-focusflow.vercel.app/",
        code: "https://github.com/syfaarizal/pomodoro-focusflow",
        detail: "./project-detail4.html?id=4"
    },
    {
        id: 5,
        title: "Bisik-Bisik | Anonimous Chat",
        description: "An anonymous chat application with real-time messaging and privacy features.",
        category: "web",
        tech: ["react", "tailwind", "api", "gsap"],
        date: "2026-01-05",
        featured: false,
        image: "../assets/img/bisik-bisik-preview.png",
        demo: "https://bisik-bisik.vercel.app/",
        code: "https://github.com/syfaarizal/bisik-bisik",
        detail: "./index-detail5.html?id=5"
    },
    // {
    //     id: 6,
    //     title: "Task Management App",
    //     description: "Drag-and-drop task management application with local storage.",
    //     category: "web",
    //     tech: ["html", "css", "js"],
    //     date: "2024-06-18",
    //     featured: false,
    //     stats: {
    //         views: 820,
    //         forks: 26,
    //         stars: 43
    //     },
    //     image: "../assets/img/task-app.jpg",
    //     demo: "#",
    //     code: "#",
    //     detail: "project-detail.html?id=6"
    // },
    // {
    //     id: 7,
    //     title: "Mobile Banking UI",
    //     description: "UI design for mobile banking application with dark/light mode.",
    //     category: "ui",
    //     tech: ["figma"],
    //     date: "2024-12-01",
    //     featured: false,
    //     stats: {
    //         views: 1300,
    //         forks: 42,
    //         stars: 78
    //     },
    //     image: "../assets/img/banking-ui.jpg",
    //     demo: "#",
    //     code: "#",
    //     detail: "project-detail.html?id=7"
    // },
    // {
    //     id: 8,
    //     title: "CSS Art Collection",
    //     description: "Collection of creative designs made with pure CSS - no images.",
    //     category: "experimental",
    //     tech: ["html", "css"],
    //     date: "2024-05-22",
    //     featured: false,
    //     stats: {
    //         views: 1500,
    //         forks: 68,
    //         stars: 112
    //     },
    //     image: "../assets/img/css-art.jpg",
    //     demo: "#",
    //     code: "#",
    //     detail: "project-detail.html?id=8"
    // }
];

// Initialize loading screen
function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (!loadingScreen) return;
    
    // Hide loading screen after content loads
    if (document.readyState === 'complete') {
        hideLoadingScreen(loadingScreen);
    } else {
        window.addEventListener('load', () => {
            hideLoadingScreen(loadingScreen);
        });
    }
    
    // Fallback timeout
    setTimeout(() => {
        hideLoadingScreen(loadingScreen);
    }, 2000);
}

function hideLoadingScreen(loadingScreen) {
    loadingScreen.classList.add('loaded');
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        loadingScreen.remove();
    }, 500);
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!menuToggle || !navMenu || !hamburger) return;
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    const navMenu = document.querySelector('.nav-menu.active');
                    if (navMenu) {
                        navMenu.classList.remove('active');
                        document.querySelector('.hamburger')?.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                    
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const extraPadding = 20;
                    const targetPosition = targetElement.offsetTop - headerHeight - extraPadding;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Back to Top
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop);
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    toggleBackToTop();
}

// Load Projects Data
function loadProjectsData() {
    const gridContainer = document.querySelector('.projects-grid-container');
    if (!gridContainer) return;
    
    // Clear existing content
    gridContainer.innerHTML = '';
    
    // Generate project cards
    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        gridContainer.appendChild(projectCard);
    });
    
    // Update project count
    updateProjectCount(projectsData.length);
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card animate-on-scroll';
    card.setAttribute('data-category', project.category);
    card.setAttribute('data-tech', project.tech.join(' '));
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Format date
    const date = new Date(project.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
    
    // Create tech badges
    const techBadges = project.tech.map(tech => 
        `<span>${tech.toUpperCase()}</span>`
    ).join('');
    
    card.innerHTML = `
        ${project.featured ? '<div class="project-badge">Featured</div>' : ''}
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-content">
            <div class="project-meta">
                <span class="project-date">${formattedDate}</span>
                <span class="project-category">${project.category.toUpperCase()}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techBadges}
            </div>
            <div class="project-actions">
                <a href="${project.detail}" class="btn btn-outline">
                    <span>View Details</span>
                    <i class="fas fa-info-circle"></i>
                </a>
                <a href="${project.demo}" target="_blank" class="btn btn-primary">
                    <span>Live Demo</span>
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Module-level active filters state so applyFilters() can access it
let activeFilters = {
    category: 'all',
    tech: []
};

// Filter Projects
function initFilterProjects() {
    const filterTags = document.querySelectorAll('.filter-tag');
    const techTags = document.querySelectorAll('.tech-tag');
    
    // Category filter
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all category tags
            filterTags.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            this.classList.add('active');
            
            // Update active category
            activeFilters.category = this.getAttribute('data-filter');
            
            // Apply filters
            applyFilters();
        });
    });
    
    // Tech stack filter
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
            const tech = this.getAttribute('data-tech');
            
            // Update active tech filters
            if (this.classList.contains('active')) {
                if (!activeFilters.tech.includes(tech)) {
                    activeFilters.tech.push(tech);
                }
            } else {
                activeFilters.tech = activeFilters.tech.filter(t => t !== tech);
            }
            
            // Apply filters
            applyFilters();
        });
    });
}

function applyFilters() {
    const projectCards = document.querySelectorAll('.project-card');
    let visibleCount = 0;
    
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const tech = card.getAttribute('data-tech').split(' ');
        
        // Check category filter
        const categoryMatch = activeFilters.category === 'all' || 
                            activeFilters.category === category;
        
        // Check tech filter
        const techMatch = activeFilters.tech.length === 0 ||
                         activeFilters.tech.some(t => tech.includes(t));
        
        if (categoryMatch && techMatch) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
            visibleCount++;
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Update project count
    updateProjectCount(visibleCount);
}

// Search Projects
function initSearchProjects() {
    const searchInput = document.getElementById('project-search');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // Reset to current filters
                applyFilters();
                return;
            }
            
            const projectCards = document.querySelectorAll('.project-card');
            let visibleCount = 0;
            
            projectCards.forEach(card => {
                const title = card.querySelector('.project-title').textContent.toLowerCase();
                const description = card.querySelector('.project-description').textContent.toLowerCase();
                const category = card.getAttribute('data-category');
                const tech = card.getAttribute('data-tech').toLowerCase();
                
                // Check if project matches search term
                const matchesSearch = title.includes(searchTerm) ||
                                     description.includes(searchTerm) ||
                                     category.includes(searchTerm) ||
                                     tech.includes(searchTerm);
                
                if (matchesSearch) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                    visibleCount++;
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Update project count
            updateProjectCount(visibleCount);
        }, 300);
    });
}

// Sort Projects
function initSortProjects() {
    const sortBtn = document.querySelector('.sort-btn');
    const sortOptions = document.querySelectorAll('.sort-dropdown-content a');
    
    if (!sortBtn || !sortOptions.length) return;
    
    let currentSort = 'newest';
    
    sortOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
            const sortType = this.getAttribute('data-sort');
            currentSort = sortType;
            
            // Update button text
            sortBtn.querySelector('span').textContent = `Sort by: ${this.textContent}`;
            
            // Sort projects
            sortProjects(sortType);
            
            // Close dropdown
            const dropdown = this.closest('.sort-dropdown-content');
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
        });
    });
}

function sortProjects(sortType) {
    const gridContainer = document.querySelector('.projects-grid-container');
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    
    // Sort project cards based on sort type
    projectCards.sort((a, b) => {
        switch (sortType) {
            case 'newest': {
                const dateA = new Date(projectsData.find(p => 
                    p.title === a.querySelector('.project-title').textContent).date);
                const dateB = new Date(projectsData.find(p => 
                    p.title === b.querySelector('.project-title').textContent).date);
                return dateB - dateA;
            }
            case 'oldest': {
                const dateA = new Date(projectsData.find(p => 
                    p.title === a.querySelector('.project-title').textContent).date);
                const dateB = new Date(projectsData.find(p => 
                    p.title === b.querySelector('.project-title').textContent).date);
                return dateA - dateB;
            }
            case 'difficulty': {
                // Sort by tech stack complexity (simplified)
                const techA = a.getAttribute('data-tech').split(' ').length;
                const techB = b.getAttribute('data-tech').split(' ').length;
                return techB - techA;
            }
            default:
                return 0;
        }
    });
    
    // Reappend sorted cards
    projectCards.forEach(card => {
        gridContainer.appendChild(card);
    });
}

// Load More Projects
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (!loadMoreBtn) return;
    
    const INITIAL_COUNT = 6;
    
    // Hide projects beyond initial count and toggle button visibility
    function applyInitialLimit() {
        const allCards = document.querySelectorAll('.project-card');
        if (allCards.length <= INITIAL_COUNT) {
            loadMoreBtn.style.display = 'none';
            return;
        }
        allCards.forEach((card, index) => {
            if (index >= INITIAL_COUNT) {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    }
    
    applyInitialLimit();
    
    loadMoreBtn.addEventListener('click', function() {
        const hiddenProjects = document.querySelectorAll('.project-card[style*="display: none"]');
        
        if (hiddenProjects.length === 0) {
            loadMoreBtn.style.display = 'none';
            return;
        }
        
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.style.display = 'block';
                setTimeout(() => {
                    project.style.opacity = '1';
                    project.style.transform = 'translateY(0)';
                }, 10);
            }, index * 100);
        });
        
        // Hide load more button once all projects are visible
        setTimeout(() => {
            const remainingHidden = document.querySelectorAll('.project-card[style*="display: none"]').length;
            if (remainingHidden === 0) {
                loadMoreBtn.style.display = 'none';
            }
        }, hiddenProjects.length * 100 + 300);
    });
}

// Update Project Count
function updateProjectCount(count) {
    const countElement = document.getElementById('count');
    const projectCountElement = document.getElementById('project-count');
    
    if (countElement) {
        countElement.textContent = count;
    }
    
    // Update only the text around the span, not the whole element (avoids destroying #count span)
    if (projectCountElement && !countElement) {
        projectCountElement.textContent = `Showing ${count} project${count !== 1 ? 's' : ''}`;
    }
}

// Initialize Project Animations
function initProjectAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (!animatedElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, parseInt(delay));
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(el);
    });
}

// Export functions for use in other modules
window.initProjectsPage = initProjectsPage;