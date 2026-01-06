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
    if (!loadingScreen) return;
    
    // If page is already loaded
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
    }, 3000); // Adjust the delay as needed
}

function hideLoadingScreen(loadingScreen) {
    loadingScreen.classList.add('loaded');
    document.body.classList.add('loaded');
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        loadingScreen.remove();
    }, 500); 
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
    let animationFrameId = null;
    
    // Hide cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        cursorTrail.style.display = 'none';
        return;
    }
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Update cursor position and trail
    function updateCursor() {
        // Update main cursor
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        
        // Smooth trail movement
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        
        // Update trail position
        cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;
        
        animationFrameId = requestAnimationFrame(updateCursor);
    }
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .btn, .social-icon, .nav-link, [role="button"]');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorTrail.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorTrail.classList.remove('hover');
        });
    });
    
    // Handle mouse leave window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorTrail.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorTrail.style.opacity = '0.5';
    });
    
    // Start animation
    updateCursor();
    
    // Cleanup
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrameId);
        }
    });
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
        menuToggle.setAttribute('aria-expanded', isActive);
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Check if it's an internal link
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
                    
                    // Update URL without scrolling
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
}

// Active Navigation
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const navIndicator = document.querySelector('.nav-indicator');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
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
                        if (navIndicator && window.innerWidth > 768) {
                            const linkRect = link.getBoundingClientRect();
                            const navRect = link.closest('nav').getBoundingClientRect();
                            navIndicator.style.width = `${linkRect.width}px`;
                            navIndicator.style.left = `${linkRect.left - navRect.left}px`;
                            navIndicator.style.opacity = '1';
                        }
                    }
                });
            }
        });
    }, {
        threshold: 0.15,
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
        e.stopPropagation();
        
        const isShowing = extraLinks.classList.toggle('show');
        
        // Toggle arrow rotation
        const icon = cvBtn.querySelector('i');
        if (icon) {
            icon.style.transform = isShowing ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        
        // Update aria-expanded
        cvBtn.setAttribute('aria-expanded', isShowing);
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!cvBtn.contains(e.target) && !extraLinks.contains(e.target)) {
            extraLinks.classList.remove('show');
            const icon = cvBtn.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
            cvBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close dropdown with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && extraLinks.classList.contains('show')) {
            extraLinks.classList.remove('show');
            const icon = cvBtn.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
            cvBtn.setAttribute('aria-expanded', 'false');
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
    
    // Clear existing content
    container.innerHTML = '';
    
    // Generate skill cards
    skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-item animate-on-scroll';
        skillCard.setAttribute('data-category', skill.category);
        skillCard.setAttribute('data-index', index);
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
                    <div class="progress-fill" style="width: 0%" data-width="${skill.level}"></div>
                </div>
                <div class="progress-text">
                    <span class="progress-value">0%</span>
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
                
                skillItems.forEach((item, index) => {
                    const delay = index * 50;
                    
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        setTimeout(() => {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 10);
                        }, delay);
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
                const progressValues = entry.target.querySelectorAll('.progress-value');
                
                progressBars.forEach((bar, index) => {
                    const width = bar.getAttribute('data-width');
                    const delay = index * 100;
                    
                    setTimeout(() => {
                        bar.style.width = width + '%';
                        bar.style.transition = 'width 1s ease-in-out';
                        
                        // Animate counter
                        animateValue(progressValues[index], 0, parseInt(width), 1000);
                    }, delay);
                });
                
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + '%';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
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
    let autoSlideInterval = null;
    
    // Clear existing content
    blogTrack.innerHTML = '';
    if (carouselDots) carouselDots.innerHTML = '';
    
    // Generate blog cards
    blogPosts.forEach((post, index) => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card animate-on-scroll';
        blogCard.style.flex = `0 0 calc(${100 / slidesPerView}% - 32px)`;
        
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
    if (carouselDots) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            carouselDots.appendChild(dot);
        }
    }
    
    function getSlidesPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1200) return 2;
        return 3;
    }
    
    function updateCarousel() {
        const slideWidth = blogTrack.children[0]?.offsetWidth + 32 || 0;
        const translateX = -currentSlide * slideWidth * slidesPerView;
        blogTrack.style.transform = `translateX(${translateX}px)`;
        blogTrack.style.transition = 'transform 0.5s ease';
        
        // Update dots
        if (carouselDots) {
            const dots = document.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Update button states and ARIA labels
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide >= totalSlides - 1;
        prevBtn.setAttribute('aria-label', currentSlide === 0 ? 'Previous slide (disabled)' : 'Previous slide');
        nextBtn.setAttribute('aria-label', currentSlide >= totalSlides - 1 ? 'Next slide (disabled)' : 'Next slide');
        
        // Update blog cards visibility for screen readers
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach((card, index) => {
            const slideIndex = Math.floor(index / slidesPerView);
            card.setAttribute('aria-hidden', slideIndex !== currentSlide);
        });
    }
    
    function goToSlide(slideIndex) {
        currentSlide = Math.max(0, Math.min(slideIndex, totalSlides - 1));
        updateCarousel();
        resetAutoSlide();
    }
    
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarousel();
        } else {
            // Loop to first slide
            currentSlide = 0;
            updateCarousel();
        }
        resetAutoSlide();
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        } else {
            // Loop to last slide
            currentSlide = totalSlides - 1;
            updateCarousel();
        }
        resetAutoSlide();
    }
    
    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Pause auto-slide on hover
    const carouselContainer = blogTrack.closest('.blog-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            if (autoSlideInterval) clearInterval(autoSlideInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Handle window resize
    function handleResize() {
        slidesPerView = getSlidesPerView();
        totalSlides = Math.ceil(blogPosts.length / slidesPerView);
        currentSlide = Math.min(currentSlide, totalSlides - 1);
        
        // Update flex basis for blog cards
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            card.style.flex = `0 0 calc(${100 / slidesPerView}% - 32px)`;
        });
        
        updateCarousel();
        resetAutoSlide();
    }
    
    window.addEventListener('resize', handleResize);
    
    // Initialize
    updateCarousel();
    startAutoSlide();
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
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    // Generate project cards
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate-on-scroll';
        projectCard.setAttribute('data-category', project.category);
        projectCard.setAttribute('data-index', index);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.demo}" class="project-link project-link-primary" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                    </a>
                    <a href="${project.code}" class="project-link project-link-secondary" target="_blank" rel="noopener noreferrer">
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
            
            projectCards.forEach((card, index) => {
                const delay = index * 50;
                
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    setTimeout(() => {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                            card.style.pointerEvents = 'auto';
                        }, 10);
                    }, delay);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    card.style.pointerEvents = 'none';
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
    
    // Form validation
    function validateField(input) {
        const value = input.value.trim();
        const fieldName = input.getAttribute('name') || input.getAttribute('placeholder') || 'This field';
        
        // Clear previous error
        clearError(input);
        
        // Check if required
        if (input.hasAttribute('required') && !value) {
            showError(input, `${fieldName} is required`);
            return false;
        }
        
        // Email validation
        if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(input, 'Please enter a valid email address');
                return false;
            }
        }
        
        return true;
    }
    
    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.setAttribute('role', 'alert');
        
        input.classList.add('error');
        input.parentNode.appendChild(errorDiv);
        
        // Focus on first error
        if (!contactForm.querySelector('.error:focus')) {
            input.focus();
        }
    }
    
    function clearError(input) {
        input.classList.remove('error');
        const errorDiv = input.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        const inputsToValidate = this.querySelectorAll('input[required], textarea[required]');
        
        inputsToValidate.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showToast('Please fix the errors in the form', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        const originalWidth = submitBtn.offsetWidth;
        
        submitBtn.style.width = `${originalWidth}px`;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Prepare form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Log form data (for debugging)
            console.log('Form data:', data);
            
            // Simulate API call (replace with actual fetch)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            this.reset();
            
            // Clear all errors
            formInputs.forEach(input => clearError(input));
            
        } catch (error) {
            console.error('Form submission error:', error);
            showToast('Oops! Something went wrong. Please try again or contact me directly.', 'error');
        } finally {
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.width = '';
        }
    });
}

// Back to Top
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
            backToTopBtn.setAttribute('aria-hidden', 'false');
        } else {
            backToTopBtn.classList.remove('visible');
            backToTopBtn.setAttribute('aria-hidden', 'true');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop);
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Focus management for accessibility
        const firstFocusableElement = document.querySelector('header a, header button');
        if (firstFocusableElement) {
            setTimeout(() => firstFocusableElement.focus(), 500);
        }
    });
    
    // Initial check
    toggleBackToTop();
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
    }, { threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
    
    statCards.forEach(card => statsObserver.observe(card));
    
    function animateCounter(element, target) {
        const isPercentage = element.textContent.includes('%');
        const suffix = isPercentage ? '%' : '+';
        const currentText = element.textContent.replace(/[^0-9]/g, '');
        let current = parseInt(currentText) || 0;
        const duration = 1500;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            current = Math.floor(easeOutQuart * target);
            
            if (isPercentage) {
                element.textContent = current + '%';
            } else {
                element.textContent = current + '+';
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (!animatedElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add delay based on data-delay attribute
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
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(el);
    });
}

// Floating Particles
function initFloatingParticles() {
    const container = document.getElementById('floating-particles');
    
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create particle stylesheet
    const styleSheet = document.createElement('style');
    document.head.appendChild(styleSheet);
    
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 30));
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 10;
        const opacity = Math.random() * 0.4 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = opacity.toString();
        particle.style.backgroundColor = 'var(--primary-color)';
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.pointerEvents = 'none';
        
        // Create unique animation
        const animationName = `float-particle-${i}`;
        const moveX1 = Math.random() * 100 - 50;
        const moveY1 = Math.random() * 100 - 50;
        const moveX2 = Math.random() * 100 - 50;
        const moveY2 = Math.random() * 100 - 50;
        
        const keyframes = `
            @keyframes ${animationName} {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                }
                25% {
                    transform: translate(${moveX1}px, ${moveY1}px) rotate(90deg);
                }
                50% {
                    transform: translate(${moveX2}px, ${moveY2}px) rotate(180deg);
                }
                75% {
                    transform: translate(${moveX1 * 0.5}px, ${moveY1 * 0.5}px) rotate(270deg);
                }
                100% {
                    transform: translate(0, 0) rotate(360deg);
                }
            }
        `;
        
        styleSheet.textContent += keyframes;
        
        particle.style.animation = `${animationName} ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(particle);
        particles.push(particle);
    }
    
    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            particles.forEach(particle => particle.remove());
            initFloatingParticles();
        }, 250);
    });
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
    let typingSpeed = 100;
    let pauseTime = 1500;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Delete character
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Type character
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = charIndex === currentText.length ? pauseTime : 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end
            isDeleting = true;
            typingSpeed = pauseTime;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Add cursor element if not present
    if (!typedText.querySelector('.typing-cursor')) {
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = '|';
        cursor.style.animation = 'blink 1s infinite';
        typedText.appendChild(cursor);
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Toast Notifications
function initToastNotifications() {
    let toastContainer = document.querySelector('.toast-container');
    
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
        
        // Add styles
        const styles = `
            .toast-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 350px;
            }
            
            .toast {
                background: white;
                border-radius: 8px;
                padding: 16px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                border-left: 4px solid var(--primary-color);
                animation: slideIn 0.3s ease;
                cursor: pointer;
            }
            
            .toast.success {
                border-left-color: #10B981;
            }
            
            .toast.error {
                border-left-color: #EF4444;
            }
            
            .toast.warning {
                border-left-color: #F59E0B;
            }
            
            .toast-header {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;
                font-weight: 600;
            }
            
            .toast-body {
                font-size: 1.4rem;
                color: #374151;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    window.showToast = function(message, type = 'info', duration = 5000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        const titles = {
            success: 'Success',
            error: 'Error',
            warning: 'Warning',
            info: 'Info'
        };
        
        const colors = {
            success: '#10B981',
            error: '#EF4444',
            warning: '#F59E0B',
            info: 'var(--primary-color)'
        };
        
        toast.innerHTML = `
            <div class="toast-header">
                <i class="${icons[type]}" style="color: ${colors[type]}"></i>
                <div class="toast-title">${titles[type]}</div>
            </div>
            <div class="toast-body">${message}</div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Auto remove
        const removeTimer = setTimeout(() => {
            removeToast(toast);
        }, duration);
        
        // Click to dismiss
        toast.addEventListener('click', () => {
            clearTimeout(removeTimer);
            removeToast(toast);
        });
        
        // VoiceOver announcement
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(`${titles[type]}: ${message}`);
            speech.rate = 1;
            speech.pitch = 1;
            speech.volume = 0.8;
            window.speechSynthesis.speak(speech);
        }
    };
    
    function removeToast(toast) {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            if (toast.parentNode === toastContainer) {
                toastContainer.removeChild(toast);
            }
        }, 300);
    }
}

// Intersection Observer
function initIntersectionObserver() {
    const revealElements = document.querySelectorAll('.reveal-text');
    
    if (!revealElements.length) return;
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
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
    
    // Update active nav on scroll (fallback)
    initActiveNav();
}

// Resize Handler
function handleResize() {
    // Close mobile menu on resize to desktop
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const menuToggle = document.getElementById('menu-toggle');
    
    if (window.innerWidth > 768) {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger?.classList.remove('active');
            document.body.style.overflow = '';
            menuToggle?.setAttribute('aria-expanded', 'false');
        }
    }
}