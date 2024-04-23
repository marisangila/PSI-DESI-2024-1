function fibonacci(){
    cont = 0
    anterior = 0
    atual = 1
    fibonacci = [anterior, atual]
    while (atual <= 50000) {
        fibo = anterior + atual
        if (fibo <= 50000){
            fibonacci.push(fibo)
        }
        anterior = atual
        atual = fibo
    }
    return fibonacci
}
function retornarPares(fibonacci){
    console.log(fibonacci)
    var somaPar = 0
    for (elemento of fibonacci){
        if (elemento % 2 == 0){
            console.log(elemento)
            somaPar += Number(elemento)
            console.log(somaPar)
        }
    }
    console.log(`O resultado da soma é: ${somaPar}`)
}
function main(){
    let lista = fibonacci()
    retornarPares(lista)
}

main()
