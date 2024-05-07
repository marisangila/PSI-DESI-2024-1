document.addEventListener('DOMContentLoaded', function() {
  var caixa1 = document.getElementById('caixa1');
  var caixa2 = document.getElementById('caixa2');

  caixa1.addEventListener('focus', function() {
    caixa1.value = 'Primeira caixa ativada';
    caixa2.value = ''; 
  });

  document.addEventListener('click', function(event) {
    var clicadoForaCaixa1 = !caixa1.contains(event.target);
    if (clicadoForaCaixa1) {
      caixa2.value = 'Perdeu o foco';
      caixa1.value = ''; 
    }
  });
});
