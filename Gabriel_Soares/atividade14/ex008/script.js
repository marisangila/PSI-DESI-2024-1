document.addEventListener('DOMContentLoaded', function() {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
  
    input1.addEventListener('focus', function() {
      input1.value = 'Primeira caixa ativada';
      input2.value = ''; 
    });
  
    document.addEventListener('click', function(event) {
      var clicaForainput1 = !input1.contains(event.target);
      if (clicaForainput1) {
        input2.value = 'Perdeu o foco';
        input1.value = ''; 
      }
    });
  });