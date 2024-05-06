document.addEventListener("DOMContentLoaded", function () {
    var caixaTexto = document.getElementById("caixaTexto");

    caixaTexto.addEventListener("click", function () {
        alert("Caixa de texto ativada");
    });

    document.addEventListener("click", function (event) {
        if (event.target !== caixaTexto) {
            alert("Perdeu o foco");
        }
    });
});