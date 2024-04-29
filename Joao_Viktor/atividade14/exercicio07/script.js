// Seleciona o campo de texto e o elemento do contador
const campoTexto = document.getElementById("texto");
const contador = document.getElementById("contador");

// Adiciona um evento de input ao campo de texto
campoTexto.addEventListener("input", function() {
    // Obtém o número de caracteres digitados
    const numCaracteres = campoTexto.value.length;
    // Atualiza o texto do contador
    contador.textContent = numCaracteres + " caracteres";
});
