var altura = parseFloat(prompt("Informe a sua altura(em metros):"));
var peso = parseFloat(prompt("Informe seu peso:"));
var mensagem = "O seu IMC é: "
imc = peso / (altura**2);

alert(mensagem + imc.toFixed(2));