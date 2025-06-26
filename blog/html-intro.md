<i>“Kalau website itu rumah, HTML itu pondasinya. Gak kelihatan, tapi semuanya berdiri karena dia.”</i> <br><br>
<h3>✨ Apa Itu HTML?</h3>
<b>HTML (HyperText Markup Language)</b> itu bukan bahasa pemrograman, tapi bahasa markup. Fungsinya? Buat ngatur struktur konten di halaman web. Jadi HTML tuh ngasih tahu browser: <br><br>
<i>“Eh bro, ini judul ya, yang ini paragraf, ini gambar, ini tombol login.”</i> <br><br>
📌 Bukan Programming Language karena: <br>
<ul>
  <li>Gak ada logika kayak <span>if</span>, <span>else</span>, <span>loop</span></li>
  <li>Gak bisa ngitung atau bikin aksi dinamis</li>
  <li>Cuma buat nandain dan ngebungkus konten</li>
</ul><br>
<h3>🧩 Istilah Dasar di HTML</h3>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Istilah</th>
      <th>Artinya singkat dan jelas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Elemen</td>
      <td>Bagian utama HTML, biasanya diawali dan diakhiri tag. Contoh: <span>&lt;p&gt;Halo&lt;/p&gt;</span></td>
    </tr>
    <tr>
      <td>Tag</td>
      <td>Penanda struktur. Ada yang pembuka <span>&lt;p&gt;</span>, ada juga penutup <span>&lt;/p&gt;</span>.</td>
    </tr>
    <tr>
      <td>Atribut</td>
      <td>Info tambahan di dalam tag. Contoh: <span>type="text"</span> di <span>&lt;input&gt;</span>.</td>
    </tr>
    <tr>
      <td>Properti</td>
      <td>Biasanya dipake di CSS/JS buat styling atau scripting, bukan HTML langsung.</td>
    </tr>
    <tr>
      <td>Konten</td>
      <td>Isi di antara tag pembuka dan penutup. Contoh: Teks “Halo” di <span>&lt;p&gt;</span>Halo<span>&lt;/p&gt;</span>.</td>
    </tr>
  </tbody>
</table> <br>
<h3>🔖 Meta Tag: Biar Browser Gak Salah Paham</h3>
Meta tag tuh kayak instruksi rahasia yang dikasih ke browser sebelum halaman web-nya muncul. <br><br>
<h3>🧠 Contoh Meta Tag:</h3>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>&lt;meta charset="UTF-8"&gt;</span></td>
      <td>Biar semua karakter, emoji, dan simbol tampil bener.</td>
    </tr>
    <tr>
      <td><span>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</span></td>
      <td>Biar halaman bisa menyesuaikan diri di HP, tablet, laptop, dll.</td>
    </tr>
  </tbody>
</table> <br>
<h3>Kenapa Harus di <span>&lt;head&gt;</span>?</h3>
Karena browser baca bagian <span>&lt;head&gt;</span> duluan. Jadi info penting kayak ini harus dikasih di awal.<br><br>
Meta tag tuh kayak ngasih <i>briefing</i> ke browser: <i>“Oke, ini caranya tampilin halaman gue ya.”</i> <br><br>
<h3>🔡 Heading & Paragraf</h3>
<ul>
  <li><span>&lt;h1&gt;</span> sampai <span>&lt;h6&gt;</span> = Buat judul (semakin kecil angkanya, makin kecil ukuran teksnya).</li>
  <li><span>&lt;p&gt;</span> = Buat paragraf. Ini tag favorit buat nulis isi konten panjang.</li>
</ul> <br>
Contoh:
<div class="codean">
  <pre><code>
    &lt;h1&gt;Selamat Datang&lt;/h1&gt;
    &lt;p&gt;Ini adalah paragraf pembuka yang manis~&lt;/p&gt;
  </code></pre>
</div> <br>
<h3>🎨 Text Formatting</h3>
HTML juga bisa bantu kamu <i>ngedandanin</i> teks! <br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>&lt;b&gt;</span>/<span>&lt;strong&gt;</span></td>
      <td>Teks tebel kayak perasaan ke dia</td>
    </tr>
    <tr>
      <td><span>&lt;i&gt;</span>/<span>&lt;em&gt;</span></td>
      <td>Teks miring, cocok buat penekanan</td>
    </tr>
    <tr>
      <td><span>&lt;ul&gt;</span></td>
      <td>Garis bawah</td>
    </tr>
    <tr>
      <td><span>&lt;sup&gt;</span></td>
      <td>Teks kecil di atas, contoh: 2<sup>2</sup></td>
    </tr>
    <tr>
      <td><span>&lt;sub&gt;</span></td>
      <td>Teks kecil di bawah, contoh: H<sub>2</sub>O</td>
    </tr>
    <tr>
      <td><span>&lt;br&gt;</span></td>
      <td>Ganti baris (line break)</td>
    </tr>
  </tbody>
</table> <br>
