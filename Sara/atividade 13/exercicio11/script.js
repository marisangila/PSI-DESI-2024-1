function pedirDados(){
    peso = Number(prompt("Insira seu peso (kg)"))
    altura = Number(prompt("Insira sua altura (m.cm)"))
}

function calcularIMC(){
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    imc =  peso / (altura * altura);
    imc = imc.toFixed(2);
    document.getElementById("resposta").innerHTML = (`Seu IMC é ${imc}`);
}