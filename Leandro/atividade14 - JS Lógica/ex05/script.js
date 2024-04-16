var a = Number(prompt('Informe o primeiro número: '))
var b = Number(prompt('Informe o segundo número: '))
var c = Number(prompt('Informe o terceiro número: '))

function calculaMedia(a,b,c){
    media = (a+b+c)/3
    alert(`A média aritmética entre os 3 números é: ${media}`)
}

calculaMedia(a,b,c)