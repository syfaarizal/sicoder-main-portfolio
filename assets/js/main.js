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

    // Blog modal functionality
    let blogPosts = [];
    const blogModal = document.getElementById('blogModal');
    
    if (blogModal) {
        fetch('./data/blogPosts.json')
            .then(res => res.json())
            .then(data => {
                blogPosts = data;
                document.querySelectorAll(".read-more-btn").forEach(btn => {
                    btn.addEventListener("click", (e) => {
                        e.preventDefault();
                        const index = btn.getAttribute("data-index");
                        openModal(index);
                    });
                });
            });

        // Close modal when clicking outside content
        blogModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    function openModal(index) {
        const post = blogPosts[index];
        const modal = document.getElementById("blogModal");
        
        document.getElementById("modal-title").innerText = post.title;
        document.getElementById("modal-sub").innerText = post.sub;

        fetch(post.file)
            .then(res => res.text())
            .then(md => {
                document.getElementById("modal-body").innerHTML = marked.parse(md);
                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
            })
            .catch(err => {
                console.error("Error loading blog content:", err);
                document.getElementById("modal-body").innerHTML = "<p>Error loading content. Please try again later.</p>";
                modal.style.display = "block";
            });
    }

    window.closeModal = function() {
        document.getElementById('blogModal').style.display = 'none';
        document.body.style.overflow = '';
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