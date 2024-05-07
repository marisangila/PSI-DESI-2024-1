const campoTexto = document.getElementById("texto");
const contador = document.getElementById("contador");
campoTexto.addEventListener("input", () => {
    contador.textContent = campoTexto.value.length;
});