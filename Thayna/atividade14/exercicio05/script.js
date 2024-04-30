function validarCPF() {
    var cpf = document.getElementById("cpf").value.trim();
    cpf = cpf.replace(/\D/g, '');

    if (!validarFormatoCPF(cpf)) {
        exibirMensagemErro("Insira um CPF válido.");
        return;
    }

    alert("CPF válido. Envio realizado com sucesso!");
}

function validarFormatoCPF(cpf) {
    if (cpf.length !== 11) {
        return false;
    }

    var isAllDigitsEqual = /^(.)\1+$/.test(cpf);
    if (isAllDigitsEqual) {
        return false;
    }

    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    var resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

function exibirMensagemErro(mensagem) {
    var mensagemErro = document.getElementById("mensagemErro");
    mensagemErro.innerText = mensagem;
    mensagemErro.style.display = "block";
}