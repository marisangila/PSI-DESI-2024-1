var numero = parseInt(prompt("Informe um número para visualizar a sua tabuada:"));
var tabuada = "";

for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    tabuada += numero + " x " + i + " = " + resultado + "\n";
    }
    
alert("Tabuada de " + numero + ":\n\n" + tabuada);
