function mostrarCampoExtra() {
    const opcaoSelecionada = document.getElementById('opcao').value;

    document.getElementById('campoExtra').value = '';

    if (opcaoSelecionada === 'opcao1') {
        document.getElementById('labelCampoExtra').textContent = 'Campo Extra para Opção 1:';
        document.getElementById('campoExtraContainer').style.display = 'block';
    } else if (opcaoSelecionada === 'opcao2') {
        document.getElementById('labelCampoExtra').textContent = 'Campo Extra para Opção 2:';
        document.getElementById('campoExtraContainer').style.display = 'block';
    } else if (opcaoSelecionada === 'opcao3') {
        document.getElementById('labelCampoExtra').textContent = 'Campo Extra para Opção 3:';
        document.getElementById('campoExtraContainer').style.display = 'block';
    } else {
        document.getElementById('campoExtraContainer').style.display = 'none';
    }
}