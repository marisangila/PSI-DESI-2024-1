// Função para mostrar o campo correspondente ao valor selecionado no campo select
function mostrarCampoCorrespondente() {
    // Obtém o valor selecionado no campo select
    const selectValue = document.getElementById("opcao").value;
    
    // Mostra o campo correspondente e oculta os outros campos
    document.getElementById("campoNome").style.display = (selectValue === "nome") ? "block" : "none";
    document.getElementById("campoRG").style.display = (selectValue === "RG") ? "block" : "none";
    document.getElementById("campoCPF").style.display = (selectValue === "CPF") ? "block" : "none";
}
