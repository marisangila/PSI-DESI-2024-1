function mostrarSequenciaFibonacci(){
    quantidadeSelecionada = Number(document.getElementById("numeroTermos").value)

    if (quantidadeSelecionada < 26 && quantidadeSelecionada > -1){
        somaTermos ="0,"
        num1 = 0
        num2 = 0
        salvaUltimoValor = 0
        somaNumerosPares = 0

        for(var i=1; i<quantidadeSelecionada; i++){
            if (num2 == 0){
                num2 += 1
                somaTermos += num2
            }else{
                somaTermos += `, ${num1+num2}`

                salvaUltimoValor = num1
                num1 = num2 
                num2 = num1 + salvaUltimoValor

                if (num2%2==0) {
                    somaNumerosPares += num2;
                }
            }
        }

        document.getElementById("mostrarSequencia").innerHTML = somaTermos
        document.getElementById("mostrarSoma").innerHTML = somaNumerosPares
    }else if(quantidadeSelecionada>25){
        alert("O útimo termo passa de 50 mil.")
    }else{
        alert("Não existem termos negativos")
    }
}