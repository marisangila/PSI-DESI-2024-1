function validarFormulario() {
    document.getElementById('error-nome').textContent = '';
    document.getElementById('error-email').textContent = '';

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === '') {
        document.getElementById('error-nome').textContent = 'Por favor, preencha o nome.';
        return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-email').textContent = 'Por favor, insira um email válido.';
        return false;
    }
    return true;
}