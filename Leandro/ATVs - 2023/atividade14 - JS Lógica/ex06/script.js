function calculaIMC(){
    var altura = Number(prompt('Informe sua altura: '))
    var peso = Number(prompt('Informe seu peso: '))
    var imc = peso/(altura**2)
    alert(`Seu IMC é: ${imc}`)
}
calculaIMC()