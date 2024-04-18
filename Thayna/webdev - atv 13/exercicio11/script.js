function calculoIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
  
    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);
  
    document.getElementById("resposta").innerText = `Seu IMC é ${imc}`;
  }