function encontrarMaiorNumero(){
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);

    var maiorNumero = numero1;

    if(numero2 > maiorNumero){
    maiorNumero = numero2;
    }
     if(numero3 > maiorNumero){
        maiorNumero = numero3;
    }
        alert("O maior número é: " + maiorNumero);
}
