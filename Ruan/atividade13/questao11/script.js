function calcularImc() {
    altura = Number(document.getElementById("altura").value)
    peso = Number(document.getElementById("peso").value)

    document.getElementById("saida").innerHTML = `${peso/(altura**2)}`
}