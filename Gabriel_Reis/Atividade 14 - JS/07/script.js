document.addEventListener('DOMContentLoaded', function() {
  var inputTexto = document.getElementById('texto');
  var contador = document.getElementById('contador');

  inputTexto.addEventListener('input', function() {
    var numeroCaracteres = inputTexto.value.length;
    contador.textContent = numeroCaracteres + (numeroCaracteres === 1 ? ' caractere digitado' : ' caracteres digitados');
  });
});