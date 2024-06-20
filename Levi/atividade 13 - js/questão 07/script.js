function calcularIMC(){

    var numero1 = parseFloat(document.getElementById("altura").value);
    var numero2 = parseFloat(document.getElementById("peso").value);

    var imc = numero2 / (numero1**2)
    var resultado = document.getElementById("resultadoIMC");
    resultado.innerHTML = "O seu IMC é: " + imc
}
