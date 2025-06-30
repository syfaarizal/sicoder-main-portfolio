Hari ini challenge-nya cukup bikin kepala keriting 😅 kita diminta bikin <b>program JavaScript</b> yang bisa menghitung umur seseorang berdasarkan <b>tahun lahir</b>. Kedengarannya gampang, tapi pas ngoding ternyata lumayan banyak jebakannya.
<br><br>
<h3>💡 Deskripsi Challenge</h3> <br>
Bikin program yang: 
<br><br>
1. Meminta user memasukkan <b>tahun lahir</b> <br>
2. Menghitung <b>umur saat ini</b> <br>
3. Menampilkan pesan seperti ini: <br>
<div class="codean">
    <pre><code>
      Kamu lahir pada tahun 2005. 
      Sekarang tahun 2025. 
      Artinya kamu berusia 20 tahun 🎉 
      Tahun depan kamu akan berusia 21 tahun.
    </code></pre>
</div><br>
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

      console.log(`Kamu lahir pada tahun ${birthYear}. Sekarang tahun ${tahunSkrg}. Artinya kamu berusia ${usia} tahun 🎉 Tahun depan kamu akan berusia ${tahunDpn} tahun.`);
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
Di JavaScript console, <span><code>\n</code></span> berfungsi kayak <span><code>&lt;br&gt;</code></span> di HTML. Jadi kita bisa format output-nya lebih enak dibaca. <br><br>
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
          console.log(`Kamu lahir pada tahun ${birthYear}.\nSekarang tahun ${tahunSkrg}.\nArtinya kamu berusia ${usia} tahun 🎉\nTahun depan kamu akan berusia ${tahunDpn} tahun.`);
        }
   </code></pre>
</div>
<br>
<h3>🎯 Hal yang Gua Pelajari Hari Ini</h3>
   1. Jangan campur <span>prompt()</span> dan <span>readline()</span> 😅 <br>
   2. Gunakan <span>parseInt()</span> untuk memastikan input berupa angka <br>
   3. Validasi input itu penting banget! <br>
   4. Tambahan kecil kayak <span><code>\n</code></span> bisa bikin program lebih enak dibaca <br><br>
Setiap challenge itu bukan cuma soal berhasil atau nggaknya kode jalan, tapi tentang <b>gimana kita mikir dan belajar dari error-nya.</b> Dan di hari ke-2 ini, gua makin ngerti kenapa debugging itu bukan musuh, tapi sahabat. <br><br>
<a href="https://github.com/syfaarizal/js-age-calculator"><i class="fab fa-github" target="_blank" rel="noopener noreferrer" class="social-icons"></i></a>