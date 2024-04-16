function mostrarSequenciaFibonacci(){
    quantidadeSelecionada = Number(document.getElementById("numeroTermos").value)

    somaTermos ="0,"
    num1 = 0
    num2 = 0
    salvaUltimoValor = 0
    somaNumerosPares = 0

    for(var i=0; i<quantidadeSelecionada; i++){
        if (num2 == 0){
            num2 += 1
            somaTermos += num2
        }else{
            somaTermos += `, ${num1+num2}`
            salvaUltimoValor = num1
            num1 = num2 
            num2 = num1 + salvaUltimoValor

            if ()
        }
    }

    document.getElementById("mostrarSequencia").innerHTML = somaTermos
    document.getElementById("mostrarSoma").innerHTML = somaTermos
}