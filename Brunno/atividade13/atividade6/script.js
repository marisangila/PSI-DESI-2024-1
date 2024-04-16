altura = Number(prompt("Digite sua altura: "))
peso = Number(prompt("Digite seu peso: "))

imc = peso/(altura*altura)
if(imc < 18.5){
    alert(`Seu IMC é de: ${imc.toFixed(2)}, Abaixo do peso`)
}
else if(imc > 18.6 || imc < 24.9){
    alert(`Seu IMC é de: ${imc.toFixed(2)}, Peso ideal`)
}
else if(imc > 25 || imc < 29.9){
    alert(`Seu IMC é de: ${imc.toFixed(2)}, Levemente acima do peso`)
}
else if(imc > 30 || imc < 34.9){
    alert(`Seu IMC é de: ${imc.toFixed(2)}, Obesidade grau I`)
}
else if(imc > 35 || imc < 39.9){
    alert(`Seu IMC é de: ${imc.toFixed(2)}, Obesidade grau II`)
}
else if(imc > 40){
    alert(`Seu IMC é de: ${imc.toFixed(2)}, Obesidade grau III`)
}
else{
    alert(`Seu IMC é de: ${imc.toFixed(2)}, Incalculável.`)
}