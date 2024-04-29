var peso = Number(prompt('Digite seu peso: '))
var altura = Number(prompt('Digite sua altura: '))
var imc = peso / (altura * altura)

alertar(`Seu IMC é de ${imc}`)