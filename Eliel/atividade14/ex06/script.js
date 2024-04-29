function mostrarCampoAdicional() {
    var select = document.getElementById("escolha");
    var campoAdicional = document.getElementById("campoAdicional");

    if (select.value == "opcao3") {
        campoAdicional.style.display = "block";
    } else {
        campoAdicional.style.display = "none";
        document.getElementById("campoAdicionalInput").value = "";
    }
}