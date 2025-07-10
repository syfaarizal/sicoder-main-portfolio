<br>
<blockquote style="margin: 1rem 0; padding: 1rem; border-left: 4px solid rgb(145, 31, 31); font-style: italic; color: #fff;">"Skip boleh, nyerah jangan. Balik gas lagi!"</blockquote>
<br>
Setelah sempet vakum karena fokus ke project, akhirnya balik lagi ke JS challenge! Kali ini gua dapet tantangan sederhana tapi lumayan ngasah otak: looping nama dan bikin output yang lebih kreatif. <br><br>
<h2>🎯 Deskripsi Challenge</h2>
Bikin program yang:
<ul>
  <li>Cetak namamu sebanyak <span>n</span> kali (input dari user)</li>
  <li>Tambahkan nomor urut di depan</li>
</ul>

<div class="codean">
    <pre><code>
        1. Syifa Fauziyah Arizal  
        2. Syifa Fauziyah Arizal  
        3. Syifa Fauziyah Arizal
    </code></pre>
</div>

<h3>🔍 N adalah Apa?</h3>
Nah, <span>n</span> di sini maksudnya adalah jumlah pengulangan yang diminta user. Jadi nanti user diminta input berapa kali namanya mau dicetak.  
Simple? Yap. Tapi otak sempet nge-lag, karena udah cukup lama nggak megang JS. 😅
<br><br>

<h2>🧪 Percobaan Pertama</h2>
<div class="codean">
    <pre><code>
    const input = prompt("Mau cetak nama berapa kali nih? ");

        for (let i = 1; i <= input; i++) {
            console.log(i + ". " + "Syifa Fauziyah Arizal");
        }
   </code></pre>
</div>
Work? Yup! Tapi belum tahan banting.
<br><br>

<h2>✅ Versi Validasi Input</h2>
<div class="codean">
    <pre><code>
    const input = Number(prompt("Mau cetak nama berapa kali nih? "));

        if (!isNaN(input) && input > 0) {
            for (let i = 1; i <= input; i++) {
                console.log(`${i}. Syifa Fauziyah Arizal`);
            }
        } else {
            console.log("Masukin angka yang bener dong 😅");
        }
   </code></pre>
</div>

<h3>🔍 Penjelasan:</h3>
<ul>
  <li><span>isNaN()</span> itu artinya <i>is Not a Number</i>, makanya kita pake <span>!isNaN()</span> supaya gak ngejalanin loop kalau user masukin angka 0 atau negatif (lah ngapain juga ngeprint nama 0 kali, kan? 😆).</li>
</ul>
<br>

<h2>🎁 Bonus Challenge</h2>
Level up! Disuruh nambahin:
<ul>
  <li>Emoji berbeda tiap baris (looping dari array)</li>
  <li>Kalimat motivasi berbeda tiap baris</li>
  <li>Semua output dijadikan satu string gabungan</li>
</ul>
<br>
<h3>Contoh Output:</h3>
<div class="codean">
    <pre><code>
        1. Syifa 🔥 — Keep going!  
        2. Syifa 💡 — You’re learning!  
        3. Syifa 🌱 — Progress every day!
    </code></pre>
</div>

<h3>💡 Solusi: Pakai Array dan Modulus</h3>
<div class="codean">
    <pre><code>
        const emojis = ["🔥", "💡", "🌱", "🚀", "🎯", "💪", "🧠", "✨", "🔧", "🎉"];
        const motivation = [
            "Keep going!",
            "You can do it!",
            "Believe in yourself!",
            "Stay positive!",
            "Never give up!",
            "Dream big!",
            "Stay focused!",
            "Work hard!",
            "Embrace challenges!",
            "Success is yours!",
        ];
    </code></pre>
</div>

<h3>🔍 Kenapa Pakai <span>%</span> (Modulus)?</h3>
Misalnya <span>i = 11</span>, terus <span>emoji[11 % 10] = emoji[1]</span> artinya dia akan balik ke awal array saat indeks udah mentok. Cara jenius buat <i>looping infinite</i> dalam batas array 💡.<br>
✅ Simpel, efisien, dan bikin output kreatif tanpa error!
<br><br>

<h2>🧠 Final Code</h2>
<div class="codean">
    <pre><code>
    const input = Number(prompt("Mau cetak nama berapa kali nih? "));

        const emojis = ["🔥", "💡", "🌱", "🚀", "🎯", "💪", "🧠", "✨", "🔧", "🎉"];
        const motivation = [
            "Keep going!",
            "You can do it!",
            "Believe in yourself!",
            "Stay positive!",
            "Never give up!",
            "Dream big!",
            "Stay focused!",
            "Work hard!",
            "Embrace challenges!",
            "Success is yours!",
        ];

        let hasil = "";

        if (!isNaN(input) && input > 0) {
            for (let i = 0; i < input; i++) {
                const emoji = emojis[i % emojis.length];
                const quote = motivation[i % motivation.length];
                hasil += `${i + 1}. Syifa ${emoji} - ${quote}\n`;
            }
            console.log(hasil);
        } else {
            console.log("Masukin angka yang bener dong 😅");
        }
   </code></pre>
</div>
<br>

<h2>📝 Refleksi Mini</h2>
Gua sempet stuck, tapi setelah ngulik, nyari referensi, dan ngasih waktu buat otak napas, ternyata bisa kok.  
Challenge ini walaupun terlihat ringan, justru ngingetin gua pentingnya basic, kayak:
<ul>
  <li>✔️ Validasi input</li>
  <li>✔️ Looping array dengan modulus</li>
  <li>✔️ Gabungin string dengan newline <span>\n</span></li>
</ul>
Kadang kita terlalu fokus sama hal besar, padahal hal kecil kaya gini yang ngebentuk pondasi. Dan ya, gua balik lagi. Gas!
<br><br>
<h3>🧠 Tips dari Syifa Edition™:</h3>
<blockquote style="margin: 1rem 0; padding: 1rem; border-left: 4px solid rgb(145, 31, 31); font-style: italic; color: #fff;">“Kalau stuck, jangan panik. Break dulu. Minum air putih. Jalan bentar. Terus balik ngoding lagi. Otak juga butuh refresh.”</blockquote>
