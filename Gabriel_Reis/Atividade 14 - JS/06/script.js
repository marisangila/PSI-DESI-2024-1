document.addEventListener('DOMContentLoaded', function() {
  var select = document.getElementById('opcaoSelect');
  select.addEventListener('change', mostrarCampoCorrespondente);
});

function mostrarCampoCorrespondente() {
  var select = document.getElementById('opcaoSelect');
  var selectedOption = select.options[select.selectedIndex].value;
  
  // Remove o campo anterior, se existir
  var campoCorrespondente = document.getElementById('campoCorrespondente');
  if (campoCorrespondente.firstChild) {
    campoCorrespondente.removeChild(campoCorrespondente.firstChild);
  }

  // Cria e adiciona o novo campo correspondente à opção selecionada
  var novoCampo = document.createElement('input');
  novoCampo.type = 'text';
  novoCampo.id = 'campo-' + selectedOption;
  novoCampo.name = 'campo-' + selectedOption;
  campoCorrespondente.appendChild(novoCampo);
}
