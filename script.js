var input = document.querySelector('#input-text');
var output = document.querySelector('#output');


function cript(){
    var texto = input.value.toLowerCase();
    var result = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + result + '</textarea>' + '<button class="btn-cop" id="copiar" onclick="copiar()">Copiar<button>'


}

function decript(){
    var texto = input.value.toLowerCase();
    var  resultdecripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultdecripto + '</textarea>' + '<button class="btn-cop" id="copiar" onclick="copiar()">Copiar</button>'


}   

function copiar() {
    var textoCop = document.getElementById('input-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado!");
}  
