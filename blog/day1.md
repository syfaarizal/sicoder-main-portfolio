Hari ini gue belajar soal <span>template literal</span> di JavaScript — itu loh, string yang bisa masukin variabel langsung ke dalam teks pakai <span><code>\${}</code></span>. Lumayan mind-blowing juga awalnya 😄
<br><br>
 Awalnya gue cuma pakai cara simpel kayak gini:
<div class="codean">
    <pre><code>
        let date = Date();
            console.log(`Hari ini tanggal ${date}`);
    </code></pre>
</div>
Yap, ini bakal munculin informasi tanggal dan waktu dalam format default dari JavaScript, misalnya: <br>
<div class="codean">
    <pre><code>
        Hari ini tanggal Sun Jun 16 2025 21:41:00 GMT+0700 (Western Indonesia Time)
    </code></pre>
</div>
Tapi... rasanya kurang rapi dan gak personal ya? Nah, akhirnya gue nemu cara yang lebih fleksibel dan bisa kita custom sesuka hati. Nih contohnya:
<div class="codean">
    <pre><code>
      const now = new Date();
      const tanggal = now.getDate();
      const bulan = now.getMonth() + 1;
      const tahun = now.getFullYear();
      const jam = now.getHours();
      const menit = now.getMinutes();

      console.log(`Hari ini tanggal ${tanggal}/${bulan}/${tahun}, pukul ${jam}:${menit < 10 ? "0" + menit : menit}`);
   </code></pre>
</div>
Hasilnya jadi lebih cakep dan mudah dibaca: <br>
<span>Hari ini tanggal 05/6/2025, pukul 21:41</span>
<br><br>
<h3>❓ Kenapa Harus menit < 10 ? "0" + menit : menit?</h3> <br>
Gue sempet bingung juga pas liat baris ini:
<div class="codean">
    <pre><code>
        menit < 10 ? "0" + menit : menit
    </code></pre>
</div>
Tapi akhirnya ngerti juga: ini adalah ternary operator, kayak if-else mini. <br>
Intinya: kalau menitnya kurang dari 10 (misalnya 5), nanti dia otomatis ditambahin nol di depannya ("05") biar tampilannya gak janggal. Bayangin kalau jam 3 lewat 7 menit ditulis 03:7, kan aneh. Tapi kalau pakai ini, tampilannya jadi 03:07 — jauh lebih readable dan estetik.
<br><br>
Kesimpulannya: pakai <span>new Date()</span> buat dapetin waktu sekarang, pecah jadi komponen tanggal, dan styling hasil output-nya pakai <span>ternary operator</span> untuk hasil yang bersih.
<br><br>
<a href="https://github.com/syfaarizal/Cetak-Nama-dan-Status"><i class="fab fa-github" target="_blank" rel="noopener noreferrer" class="social-icons"></i></a>