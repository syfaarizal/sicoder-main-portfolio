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
  {
    title: "Challenge Day 2: Menampilkan Tanggal dan Waktu di JavaScript",
    sub: "Ditulis pada 06 Juni 2025",
    body: `Hari ini challenge-nya cukup bikin kepala keriting 😅 kita diminta bikin <b>program JavaScript</b> yang bisa menghitung umur seseorang berdasarkan <b>tahun lahir</b>. Kedengarannya gampang, tapi pas ngoding ternyata lumayan banyak jebakannya.
    <br><br>
    <h3>💡 Deskripsi Challenge</h3> <br>
    Bikin program yang: 
    <br><br>
    1. Meminta user memasukkan <b>tahun lahir</b> <br>
    2. Menghitung <b>umur saat ini</b> <br>
    3. Menampilkan pesan seperti ini: <br><br>
    <span>
    Kamu lahir pada tahun 2005. <br>
    Sekarang tahun 2025. <br>
    Artinya kamu berusia 20 tahun 🎉 <br>
    Tahun depan kamu akan berusia 21 tahun. <br><br>
    </span>
    <h3>🧠 Proses Berpikir (dan Kesalahan Kecil 😅)</h3>
    Awalnya gua pikir input bisa langsung ditulis kayak gini: <br>
    <div class="codean">
      <pre><code>
      const readline = prompt();
      const birthYear = readline.question("Masukkan tahun lahir kamu: ");
      </code></pre>
    </div>
    Tapi ternyata… <b>SALAH!</b> <br>
    Gua lupa kalau <span>prompt()</span> itu cuma jalan di browser, sedangkan <span>readline.question(...)</span> adalah bagian dari modul <span>readline</span> di Node.js — dan keduanya <b>nggak bisa dicampur.</b> <br>
    Untungnya gua masih ngerti logikanya. Setelah ngulik lagi (dan tanya ChatGPT juga 🤭), akhirnya dapet versi yang bener: <br><br>
    <h3>✅ Solusi Versi Browser</h3>
    <div class="codean">
      <pre><code>
      const birthYear = prompt("Masukan tahun lahir anda: ");
      const lahir = parseInt(birthYear); // convert input string ke number
      const tahunSkrg = new Date().getFullYear();
      const usia = tahunSkrg - lahir;
      const tahunDpn = usia + 1;

      console.log(\`Kamu lahir pada tahun \${birthYear}. Sekarang tahun \${tahunSkrg}. Artinya kamu berusia \${usia}
      tahun 🎉 Tahun depan kamu akan berusia \${tahunDpn} tahun.\`);
      </code></pre>
    </div>
    <h3>✍️ Kenapa Harus parseInt()?</h3> 
    Karena input dari <span>prompt()</span> itu selalu berupa string. Kalau mau ngitung umur, kita harus ubah ke number dulu. Makanya perlu <span>parseInt()</span> atau bisa juga <span>Number()</span>.
    <br><br>
    <h3>🧪 Bonus Challenge: Validasi & Penanganan Edge Case</h3>
    Challenge bonus-nya seru juga: kita disuruh tambahin logika tambahan supaya program bisa nanggepin hal-hal aneh, kayak... <br><br>
    <h3>🚀 Kasus 1: User Masukkan Tahun Lebih Besar dari Tahun Sekarang</h3>
    <div class="codean">
      <pre><code>
      if (lahir > tahunSkrg){
        console.log("Kamu berasal dari masa depan? 🛸");
      }
      </code></pre>
    </div> <br>
    <h3>❌ Kasus 2: Input Tidak Valid (Huruf, kosong, dll)</h3>
    <div class="codean">
      <pre><code>
      if (isNaN(lahir)) {
        console.log("Input tidak valid. Harap masukkan angka tahun lahir.");
      }
      </code></pre>
    </div>
    <h3>🧼 Bonus Tambahan: Gunakan <span><code>&bsol;n</code></span> biar output lebih rapih</h3>
    Di JavaScript console, <span><code>\\n</code></span> berfungsi kayak <span><code>&lt;br&gt;</code></span> di HTML. Jadi kita bisa format output-nya lebih enak dibaca. <br><br>
    <h3>🧾 Final Code</h3>
    <div class="codean">
      <pre><code>
        const birthYear = prompt("Masukan tahun lahir anda: ");
        const lahir = parseInt(birthYear);
        const tahunSkrg = new Date().getFullYear();
        const usia = tahunSkrg - lahir;
        const tahunDpn = usia + 1;

        if (isNaN(lahir)) {
          console.log("Input tidak valid. Harap masukkan angka tahun lahir.");
        } else if (lahir > tahunSkrg) {
          console.log("Kamu berasal dari masa depan? 🛸");
        } else {
          console.log(\`Kamu lahir pada tahun \${birthYear}.\\nSekarang tahun \${tahunSkrg}.\\nArtinya kamu berusia 
          \${usia} tahun 🎉\\nTahun depan kamu akan berusia \${tahunDpn} tahun.\`);
        }
      </code></pre>
    </div>
    <br>
    <h3>🎯 Hal yang Gua Pelajari Hari Ini</h3>
      1. Jangan campur <span>prompt()</span> dan <span>readline()</span> 😅 <br>
      2. Gunakan <span>parseInt()</span> untuk memastikan input berupa angka <br>
      3. Validasi input itu penting banget! <br>
      4. Tambahan kecil kayak <span><code>\\n</code></span> bisa bikin program lebih enak dibaca <br><br>
    Setiap challenge itu bukan cuma soal berhasil atau nggaknya kode jalan, tapi tentang <b>gimana kita mikir dan belajar dari error-nya.</b> Dan di hari ke-2 ini, gua makin ngerti kenapa debugging itu bukan musuh, tapi sahabat. <br><br>
    <a href="https://github.com/syfaarizal/Kalkulator-Umur"><i class="fab fa-github" target="_blank" rel="noopener noreferrer" class="social-icons"></i></a>`
  },
  {
    title: "Day 3: Bikin Mini Kalkulator Interaktif yang Beneran Interaktif 💡",
    sub: "Ditulis pada 09 Juni 2025",
    body: `Hari ke-3 tantangan ngoding ini lumayan bikin dahi berkerut tapi juga bikin senyum sendiri pas berhasil. Gua dikasih tantangan untuk bikin kalkulator interaktif sederhana pakai JavaScript. Sounds easy? Wait till you debug the errors 🤯 <br><br>
    Awalnya gua nulis kayak gini: <br>
    <div class="codean">
      <pre><code>
        const angka1 = prompt("Masukan angka ke 1");
        const angka2 = prompt("Masukan angka ke 2");
        const angka1 = prompt("(+, -, *, /)");
      </code></pre>
    </div>
    Yes, gua salah ngulang <span>angka1</span>, dan bagian prompt operator juga salah banget. Udah gitu gua lanjut bikin <span>switch</span>: <br>
    <div class="codean">
      <pre><code>
        switch(angka1){
          case = "+":
            console.log(angka1 + angka2)
        }
      </code></pre>
    </div>
    Masalah pertama? Angka-angka yang kita dapet dari <span>prompt()</span> itu <b>string</b>, bukan number. Jadi kalau langsung dijumlahin, hasilnya malah digabung, bukan ditambahin. Misal: <span>"2" + "3" = "23"</span>, bukan <span>5</span>. Solusinya? Gunakan <span>parseFloat()</span> biar bisa handle <b>angka desimal</b> juga. <br>
    <div class="codean">
      <pre><code>
        const num1 = parseFloat(angka1);
        const num2 = parseFloat(angka2);
        let hasil; // Disiapkan dulu buat nampung hasil operasi
      </code></pre>
    </div>
    Setelah itu, gua refactor jadi kayak gini: <br>
    <div class="codean">
      <pre><code>
        const angka1 = prompt("Masukan angka ke 1");
        const angka2 = prompt("Masukan angka ke 2");
        const operator = prompt("Masukan operator (+, -, *, /)");

        const num1 = parseFloat(angka1);
        const num2 = parseFloat(angka2);
        let hasil;

        if (operator === "+"){
            hasil = num1 + num2;
        } else if (operator === "-"){
            hasil = num1 - num2;
        } else if (operator === "*"){
            hasil = num1 * num2;
        } else if (operator === "/"){
            hasil = num1 / num2;
        } else {
            hasil = "Hasil tidak diketahui";
        }

        console.log("Hasil: " + hasil);
      </code></pre>
    </div>
    Sampai sini udah bisa jalan, tapi masih bisa di-improve. Masuk ke bonus challenge: <br><br>
    <h3>✨ Bonus Challenge:</h3>
    <ol>
      <li>Validasi input biar yakin itu beneran angka pakai <span>isNaN()</span></li>
      <li>Ganti <span>if-else</span> jadi <span>switch-case</span> biar lebih clean</li>
      <li>
        Tampilkan hasil dengan format menarik kayak:
        <ul>
          <li>"📊 Hasil dari 10 / 2 adalah 5"</li>
        </ul>
      </li>
    </ol> <br>
    <h3>Final Versi dengan Validasi dan <span>switch-case</span>:</h3>
    <div class="codean">
      <pre><code>
        const angka1 = prompt("Masukan angka ke 1");
        const angka2 = prompt("Masukan angka ke 2");
        const operator = prompt("Masukan operator (+, -, *, /)");

        const num1 = parseFloat(angka1);
        const num2 = parseFloat(angka2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Input bukan angka yang valid!");
        } else {
            let hasil;

            switch(operator) {
                case "+": hasil = num1 + num2; break;
                case "-": hasil = num1 - num2; break;
                case "*": hasil = num1 * num2; break;
                case "/": hasil = num2 === 0 ? "⚠️ Error: bagi 0" : num1 / num2; break;
                default:
                    hasil = "❌ Operator tidak dikenali. Silakan gunakan +, -, *, atau /.";
            }

            if (typeof hasil === "string") {
                console.log(hasil);
            } else {
                console.log(\`📊 Hasil dari \${angka1} \${operator} \${angka2} adalah \${hasil}\`);
            }
        }
      </code></pre>
    </div> <br>
    <h3>🔁 Level Up! Tambah Function dan Looping</h3>
    Gua ngerasa ini bisa dibikin lebih clean lagi dengan function dan loop. Function biar reusable, loop biar bisa dihitung ulang tanpa refresh halaman. <br><br>
    <h3>Final versi modular dan interaktif:</h3>
    <div class="codean">
      <pre><code>
        let lanjut = true;

        while (lanjut) {
            const angka1 = prompt("Masukan angka ke 1");
            const angka2 = prompt("Masukan angka ke 2");
            const operator = prompt("Masukan operator (+, -, *, /)");

            const num1 = parseFloat(angka1);
            const num2 = parseFloat(angka2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("❌ Input bukan angka yang valid!");
            } else {

                function hitung(num1, num2, operator) {
                    switch (operator) {
                        case "+": return num1 + num2;
                        case "-": return num1 - num2;
                        case "*": return num1 * num2;
                        case "/": return num2 === 0 ? "⚠️ Error: bagi 0" : num1 / num2;
                        default: return "❌ Operator tidak dikenali. Silakan gunakan +, -, *, atau /.";
                    }
                }

                const hasil = hitung(num1, num2, operator);

                if (typeof hasil === "string") {
                    console.log(hasil);
                } else {
                    console.log(\`📊 Hasil dari \${angka1} \${operator} \${angka2} adalah \${hasil}\`);
                }
            }

            lanjut = confirm("Ingin menghitung lagi?");
        }
      </code></pre>
    </div> <br>
    <h3>🎯 Catatan Kecil:</h3>
    <ul>
    <li><span>parseFloat()</span> lebih fleksibel dibanding <span>parseInt()</span></li>
    <li><span>isNaN()</span> jadi garda depan buat validasi input angka</li>
    <li>Function bikin kode lebih bersih dan bisa di-reuse</li>
    <li>Loop <span>while</span> + <span>confirm()</span> bikin program jadi dinamis dan fun dipakai user</li>
    </ul> <br>
    Dan akhirnya, ini jadi bukan cuma kalkulator biasa, tapi juga latihan berpikir logis, rapiin struktur kode, dan kasih pengalaman interaktif buat user. Sampai jumpa di challenge selanjutnya! 🚀` 
  },
  {
    title:"Day 4: Game Tebak Angka - Belajar Seru Bareng JavaScript 🎯",
    sub:"Ditulis pada 11 Juni 2025",
    body:`Hari ke-4 tantangan ngoding ini agak beda vibes-nya karena gua disuruh bikin game sederhana: Number Guessing Game alias Tebak Angka! Sekilas emang kedengeran receh, tapi ternyata seru juga pas dibikin. <br><br>
    <h3>🧠 Apa Sih Tantangannya?</h3>
    Kita diminta bikin program yang: <br>
    <ol>
      <li>Generate angka acak antara 1 sampai 10</li>
      <li>Minta user buat nebak angkanya</li>
      <li>
        Kalau salah:
        <ul>
          <li>Kasih clue: "Terlalu kecil" atau "Terlalu besar"</li>
          <li>Ulangi tebakannya</li>
        </ul>
      </li>
      <li>
        Kalau benar:
        <ul>
          <li>Tampilkan pesan sukses + jumlah percobaan</li>
        </ul>
      </li>
    </ol>`
  },
  {
    title:"HTML Introduction",
    sub:"Ditulis pada 14 Mei 2025",
    body:`HTML is <b>Markup language</b>, not programming language. Programming language itu ada sesuatu yang berkaitan dengan logic, punya if, else, atau kondisi. <br><br>
    <h3>Istilah: </h3>
    <ul>
      <li>Elemen: Struktur dasar HTML, biasanya berupa tag seperti <span>&lt;p&gt;</span>, <span>&lt;div&gt;</span>, atau termasuk <span>&lt;!DOCTYPE&gt;</span></li>
      <li>Atribut: Informasi tambahan dalam tag. Contoh: <span>type="text"</span> dalam <span>&lt;input&gt;</span></li>
      <li>Properti: Biasanya dipakai di CSS atau JS (JavaScript), bukan di HTML langsung</li>
      <li>Konten: Isi diantara tag pembuka & penutup. Contoh: teks dalam <span>&lt;p&gt;Halo&lt;p&gt;</span></li>
    </ul>`
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

