document.addEventListener("DOMContentLoaded", function() {
    var caixaTexto1 = document.getElementById("caixaTexto1");
    var caixaTexto2 = document.getElementById("caixaTexto2");

    caixaTexto1.addEventListener("focus", function() {
        alert("Primeira caixa ativada");
    });

    caixaTexto2.addEventListener("focus", function() {
        alert("Perdeu o foco");
    });
});