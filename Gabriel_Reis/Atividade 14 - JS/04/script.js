function validarFormulario() {
  var nome = document.getElementById('nome').value.trim();
  var email = document.getElementById('email').value.trim();

  if (nome === '' || email === '') {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return false;
  }

  var validaEmail = /\S+@\S+\.\S+/;
  if (!validaEmail.test(email)) {
    alert('Por favor, insira um endereço de e-mail válido.');
    return false;
  }
  return true;
}

document.getElementById('formulario').addEventListener('submit', function(event) {

  if (!validarFormulario()) {

    event.preventDefault();
  }
});
