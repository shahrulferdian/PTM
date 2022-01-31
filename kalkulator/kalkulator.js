function kali() {
  let hasil = document.querySelector("#hasil"); //id h1 dipanggil pake selector trs taruh di dalam variabel
  a = eval(kalku.bil1.value); // kalku ini bisa digunakan utk mendefiniskan bil1, dan memberitau bhw bil1 itu ada di dalam form yang bernama kalku, dan value digunakan utk mengambil value/nilai inputannya
  b = eval(kalku.bil2.value);
  c = a * b;
  hasil.innerHTML = c; // variabel c dimasukkan ke dlm variabel hasil yg dihubungkan sama innerhtml
}

function bagi() {
  let hasil = document.querySelector("#hasil");
  a = eval(kalku.bil1.value);
  b = eval(kalku.bil2.value);
  c = a / b;
  hasil.innerHTML = c;
}

function tambah() {
  let hasil = document.querySelector("#hasil");
  a = eval(kalku.bil1.value);
  b = eval(kalku.bil2.value);
  c = a + b;
  hasil.innerHTML = c;
}

function kurang() {
  let hasil = document.querySelector("#hasil");
  a = eval(kalku.bil1.value);
  b = eval(kalku.bil2.value);
  c = a - b;
  hasil.innerHTML = c;
}

//function untuk mengosongi data
function hapus() {
  kalku.bil1.value = "";
  kalku.bil2.value = "";
  hasil.innerHTML = "";
}
