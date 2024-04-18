var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));
var numero3 = parseFloat(prompt("Digite o terceiro número:"));

var maiorNumero = numero1;

if (numero2 > maiorNumero) {
    maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
    maiorNumero = numero3;
}

alert("O maior número é: " + maiorNumero);