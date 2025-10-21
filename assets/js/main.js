document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        toggle.classList.toggle("fa-times"); // Change icon when active
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
            nav.classList.remove("active");
            toggle.classList.remove("fa-times");
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
});

// Add animation to skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.5});

skillCards.forEach(card => skillObserver.observe(card));

// Add animation to project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.5});

projectCards.forEach(card => projectObserver.observe(card));