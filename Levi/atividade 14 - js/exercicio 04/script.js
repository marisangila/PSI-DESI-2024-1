function validaFormulario() {
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos obrigatórios.");
        return false; 
    }

    var emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
    if (!emailRegex.test(email)) {
        alert("Insira um endereço de e-mail válido.");
        return false; 
    }

    return true;
}