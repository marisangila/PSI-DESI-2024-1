function calcularTabuada (){
    var numero1 = parseFloat(document.getElementById("numero").value);
    var resultado = document.getElementById('resultado');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += numero1+" x "+count+" = "+
                 numero1*count+"<br />";
    
    resultado.innerHTML = tabuada;
        
}