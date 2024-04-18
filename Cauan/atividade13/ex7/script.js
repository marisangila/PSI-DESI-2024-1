let altura = Number(document.getElementById('height').value)
let peso = Number(document.getElementById('weight').value)

let imc = peso/altura**2
alert(`seu imc: ${imc.toFixed(2)}`)