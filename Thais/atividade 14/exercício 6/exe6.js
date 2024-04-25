function mostrarNovoCampo() {
    var escolha = document.getElementById("escolha").value; // Obtém o valor selecionado
        var campoCorrespondente = document.getElementById("campoCorrespondente"); // Obtém o campo correspondente

        // Verifica se o valor selecionado é diferente de vazio
        if (escolha !== "") {
            campoCorrespondente.style.display = "block"; // Mostra o campo correspondente
        } else {
            campoCorrespondente.style.display = "none"; // Oculta o campo correspondente se a opção for vazia
        }
    }