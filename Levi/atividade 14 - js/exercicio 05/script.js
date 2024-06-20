function validarCPF() {
    var cpf = document.getElementById("cpfInput").value;
    cpf = cpf.replace(/[^\d]/g, '')
    
    if (cpf.length !== 11) {
        alert("CPF inválido. O CPF deve conter 11 dígitos.");
        return;
    }

    alert("CPF válido! Envio bem-sucedido.");
}