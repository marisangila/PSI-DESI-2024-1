var base = Number(prompt('Informe a base: '))
var expoente = Number(prompt('Informe o expoente: '))

function calculaExponenciacao(base,expoente){
    res = base**expoente
    alert(`O resultado é: ${res}`)
}
calculaExponenciacao(base,expoente)