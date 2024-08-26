//Definiendo variables
var texto = document.getElementById("textencriptador");
var rectangle1 = document.querySelector("#separar1");
var rectangle2 = document.querySelector("#separar2");
var txtEncrypt = document.querySelector("#textencriptador");
var btnEncrypt = document.querySelector(".btonencriptador");
var btnDecrypt = document.querySelector(".btondesencriptador");
var btnCopy = document.querySelector(".btoncopiar");


//Creando funcion ocultar separador 1 y mostrar el separador 2
function rectangulo() {
    rectangle1.style.display = "none";
    rectangle2.style.display = "inline";
}

//Creando funcion encriptar
function encriptarTexto() {
    let textoIn = texto.value.toString().toLowerCase();
    let nuevoTexto = textoIn
        .replace(/e/igm, 'enter')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/o/igm, 'ober')
        .replace(/u/igm, 'ufat');
    document.getElementById("areaencriptar").innerHTML = nuevoTexto;
}

//Creando funcion desencriptar
function desencriptarTexto() {
    let textoIn = texto.value;
    let nuevoTexto = textoIn
        .replace(/enter/igm, 'e')
        .replace(/imes/igm, 'i')
        .replace(/ai/igm, 'a')
        .replace(/ober/igm, 'o')
        .replace(/ufat/igm, 'u');
    document.getElementById("areaencriptar").innerHTML = nuevoTexto;
}

//Creando Funcion Copiar
function copy() {
    var content = document.getElementById('areaencriptar');
    content.select();
    document.execCommand('copy');
    document.getElementById("textencriptador").value = "";
}

//Activando Botones
btnEncrypt.addEventListener('click', function () {
    rectangulo();
    encriptarTexto();

});

btnDecrypt.addEventListener('click', function () {
    rectangulo();
    desencriptarTexto();
});

btnCopy.addEventListener('click', function () {
    copy();
});