document.addEventListener("DOMContentLoaded", function () {
    var campoTexto = document.getElementById("campoTexto");
    var contador = document.getElementById("contador");

    campoTexto.addEventListener("input", function () {
        var numCaracteres = campoTexto.value.length;
        contador.textContent = numCaracteres;
    });
});