function adicionarNaTabela(){
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;

    celulaNome = document.createElement('td');
    celulaNome.textContent = nome;

    celulaSobrenome = document.createElement('td');
    celulaSobrenome.textContent = sobrenome;

    botaoEditar = document.createElement('button');
    botaoEditar.textContent = "Editar";


    botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", excluirElemento);
    botaoExcluir.style.marginLeft = "5px";
    botaoExcluir.style.backgroundColor = "#DC3545";
    botaoExcluir.style.color = "white";
    botaoExcluir.style.border = "none";
    botaoExcluir.style.padding = "7px";
    botaoExcluir.style.borderRadius = "3px";

    celulaBotoes = document.createElement('td');
    celulaBotoes.appendChild(botaoEditar);
    celulaBotoes.appendChild(botaoExcluir);

    linha = document.createElement('tr');
    linha.appendChild(celulaNome);
    linha.appendChild(celulaSobrenome);
    linha.appendChild(celulaBotoes);

    tbody= document.getElementById('tbody');
    tbody.appendChild(linha);
}

function excluirElemento(){
    var linha = this.parentNode.parentNode;
    var tbody = linha.parentNode;
    tbody.removeChild(linha);
}
