function validarCpf() {
  var cpf = document.getElementById('cpf').value.replace(/[^\d]/g, '');

  if (cpf.length !== 11 || /^\d{11}$/.test(cpf) === false) {
    document.getElementById('mensagemErro').textContent = 'CPF inválido. Por favor, insira um CPF válido.';
    return;
  }

  var soma = 0;
  for (var i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  var resto = 11 - (soma % 11);
  var digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

  if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
    document.getElementById('mensagemErro').textContent = 'CPF inválido. Por favor, insira um CPF válido.';
    return;
  }

  soma = 0;
  for (var j = 0; j < 10; j++) {
    soma += parseInt(cpf.charAt(j)) * (11 - j);
  }

  resto = 11 - (soma % 11);
  var digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

  if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
    document.getElementById('mensagemErro').textContent = 'CPF inválido. Por favor, insira um CPF válido.';
    return;
  }

  // Se o CPF for válido, limpa a mensagem de erro e exibe um alerta de sucesso
  document.getElementById('mensagemErro').textContent = '';
  alert('CPF válido! Enviado com sucesso.');
}
