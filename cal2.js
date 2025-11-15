// Kalkulator DOM Dasar JavaScript (deskripsi dan nama variabel dalam Bahasa Indonesia)
var tampilan = document.getElementById("tampilan");
var angkaTombol = document.getElementsByClassName("angka");
var operatorTombol = document.getElementsByClassName("operator");
var samaDenganTombol = document.getElementsByClassName("sama-dengan");
var resetTombol = document.getElementsByClassName("reset");

let namaAntum =document.getElementsByClassName("namakamu")


var sementara = "";
var operator = "";
var angkal = null;
var angka2 = null;
var hasilBaru = false;
// 10 + 11
// 1. Event untuk tombol angka dan titik
for (var i = 0; i < angkaTombol.length; i++) {
angkaTombol [i].addEventListener("click", function () {
if (hasilBaru) {
sementara = "";
hasilBaru = false;
}
sementara+=this.textContent;
tampilan.value = sementara;
});
}

//2. Tombol opperator
for (let index = 0; index < operatorTombol.length; index++) {
operatorTombol [index].addEventListener("click", function () {
if (sementara ==="" && this.textContent !== "-") {
return;
}
if (operator !== "") {
return;
}
angkal = parseFloat(sementara);
operator = this.textContent;
sementara = "";
tampilan.value = operator;
});
}
//event untuk tombol sama dengan
for (let k = 0 ; k < samaDenganTombol.length; k++) {
samaDenganTombol[k].addEventListener("click", function () {
//stop proses berikutnya jika operator dan data sementara tidak ada
if (operator ==="" || sementara === "") {
return;
}
angka2 = parseFloat(sementara);
let hasil;
//jika operator sama dengan +
if (operator === "+") {
//maka hasil adalah angkal + angka2
hasil = angkal + angka2;
//selain itu, jika operator samadengan
} else if (operator === "-") {
//maka hasil adalah angkal angka2
hasil=angkal-angka2;
} else if (operator === "x") {
hasil = angkal*angka2;
} else if (operator === "/") {
hasil = angkal / angka2;
} else {
    return;
}

tampilan.value = hasil;
sementara = String(hasil);
angkal = null;
angka2 = null;
operator = "";
hasilBaru = true;
});
}
//tombol reset
for (let r = 0 ; r < resetTombol.length; r++) {
resetTombol [r].addEventListener("click", function () {
tampilan.value = "";
sementara = "";
operator = "";
angkal = null;
angka2 = null;
hasilBaru = false;
});
}