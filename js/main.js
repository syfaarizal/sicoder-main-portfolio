// Toggle menu on mobile
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Handle nav link click: highlight + auto close
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    // Hapus semua active
    navLinks.forEach(nav => nav.classList.remove("active"));
    // Tambah active ke yang diklik
    this.classList.add("active");
    // Tutup menu di mobile
    nav.classList.remove("active");
  });
});

// ScrollSpy: update active nav link saat section terlihat
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      // Update active link
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, {
  threshold: 0.5 // 50% dari section terlihat
});

// Observe semua section
sections.forEach(section => observer.observe(section));

const cvBtn = document.getElementById('CV-btn');
const extraLinks = document.getElementById('extraLinks');

cvBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Toggle class hidden/show
  extraLinks.classList.toggle('hidden');
  extraLinks.classList.toggle('show');
});

let blogPosts = [];

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
    });
}

function closeModal() {
  document.getElementById('blogModal').style.display = 'none';
  document.body.style.overflow = '';
}
window.closeModal = closeModal; 