var a = Number(prompt('Informe o primeiro número: '))
var b = Number(prompt('Informe o segundo número: '))
var c = Number(prompt('Informe o terceiro número: '))

function informaMaiorNumero(a,b,c){
    maiorValor = 0
    if(a > b && a > c){
        maiorValor = a
    } else if(b > a && b > c){
        maiorValor = b
    } else{
        maiorValor = c
    }
    alert(`O maior valor digitado foi: ${maiorValor}`)
}
informaMaiorNumero(a,b,c)