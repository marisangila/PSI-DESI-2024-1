function adicionarLinha() {
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();
    var colunaNome = novaLinha.insertCell(0);
    var colunaEmail = novaLinha.insertCell(1);
    var colunaAcoes = novaLinha.insertCell(2);

    colunaNome.innerHTML = nome;
    colunaEmail.innerHTML = email;
    colunaAcoes.innerHTML = '<button onclick="editarLinha(this)" class="btn btn-info">Editar</button>' +
        '<button onclick="excluirLinha(this)" class="btn btn-danger">Excluir</button>';

    document.getElementById("nome").value = '';
    document.getElementById("email").value = '';
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function editarLinha(botaoEditar) {
    var linha = botaoEditar.parentNode.parentNode;
    var colunaNome = linha.cells[0].innerHTML;
    var colunaEmail = linha.cells[1].innerHTML;

    document.getElementById("nome").value = colunaNome;
    document.getElementById("email").value = colunaEmail;

    linha.remove();
}

function excluirLinha(botaoExcluir) {
    var linha = botaoExcluir.parentNode.parentNode;
    linha.remove();
}
