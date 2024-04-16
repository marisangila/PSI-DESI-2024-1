var a = 0
var b = 1
var c = 0

function fibonacci(a,b,c){
    somaFibo = ''
    for(var i=0; i<10; i++){
        if(i==0){
            somaFibo += 0+','
        }
        c = a+b
        a = b
        b = c
        if(i==9){
            somaFibo += c
        } else{
            somaFibo += c+','
        }
    }
    alert(somaFibo)
}
fibonacci(a,b,c)