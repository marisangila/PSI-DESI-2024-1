function mostraImc(){
    peso = document.getElementById("peso").value
    altura = document.getElementById("altura").value

    imc = parseFloat(peso/(altura**2))
    imc = imc.toFixed(2)

    classificacao = ""
    if(imc >= 40){
        classificacao = "obesidade grau III"
    }else if(imc >= 35){
        classificacao = "obesidade grau II"
    }else if(imc >= 30){
        classificacao = "obesidade grau I"
    }else if(imc >= 25){
        classificacao = "levemente acima do peso"
    }else if(imc >= 18.6){
        classificacao = "normal"
    }else{
        classificacao = "abaixo do peso"
    }

    msg = `Seu IMC é ${imc}, Você é considerado ${classificacao}`

    document.getElementById("resultado").innerHTML = msg
}