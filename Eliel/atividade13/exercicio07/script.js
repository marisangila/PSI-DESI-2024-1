function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    
    if (altura && peso) {
        var imc = peso / (altura * altura);
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "Seu IMC é: " + imc.toFixed(2);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}