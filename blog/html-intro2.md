<blockquote style="margin: 1rem 0; padding: 1rem; border-left: 4px solid rgb(145, 31, 31); font-style: italic; color: #fff;">“Kalau part 1 itu pondasi rumah, part 2 ini mulai ngatur ruangannya biar cozy dan terstruktur.”</blockquote>
<br>
<h2>🖼️ Apa Itu <span>&lt;iframe&gt;</span>?</h2>
<span>&lt;iframe&gt;</span> itu ibarat jendela kecil di halaman lu, yang bisa nampilin halaman web lain dari internet.
<br>
<h3>🔍 Fungsi:</h3>
<ul>
    <li>Nampilin video YouTube</li>
    <li>Nampilin peta Google Maps</li>
    <li>Embed dokumen dari luar</li>
</ul> <br>
<h3>🔧 Contoh:</h3>
<div class="codean">
  <pre><code>
    &lt;iframe src=&quot;https://www.youtube.com/embed/dQw4w9WgXcQ&quot; width=&quot;560&quot; height=&quot;315&quot; allowfullscreen&gt;&lt;/iframe&gt;
  </code></pre>
</div>
<h3>⚠️ Tips:</h3>
<ul>
    <li>Jangan kebanyakan iframe, soalnya bikin halaman jadi berat</li>
    <li>Gunakan atribut <span>width</span>, <span>height</span>, dan <span>allowfullscreen</span> buat kontrol tampilan</li>
</ul> <br>
<h3>📦 Apa Itu <span>&lt;div&gt;</span>?</h3>
<span>&lt;div&gt;</span> itu singkatan dari division, dan dipakai buat ngebungkus/ngelompokkan elemen HTML yang lebih besar. <br><br>
<h3>🔍 Fungsinya:</h3>
<ul>
    <li>Ngebagi konten ke dalam bagian-bagian</li>
    <li>Dipakai bareng CSS buat styling layout</li>
</ul> <br>
🧠 Ibarat: <br>
<span>div</span> = kontainer gede (kayak box kardus isi barang banyak) <br><br>
<h3>🔧 Contoh:</h3>
<div class="codean">
  <pre><code>
    &lt;div class=&quot;card&quot;&gt;
        &lt;h2&gt;Judul Artikel&lt;/h2&gt;
        &lt;p&gt;Isi artikelnya di sini ya...&lt;/p&gt;
    &lt;/div&gt;
  </code></pre>
</div> <br>
<h3>🧬 Apa Itu <span>&lt;span&gt;</span>?</h3>
<span>&lt;span&gt;</span> itu elemen inline yang dipakai buat ngebungkus teks kecil yang pengen lu <i>format atau styling</i>. <br><br>
<h3>🔍 Fungsinya:</h3>
<ul>
    <li>Nge-highlight teks tertentu</li>
    <li>Nambah style ke kata/kalimat tanpa ganggu paragraf</li>
</ul> <br>
🧠 Ibarat: <br>
<span>span</span> = stabilo buat teks, bukan box <br><br>
<h3>🔧 Contoh:</h3>
<div class="codean">
  <pre><code>
    &lt;p&gt;Nama saya &lt;span class=&quot;highlight&quot;&gt;Syifa Arizal&lt;/span&gt; dan saya suka ngoding!&lt;/p&gt;
  </code></pre>
</div> <br>
<h2>⚔️ Perbedaan <span>div</span> vs <span>span</span></h2>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Perbandingan</th>
      <th><span>&lt;div&gt;</span></th>
      <th><span>&lt;span&gt;</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>Tipe</span></td>
      <td>Block-level</td>
      <td>Inline</td>
    </tr>
    <tr>
      <td>Ukuran</td>
      <td>Satu baris penuh</td>
      <td>Hanya seleksi teks kecil</td>
    </tr>
    <tr>
      <td>Umum dipakai untuk</td>
      <td>Layout & kontainer besar</td>
      <td>Nge-style kata/kalimat tertentu</td>
    </tr>
    <tr>
      <td>Bikin baris baru?</td>
      <td>Ya</td>
      <td>Nggak</td>
    </tr>
  </tbody>
</table>
<br>
🧠 Kalau <span>div</span> <i>itu kotak container</i>, <span>span</span> <i>itu stabilo teks</i>. <br><br>
<div class="modal-img">
<img src="/assets/img/Semantic.png" alt="Semantic & Non-semantic">
</div> <br>
<h2>🧠 Apa Itu Semantic HTML?</h2>
<b>Semantic HTML</b> adalah elemen-elemen HTML yang namanya udah ngasih tahu maknanya. Jadi <i>ngodingnya gak cuma rapi</i>, tapi juga bikin website lebih mudah dipahami sama browser, SEO, dan screen reader. <br><br>
<h3>🎯 Tujuan:</h3>
<ul>
    <li>Struktur lebih jelas</li>
    <li>Lebih aksesibel (buat disabilitas)</li>
    <li>SEO-friendly</li>
</ul> <br>
<h3>🧱 Contoh Semantic Tags:</h3>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Tag</th>
      <th>Artinya</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>&lt;header&gt;</span></td>
      <td>Bagian kepala halaman (biasanya berisi logo, nav)</td>
    </tr>
    <tr>
      <td><span>&lt;nav&gt;</span></td>
      <td>Navigasi/menu</td>
    </tr>
    <tr>
      <td><span>&lt;main&gt;</span></td>
      <td>Konten utama</td>
    </tr>
    <tr>
      <td><span>&lt;article&gt;</span></td>
      <td>Artikel mandiri</td>
    </tr>
    <tr>
      <td><span>&lt;section&gt;</span></td>
      <td>Bagian tertentu dalam halaman</td>
    </tr>
    <tr>
      <td><span>&lt;footer&gt;</span></td>
      <td>Bagian bawah halaman</td>
    </tr>
    <tr>
      <td><span>&lt;aside&gt;</span></td>
      <td>Sidebar atau info tambahan</td>
    </tr>
  </tbody>
</table> <br>
<h2>🚫 Non-Semantic HTML</h2>
<b>Non-semantic HTML</b> adalah tag yang <i>nggak ngasih konteks</i> tentang isi di dalamnya. <br><br>
<h3>🎯 Tujuan:</h3>
<ul>
    <li><span>&lt;div&gt;</span></li>
    <li><span>&lt;span&gt;</span></li>
</ul>
Keduanya gak bilang “eh gue bagian navigasi” atau “ini artikel loh.” <br>
Ya... cuma kotak kosong tanpa identitas. <br><br>
<h2>🔀 Contoh Gabungan Semantic & Non-Semantic</h2>
<div class="codean">
    <pre><code>
        &lt;header&gt;
            &lt;div class=&quot;logo&quot;&gt;🌟 Logo Website&lt;/div&gt;
            &lt;nav&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/nav&gt;
        &lt;/header&gt;
        &lt;main&gt;
            &lt;article&gt;
                &lt;h1&gt;Belajar HTML itu seru!&lt;/h1&gt;
                &lt;p&gt;&lt;span class=&quot;highlight&quot;&gt;HTML&lt;/span&gt; adalah pondasi web modern.&lt;/p&gt;
            &lt;/article&gt;
        &lt;/main&gt;
        &lt;footer&gt;
            &lt;p&gt;&amp;copy; 2025 - Syifa SICODER.&lt;/p&gt;
        &lt;/footer&gt;
    </code></pre>
</div>
➡️ Ini contoh <i>combo</i> : semantic HTML untuk struktur besar, non-semantic buat styling kecil. <br><br>
<h2>🧩 Struktur HTML5 Ideal</h2>
<div class="codean">
    <pre><code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;id&quot;&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;UTF-8&quot;&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
                &lt;title&gt;Website Syifa&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;header&gt;...&lt;/header&gt;
                &lt;nav&gt;...&lt;/nav&gt;
                &lt;main&gt;
                    &lt;section&gt;...&lt;/section&gt;
                    &lt;article&gt;...&lt;/article&gt;
                &lt;/main&gt;
                &lt;footer&gt;...&lt;/footer&gt;
            &lt;/body&gt;
        &lt;/html&gt;
    </code></pre>
</div>
🧠 Udah lengkap banget: jelas struktur, mudah dibaca, dan siap buat responsive + SEO! <br><br>
<h2>✅ Kesimpulan Card 2</h2>
<i>HTML itu kayak ngehias rumah setelah fondasinya berdiri. Di Card 2 ini, kamu belajar gimana caranya ngatur ruangan biar gak berantakan dan semua elemen punya makna.</i> <br><br>
<h3>🎯 Hal yang dipelajari:</h2>
<ul>
    <li>Cara embed konten luar pakai<span>&lt;div&gt;</span></li>
    <li>Pahami fungsi & beda <span>div</span> dan <span>span</span></li>
    <li>Kenalan sama semantic HTML dan kenapa itu penting</li>
    <li>Tahu struktur HTML5 yang ideal banget buat project beneran</li>
</ul>
