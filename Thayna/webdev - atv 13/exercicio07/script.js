function pedirDados(){
    altura = Number(prompt("Insira a sua altura:"))
    peso = Number(prompt("Insira o seu peso:"))
}

function calcularIMC(){
    peso = document.getElementById("peso").value
    altura = document.getElementById("altura").value
    imc = peso/(altura * altura)
    imc = imc.toFixed(2)

document.getElementById(`Seu IMC é ${imc}`)
}