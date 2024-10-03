function fibonacci(){
    var a = 0
    var b = 1
    var c = 0
    somaFibo = ''
    somaPar = 0;
    for(var i=0; i<23; i++){
        if(i==0){
            somaFibo += 0+','
        }
        c = a+b
        a = b
        b = c
        if (c%2 == 0){
            somaPar += parseInt(c)
        }
        if(i==9){
            somaFibo += c
        } else{
            somaFibo += c+','
        }
    }
    alert(`a sequencia de fibonacci: ${somaFibo}\n\n e a soma dos pares é: ${somaPar}`)
}
fibonacci()