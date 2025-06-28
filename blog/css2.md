<i>“Kalau Card 1 itu kenalan, Card 2 ini udah mulai dandanin. Styling teks biar rapi, dan ngerti cara ngatur ruang antar elemen kayak pro UI designer.”</i>
<br><br>

<h2>✍️ Styling Teks (Biar Gak Flat)</h2>
<br>
<h3>🔤 Properti Styling Teks:</h3>
<br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Properti</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span>color</span></td><td>Warna teks</td></tr>
    <tr><td><span>font-size</span></td><td>Ukuran huruf (px, rem, %, dll)</td></tr>
    <tr><td><span>font-family</span></td><td>Jenis font</td></tr>
    <tr><td><span>font-weight</span></td><td>Tebal tipisnya huruf <span>(normal</span>, <span>bold</span>, <span>500</span>, dll)</td></tr>
    <tr><td><span>text-align</span></td><td>Rata kiri, kanan, tengah, atau justify</td></tr>
    <tr><td><span>line-height</span></td><td>Jarak antar baris</td></tr>
    <tr><td><span>letter-spacing</span></td><td>Jarak antar huruf</td></tr>
    <tr><td><span>text-transform</span></td><td>Ubah huruf jadi uppercase/lowercase/capitalize</td></tr>
  </tbody>
</table>
<br>

<h3>🔧 Contoh:</h3>
<div class="codean">
    <pre><code>
        p {
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            color: #333;
            text-align: justify;
            line-height: 1.8;
            text-transform: capitalize;
        }
    </code></pre>
</div>
Paragraf kamu gak cuma enak dibaca, tapi juga enak diliat ✨
<br><br>

<h2>📦 Box Model: Pahami Dunia Kotak HTML</h2>
<i>“Semua elemen HTML itu sebenarnya... kotak. Dan CSS bantu kamu ngatur kotak itu kayak main Tetris.”</i>
<br><br>

<h3>🧱 Box Model terdiri dari:</h3>
<div class="codean">
    <pre><code>
        ⬅️ <b>Margin:</b> ruang luar
        ⬅️ <b>Border:</b> garis tepi
        ⬅️ <b>Padding:</b> ruang dalam
        ⬅️ <b>Content:</b> isi aslinya
    </code></pre>
</div>
<br>
<h3>🔍 Penjelasan:</h3>
<ul>
  <li><b>Content</b>: isi utama (teks/gambar)</li>
  <li><b>Padding</b>: ruang antara content & border</li>
  <li><b>Border</b>: garis pinggir elemen</li>
  <li><b>Margin</b>: jarak antar elemen</li>
</ul>
<br>

<h3>🔧 Contoh Styling:</h3>
<div class="codean">
    <pre><code>
        .box {
            width: 300px;
            height: 200px;
            padding: 20px;
            margin: 40px auto;
            border: 2px solid #ff4d4d;
            background-color: #fff0f5;
        }
    </code></pre>
</div>
🧠 <b>Padding</b> = isi dikasih napas<br>
🧠 <b>Margin</b> = box-nya dikasih space dari yang lain
<br><br>

<h2>📐 Width & Height</h2>
<br>
<h3>🧊 Properti penting:</h3>
<ul>
  <li><span>width</span> → lebar elemen</li>
  <li><span>height</span> → tinggi elemen</li>
</ul>
<br>
Satuan yang bisa dipakai:
<ul>
  <li><span>px</span> → fix</li>
  <li><span>%</span> → relatif ke parent</li>
  <li><span>vw</span>/<span>vh</span> → relatif ke ukuran layar</li>
</ul>

<div class="codean">
    <pre><code>
        .card {
            width: 80%;
            height: auto;
        }
    </code></pre>
</div>
<br>

<h2>🎨 Background Styling</h2>
<br>
<h3>🌈 Properti yang sering dipakai:</h3><br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Properti</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span>background-color</span></td><td>Warna latar belakang</td></tr>
    <tr><td><span>background-image</span></td><td>Gambar latar</td></tr>
    <tr><td><span>background-size</span></td><td>Ukuran gambar (cover, contain)</td></tr>
    <tr><td><span>background-repeat</span></td><td>Ulang gambar atau nggak</td></tr>
    <tr><td><span>background-position</span></td><td>Posisi gambar (center, top, dll)</td></tr>
  </tbody>
</table>
<br>
<div class="codean">
    <pre><code>
        body {
            background-color: #f0f0f0;
            background-image: url('bg.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    </code></pre>
</div>
<br>

<h2>✨ Border & Radius</h2>

<h3>🔧 Properti border:</h3>
<div class="codean">
    <pre><code>
        .box {
            border: 3px dashed #ff69b4;
            border-radius: 12px;
        }
    </code></pre>
</div>
<ul>
  <li><span>border</span>: garis tepi (solid, dashed, dotted)</li>
  <li><span>border-radius</span>: bikin sudut jadi melengkung</li>
</ul>
<i>Cocok buat style card</i> biar gak kaku kayak tugas deadline!
<br><br>

<h2>🌫️ Box Shadow</h2>
<i>Efek glow, neomorphism, atau shadow aesthetic bisa kamu bikin pakai ini:</i>
<br>
<div class="codean">
    <pre><code>
        .card {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
    </code></pre>
</div>

Format umum:
<div class="codean">
    <pre><code>
        box-shadow: x-offset y-offset blur color;
    </code></pre>
</div>
<br>

<h2>🔎 Block vs Inline vs Inline-block</h2>
<br>
<h3>🧩 Tipe display elemen:</h3><br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Tipe</th>
      <th>Efeknya</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span>block</span></td>
      <td>Makan 1 baris penuh (kayak <span>&lt;div&gt;</span>, <span>&lt;p&gt;</span>)</td>
    </tr>
    <tr>
      <td><span>inline</span></td>
      <td>Cuma sebesar isi konten (kayak <span>&lt;span&gt;</span>, <span>&lt;a&gt;</span>)</td>
    </tr>
    <tr>
      <td><span>inline-block</span></td>
      <td>Bisa diset width/height tapi tetap inline</td>
    </tr>
  </tbody>
</table>
<br>
<h3>🔧 Contoh:</h3>
<div class="codean">
    <pre><code>
        span {
            display: inline-block;
            width: 100px;
            height: 100px;
        }
    </code></pre>
</div>
<br>

<h2>🧠 Recap CSS Card 2</h2>
<ul>
  <li>✅ Bisa styling teks biar gak kaku</li>
  <li>✅ Paham konsep box model & cara ngatur spasi</li>
  <li>✅ Mainin background, border, shadow biar lebih aesthetic</li>
  <li>✅ Tahu beda display block vs inline vs inline-block</li>
</ul>
