function maiorMenorIdade() {
    var valor = parseFloat(document.getElementById("idade").value);

    if (valor < 18) {
        alert("Você é menor de idade!")
    }
    else {
        alert("Você é maior de idade!")
    }
}