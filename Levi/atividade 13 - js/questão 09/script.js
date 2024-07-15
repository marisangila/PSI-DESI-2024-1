function calcularPotenciacao (){
    var numero1 = parseFloat(document.getElementById("base").value);
    var numero2 = parseFloat(document.getElementById("expoente").value);

    var potenciacao = numero1 ** numero2

    alert("O resultado a potenciação é: " + potenciacao)
}