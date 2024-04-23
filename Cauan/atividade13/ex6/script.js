
let altura = parseFloat(prompt("Informe a sua altura em metros: "))
let peso = parseFloat(prompt("Informe o seu peso: "))

let imc = peso/altura**2
alert(`seu imc: ${imc.toFixed(2)}`)