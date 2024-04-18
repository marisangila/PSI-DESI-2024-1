function calcularIMC(){
    var altura = Number(document.getElementById("altura").value)
    var peso = Number(document.getElementById("peso").value)

    alert(altura)
    alert(peso)

    var imc = peso / (altura * altura)

    document.getElementById('resultado').innerHTML = imc
}