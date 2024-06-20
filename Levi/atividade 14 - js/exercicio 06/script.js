function mostrarCampos() {
    var selectValue = document.getElementById("opcaoSelecionada").value;

    document.getElementById("opcao1Campo").style.display = "none";
    document.getElementById("opcao2Campo").style.display = "none";
    document.getElementById("opcao3Campo").style.display = "none";

    if (selectValue === "opcao1") {
        document.getElementById("opcao1Campo").style.display = "block";
    } else if (selectValue === "opcao2") {
        document.getElementById("opcao2Campo").style.display = "block";
    } else if (selectValue === "opcao3") {
        document.getElementById("opcao3Campo").style.display = "block";
    }
}