peso = Number(prompt("Informe seu peso em Kg:"))
altura = Number(prompt("Informe sua altura metros:"))

resultado = peso/(altura**2)

alert(`Seu IMC é ${resultado}`)