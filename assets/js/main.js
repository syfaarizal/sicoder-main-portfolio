// Main JavaScript File - Enhanced with all features
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    
    if (toggle) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            toggle.classList.toggle("fa-times");
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link handling
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
            if (nav) nav.classList.remove("active");
            if (toggle) toggle.classList.remove("fa-times");
        });
    });

    // Intersection Observer for scroll spy
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
                
                // Add animation class when section enters viewport
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // CV download button functionality
    const cvBtn = document.getElementById('CV-btn');
    const extraLinks = document.getElementById('extraLinks');
    
    if (cvBtn && extraLinks) {
        cvBtn.addEventListener('click', (event) => {
            event.preventDefault();
            extraLinks.classList.toggle('hidden');
            extraLinks.classList.toggle('show');
        });
    }

    // Initialize blog carousel
    initBlogCarousel();

    // Initialize skill data and filter
    initSkillData();

    // Initialize theme switcher
    initThemeSwitcher();

    // Initialize back to top button
    initBackToTop();

    // Initialize animations
    initAnimations();

    // Initialize particle background
    initParticles();

    // Initialize form validation
    initFormValidation();
});

// Initialize Blog Carousel
function initBlogCarousel() {
    const blogContainer = document.querySelector('.blog-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!blogContainer || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const blogs = Array.from(blogContainer.children);
    const blogsPerView = getBlogsPerView();
    
    function getBlogsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }
    
    function updateCarousel() {
        const offset = -currentIndex * (100 / blogsPerView);
        blogContainer.style.transform = `translateX(${offset}%)`;
        blogContainer.style.transition = 'transform 0.5s ease';
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= blogs.length - blogsPerView;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < blogs.length - blogsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newBlogsPerView = getBlogsPerView();
        if (newBlogsPerView !== blogsPerView) {
            currentIndex = Math.min(currentIndex, blogs.length - newBlogsPerView);
            updateCarousel();
        }
    });
    
    updateCarousel();
}

// Initialize Skill Data
function initSkillData() {
    const skills = [
        // Technical Skills
        { 
            category: 'technical', 
            name: 'HTML5', 
            desc: 'Semantic & accessible structure', 
            icon: '<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.444 0l7.393 82.383L64 96l37.163-13.591L108.556 0z"/><path fill="#F16529" d="M64 89.754l30.104-10.962L101.222 7.3H64z"/></svg>',
            level: 90
        },
        { 
            category: 'technical', 
            name: 'CSS3', 
            desc: 'Flexbox, Grid, Animations, Styling', 
            icon: '<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#1572B6" d="M19.5 0l7.3 82.3 37.2 13.7 37.2-13.7 7.2-82.3z"/><path fill="#33A9DC" d="M64 92.5V7.4h37.2l-6.6 74.2z"/></svg>',
            level: 85
        },
        { 
            category: 'technical', 
            name: 'JavaScript', 
            desc: 'DOM, Events, Basic Logic, Interactivity', 
            icon: '<svg width="40" height="40" viewBox="0 0 128 128"><path fill="#E5C100" d="M19.5 0l7.3 82.3 37.2 13.7 37.2-13.7 7.2-82.3z"/><path fill="#F7DF1E" d="M64 92.5V7.4h37.2l-6.6 74.2z"/></svg>',
            level: 80
        },
        { 
            category: 'technical', 
            name: 'Responsive Design', 
            desc: 'Mobile-first, Flexible Layouts, Media Queries', 
            icon: '<svg width="40" height="40" viewBox="0 0 64 64"><rect x="2" y="10" width="38" height="26" rx="2" fill="#971313"/><rect x="2" y="38" width="38" height="6" fill="#333"/><rect x="44" y="6" width="16" height="28" rx="2" fill="#555"/><rect x="48" y="38" width="8" height="16" rx="2" fill="#aaa"/><circle cx="52" cy="52" r="1" fill="#000"/></svg>',
            level: 88
        },
        { 
            category: 'technical', 
            name: 'Git & GitHub', 
            desc: 'Version Control, Commits, Repositories', 
            icon: '<svg width="40" height="40" viewBox="0 0 1024 1024" fill="#971313"><path d="M512 76C273.6 76 76 273.6 76 512c0 192 124.8 354.4 297.6 411.2 21.6 4 29.6-9.6 29.6-21.6 0-10.4-0.4-44.8-0.8-81.6-121.2 26.4-146.8-51.2-146.8-51.2-19.6-49.6-48-62.8-48-62.8-39.2-26.8 3.2-26.4 3.2-26.4 43.2 3.2 66 44.4 66 44.4 38.4 65.6 100.8 46.8 125.6 35.6 4-28 15.2-46.8 27.6-57.6-96.8-11.2-198.8-48.4-198.8-215.6 0-47.6 16.8-86.8 44.4-117.6-4.4-11.2-19.2-56.4 4.4-117.6 0 0 36.4-11.6 119.2 44.8 34.4-9.6 71.2-14.4 107.6-14.4 36.4 0 73.2 4.8 107.6 14.4 82.8-56.4 119.2-44.8 119.2-44.8 23.6 61.2 8.8 106.4 4.4 117.6 27.6 30.8 44.4 70 44.4 117.6 0 167.6-102.4 204.4-199.6 215.2 15.6 13.2 29.6 39.2 29.6 79.2 0 57.2-0.4 103.2-0.4 117.2 0 12 8 26 30 21.6C823.2 866.4 948 703.6 948 512 948 273.6 750.4 76 512 76z"/></svg>',
            level: 75
        },
        { 
            category: 'technical', 
            name: 'QA Testing', 
            desc: 'Manual cross-device testing & issue tracking', 
            icon: '<svg width="40" height="40" viewBox="0 0 50 50"><circle cx="28" cy="28" r="12" fill="#FFFFFF" fill-opacity="0.6" stroke="#971313" stroke-width="4"/><line x1="40" y1="40" x2="55" y2="55" stroke="#971313" stroke-width="4" stroke-linecap="round"/></svg>',
            level: 70
        },
        
        // Design Skills
        { 
            category: 'design', 
            name: 'UI/UX Design', 
            desc: 'Focus on clean layout & visual hierarchy', 
            icon: '<svg width="40" height="40" viewBox="0 0 64 64"><rect x="2" y="2" width="60" height="60" rx="5" ry="5" stroke="#971313" fill="white"/><rect x="8" y="8" width="48" height="10" fill="#971313"/><rect x="8" y="22" width="20" height="30" fill="#f0f0f0" stroke="#971313"/><rect x="32" y="22" width="24" height="30" fill="#f0f0f0" stroke="#971313"/></svg>',
            level: 82
        },
        { 
            category: 'design', 
            name: 'Typography', 
            desc: 'Matching brand with aesthetic', 
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="#6c63ff"><path d="M5 4v3h5.5v12h3V7H19V4H5z"/></svg>',
            level: 78
        },
        { 
            category: 'design', 
            name: 'CSS Animation', 
            desc: 'Smooth interaction, hover, @keyframes', 
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="#971313"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 3v4.59l3.29 3.29-1.41 1.41L11 12.41V7h2z"/></svg>',
            level: 85
        },
        { 
            category: 'design', 
            name: 'Component Design', 
            desc: 'Reusable layout design', 
            icon: '<svg width="40" height="40" viewBox="0 0 36 36"><rect x="4" y="4" width="10" height="10" fill="#0F62FE" rx="2"/><rect x="18" y="4" width="10" height="10" fill="#08BDBA" rx="2"/><rect x="4" y="18" width="10" height="10" fill="#FF832B" rx="2"/><rect x="18" y="18" width="10" height="10" fill="#A56EFF" rx="2"/></svg>',
            level: 80
        },
        
        // Soft Skills
        { 
            category: 'soft', 
            name: 'Problem Solving', 
            desc: 'Enjoys debugging and solving tricky errors', 
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="#fbbc05"><path d="M9 21h6v-2H9v2zM12 2a7 7 0 00-1 13.93V18h2v-2.07A7 7 0 0012 2z"/></svg>',
            level: 90
        },
        { 
            category: 'soft', 
            name: 'Consistency', 
            desc: 'Steady learning routine, committed to progress', 
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="#34a853"><path d="M9 16.2l-3.5-3.5L4 14.2l5 5L20 8.2 18.6 7l-9.6 9.2z"/></svg>',
            level: 88
        },
        { 
            category: 'soft', 
            name: 'Collaboration', 
            desc: 'Communicative and open-minded team player', 
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="#03a9f4"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
            level: 85
        },
        { 
            category: 'soft', 
            name: 'Self-Learning', 
            desc: 'Actively explores tech and learns independently', 
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="#9c27b0"><path d="M18 2H6a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z"/></svg>',
            level: 92
        },
        
        // Tools
        { 
            category: 'tools', 
            name: 'VS Code', 
            desc: 'Main code editor — clean, fast, reliable', 
            icon: '<svg width="40" height="40" viewBox="0 0 256 256"><path fill="#0065A9" d="M246.94 27.64l-52.75-25.4c-6.1-2.94-13.4-1.7-18.19 3.09L3.32 162.77c-4.64 4.24-4.64 11.55 0.01 15.78l14.1 12.82c3.8 3.46 9.53 3.71 13.62 0.61L239 34.23c6.98-5.29 17-0.32 17 8.44v-0.61C256 35.91 252.48 30.3 246.94 27.64z"/><path fill="#007ACC" d="M246.94 228.36l-52.75 25.4c-6.1 2.94-13.4 1.7-18.19-3.09L3.32 93.23c-4.64-4.23-4.64-11.55 0.01-15.77l14.1-12.82c3.8-3.46 9.53-3.71 13.62-0.61L239 221.77c6.98 5.29 17 0.32 17-8.44v0.61C256 220.09 252.48 225.7 246.94 228.36z"/></svg>',
            level: 95
        },
        { 
            category: 'tools', 
            name: 'GitHub', 
            desc: 'For version control and project hosting', 
            icon: '<svg width="40" height="40" viewBox="0 0 1024 1024" fill="#971313"><path d="M512 76C273.6 76 76 273.6 76 512c0 192 124.8 354.4 297.6 411.2 21.6 4 29.6-9.6 29.6-21.6 0-10.4-0.4-44.8-0.8-81.6-121.2 26.4-146.8-51.2-146.8-51.2-19.6-49.6-48-62.8-48-62.8-39.2-26.8 3.2-26.4 3.2-26.4 43.2 3.2 66 44.4 66 44.4 38.4 65.6 100.8 46.8 125.6 35.6 4-28 15.2-46.8 27.6-57.6-96.8-11.2-198.8-48.4-198.8-215.6 0-47.6 16.8-86.8 44.4-117.6-4.4-11.2-19.2-56.4 4.4-117.6 0 0 36.4-11.6 119.2 44.8 34.4-9.6 71.2-14.4 107.6-14.4 36.4 0 73.2 4.8 107.6 14.4 82.8-56.4 119.2-44.8 119.2-44.8 23.6 61.2 8.8 106.4 4.4 117.6 27.6 30.8 44.4 70 44.4 117.6 0 167.6-102.4 204.4-199.6 215.2 15.6 13.2 29.6 39.2 29.6 79.2 0 57.2-0.4 103.2-0.4 117.2 0 12 8 26 30 21.6C823.2 866.4 948 703.6 948 512 948 273.6 750.4 76 512 76z"/></svg>',
            level: 80
        },
        { 
            category: 'tools', 
            name: 'Figma', 
            desc: 'For wireframing and UI design', 
            icon: '<svg width="40" height="40" viewBox="0 0 200 300"><circle cx="100" cy="50" r="50" fill="#0acf83"/><circle cx="50" cy="150" r="50" fill="#a259ff"/><circle cx="150" cy="150" r="50" fill="#f24e1e"/><circle cx="100" cy="250" r="50" fill="#ff7262"/><circle cx="50" cy="50" r="50" fill="#1abcfe"/></svg>',
            level: 65
        },
        { 
            category: 'tools', 
            name: 'Notion', 
            desc: 'Used for planning and documentation', 
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="#000000"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2 4v8h12V8H6zm2 2h8v4H8v-4z"/></svg>',
            level: 75
        },
        { 
            category: 'tools', 
            name: 'ChatGPT', 
            desc: 'Helps refine ideas and accelerate tasks', 
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="#10a37f"><path d="M21.5 11.5c0 4.14-3.36 7.5-7.5 7.5h-1.5v3.5l-5-5 5-5v3.5h1.5c2.76 0 5-2.24 5-5s-2.24-5-5-5H6.83l2.09-2.09L7.5 2.5 2 8l5.5 5.5 1.41-1.41L6.83 9.5H14c4.14 0 7.5 3.36 7.5 7.5z"/></svg>',
            level: 85
        }
    ];
    
    const container = document.getElementById('skills-container');
    const skillTabs = document.querySelectorAll('.skill-tab');
    
    if (!container) return;
    
    // Generate skill cards
    skills.forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.setAttribute('data-category', skill.category);
        card.style.setProperty('--index', index);
        
        card.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.name}</h3>
            <p>${skill.desc}</p>
            <div class="skill-level">
                <div class="progress-bar">
                    <div class="progress-fill" data-width="${skill.level}"></div>
                </div>
                <span class="level-percent">${skill.level}%</span>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Initialize skill filter
    if (skillTabs.length > 0) {
        skillTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                skillTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Filter skills
                const filter = tab.getAttribute('data-filter');
                const skillCards = document.querySelectorAll('.skill-card');
                
                skillCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'grid';
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Animate progress bars when skills section is visible
    const skillsSection = document.getElementById('skills');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
}

// Initialize Theme Switcher
function initThemeSwitcher() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    if (!themeSwitch) return;
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Add event listener to switch
    themeSwitch.addEventListener('change', (e) => {
        const theme = e.target.checked ? 'light' : 'dark';
        setTheme(theme);
        localStorage.setItem('theme', theme);
    });
    
    function setTheme(theme) {
        body.classList.remove('dark-theme', 'light-theme');
        body.classList.add(`${theme}-theme`);
        themeSwitch.checked = theme === 'light';
        
        // Update meta theme-color
        const themeColor = theme === 'light' ? '#f8f9fa' : '#0a0a0a';
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', themeColor);
        }
    }
}

// Initialize Back to Top Button
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

// Initialize Animations
function initAnimations() {
    // Initialize typing text animation
    const typingText = document.querySelector('.typing-text span');
    if (typingText) {
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
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
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
        
        setTimeout(type, 1000);
    }
    
    // Initialize reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal-text, .fade-in, .skill-card, .stat-card, .project-card');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    // Initialize floating elements animation
    const floatElements = document.querySelectorAll('.float-el');
    floatElements.forEach((el, index) => {
        el.style.setProperty('--delay', `${index * 0.5}s`);
    });
}

// Initialize Particle Background
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 80, 
                    density: { 
                        enable: true, 
                        value_area: 800 
                    } 
                },
                color: { 
                    value: "#971313" 
                },
                shape: { 
                    type: "circle" 
                },
                opacity: { 
                    value: 0.5, 
                    random: true 
                },
                size: { 
                    value: 3, 
                    random: true 
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#971313",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { 
                        enable: true, 
                        mode: "repulse" 
                    },
                    onclick: { 
                        enable: true, 
                        mode: "push" 
                    }
                }
            }
        });
    }
}

// Initialize Form Validation
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        let isValid = true;
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                
                // Add error message
                if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
                    const errorMsg = document.createElement('span');
                    errorMsg.className = 'error-message';
                    errorMsg.textContent = 'This field is required';
                    errorMsg.style.color = 'var(--primary-color)';
                    errorMsg.style.fontSize = '0.9rem';
                    errorMsg.style.marginTop = '5px';
                    errorMsg.style.display = 'block';
                    input.parentNode.insertBefore(errorMsg, input.nextSibling);
                }
            } else {
                input.classList.remove('error');
                
                // Remove error message
                const errorMsg = input.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            
            // Add shake animation to form
            contactForm.style.animation = 'shake 0.5s';
            setTimeout(() => {
                contactForm.style.animation = '';
            }, 500);
        }
    });
    
    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.remove('error');
                
                // Remove error message
                const errorMsg = this.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            }
        });
    });
}

// Add shake animation for form errors
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .contact-form input.error,
    .contact-form textarea.error {
        border-color: var(--primary-color) !important;
        animation: shake 0.5s;
    }
`;
document.head.appendChild(style);

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Re-initialize blog carousel on resize
    const blogContainer = document.querySelector('.blog-container');
    if (blogContainer) {
        blogContainer.style.transform = 'translateX(0)';
    }
});

// Add scroll effect for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }
    }
});