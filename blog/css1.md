<i>“HTML doang tuh kayak nasi tanpa lauk. CSS-lah yang bikin tampilannya gurih, aesthetic, dan pantas dipajang.”</i>
<br><br>
<h2>🌈 Apa Itu CSS?</h2>
CSS (Cascading Style Sheets) adalah bahasa styling buat ngatur tampilan elemen HTML. Jadi kalau HTML itu struktur rangka, CSS itu bajunya, biar website gak kelihatan kayak zaman web dinosaurus 🦖.
<br><br>

<h3>🔧 CSS ngatur apa aja?</h3>
<ul>
  <li>Warna, ukuran, dan jenis font</li>
  <li>Jarak antar elemen</li>
  <li>Posisi layout</li>
  <li>Efek hover, animasi, dan banyak lagi</li>
</ul>
<br>

<h3>🛠️ Gimana Cara Pakai CSS di HTML?</h3>
Ada 3 cara nerapin CSS ke halaman HTML kamu:
<br><br>

<b>1. Inline CSS</b><br>
Langsung masukin style di tag HTML. <br>
🚫 Dipakai buat testing doang, jangan buat project serius.
<div class="codean">
    <pre><code>
        &lt;p style="color: blue; font-size: 20px;"&gt;Hello CSS!&lt;/p&gt;
    </code></pre>
</div>

<b>2. Internal CSS</b><br>
Ditulis di dalam tag <span>&lt;style&gt;</span> di <span>&lt;head&gt;</span>.
<div class="codean">
    <pre><code>
        &lt;head&gt;
            &lt;style&gt;
                p {
                color: green;
                }
            &lt;/style&gt;
        &lt;/head&gt;
    </code></pre>
</div>

<b>3. External CSS ✅ Best Practice!</b><br>
CSS dipisah di file sendiri, lalu di-link ke HTML-nya.
<div class="codean">
    <pre><code>
        &lt;!-- HTML --&gt;
        &lt;link rel="stylesheet" href="style.css"&gt;
    </code></pre>
</div>
<div class="codean">
    <pre><code>
        /* style.css */
        p {
            color: purple;
        }
    </code></pre>
</div>
<br>

<h2>🧠 Selektor CSS</h2>
Selektor itu cara kamu nunjuk: “eh CSS, tolong style bagian ini ya!”

<table class="tb-blog">
  <thead>
    <tr>
      <th>Tipe Selektor</th>
      <th>Contoh</th>
      <th>Keterangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tag</td>
      <td><span>p {}</span></td>
      <td>Style semua tag <span>&lt;p&gt;</span></td>
    </tr>
    <tr>
      <td>Class</td>
      <td><span>.judul {}</span></td>
      <td>Style semua elemen yang punya <span>class="judul"</span></td>
    </tr>
    <tr>
      <td>ID</td>
      <td><span>#hero {}</span></td>
      <td>Style elemen yang punya <span>id="hero"</span> (unik!)</td>
    </tr>
  </tbody>
</table>
<br>
📝 <b>Class</b> bisa dipakai berkali-kali, <b>ID</b> cuma satu kali per halaman.
<br><br>

<h2>🧪 Properti & Value</h2>
CSS punya gaya kayak:
<div class="codean">
    <pre><code>
        selector {
            properti: nilai;
        }
    </code></pre>
</div>

Contoh real:
<div class="codean">
    <pre><code>
        h1 {
            color: red;
            font-size: 36px;
            text-align: center;
        }
    </code></pre>
</div>

<table class="tb-blog">
  <thead>
    <tr>
      <th>Properti</th>
      <th>Artinya</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>color</span></td>
      <td>Warna teks</td>
    </tr>
    <tr>
      <td><span>font-size</span></td>
      <td>Ukuran teks</td>
    </tr>
    <tr>
      <td><span>font-family</span></td>
      <td>Jenis huruf</td>
    </tr>
    <tr>
      <td><span>text-align</span></td>
      <td>Perataan teks (left, center, etc)</td>
    </tr>
  </tbody>
</table>
<br>

<h2>💬 Komentar di CSS</h2>
Komentar buat ngasih catatan, gak bakal muncul di browser.
<div class="codean">
    <pre><code>
        /* Ini komentar, aman buat curhat */
        h1 {
            color: pink;
        }
    </code></pre>
</div>
<br>

<h2>🔧 Contoh Lengkap (Internal CSS)</h2>
<div class="codean">
    <pre><code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="id"&gt;
            &lt;head&gt;
                &lt;meta charset="UTF-8"&gt;
                &lt;title&gt;Contoh CSS&lt;/title&gt;
                &lt;style&gt;
                    body {
                        background-color: #f7f7f7;
                        font-family: 'Poppins', sans-serif;
                    }
                    h1 {
                        color: #ff3366;
                        text-align: center;
                    }
                    p {
                        font-size: 18px;
                        line-height: 1.6;
                        color: #333;
                    }
                    .highlight {
                        background-color: yellow;
                        font-weight: bold;
                    }
                    #judulUtama {
                        font-size: 40px;
                    }
                &lt;/style&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;h1 id="judulUtama"&gt;Selamat Datang!&lt;/h1&gt;
                &lt;p&gt;Ini contoh penggunaan &lt;span class="highlight"&gt;CSS Internal&lt;/span&gt; di halaman web.&lt;/p&gt;
            &lt;/body&gt;
        &lt;/html&gt;
   </code></pre>
</div>
<br>

<h2>🧠 Recap CSS Card 1</h2>
<ul>
  <li>✅ CSS = Baju buat HTML</li>
  <li>✅ Bisa ditulis: inline, internal, external</li>
  <li>✅ Selektor: tag, class <span>.</span>, id <span>#</span></li>
  <li>✅ Properti: ngatur warna, font, ukuran, posisi</li>
  <li>✅ External CSS = cara paling direkomendasikan!</li>
</ul>
