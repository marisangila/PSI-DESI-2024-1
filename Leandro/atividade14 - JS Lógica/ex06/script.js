var altura = Number(prompt('Informe sua altura: '))
var peso = Number(prompt('Informe seu peso: '))

function calculaIMC(a,b){
    var imc = b/(a**2)
    alert(`Seu IMC é: ${imc}`)
}
calculaIMC(altura,peso)