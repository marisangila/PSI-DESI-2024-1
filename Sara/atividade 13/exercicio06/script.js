function pedirDados(){
    peso = Number(prompt("Insira seu peso (kg)"))
    altura = Number(prompt("Insira sua altura (m.cm)"))
}

function calcularIMC(){
    imc = peso / (altura * altura)
    alert(`Seu IMC é ${imc}`)
}