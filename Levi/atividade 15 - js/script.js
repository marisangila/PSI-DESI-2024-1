function enviarPersonagem() {
    var nomePersonagem = document.getElementById("nome").value;
    var elementoPersonagem = document.getElementById("elemento").value;

    var corpoTabela = document.getElementById("tabela");

    //Célula
    var celula1 = document.createElement("td");
    celula1.textContent = nomePersonagem;
    var celula2 = document.createElement("td");
    celula2.textContent = elementoPersonagem;
    var botaoEditar = document.createElement("input");
    botaoEditar.setAttribute('type', 'button');
    botaoEditar.setAttribute('value', 'Editar');
    botaoEditar.classList.add('botaoEditar')

    var botaoRemover = document.createElement("input");
    botaoRemover.setAttribute('type', 'button');
    botaoRemover.setAttribute('value', 'Remover');
    botaoRemover.classList.add('botaoRemover')

    //Linha
    linha = document.createElement("tr");
    linha.appendChild(celula1);
    linha.appendChild(celula2);
    linha.appendChild(botaoEditar);
    linha.appendChild(botaoRemover);
    corpoTabela.appendChild(linha);
} 