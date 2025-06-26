Hari ke-3 tantangan ngoding ini lumayan bikin dahi berkerut tapi juga bikin senyum sendiri pas berhasil. Gua dikasih tantangan untuk bikin kalkulator interaktif sederhana pakai JavaScript. Sounds easy? Wait till you debug the errors 🤯 <br><br>
Awalnya gua nulis kayak gini: <br>
<div class="codean">
    <pre><code>
        const angka1 = prompt("Masukan angka ke 1");
        const angka2 = prompt("Masukan angka ke 2");
        const angka1 = prompt("(+, -, *, /)");
    </code></pre>
</div>
Yes, gua salah ngulang <span>angka1</span>, dan bagian prompt operator juga salah banget. Udah gitu gua lanjut bikin <span>switch</span>: <br>
<div class="codean">
    <pre><code>
        switch(angka1){
          case = "+":
            console.log(angka1 + angka2)
        }
    </code></pre>
</div>
Masalah pertama? Angka-angka yang kita dapet dari <span>prompt()</span> itu <b>string</b>, bukan number. Jadi kalau langsung dijumlahin, hasilnya malah digabung, bukan ditambahin. Misal: <span>"2" + "3" = "23"</span>, bukan <span>5</span>. Solusinya? Gunakan <span>parseFloat()</span> biar bisa handle <b>angka desimal</b> juga. <br>
<div class="codean">
    <pre><code>
        const num1 = parseFloat(angka1);
        const num2 = parseFloat(angka2);
        let hasil; // Disiapkan dulu buat nampung hasil operasi
    </code></pre>
</div>
Setelah itu, gua refactor jadi kayak gini: <br>
<div class="codean">
    <pre><code>
    const angka1 = prompt("Masukan angka ke 1");
    const angka2 = prompt("Masukan angka ke 2");
    const operator = prompt("Masukan operator (+, -, *, /)");

        const num1 = parseFloat(angka1);
        const num2 = parseFloat(angka2);
        let hasil;

        if (operator === "+"){
            hasil = num1 + num2;
        } else if (operator === "-"){
            hasil = num1 - num2;
        } else if (operator === "*"){
            hasil = num1 * num2;
        } else if (operator === "/"){
            hasil = num1 / num2;
        } else {
            hasil = "Hasil tidak diketahui";
        }

        console.log("Hasil: " + hasil);
   </code></pre>
</div>
Sampai sini udah bisa jalan, tapi masih bisa di-improve. Masuk ke bonus challenge: <br><br>
<h3>✨ Bonus Challenge:</h3>
<ol>
    <li>Validasi input biar yakin itu beneran angka pakai <span>isNaN()</span></li>
    <li>Ganti <span>if-else</span> jadi <span>switch-case</span> biar lebih clean</li>
    <li>
        Tampilkan hasil dengan format menarik kayak:
        <ul>
          <li>"📊 Hasil dari 10 / 2 adalah 5"</li>
        </ul>
    </li>
</ol> <br>
<h3>Final Versi dengan Validasi dan <span>switch-case</span>:</h3>
<div class="codean">
    <pre><code>
    const angka1 = prompt("Masukan angka ke 1");
    const angka2 = prompt("Masukan angka ke 2");
    const operator = prompt("Masukan operator (+, -, *, /)");

        const num1 = parseFloat(angka1);
        const num2 = parseFloat(angka2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Input bukan angka yang valid!");
        } else {
            let hasil;

            switch(operator) {
                case "+": hasil = num1 + num2; break;
                case "-": hasil = num1 - num2; break;
                case "*": hasil = num1 * num2; break;
                case "/": hasil = num2 === 0 ? "⚠️ Error: bagi 0" : num1 / num2; break;
                default:
                    hasil = "❌ Operator tidak dikenali. Silakan gunakan +, -, *, atau /.";
            }

            if (typeof hasil === "string") {
                console.log(hasil);
            } else {
                console.log(`📊 Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`);
            }
        }
   </code></pre>
</div> <br>
<h3>🔁 Level Up! Tambah Function dan Looping</h3>
Gua ngerasa ini bisa dibikin lebih clean lagi dengan function dan loop. Function biar reusable, loop biar bisa dihitung ulang tanpa refresh halaman. <br><br>
<h3>Final versi modular dan interaktif:</h3>
<div class="codean">
    <pre><code>
    let lanjut = true;

        while (lanjut) {
            const angka1 = prompt("Masukan angka ke 1");
            const angka2 = prompt("Masukan angka ke 2");
            const operator = prompt("Masukan operator (+, -, *, /)");

            const num1 = parseFloat(angka1);
            const num2 = parseFloat(angka2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("❌ Input bukan angka yang valid!");
            } else {

                function hitung(num1, num2, operator) {
                    switch (operator) {
                        case "+": return num1 + num2;
                        case "-": return num1 - num2;
                        case "*": return num1 * num2;
                        case "/": return num2 === 0 ? "⚠️ Error: bagi 0" : num1 / num2;
                        default: return "❌ Operator tidak dikenali. Silakan gunakan +, -, *, atau /.";
                    }
                }

                const hasil = hitung(num1, num2, operator);

                if (typeof hasil === "string") {
                    console.log(hasil);
                } else {
                    console.log(`📊 Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`);
                }
            }

            lanjut = confirm("Ingin menghitung lagi?");
        }
   </code></pre>
</div> <br>
<h3>🎯 Catatan Kecil:</h3>
<ul>
    <li><span>parseFloat()</span> lebih fleksibel dibanding <span>parseInt()</span></li>
    <li><span>isNaN()</span> jadi garda depan buat validasi input angka</li>
    <li>Function bikin kode lebih bersih dan bisa di-reuse</li>
    <li>Loop <span>while</span> + <span>confirm()</span> bikin program jadi dinamis dan fun dipakai user</li>
</ul> <br>
Dan akhirnya, ini jadi bukan cuma kalkulator biasa, tapi juga latihan berpikir logis, rapiin struktur kode, dan kasih pengalaman interaktif buat user. Sampai jumpa di challenge selanjutnya! 🚀