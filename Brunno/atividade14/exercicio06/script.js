function mostrarCampo() {
    var select = document.getElementById("escolha");
    var valorSelecionado = select.value;
    var campoExtra = document.getElementById("campoExtra");

    if (valorSelecionado === "opcao1") {
        campoExtra.style.display = "none";
    } else if (valorSelecionado === "opcao2") {
        campoExtra.style.display = "block";
        campoExtra.innerHTML = '<label for="campoExtraInput">Campo Extra para Opção 2:</label><input type="text" id="campoExtraInput">';
    } else if (valorSelecionado === "opcao3") {
        campoExtra.style.display = "block";
        campoExtra.innerHTML = '<label for="campoExtraInput">Campo Extra para Opção 3:</label><input type="text" id="campoExtraInput">';
    }
}