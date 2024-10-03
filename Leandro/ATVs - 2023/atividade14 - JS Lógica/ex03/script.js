

function informaMaiorNumero(){
    var a = Number(prompt('Informe o primeiro número: '))
    var b = Number(prompt('Informe o segundo número: '))
    var c = Number(prompt('Informe o terceiro número: '))
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
informaMaiorNumero()