<blockquote style="margin: 1rem 0; padding: 1rem; border-left: 4px solid rgb(145, 31, 31); font-style: italic; color: #fff;">“Kalau HTML itu fondasi, CSS Card 4 ini kayak filter aesthetic-nya Instagram. Biar web-nya hidup, gerak, dan adaptif.”
</blockquote>
<br><br>

<h2>🎯 Pseudo-Class & Pseudo-Element</h2>
<br>
<h3>🔹 Pseudo-Class (<span>:</span>)</h3>
Dipakai buat ngasih style berdasarkan keadaan elemen (pas diklik, pas hover, dll).
<br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Contoh</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span>:hover</span></td><td>Saat elemen disentuh/di-hover</td></tr>
    <tr><td><span>:focus</span></td><td>Saat elemen sedang aktif (misal input diklik)</td></tr>
    <tr><td><span>:first-child</span></td><td>Elemen pertama dari parent</td></tr>
    <tr><td><span>:nth-child(2)</span></td><td>Elemen ke-2</td></tr>
  </tbody>
</table>

<div class="codean">
    <pre><code>
        button:hover {
            background-color: hotpink;
            color: white;
        }
</code></pre>
</div>
<br>
<h3>🔹 Pseudo-Element (<span>::</span>)</h3>
Ngasih style ke bagian dari elemen, bukan ke elemen utuhnya.
<br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Contoh</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span>::before</span></td><td>Tambah konten sebelum elemen</td></tr>
    <tr><td><span>::after</span></td><td>Tambah konten setelah elemen</td></tr>
    <tr><td><span>::placeholder</span></td><td>Style placeholder input</td></tr>
  </tbody>
</table>

<div class="codean">
    <pre><code>
        h1::after {
            content: " 🚀";
            color: orange;
        }
    </code></pre>
</div>
<br>

<h2>✨ Transisi & Animasi Ringan</h2>
<br>
<h3>🔧 <span>transition</span></h3>
Buat efek halus saat properti berubah.

<div class="codean">
    <pre><code>
        .box {
        tra nsition: all 0.3s ease;
        }
        .box:hover {
            transform: scale(1.1);
            background-color: #00f;
        }
    </code></pre>
</div>
Efek zoom pas hover. Smooth dan soft, gak kayak sulap Harry Potter 🧙‍♂️
<br><br>

<h3>🔥 <span>animation</span></h3>
Buat gerakan berulang/teratur pakai keyframe.

<div class="codean">
    <pre><code>
        @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        .title {
        anima   tion: fadeIn 1s ease-in;
        }
    </code></pre>
</div>
<br>

<h2>📏 Unit Responsif</h2>
<br>
<h3>🌐 Unit Populer:</h3><br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Unit</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span>px</span></td><td>Ukuran fix</td></tr>
    <tr><td><span>%</span></td><td>Relatif ke elemen parent</td></tr>
    <tr><td><span>em</span></td><td>Relatif ke ukuran font parent</td></tr>
    <tr><td><span>rem</span></td><td>Relatif ke root (html)</td></tr>
    <tr><td><span>vw</span> / <span>vh</span></td><td>% dari ukuran layar (viewport width/height)</td></tr>
  </tbody>
</table>

<div class="codean">
    <pre><code>
        .container {
            width: 80vw;
            font-size: 1.2rem;
        }
    </code></pre>
</div>

🧠 <b>Best practice:</b> gunakan <span>rem</span> untuk teks, <span>vw</span>/<span>%</span> untuk layout. Responsive = YESSS 🔥
<br><br>

<h2>🎨 Responsive Design + Media Query</h2>
<code>media query</code> = cara bikin tampilan beda di ukuran layar beda.

<div class="codean">
    <pre><code>
        @media (max-width: 600px) {
            h1 {
                font-size: 24px;
                text-align: center;
            }
        }
    </code></pre>
</div>
HP user? Auto tampilannya rapi. Laptop user? Tetap kece.
<br><br>

<h2>🧼 Best Practice Styling (Wajib Biar Pro)</h2><br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Tips</th>
      <th>Penjelasan</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Gunakan class, hindari styling langsung tag <span>&lt;h1&gt;</span></td><td>Lebih fleksibel</td></tr>
    <tr><td>Nama class jelas (<span>.btn-primary</span>)</td><td>Gak bikin pusing</td></tr>
    <tr><td>Reuse class, hindari copy-paste style</td><td>DRY: Don't Repeat Yourself</td></tr>
    <tr><td>Pakai reset/normalize CSS</td><td>Biar tampilannya konsisten di semua browser</td></tr>
    <tr><td>External CSS &gt; inline/internal</td><td>Lebih clean dan scalable</td></tr>
  </tbody>
</table>
<br>

<h2>🧠 Recap CSS Card 4</h2>
<ul>
  <li>✅ Tau pseudo-class/element buat interaksi & efek kece</li>
  <li>✅ Bisa bikin hover & animasi simple (tanpa JavaScript!)</li>
  <li>✅ Kenal berbagai unit (px, rem, %, vw, dll)</li>
  <li>✅ Responsive layout jalan lewat media query</li>
  <li>✅ Siap styling ala pro dengan best practices</li>
</ul>

<section class="css-card-ending" style="margin-top: 2rem; padding: 1.5rem; background-color: #f9f9f9; border-left: 5px solid rgb(145, 31, 31); border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); font-family: 'Segoe UI', sans-serif; max-height: 50rem;">
  <h2 style="margin-bottom: 0.8rem; color: #333;">📌 Penutup dari Gua - SICODER 💻🌱</h2>
  <p style="margin-bottom: 1rem; line-height: 1.7; color: #555;">
    Halo! Gua <strong>Syifa</strong>, dan semua materi yang gua bagikan di sini adalah hasil belajar dari <strong>NOL</strong>.  
    <br><br>
    Gua mulai dari nggak ngerti <span>&lt;div&gt;</span> itu apaan, kenapa harus ada <span>&lt;head&gt;</span>, atau kenapa CSS bisa bikin warna teks berubah 😅 Tapi pelan-pelan gua belajar — lewat video, artikel, dan pastinya... sering trial-error sendiri sampai error-nya hilang 😭
    <br><br>
    Semua yang gua share di sini (mulai dari <strong>HTML Card Part 1–2</strong> sampai <strong>CSS Card Part 1–4</strong>) adalah hasil recap dan pemahaman versi gua sendiri. Gua coba jelasin dengan gaya yang gua ngerti dan gua suka, biar lu yang baca juga bisa ngerasa: “Oh, ternyata bisa dijelasin se-simple ini ya.”
  </p>

  <blockquote style="margin: 1rem 0; padding: 1rem; background-color:rgb(245, 232, 232); border-left: 4px solid rgb(145, 31, 31); font-style: italic; color: #333;">
    🎯 Gua percaya: <br>
    <strong>Belajar coding itu bukan soal siapa paling cepet, tapi siapa yang konsisten dan gak nyerah.</strong>
  </blockquote>

  <p style="margin-bottom: 1.2rem; line-height: 1.7; color: #555;">
    Kalau lu juga lagi belajar HTML & CSS — dari awal, dari gak ngerti apa-apa — gua harap konten ini bisa jadi temen belajarmu juga.  
    <br><br>
    Jangan takut mulai dari bawah, semua orang yang jago pun pernah stuck di <span>&lt;br&gt;</span> doang kok 😆
  </p>

  <div class="css-card-next" style="background-color:rgb(255, 205, 205); padding: 1rem; border-left: 4px solid rgb(151, 4, 4); border-radius: 8px; margin-bottom: 1.5rem; margin-top: 40px;">
    <h3 style="margin-top: 0; color:rgb(133, 4, 4);">🚀 What’s Next?</h3>
    <p style="margin: 0; color: #5c5c5c;">
      <strong>Kenalan Sama JavaScript</strong><br>
      <i>"HTML itu kerangka, CSS itu bajunya... nah JavaScript? Itu nyawanya!"</i><br>
      Apa itu JavaScript? · Kenapa JavaScript penting di web dev · Cara pakai JS di HTML · etc
    </p>
  </div>
  <div class="css-card-next" style="background-color:rgb(255, 205, 205); padding: 1rem; border-left: 4px solid rgb(151, 4, 4); border-radius: 8px; margin-bottom: 1.5rem;">
    <h3 style="margin-top: 0; color:rgb(133, 4, 4);">🚀 What’s Next?</h3>
    <p style="margin: 0; color: #5c5c5c;">
      <strong>Logic, Kondisi, dan Perulangan</strong><br>
      <i>"Ini bagian di mana web lu mulai bisa 'mikiiir'."</i><br>
      Percabangan: <span>if</span>, <span>else</span>, <span>else if</span> · Switch case (buat alternatif logika bercabang) · etc
    </p>
  </div>
  <div class="css-card-next" style="background-color:rgb(255, 205, 205); padding: 1rem; border-left: 4px solid rgb(151, 4, 4); border-radius: 8px; margin-bottom: 1.5rem;">
    <h3 style="margin-top: 0; color:rgb(133, 4, 4);">🚀 What’s Next?</h3>
    <p style="margin: 0; color: #5c5c5c;">
      <strong>Interaksi & DOM Dasar</strong> <br>
      <i>"Waktunya bikin web lu hidup! Bisa klik, ganti teks, dan ngatur tampilan langsung dari script."</i><br>
      Apa itu DOM (Document Object Model) · Event Listener (<span>click</span>, <span>input</span>, dll) · etc
    </p>
  </div>

  <p class="call-to-action" style="text-align: center; font-weight: bold; color: #444; margin-top:70px;">📍Stay tuned!<br>
  📩 DM aja kalau lu juga lagi belajar coding — kita bisa grow bareng loh!</p>
</section>
