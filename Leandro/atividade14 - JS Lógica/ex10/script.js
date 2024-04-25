function calculaExponenciacao(){
    var base = Number(prompt('Informe a base: '))
    var expoente = Number(prompt('Informe o expoente: '))
    res = base**expoente
    alert(`O resultado é: ${res}`)
}
calculaExponenciacao()