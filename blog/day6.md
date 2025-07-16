<h2>🔢 Day 6: Ganjil, Genap, atau Spesial?</h2>
Yo! Balik lagi di challenge day 6. Hari ini gua main-main sama angka, tapi gak cuma sekadar cek ganjil-genap doang. Gua tambahin juga logic layering biar makin tajam nalar ngoding gua 🧠✨
<br><br>

<h3>🎯 Tujuan Challenge:</h3>
<ul>
  <li>Latihan kondisi bersarang (<code>if</code>, <code>else if</code>, <code>else</code>)</li>
  <li>Memahami konsep ganjil, genap, dan kelipatan</li>
  <li>Nambahin validasi input & output yang lebih human-friendly</li>
</ul>
<br>

<h3>📝 Deskripsi Program:</h3>
<ol>
  <li>User input sebuah <strong>angka</strong></li>
  <li>Program ngecek apakah angka itu:
    <ul>
      <li>✅ Ganjil</li>
      <li>✅ Genap</li>
      <li>🎉 Kelipatan 10 (tampilkan pesan spesial)</li>
    </ul>
  </li>
  <li>Output-nya dikasih emoji biar makin ekspresif 😄</li>
</ol>
<br>

<h3>Contoh Output:</h3>
<div class="codean">
    <pre><code>
    Masukkan angka: 27
    ➡️ 27 adalah angka ganjil 🔹

        Masukkan angka: 44
        ➡️ 44 adalah angka genap 🔸

        Masukkan angka: 30
        🎉 30 adalah angka genap & kelipatan 10!
   </code></pre>
</div>

<h3>🛠️ Tools & Konsep:</h3>
<ul>
  <li><code>prompt()</code> dan <code>parseInt()</code> untuk ambil input dari user</li>
  <li><code>isNaN()</code> untuk validasi input</li>
  <li><code>if</code> dan <code>else if</code> untuk logika kondisi</li>
  <li>Operator <code>%</code> (modulus) buat cek ganjil/genap/kelipatan</li>
</ul>
<br>

<h2>⚙️ Eksekusi Dasar:</h2>
<div class="codean">
    <pre><code>
    const input = parseInt(prompt("Masukin angka cuy!:"));
        
        if (isNaN(input)) {
            console.log("Yeu kocak, ini bukan angka 😅");
        } else if (input % 2 === 0) {
            console.log("Nah, ini angka genap cuy! 👍");
        } else {
            console.log("Nah, ini angka ganjil cuy! 👌");
        }
   </code></pre>
</div>
<br>

<h2>🎊 Tambahin: Kelipatan 10</h2>
<div class="codean">
    <pre><code>
        else if (input % 10 === 0 && input % 2 === 0)
    </code></pre>
</div>
<br>

<h3>✅ Full Code Versi 1:</h3>
<div class="codean">
    <pre><code>
    const input = parseInt(prompt("Masukin angka cuy:"));

        if (isNaN(input)) {
            console.log("Yeu kocak, ini bukan angka 😅"); 
        } else if (input % 10 === 0 && input % 2 === 0) {
            console.log("Nah, ini angka genap dan kelipatan 10 cuy! 🎉");
        } else if (input % 2 === 0) {
            console.log("Nah, ini angka genap cuy! 👍");
        } else {
            console.log("Nah, ini angka ganjil cuy! 👌");
        }
   </code></pre>
</div>
<br>

<h2>🔁 Bonus Challenge: Versi Loop</h2>
<div class="codean">
    <pre><code>
    let input;

        while (true) {
            input = prompt("Masukin angka cuy! (ketik 'exit' buat keluar)");

            if (input === "exit") {
                console.log("Oke cuy, keluar dari program. Bye 👋");
                break;
            }
            const angka = parseFloat(input);

            if (isNaN(angka)) {
                console.log("Yeu kocak, ini bukan angka 😅"); 
            } else if (angka % 10 === 0 && angka % 2 === 0) {
                console.log("Nah, ini angka genap dan kelipatan 10 cuy! 🎉");
            } else if (angka % 2 === 0) {
                console.log("Nah, ini angka genap cuy! 🔸");
            } else {
                console.log("Nah, ini angka ganjil cuy! 🔹");
            }
        }
   </code></pre>
</div>
<br>

<h2>📉 Tambahan: Cek Angka Negatif</h2>
<br>

<h3>🚀 Final Code:</h3>
<div class="codean">
    <pre><code>
    let input;

        while (true) {
            input = prompt("Masukin angka cuy! (ketik 'exit' buat keluar)");

            if (input === "exit") {
                console.log("Oke cuy, keluar dari program. Bye 👋");
                break;
            }

            const angka = parseFloat(input);

            if (isNaN(angka)) {
                console.log("❌ Yeu kocak, ini bukan angka 😅"); 
            } else if (angka < 0) {
                console.log("📉 Ini angka negatif ya...");
            } else if (angka % 10 === 0 && angka % 2 === 0) {
                console.log("🎊 Nah, ini angka genap dan kelipatan 10 cuy!");
            } else if (angka % 2 === 0) {
                console.log("🔸 Nah, ini angka genap cuy!");
            } else {
                console.log("🔹 Nah, ini angka ganjil cuy!");
            }
        }
   </code></pre>
</div>
<br>

<h2>💬 Refleksi Singkat:</h2>
Challenge ini ngajarin gua banyak hal kecil tapi penting:
<ul>
  <li>Ngatur urutan logika <code>if-else</code> biar gak saling tabrak</li>
  <li>Validasi input user dengan cara yang ramah</li>
  <li>Kasih feedback yang ekspresif lewat emoji (biar seru!)</li>
  <li>Looping dengan <code>while (true)</code> dan <code>break</code> pas user pengen berhenti</li>
</ul>
Pokoknya makin semangat buat lanjut ke <strong>Day 7</strong>! 🚀 <br><br>
<a href="https://github.com/syfaarizal/js-ganjil-genap"><i class="fab fa-github" target="_blank" rel="noopener noreferrer" class="social-icons"></i></a>