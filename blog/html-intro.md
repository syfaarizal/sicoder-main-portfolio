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
<h2>📋 Daftar (List)</h2> <br>
<h3>🔢 Ordered List</h3>
<ul>
  <li>Pakai <span>&lt;ol&gt;</span></li>
  <li>Isinya pake nomor/urutan</li>
  <li>Bisa pilih gaya nomor: 1, A, a, I, i</li>
</ul>
<div class="codean">
  <pre><code>
    &lt;ol type=&quot;A&quot;&gt;
      &lt;li&gt;Bangun&lt;/li&gt;
      &lt;li&gt;Mandi&lt;/li&gt;
      &lt;li&gt;Koding&lt;/li&gt;
    &lt;/ol&gt;
  </code></pre>
</div>
<h3>🔘 Unordered List</h3>
<ul>
  <li>Pakai <span>&lt;ul&gt;</span></li>
  <li>Isinya pakai bullet (•)</li>
  <li>Bisa ubah gaya bullet: <span>disc</span>, <span>square</span>, dll</li>
</ul>
<div class="codean">
  <pre><code>
    &lt;ul type=&quot;square&quot;&gt;
      &lt;li&gt;HTML&lt;/li&gt;
      &lt;li&gt;CSS&lt;/li&gt;
      &lt;li&gt;JS&lt;/li&gt;
    &lt;/ul&gt;
  </code></pre>
</div> <br>
<h3>✨ Fun fact HTML:</h3>
Properti <span>type="square"</span> emang masih bisa jalan di beberapa browser, tapi secara standar modern, styling <span>&lt;ul&gt;</span> kayak gitu biasanya pakai CSS:<br>
<div class="codean">
  <pre><code>
    ul {
      list-style-type: square;
    }
  </code></pre>
</div> <br>
<h2>🔗 Anchor (Link): Portal Dunia Web</h2>
Tag <span>&lt;a&gt;</span> itu kayak pintu teleport. Klik dia, langsung ke tempat lain. <br>
<div class="codean">
  <pre><code>
    &lt;a href=&quot;https://google.com&quot; target=&quot;_blank&quot;&gt;Cari di Google&lt;/a&gt;
  </code></pre>
</div>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Atribut</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>href</span></td>
      <td>Link tujuan</td>
    </tr>
    <tr>
      <td><span>target="_blank"</span></td>
      <td>Buka link di tab baru (biar gak ninggalin halaman kamu)</td>
    </tr>
  </tbody>
</table>
🌀 <i>Klik link = teleport ke dunia lain.</i> <br><br>
<h2>🖼️ Gambar (Image)</h2>
HTML bisa nampilin gambar pakai tag <span>&lt;img&gt;</span>. <br>
<div class="codean">
  <pre><code>
    &lt;img src="gambar.jpg" alt="Gambar Kucing Lucu"&gt;
  </code></pre>
</div>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Atribut</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>src</span></td>
      <td>Alamat gambar (online/offline)</td>
    </tr>
    <tr>
      <td><span>alt</span></td>
      <td>Deskripsi gambar (buat aksesibilitas dan SEO)</td>
    </tr>
  </tbody>
</table>
📌 <i><span>alt</span> itu penting banget. Kalau gambarnya gagal dimuat, teks ini yang jadi penyelamat.</i> <br><br>
<h2>📊 Table (Tabel)</h2>
Tabel dipakai buat nampilin data yang rapi dalam bentuk baris dan kolom. <br>
<div class="codean">
  <pre><code>
    &lt;table&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th&gt;No&lt;/th&gt;
          &lt;th&gt;Nama&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;td&gt;1&lt;/td&gt;
          &lt;td&gt;Syifa&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  </code></pre>
</div>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Atribut</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>&lt;table&gt;</span></td>
      <td>Mulai bikin tabel</td>
    </tr>
    <tr>
      <td><span>&lt;tr&gt;</span></td>
      <td>Baris</td>
    </tr>
    <tr>
      <td><span>&lt;th&gt;</span></td>
      <td>Judul kolom</td>
    </tr>
    <tr>
      <td><span>&lt;td&gt;</span></td>
      <td>Isi data</td>
    </tr>
  </tbody>
</table> <br>
<h3>Tambahan:</h3>
<ul>
  <li><span>colspan</span>: Gabung kolom</li>
  <li><span>rowspan</span>: Gabung baris</li>
</ul> <br>
<h2>🏛️ Table Buat Layout? Jaman Dulu, Bestie!</h2>
⚠️ Zaman old, developer pakai tabel buat bikin layout website. Tapi sekarang udah gak zaman. <br>
Sekarang ada: <br>
<ul>
  <li>CSS <b>Flexbox</b> 🧘</li>
  <li>CSS <b>Grid</b> 🧩
    <ul>
      <li>Yang jauh lebih clean, fleksibel, dan responsive.</li>
    </ul>
  </li>
</ul> <br>
<h2>📥 Form: Ngumpulin Data dari User</h2>
Form dipakai buat bikin fitur login, daftar akun, komentar, kontak, dll. <br>
<div class="codean">
  <pre><code>
    &lt;form action=&quot;/submit&quot; method=&quot;post&quot;&gt;
      &lt;label for=&quot;nama&quot;&gt;Nama:&lt;/label&gt;
      &lt;input type=&quot;text&quot; id=&quot;nama&quot; name=&quot;nama&quot; required placeholder=&quot;Masukkan nama&quot;&gt;
      &lt;input type=&quot;submit&quot; value=&quot;Kirim&quot;&gt;
    &lt;/form&gt;
  </code></pre>
</div>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Tag/Atribut</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>&lt;form&gt;</span></td>
      <td>Bungkus semua elemen form</td>
    </tr>
    <tr>
      <td><span>action</span></td>
      <td>Alamat buat ngirim datanya</td>
    </tr>
    <tr>
      <td><span>method</span></td>
      <td>Cara pengiriman (GET atau POST)</td>
    </tr>
    <tr>
      <td><span>&lt;label&gt;</span></td>
      <td>Label input</td>
    </tr>
    <tr>
      <td><span>&lt;input&gt;</span></td>
      <td>Elemen input (text, email, password, dll)</td>
    </tr>
    <tr>
      <td><span>&lt;textarea&gt;</span></td>
      <td>Buat teks panjang</td>
    </tr>
    <tr>
      <td><span>&lt;select&gt;</span> + <span>&lt;option&gt;</span></td>
      <td>Dropdown menu</td>
    </tr>
    <tr>
      <td><span>&lt;button&gt;</span> / <span>&lt;input type="submit"&gt;</span></td>
      <td>Tombol kirim form</td>
    </tr>
  </tbody>
</table> <br>
<h3>⚡ Tips Form</h3>
<ul>
  <li>Gunakan <span>name</span> di setiap input → biar datanya bisa dikirim.</li>
  <li>Tambahin <span>placeholder</span>, <span>required</span>, <span>autocomplete</span> → biar makin ramah user.</li>
  <li>Input jenis khusus:
    <ul>
      <li><span>type="email"</span> → harus valid email</li>
      <li><span>type="password"</span> → karakter disembunyikan</li>
      <li><span>type="radio"</span> / <span>checkbox</span> → untuk opsi pilihan</li>
      <li><span>type="submit"</span> → tombol submit</li>
    </ul>
  </li>
</ul> <br>
<h3>❓ Apa Itu <span>value</span>?</h3>
<span>value</span> itu data yang dikirim ke server saat form disubmit. <br>
Kalau gak ada value? Server bakal bingung, datanya kosong atau gak jelas. <br>
<div class="codean">
  <pre><code>
    &lt;select name=&quot;kategori&quot;&gt;
      &lt;option value=&quot;html&quot;&gt;Belajar HTML&lt;/option&gt;
      &lt;option value=&quot;css&quot;&gt;Belajar CSS&lt;/option&gt;
    &lt;/select&gt;
  </code></pre>
</div> <br>
<h2>🚨 Penutup Card 1</h2>
HTML itu pondasi. Semua web pasti mulai dari sini.<br>
Di part 1 ini, kamu udah belajar:<br>

✅ Struktur dasar HTML<br>
✅ Meta tag<br>
✅ Elemen teks<br>
✅ List, Link, Gambar, Tabel<br>
✅ Formulir & cara kerja form<br>