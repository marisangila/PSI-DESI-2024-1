function validarFormulario() {
  var nome = document.getElementById('nome').value.trim()
  var email = document.getElementById('email').value.trim()

  if (nome === '' || email === '') {
    alert('Campos obrigatórios não foram preenchidos.')
    return false
  }

  var validaEmail = /\S+@\S+\.\S+/;
  if (!validaEmail.test(email)) {
    alert('Endereço de email inválido')
    return false
  }
  return true
}

document.getElementById('formulario').addEventListener('submit', function(event) {

  if (!validarFormulario()) {

    event.preventDefault()
  }
});