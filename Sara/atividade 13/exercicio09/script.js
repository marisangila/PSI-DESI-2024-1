function calcularPotencia() {
    // Solicita ao usuário a base e o expoente
    var base = parseFloat(prompt("Digite a base:"));
    var expoente = parseInt(prompt("Digite o expoente:"));
    var resultado = Math.pow(base, expoente);
    alert("O resultado da potência de " + base + " elevado a " + expoente + " é: " + resultado);
}