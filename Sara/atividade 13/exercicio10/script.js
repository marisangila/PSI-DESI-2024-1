function exibirTabuada() {
    var numero = parseInt(prompt("Digite um número para ver a sua tabuada:"));
    var tabuada = "Tabuada do " + numero + ":\n";
    for (var i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(tabuada);
}