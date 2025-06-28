<i>“Kalau tampilan udah cakep, sekarang kita atur penempatan biar semua elemen gak ‘ngegas’ sendiri dan saling injak.”</i>
<br><br>

<h2>📍 Positioning: Biar Elemen Gak Nyasar</h2>
CSS punya properti <span>position</span> buat ngatur gimana suatu elemen "nempel" di halaman.
<br><br>

<h3>🔧 Jenis-jenis <span>position</span>:</h3><br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Tipe</th>
      <th>Deskripsi singkat</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span>static</span></td><td>Default (ikut alur HTML)</td></tr>
    <tr><td><span>relative</span></td><td>Geser relatif terhadap posisi awal</td></tr>
    <tr><td><span>absolute</span></td><td>Nempel ke parent yang posisinya relative</td></tr>
    <tr><td><span>fixed</span></td><td>Nempel ke layar, gak ikut scroll</td></tr>
    <tr><td><span>sticky</span></td><td>Gabungan relative + fixed (sticky pas scroll)</td></tr>
  </tbody>
</table>
<br>
<h3>🧪 Contoh:</h3>
<div class="codean">
    <pre><code>
        .box {
            position: relative;
            top: 20px;
            left: 30px;
        }
    </code></pre>
</div>
<br>

<h2>z-index: Siapa Di Atas Siapa?</h2>
<span>z-index</span> itu buat ngatur urutan tumpukan elemen (z-axis). Nilai makin besar = makin depan.

<div class="codean">
    <pre><code>
        .card {
            position: absolute;
            z-index: 10;
        }
    </code></pre>
</div>
Gunanya biar popup/modal gak ketutupan konten lain. Think of it like: layer-layer dalam Photoshop 🎨
<br><br>

<h2>🧘 Flexbox: Layout Auto Rapi & Centered Tanpa Drama</h2>
<br>
<h3>🔧 Properti penting di parent (container):</h3>
<div class="codean">
    <pre><code>
        .container {
            display: flex;
            justify-content: center;   /* Horizontal alignment */
            align-items: center;        /* Vertical alignment */
            flex-direction: row;         /* Bisa 'row' atau 'column' */
        }
    </code></pre>
</div>

<h3>🔧 Properti penting di child:</h3>
<div class="codean">
    <pre><code>
        .item {
            flex-grow: 1;
        }
    </code></pre>
</div>

<h3>🧪 Contoh Flexbox Sederhana:</h3>
<div class="codean">
    <pre><code>
        .flexbox {
            display: flex;
            gap: 20px;
            justify-content: space-between;
        }
    </code></pre>
</div>

<div class="codean">
    <pre><code>
        &lt;div class="flexbox"&gt;
            &lt;div class="box"&gt;1&lt;/div&gt;
            &lt;div class="box"&gt;2&lt;/div&gt;
            &lt;div class="box"&gt;3&lt;/div&gt;
        &lt;/div&gt;
    </code></pre>
</div>
<br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Properti</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span>justify-content</span></td><td>Posisi horizontal (start, center, end, space-between)</td></tr>
    <tr><td><span>align-items</span></td><td>Posisi vertical (start, center, stretch, end)</td></tr>
    <tr><td><span>flex-direction</span></td><td>Urutan layout: row / column</td></tr>
  </tbody>
</table>
<br>

<h2>🧩 CSS Grid: Buat Layout yang Lebih Kompleks</h2>
<i>Grid itu kayak Flexbox versi “matrix” — cocok buat layout 2D (baris & kolom).</i><br><br>

<h3>🔧 Contoh dasar:</h3>
<div class="codean">
    <pre><code>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
        }
    </code></pre>
</div>
<br>
<h3>🔧 Properti penting:</h3><br>
<table class="tb-blog">
  <thead>
    <tr>
      <th>Properti</th>
      <th>Fungsi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span>grid-template-columns</span></td><td>Jumlah & lebar kolom</td></tr>
    <tr><td><span>grid-template-rows</span></td><td>Jumlah & tinggi baris</td></tr>
    <tr><td><span>gap</span></td><td>Jarak antar elemen</td></tr>
    <tr><td><span>grid-column / row</span></td><td>Buat merge kolom/baris (span)</td></tr>
  </tbody>
</table>
<br>
<h3>🧪 Contoh CSS Grid:</h3>
<div class="codean">
    <pre><code>
        &lt;div class="grid-container"&gt;
            &lt;div class="grid-item"&gt;A&lt;/div&gt;
            &lt;div class="grid-item"&gt;B&lt;/div&gt;
            &lt;div class="grid-item"&gt;C&lt;/div&gt;
        &lt;/div&gt;
    </code></pre>
</div>

<div class="codean">
    <pre><code>
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    </code></pre>
</div>

🧠 <i>1fr= 1 bagian dari total ruang yang tersedia. Bisa kamu pikir kayak: 1 slot dari 3 slot yang dibagi rata.</i>
<br><br>

<h2>📱 Responsive Layout: Mulai dari Sini</h2>
Gunakan <span>@media query</span> buat bikin layout responsive berdasarkan ukuran layar.<br><br>

<h3>🧪 Contoh Dasar Media Query:</h3>
<div class="codean">
    <pre><code>
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
            }
        }
    </code></pre>
</div>

Maksudnya: kalau layar ≤ 768px (tablet/HP), ubah flex jadi vertikal.
<br><br>

<h2>🧠 Recap CSS Card 3</h2>
<ul>
  <li>✅ Tau semua tipe <span>position</span> dan cara pakainya</li>
  <li>✅ Bisa ngatur layer pakai <span>z-index</span></li>
  <li>✅ Flexbox = layout gampang, centered no stress</li>
  <li>✅ CSS Grid = bikin layout kompleks kek majalah digital</li>
  <li>✅ Media query = responsive layout? auto jalan!</li>
</ul>
