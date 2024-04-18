function calcularImc() {
    altura = Number(document.getElementById("altura").value)
    peso = Number(document.getElementById("peso").value)

    resultado = peso/(altura**2)

    document.getElementById("mostrarResultado").innerHTML = resultado
} 