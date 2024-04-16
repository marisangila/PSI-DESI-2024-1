var num = Number(prompt('Informe um número: '))

function calculaTabuada(num){
    var tabuada = ''
    for(var i=0;i<=10;i++){
        res = num*i
        tabuada += `${num} x ${i} = ${res} \n`
    }
    alert(tabuada)
}
calculaTabuada(num)