function adicionaInfoTabela(){
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    if(nome === '' || email === ''){
        alert("Preencha todos os dados");
        return;
    }

    if(!validarEmail(email)){
        alert("Email inválido");
        return;
    }
    // var linha = document.createElement('tr');
    // var celula = document.createElement('td');
    const tabela = document.getElementById("tabela");
    const novaLinha = tabela.insertRow(-1);
    const celula = novaLinha.insertCell(0);
    const celula2 = novaLinha.insertCell(1);
    const celulaAcoes = novaLinha.insertCell(2);
    celula.textContent = nome;
    celula2.textContent = email;
    const botao_edita = document.createElement("button");
    botao_edita.style.backgroundColor = "rgb(12, 133, 231)";
    botao_edita.textContent = "Editar";
    celulaAcoes.appendChild(botao_edita);
    const botao_exclui = document.createElement("button");
    botao_exclui.textContent = "Excluir";
    botao_exclui.setAttribute("onclick", "excluirLinha(this)");
    celulaAcoes.appendChild(botao_exclui);
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function excluirLinha(){
    var linha = event.target.parentNode.parentNode;
    var tabela = document.getElementById("tabela");
    tabela.deleteRow(linha.rowIndex);
}