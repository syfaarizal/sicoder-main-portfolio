const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Tambahan: update class active saat klik nav link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// ScrollSpy: update active class saat scroll
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      // Hapus class active dari semua link
      navLinks.forEach(link => link.classList.remove("active"));

      // Tambahkan class active ke link yang sesuai dengan id section
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, {
  threshold: 0.5 // aktif saat 60% dari section terlihat
});

// Observe setiap section
sections.forEach(section => {
  observer.observe(section);
});
