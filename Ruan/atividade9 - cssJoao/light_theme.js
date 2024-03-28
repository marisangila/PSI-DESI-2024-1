function alterarTema() {

    const option = document.getElementById("mudaTema").innerHTML;

    if (option == "Modo escuro") {
        const fundo = document.getElementById("background-body");
        fundo.style.backgroundColor = "#000000";
        
        const div = document.getElementById("mudaTema");
        div.innerHTML = "Modo claro";

        const texto = document.getElementsByClassName("texto");
        for (var i = 0; 0 < texto.length; i++) {
            texto.item(i).style.color = "#ffffff";
        }
    } else {
        const fundo = document.getElementById("background-body");
        fundo.style.backgroundColor = "#ffffff";
        
        const div = document.getElementById("mudaTema");
        div.innerHTML = "Modo escuro";

        const texto = document.getElementsByClassName("texto");
        for (var i = 0; 0 < texto.length; i++) {
            texto.item(i).style.color = "#000000";
        }
    }
}