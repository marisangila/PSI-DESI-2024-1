function mostraImc() {
    altura = document.getElementById("altura").value
    peso = document.getElementById("peso").value


    imc = peso / (altura * altura)

    if (imc < 16) {
        considerado= "Magreza grave."
    } else if (imc >= 16 && imc > 16.9) {
        considerado= "Magreza moderada."
    } else if (imc >= 17 && imc > 18.5) {
       "magreza leve." 
    } else if (imc >= 18.6 && imc > 24.9) {
        considerado="Peso ideal."
    } else if (imc >= 25 && imc > 29.9) {
        considerado="Sobrepeso."
    } else if (imc >= 30 && imc > 34.9) {
        considerado="Obesidade grau I."
    } else if (imc >= 35 && imc > 39.9) {
        considerado="Obesidade grau II."
    } else{
        considerado="Obesidade grau III ou mórbida."
    }

    msg=`Seu IMC é ${imc}. ${considerado}`

    document.getElementById("resultado").innerHTML=msg
}


