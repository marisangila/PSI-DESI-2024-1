function mostrarCampo() {
    var selectValue = document.getElementById("selectField").value;
    var campoAdicional1 = document.getElementById("campoAdicional1");
    var campoAdicional2 = document.getElementById("campoAdicional2");
    var campoAdicional3 = document.getElementById("campoAdicional3");

    // Oculta todos os campos adicionais
    campoAdicional1.classList.add("hidden");
    campoAdicional2.classList.add("hidden");
    campoAdicional3.classList.add("hidden");

    // Mostra o campo adicional correspondente à opção selecionada
    if (selectValue === "option1") {
        campoAdicional1.classList.remove("hidden");
    } else if (selectValue === "option2") {
        campoAdicional2.classList.remove("hidden");
    } else if (selectValue === "option3") {
        campoAdicional3.classList.remove("hidden");
    }
}