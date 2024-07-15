function atualizarCaracteres() {
    var textInput = document.getElementById("texto");
    var characterCount = document.getElementById("caracteresContados");

    var count = textInput.value.length;
    characterCount.textContent = count;
}