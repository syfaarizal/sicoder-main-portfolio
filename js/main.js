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

const blogPosts = [
  {
    title: "Challenge Day 1: Menampilkan Tanggal dan Waktu",
    sub: "Ditulis pada 05 Juni 2025",
    body: `Hari ini gue belajar soal <span>template literal</span> di JavaScript — itu loh, string yang bisa masukin variabel langsung ke dalam teks pakai <span><code>\${}</code></span>. Lumayan mind-blowing juga awalnya 😄
    <br><br>
    Awalnya gue cuma pakai cara simpel kayak gini:
    <div class="codean">
      <pre><code>
      let date = Date();
        console.log(\`Hari ini tanggal \${date}\`);
      </code></pre>
    </div>
    <br>
    Yap, ini bakal munculin informasi tanggal dan waktu dalam format default dari JavaScript, misalnya: <br>
    <span>Hari ini tanggal Sun Jun 16 2025 21:41:00 GMT+0700 (Western Indonesia Time)</span>
    <br>
    Tapi... rasanya kurang rapi dan gak personal ya? Nah, akhirnya gue nemu cara yang lebih fleksibel dan bisa kita custom sesuka hati. Nih contohnya:
    <div class="codean">
      <pre><code>
      const now = new Date();
      const tanggal = now.getDate();
      const bulan = now.getMonth() + 1;
      const tahun = now.getFullYear();
      const jam = now.getHours();
      const menit = now.getMinutes();

      console.log(\`Hari ini tanggal \${tanggal}/\${bulan}/\${tahun}, pukul \${jam}:\${menit < 10 ? "0" + menit : menit}\`);
      </code></pre>
    </div>
    Hasilnya jadi lebih cakep dan mudah dibaca: <br>
    <span>Hari ini tanggal 05/6/2025, pukul 21:41</span>
    <br><br>
    <h3>❓ Kenapa Harus menit < 10 ? "0" + menit : menit?</h3> <br>
    Gue sempet bingung juga pas liat baris ini:
    <span>
      <pre><code>menit < 10 ? "0" + menit : menit</code></pre>
    </span> <br>
    Tapi akhirnya ngerti juga: ini adalah ternary operator, kayak if-else mini. <br>
    Intinya: kalau menitnya kurang dari 10 (misalnya 5), nanti dia otomatis ditambahin nol di depannya ("05") biar tampilannya gak janggal. Bayangin kalau jam 3 lewat 7 menit ditulis 03:7, kan aneh. Tapi kalau pakai ini, tampilannya jadi 03:07 — jauh lebih readable dan estetik.
    <br><br>
    Kesimpulannya: pakai <code>new Date()</code> buat dapetin waktu sekarang, pecah jadi komponen tanggal, dan styling hasil output-nya pakai <code>ternary operator</code> untuk hasil yang bersih.
    <br><br>
    <a href="https://github.com/syfaarizal/Cetak-Nama-dan-Status"><i class="fab fa-github" target="_blank" rel="noopener noreferrer" class="social-icons"></i></a>`
  },
  // Tambahin lagi post lain di sini...
];


document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const index = btn.getAttribute("data-index");
    openModal(index);
  });
});

function openModal(index) {
  const modal = document.getElementById("blogModal");
  document.getElementById("modal-title").innerHTML = blogPosts[index].title;
  document.getElementById("modal-sub").innerHTML = blogPosts[index].sub;
  document.getElementById("modal-body").innerHTML = blogPosts[index].body;
  modal.style.display = "block";
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById("blogModal").style.display = "none";
  document.body.style.overflow = '';
}

