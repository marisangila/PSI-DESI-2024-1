function calcularFibonacci() {
    var termo1 = 0;
    var termo2 = 1;
    var soma = 0;
  
    while (termo2 <= 50000) {
      if (termo2 % 2 === 0) {
        soma += termo2;
      }
      var proximoTermo = termo1 + termo2;
      termo1 = termo2;
      termo2 = proximoTermo;
    }
    document.getElementById("soma").innerHTML = (`E a soma dos termos pares entre 0 e 50.000 é  ${soma}`);
  }
    
