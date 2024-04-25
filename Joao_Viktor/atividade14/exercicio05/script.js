function validateCPF() {
    const cpf = document.getElementById("cpf").value.replace(/[^\d]/g, '');
    console.log(cpf)
    document.getElementById("errorMessage").textContent = "";
    if (cpf.length !== 11) {
        document.getElementById("errorMessage").textContent = "CPF inválido: deve conter 11 dígitos.";
        return;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        document.getElementById("errorMessage").textContent = "CPF inválido: todos os dígitos são iguais.";
        return;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;

    if (parseInt(cpf.charAt(9)) !== digitoVerificador1 || parseInt(cpf.charAt(10)) !== digitoVerificador2) {
        document.getElementById("errorMessage").textContent = "CPF inválido: dígitos verificadores incorretos.";
        return;
    }
    alert("CPF válido! Envio realizado com sucesso.");
}
