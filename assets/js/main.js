document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initLoadingScreen();
    initCustomCursor();
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initCVButton();
    initSkillData();
    initBlogCarousel();
    initProjectsFilter();
    initContactForm();
    initBackToTop();
    initStatsAnimation();
    initScrollAnimations();
    initFloatingParticles();
    initTypingAnimation();
    initToastNotifications();
    
    // Add scroll effect for header
    window.addEventListener('scroll', handleScroll);
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Initialize Intersection Observer for animations
    initIntersectionObserver();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('loaded');
            document.body.classList.add('loaded');
            
            // Remove loading screen after animation
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    if (!cursor || !cursorTrail) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let trailPoints = [];
    const maxTrailPoints = 10;
    
    // Hide cursor on touch devices
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorTrail.style.display = 'none';
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Add trail point
        trailPoints.push({ x: e.clientX, y: e.clientY });
        if (trailPoints.length > maxTrailPoints) {
            trailPoints.shift();
        }
    });
    
    // Update cursor position and trail
    function updateCursor() {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        
        // Smooth trail movement
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        // Update trail position
        cursorTrail.style.left = `${trailX}px`;
        cursorTrail.style.top = `${trailY}px`;
        
        // Update multiple trail points
        trailPoints.forEach((point, index) => {
            const trailDot = document.createElement('div');
            trailDot.className = 'trail-dot';
            trailDot.style.left = `${point.x}px`;
            trailDot.style.top = `${point.y}px`;
            trailDot.style.opacity = (index + 1) / maxTrailPoints;
            trailDot.style.transform = `scale(${0.5 + (index / maxTrailPoints) * 0.5})`;
            
            cursorTrail.appendChild(trailDot);
            
            // Remove old dots
            setTimeout(() => {
                if (trailDot.parentNode === cursorTrail) {
                    cursorTrail.removeChild(trailDot);
                }
            }, 100);
        });
        
        requestAnimationFrame(updateCursor);
    }
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .btn, .social-icon, .nav-link');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    updateCursor();
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
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
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active Navigation
function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.querySelector('.nav-indicator');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Update active nav link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        
                        // Update nav indicator position
                        if (navIndicator) {
                            const linkRect = link.getBoundingClientRect();
                            const navRect = link.closest('nav').getBoundingClientRect();
                            navIndicator.style.width = `${linkRect.width}px`;
                            navIndicator.style.left = `${linkRect.left - navRect.left}px`;
                        }
                    }
                });
            }
        });
    }, {
        threshold: 0.10,
        rootMargin: '-100px 0px -100px 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// CV Button
function initCVButton() {
    const cvBtn = document.getElementById('CV-btn');
    const extraLinks = document.getElementById('extraLinks');
    
    if (!cvBtn || !extraLinks) return;
    
    cvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        extraLinks.classList.toggle('show');
        
        // Toggle arrow rotation
        const icon = cvBtn.querySelector('i');
        if (icon) {
            icon.style.transform = extraLinks.classList.contains('show') 
                ? 'rotate(180deg)' 
                : 'rotate(0deg)';
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!cvBtn.contains(e.target) && !extraLinks.contains(e.target)) {
            extraLinks.classList.remove('show');
            const icon = cvBtn.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        }
    });
}

// Skill Data
function initSkillData() {
    const skills = [
        // Technical Skills
        { 
            category: 'technical', 
            name: 'HTML5', 
            desc: 'Semantic & accessible structure', 
            icon: 'fas fa-code',
            level: 90
        },
        { 
            category: 'technical', 
            name: 'CSS3', 
            desc: 'Flexbox, Grid, Animations, Styling', 
            icon: 'fab fa-css3-alt',
            level: 85
        },
        { 
            category: 'technical', 
            name: 'JavaScript', 
            desc: 'DOM, Events, Basic Logic, Interactivity', 
            icon: 'fab fa-js',
            level: 80
        },
        { 
            category: 'technical', 
            name: 'Responsive Design', 
            desc: 'Mobile-first, Flexible Layouts, Media Queries', 
            icon: 'fas fa-mobile-alt',
            level: 88
        },
        { 
            category: 'technical', 
            name: 'Git & GitHub', 
            desc: 'Version Control, Commits, Repositories', 
            icon: 'fab fa-git-alt',
            level: 75
        },
        { 
            category: 'technical', 
            name: 'QA Testing', 
            desc: 'Manual cross-device testing & issue tracking', 
            icon: 'fas fa-bug',
            level: 70
        },
        
        // Design Skills
        { 
            category: 'design', 
            name: 'UI/UX Design', 
            desc: 'Focus on clean layout & visual hierarchy', 
            icon: 'fas fa-paint-brush',
            level: 82
        },
        { 
            category: 'design', 
            name: 'Typography', 
            desc: 'Matching brand with aesthetic', 
            icon: 'fas fa-font',
            level: 78
        },
        { 
            category: 'design', 
            name: 'CSS Animation', 
            desc: 'Smooth interaction, hover, @keyframes', 
            icon: 'fas fa-film',
            level: 85
        },
        { 
            category: 'design', 
            name: 'Component Design', 
            desc: 'Reusable layout design', 
            icon: 'fas fa-th',
            level: 80
        },
        
        // Soft Skills
        { 
            category: 'soft', 
            name: 'Problem Solving', 
            desc: 'Enjoys debugging and solving tricky errors', 
            icon: 'fas fa-lightbulb',
            level: 90
        },
        { 
            category: 'soft', 
            name: 'Consistency', 
            desc: 'Steady learning routine, committed to progress', 
            icon: 'fas fa-calendar-check',
            level: 88
        },
        { 
            category: 'soft', 
            name: 'Collaboration', 
            desc: 'Communicative and open-minded team player', 
            icon: 'fas fa-users',
            level: 85
        },
        { 
            category: 'soft', 
            name: 'Self-Learning', 
            desc: 'Actively explores tech and learns independently', 
            icon: 'fas fa-graduation-cap',
            level: 92
        },
        
        // Tools
        { 
            category: 'tools', 
            name: 'VS Code', 
            desc: 'Main code editor — clean, fast, reliable', 
            icon: 'fas fa-code',
            level: 95
        },
        { 
            category: 'tools', 
            name: 'GitHub', 
            desc: 'For version control and project hosting', 
            icon: 'fab fa-github',
            level: 80
        },
        { 
            category: 'tools', 
            name: 'Figma', 
            desc: 'For wireframing and UI design', 
            icon: 'fab fa-figma',
            level: 65
        },
        { 
            category: 'tools', 
            name: 'Notion', 
            desc: 'Used for planning and documentation', 
            icon: 'fas fa-sticky-note',
            level: 75
        },
        { 
            category: 'tools', 
            name: 'ChatGPT', 
            desc: 'Helps refine ideas and accelerate tasks', 
            icon: 'fas fa-robot',
            level: 85
        }
    ];
    
    const container = document.getElementById('skills-container');
    const skillTabs = document.querySelectorAll('.skill-tab');
    
    if (!container) return;
    
    // Generate skill cards
    skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-item animate-on-scroll';
        skillCard.setAttribute('data-category', skill.category);
        skillCard.style.setProperty('--index', index);
        
        skillCard.innerHTML = `
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <div class="skill-info">
                    <h3 class="skill-name">${skill.name}</h3>
                    <p class="skill-desc">${skill.desc}</p>
                </div>
            </div>
            <div class="skill-level">
                <div class="progress-bar">
                    <div class="progress-fill" data-width="${skill.level}"></div>
                </div>
                <div class="progress-text">
                    <span class="progress-value">${skill.level}%</span>
                    <span class="progress-label">Proficiency</span>
                </div>
            </div>
        `;
        
        container.appendChild(skillCard);
    });
    
    // Skill filter
    if (skillTabs.length > 0) {
        skillTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                skillTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Filter skills
                const filter = tab.getAttribute('data-filter');
                const skillItems = document.querySelectorAll('.skill-item');
                
                skillItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Animate progress bars when in view
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
            }
        });
    }, { threshold: 0.3 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}

// Blog Carousel
function initBlogCarousel() {
    const blogTrack = document.getElementById('blog-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselDots = document.querySelector('.carousel-dots');
    
    if (!blogTrack || !prevBtn || !nextBtn) return;
    
    const blogPosts = [
        {
            date: 'June 5, 2025',
            title: 'Day 1: Print Name and Status',
            excerpt: 'Today I learned about template literals in JavaScript. You know, that thing where you can insert variables...',
            link: '../../blog/day1.html',
        },
        {
            date: 'June 6, 2025',
            title: 'Day 2: Simple Age Calculator',
            excerpt: 'Today\'s challenge really made my brain curl 😅 We were asked to create a JavaScript program that...',
            link: '../../blog/day2.html',
        },
        {
            date: 'June 9, 2025',
            title: 'Day 3: Interactive Calculator',
            excerpt: 'Day 3 of this coding challenge really made me frown but also smile when I finally got it working. I was...',
            link: '../../blog/day3.html',
        },
        {
            date: 'June 11, 2025',
            title: 'Day 4: Number Guessing Game',
            excerpt: 'Day 4 of this coding challenge had a different vibe because I was asked to create a simple game...',
            link: '../../blog/day4.html',
        },
        {
            date: 'July 7, 2025',
            title: 'Day 5: Creative Name Looping',
            excerpt: 'After taking some time off to focus on other projects, I\'m finally back to the JS challenges! This time...',
            link: '../../blog/day5.html',
        },
        {
            date: 'July 15, 2025',
            title: 'Day 6: Odd, Even, or Special?',
            excerpt: 'Yo! Back again with day 6 challenge. Today I\'m playing with numbers, but not just checking...',
            link: '../../blog/day6.html',
        }
    ];
    
    let currentSlide = 0;
    let slidesPerView = getSlidesPerView();
    let totalSlides = Math.ceil(blogPosts.length / slidesPerView);
    
    // Generate blog cards
    blogPosts.forEach((post, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card animate-on-scroll';
        
        blogCard.innerHTML = `
            <div class="blog-content">
                <span class="blog-date">${post.date}</span>
                <h4 class="blog-title">${post.title}</h4>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="read-more">
                    <span>Read More</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        blogTrack.appendChild(blogCard);
    });
    
    // Generate dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        carouselDots.appendChild(dot);
    }
    
    function getSlidesPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1200) return 2;
        return 3;
    }
    
    function updateCarousel() {
        const slideWidth = blogTrack.children[0].offsetWidth + 32; // width + gap
        const translateX = -currentSlide * slideWidth * slidesPerView;
        blogTrack.style.transform = `translateX(${translateX}px)`;
        
        // Update dots
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update button states
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide >= totalSlides - 1;
    }
    
    function goToSlide(slideIndex) {
        currentSlide = Math.max(0, Math.min(slideIndex, totalSlides - 1));
        updateCarousel();
    }
    
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide every 5 seconds
    let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-slide on hover
    blogTrack.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    blogTrack.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        slidesPerView = getSlidesPerView();
        totalSlides = Math.ceil(blogPosts.length / slidesPerView);
        currentSlide = Math.min(currentSlide, totalSlides - 1);
        updateCarousel();
    });
    
    updateCarousel();
}

// Projects Filter
function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (!filterBtns.length || !projectsGrid) return;
    
    const projects = [
        {
            category: 'web',
            title: 'Login Page Showcase — SICODER',
            description: 'My collection of creative login page templates built with clean and modern front-end code.',
            tags: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Responsive'],
            demo: 'https://syfaarizal.github.io/showcase-login-page/',
            code: 'https://github.com/syfaarizal/showcase-login-page',
            image: './assets/img/showcase-review.png'
        },
        {
            category: 'personal',
            title: 'Digital CV — Personal Brand',
            description: 'A modern digital CV integrated into my personal portfolio.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Personal Branding'],
            demo: 'https://syfaarizal.github.io/landing-page-sicoder/',
            code: 'https://github.com/syfaarizal/landing-page-sicoder',
            image: './assets/img/CVDigital.png'
        },
        {
            category: 'web',
            title: 'CruisePoint Indonesia – Landing Page',
            description: 'A professional and responsive landing page built for CruisePoint Indonesia.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
            demo: 'https://syfaarizal.github.io/cruishpoint-indonesia/',
            code: 'https://github.com/syfaarizal/cruishpoint-indonesia',
            image: './assets/img/CruisePoint.png'
        }
    ];
    
    // Generate project cards
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate-on-scroll';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.demo}" class="project-link project-link-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                    </a>
                    <a href="${project.code}" class="project-link project-link-secondary" target="_blank">
                        <i class="fab fa-github"></i>
                        <span>Source Code</span>
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Filter projects
            const filter = btn.getAttribute('data-filter');
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Basic validation
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                showError(input, 'This field is required');
            } else {
                clearError(input);
            }
        });
        
        // Email validation
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput && emailInput.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Please enter a valid email address');
            }
        }
        
        if (!isValid) {
            showToast('Please fill in all required fields correctly', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Using FormSubmit.co
            const formData = new FormData(this);
            
            // TODO: use fetch API for better control
            // const response = await fetch(this.action, {
            //     method: 'POST',
            //     body: formData
            // });
            
            // For now, just simulate success
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showToast('Oops! Something went wrong. Please try again.', 'error');
        } finally {
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                clearError(this);
            }
        });
    });
    
    function showError(input, message) {
        clearError(input);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = 'var(--error-color)';
        errorDiv.style.fontSize = '1.2rem';
        errorDiv.style.marginTop = '0.5rem';
        
        input.parentNode.appendChild(errorDiv);
        input.classList.add('error');
    }
    
    function clearError(input) {
        input.classList.remove('error');
        const errorDiv = input.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
}

// Back to Top
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Stats Animation
function initStatsAnimation() {
    const statCards = document.querySelectorAll('.stat-card');
    
    if (!statCards.length) return;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statCard = entry.target;
                const statNumber = statCard.querySelector('.stat-number');
                const targetCount = parseInt(statNumber.getAttribute('data-count'));
                
                animateCounter(statNumber, targetCount);
                statsObserver.unobserve(statCard);
            }
        });
    }, { threshold: 0.5 });
    
    statCards.forEach(card => statsObserver.observe(card));
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50; // 50 steps
        const duration = 1500; // 1.5 seconds
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('%')) {
                element.textContent = Math.round(current) + '%';
            } else {
                element.textContent = Math.round(current) + '+';
            }
        }, duration / 50);
    }
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
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
    
    animatedElements.forEach(el => observer.observe(el));
}

// Floating Particles
function initFloatingParticles() {
    const container = document.getElementById('floating-particles');
    
    if (!container) return;
    
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationTimingFunction = 'linear';
        particle.style.animationIterationCount = 'infinite';
        
        // Random movement
        const keyframes = `
            @keyframes float-particle-${i} {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: ${Math.random() * 0.5 + 0.2};
                }
                25% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg);
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
                    opacity: ${Math.random() * 0.5 + 0.2};
                }
                75% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg);
                }
                100% {
                    transform: translate(0, 0) rotate(360deg);
                    opacity: ${Math.random() * 0.5 + 0.2};
                }
            }
        `;
        
        // Add keyframes to document
        const styleSheet = document.createElement('style');
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);
        
        particle.style.animationName = `float-particle-${i}`;
        
        container.appendChild(particle);
    }
}

// Typing Animation
function initTypingAnimation() {
    const typedText = document.querySelector('.typed-text');
    
    if (!typedText) return;
    
    const texts = [
        "Front-End Developer in Progress",
        "Web Developer in the Making",
        "UI Enthusiast & Front-End Dev",
        "Front-End Learner with Big Goals",
        "Developer Building My Own Path"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            if (textIndex >= texts.length) textIndex = 0;
            setTimeout(type, 500);
        } else {
            const speed = isDeleting ? 50 : 100;
            setTimeout(type, isEnd ? speed : speed);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Toast Notifications
function initToastNotifications() {
    const toastContainer = document.querySelector('.toast-container');
    
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    window.showToast = function(message, type = 'info', duration = 5000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'success' ? 'fas fa-check-circle' :
                    type === 'error' ? 'fas fa-exclamation-circle' :
                    type === 'warning' ? 'fas fa-exclamation-triangle' :
                    'fas fa-info-circle';
        
        toast.innerHTML = `
            <div class="toast-header">
                <i class="${icon}"></i>
                <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
            </div>
            <div class="toast-body">${message}</div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Remove toast after duration
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                if (toast.parentNode === toastContainer) {
                    toastContainer.removeChild(toast);
                }
            }, 300);
        }, duration);
        
        // Remove toast on click
        toast.addEventListener('click', () => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                if (toast.parentNode === toastContainer) {
                    toastContainer.removeChild(toast);
                }
            }, 300);
        });
    };
}

// Intersection Observer
function initIntersectionObserver() {
    const revealElements = document.querySelectorAll('.reveal-text');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// Scroll Handler
function handleScroll() {
    const header = document.querySelector('.header');
    
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Resize Handler
function handleResize() {
    // Close mobile menu on resize
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth > 768 && navMenu && hamburger) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
}