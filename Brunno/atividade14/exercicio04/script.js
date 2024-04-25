function validateForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var errorMessages = [];

    if (nome === "") {
        errorMessages.push("Por favor, preencha o campo Nome.");
    }

    if (email === "") {
        errorMessages.push("Por favor, preencha o campo Email.");
    } else if (!isValidEmail(email)) {
        errorMessages.push("Por favor, insira um endereço de email válido.");
    }

    if (mensagem === "") {
        errorMessages.push("Por favor, preencha o campo Mensagem.");
    }

    if (errorMessages.length > 0) {
        var errorMessage = "Erro(s) encontrado(s):\n";
        for (var i = 0; i < errorMessages.length; i++) {
            errorMessage += "- " + errorMessages[i] + "\n";
        }
        alert(errorMessage);
        return false;
    }
    return true;
}

function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}