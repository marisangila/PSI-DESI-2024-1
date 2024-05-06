function nomeEmail() {
    var campoNome = document.getElementById("campoNome");
    var campoEmail = document.getElementById("campoEmail");

    if (campoNome.value.trim() !== "") {
        campoEmail.style.display = "block";
    } else {
        campoEmail.style.display = "none";
        document.getElementById("campoEmailInput").value = "";
    }
}

document.getElementById("campoNome").addEventListener("input", nomeEE - mail);
