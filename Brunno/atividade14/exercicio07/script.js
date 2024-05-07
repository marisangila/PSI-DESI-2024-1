function updateCharCount() {
        var textarea = document.getElementById("texto");
        var contador = document.getElementById("contador");
        contador.textContent = textarea.value.length;
    }