// Função para mostrar a mensagem "primeira caixa ativada" quando a primeira caixa de texto é clicada
document.getElementById("textBox1").addEventListener("click", function() {
    alert("Primeira caixa ativada");
});

// Função para mostrar a mensagem "perdeu o foco" quando clicar em outro local sem ser a primeira caixa de texto
document.getElementById("textBox2").addEventListener("blur", function() {
    alert("Perdeu o foco");
});
