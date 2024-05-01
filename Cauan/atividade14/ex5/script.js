function verifyIfCpfIsValid() {
    document.getElementById('error-cpf').textContent = '';

    const cpf = document.getElementById('cpf').value.trim();

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        document.getElementById('error-cpf').textContent = 'Formato de CPF inválido';
        return;
    }

    alert('CPF válido!');
}