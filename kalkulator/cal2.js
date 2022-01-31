kali.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = a * b;
    document.querySelector("#hasil").innerHTML = c;
}

bagi.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = a / b;
    document.querySelector("#hasil").innerHTML = c;
}

tambah.onclick = function () {
    let a = Number(document.querySelector("#bil1").value);
    let b = Number(document.querySelector("#bil2").value);
    let c = a + b;
    document.querySelector("#hasil").innerHTML = c;
}

function hapus() {
    kalku.bil1.value = "";
    kalku.bil2.value = "";
    hasil.innerHTML = "";
}