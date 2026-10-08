let ism = prompt("Ismingizni kiriting:");
let familiya = prompt("Familiyangizni kiriting:");
let ball = Number(prompt("Necha ball to'pladingiz?"));

let natija = document.createElement("h1");

natija.innerHTML = ism + " " + familiya;

natija.style.textAlign = "center";
natija.style.marginTop = "300px";

document.body.appendChild(natija);

if (ball >= 86) {
    natija.innerHTML += "<br>Grandga kirdingiz!";
    document.body.style.backgroundColor = "green";
}
else if (ball >= 60) {
    natija.innerHTML += "<br>Kontraktga kirdingiz!";
    document.body.style.backgroundColor = "yellow";
}
else if (ball >= 30) {
    natija.innerHTML += "<br>Super kontraktga kirdingiz!";
    document.body.style.backgroundColor = "orangered";
}
else {
    natija.innerHTML += "<br>O'qishga kira olmadingiz, lox!";
    document.body.style.backgroundColor = "red";
}