// Seleciona as caixas de texto
const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");

// Adiciona um evento de foco à primeira caixa de texto
caixa1.addEventListener("focus", function() {
    console.log("Primeira caixa ativada");
});

// Adiciona um evento de foco à segunda caixa de texto
caixa2.addEventListener("focus", function() {
    console.log("Perdeu o foco")
});
