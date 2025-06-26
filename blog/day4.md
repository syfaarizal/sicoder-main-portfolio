Hari ke-4 tantangan ngoding ini agak beda vibes-nya karena gua disuruh bikin game sederhana: Number Guessing Game alias Tebak Angka! Sekilas emang kedengeran receh, tapi ternyata lumayan banyak yang harus di perhatiin, terutama buat interaksi ke user dan logika kondisional. <br><br>
<h3>🎮 Deskripsi Challenge:</h3>
Program harus bisa: <br>
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
</ol> <br>
Contoh output-nya: <br>
<div class="codean">
      <pre><code>
        Saya menyimpan angka antara 1 dan 10. <br>
        Coba tebak!
        Tebakan kamu: 4
        Terlalu kecil! <br>
        Tebakan kamu: 7
        Terlalu besar! <br>
        Tebakan kamu: 6
        Selamat! Kamu menebak angka dengan benar dalam 3 percobaan.
    </code></pre>
</div> <br>
<h3>🧠 Debugging Kocak</h3> <br>
Awalnya gua bikin gini: <br>
<div class="codean">
    <pre><code>
        const angkaRandom:
        Math.floor(Math.random() * 10) + 1:
    </code></pre>
</div>
Dan error dong. Gua sempet bengong. Ternyata gua salah pakai <span>:</span> yang mestinya <span>=</span> buat assignment. Klasik type JavaScript. <br><br>
<h3>🚀 Versi Perbaikan Awal</h3> <br>
Setelah dibenerin dan disusun ulang logikanya, ini versi working code awal gua: <br>
<div class="codean">
    <pre><code>
    let angkaRandom = Math.floor(Math.random() * 10) + 1;
    let attempt = 0;
    let ulang = true;

        while(ulang) {
          const inputUser = prompt("Saya menyimpan angka antara 1 dan 10. Coba tebak!");
          attempt++;

          const userInput = parseInt(inputUser);

          if (isNaN(userInput)) {
            console.log("Eh? Masukin angka ya 😄");
          } else {
            if (userInput < angkaRandom) {
              console.log("Terlalu kecil 😅");
            } else if (userInput > angkaRandom) {
              console.log("Terlalu besar 😅");
            } else {
              console.log(\`🎉 Selamat! Kamu menebak angka dengan benar dalam \${attempt} percobaan.\`);
              ulang = false;
            }
          }
        }
   </code></pre>
</div> 
Kodenya simple dan langsung jalan. Tapi gua ngerasa masih bisa ditingkatin. <br><br>
<h2>✨ Bonus Challenge</h2> <br>
Ada tambahan tantangan opsional: <br>
<ul>
    <li>Validasi input angka</li>
    <li>Sistem skor (komentar berdasarkan jumlah percobaan</li>
    <li>Mode sulit: 1-50</li>
</ul> <br>
<h3>✅ Validasi Input & Skor</h3> <br>
Validasi angka udah gua pasang pakai <span>isNaN()</span>. Tinggal tambahin logika sistem skor: <br>
<div class="codean">
    <pre><code>
        if(attempt <= 3) {
          console.log("🔥 Pro banget! Kamu cepat banget nebaknya.");
        } else if (attempt <= 6) {
          console.log("👍 Lumayan! Tapi bisa lebih cepat.");
        } else {
          console.log("😅 Wah, perlu latihan nih. Tapi tetap semangat!");
        }
    </code></pre>
</div> <br>
<h3>🎯 Mode Sulit (1-50)</h3> <br>
Gua pakai <span>confirm()</span> buat nanya apakah user mau main di mode sulit: <br>
<div class="codean">
    <pre><code>
        let modeSulit = confirm("Mau main di mode sulit? (Angka 1–50)");
        let rangeText = modeSulit ? "1 dan 50" : "1 dan 10";
        let angkaRandom = Math.floor(Math.random() * (modeSulit ? 50 : 10)) + 1;
    </code></pre>
</div>
Lalu gua masukin rangeText ke dalam <span>prompt()</span> supaya dinamis: <br>
<div class="codean">
    <pre><code>
        const inputUser = prompt(\`Saya menyimpan angka antara \${rangeText}. Coba tebak!\`);
    </code></pre>
</div> <br>
<h3>🧩 Final Version: Full Interaktif</h3>
<div class="codean">
    <pre><code>
    let modeSulit = confirm("Mau main di mode sulit? (Angka 1–50)");
    let rangeText = modeSulit ? "1 dan 50" : "1 dan 10";
    let angkaRandom = Math.floor(Math.random() * (modeSulit ? 50 : 10)) + 1;
    let attempt = 0;
    let ulang = true;

        while(ulang) {
          const inputUser = prompt(\`Saya menyimpan angka antara \${rangeText}. Coba tebak!\`);
          attempt++;

          const userInput = parseInt(inputUser);

          if (isNaN(userInput)) {
            console.log("Eh? Masukin angka ya 😄");
          } else {
            if (userInput < angkaRandom) {
              console.log("Terlalu kecil 😅");
            } else if (userInput > angkaRandom) {
              console.log("Terlalu besar 😅");
            } else {
              console.log(\`🎉 Selamat! Kamu menebak angka dengan benar dalam \${attempt} percobaan.\`);

              if(attempt <= 3) {
                console.log("🔥 Pro banget! Kamu cepat banget nebaknya.");
              } else if (attempt <= 6) {
                console.log("👍 Lumayan! Tapi bisa lebih cepat.");
              } else {
                console.log("😅 Wah, perlu latihan nih. Tapi tetap semangat!");
              }

              ulang = false;
            }
          }
        }
   </code></pre>
</div> <br>
<h3>💬 Refleksi</h3> <br>
Yang gua pelajari di challenge ini:
<ul>
    <li>Pentingnya teliti nulis syntax (typo kecil bisa error besar)</li>
    <li>Logika <span>if-else</span> bisa ditingkatin jadi interaktif dan dinamis</li>
    <li><span>confirm()</span> dan <span>prompt()</span> bikin pengalaman user lebih engaging</li>
    <li>Ternyata debugging seru juga kalau dijadiin bahan belajar</li>
</ul> <br>
Dan tentu aja, makin semangat buat lanjut ke Day 5 🚀