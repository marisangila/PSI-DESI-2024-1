function pedirDados(){
    altura = Number(prompt("Insira a sua altura:"))
    peso = Number(prompt("Insira o seu peso:"))
}

function calcularIMC(){
    imc = peso/(altura * altura)

alert (`Seu IMC é${`imc`}`)
}
