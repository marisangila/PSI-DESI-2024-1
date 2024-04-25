function validarCPF() {
    var cpf = document.getElementById("cpfInput").value.replace(/[^\d]+/g,'');
    
    if (cpf.length !== 11 || cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") {
        document.getElementById("resultado").innerText = "CPF inválido.";
    } else {
        var soma = 0;
        for (var i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        var resto = soma % 11;
        var digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

        soma = 0;
        for (var i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = soma % 11;
        var digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

        if (parseInt(cpf.charAt(9)) === digitoVerificador1 && parseInt(cpf.charAt(10)) === digitoVerificador2) {
            alert("CPF válido!");
        } else {
            document.getElementById("resultado").innerText = "CPF inválido.";
        }
    }
}