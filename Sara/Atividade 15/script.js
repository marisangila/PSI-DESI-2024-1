function adicionarElemento(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    celulaNome = document.createElement('td');
    celulaNome.textContent = nome;

    celulaEmail = document.createElement('td');
    celulaEmail.textContent = email;

    botaoEditar = document.createElement('button');
    botaoEditar.textContent = "Editar";

    botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", excluirElemento);

    celulaBotoes = document.createElement('td');
    celulaBotoes.appendChild(botaoEditar);
    celulaBotoes.appendChild(botaoExcluir);

    linha = document.createElement('tr');
    linha.appendChild(celulaNome);
    linha.appendChild(celulaEmail);
    linha.appendChild(celulaBotoes);

    corpoTabela = document.getElementById('corpo-tabela');
    corpoTabela.appendChild(linha);
}

function excluirElemento(){
    var linha = this.parentNode.parentNode;
    var corpoTabela = linha.parentNode;
    corpoTabela.removeChild(linha);
}