function verificarInput() {
  var nome = document.getElementById("input-nome").value;
  var telefone = document.getElementById("input-telefone").value;
  var email = document.getElementById("input-email").value;

  if (nome === "" || telefone === "" || email === "") {
    alert("Preencha todos os campos!");
  } else {
    alert("Inserção realizada com sucesso!");
    inserirDados();
  }
}

function inserirDados() {
  var nome = document.getElementById("input-nome").value;
  var telefone = document.getElementById("input-telefone").value;
  var email = document.getElementById("input-email").value;

  var tabelaCorpo = document.getElementById("tabela-corpo");

  var newRow = tabelaCorpo.insertRow();

  var cellID = newRow.insertCell(0);
  var cellNome = newRow.insertCell(1);
  var cellTelefone = newRow.insertCell(2);
  var cellEmail = newRow.insertCell(3);
  var cellEdit = newRow.insertCell(4);
  var cellDelete = newRow.insertCell(5);

  cellID.appendChild(document.createTextNode(tabelaCorpo.rows.length));
  cellNome.appendChild(document.createTextNode(nome));
  cellTelefone.appendChild(document.createTextNode(telefone));
  cellEmail.appendChild(document.createTextNode(email));

  var botaoEdit = document.createElement("button");
  botaoEdit.className = "btn btn-warning";
  botaoEdit.textContent = "Editar";
  botaoEdit.addEventListener("click", function () {
    editarLinha(newRow.rowIndex);
  });

  var botaoDelete = document.createElement("button");
  botaoDelete.className = "btn btn-danger";
  botaoDelete.textContent = "Excluir";
  botaoDelete.addEventListener("click", function () {
    excluirLinha(newRow.rowIndex);
  });

  cellEdit.appendChild(botaoEdit);
  cellDelete.appendChild(botaoDelete);
}

function excluirLinha(rowIndex) {
  var tabelaCorpo = document.getElementById("tabela-corpo");
  tabelaCorpo.deleteRow(rowIndex - 1);
}

function editarLinha(rowIndex) {
  var tabelaCorpo = document.getElementById("tabela-corpo");
  var linha = tabelaCorpo.rows[rowIndex - 1];

  if (linha && linha.cells.length > 0) {
    var celulas = linha.cells;

    var botaoEditar = celulas[4].querySelector("button");
    if (botaoEditar && botaoEditar.textContent === "Editar") {
      botaoEditar.textContent = "Salvar";

      botaoEditar.onclick = function () {
        salvarEdicao(this);
      };

      for (var i = 1; i < celulas.length - 2; i++) {
        // Verifica se já existe um campo de entrada <input>
        var campoEdicaoExistente = celulas[i].querySelector("input");
        if (!campoEdicaoExistente) {
          var valorAtual = celulas[i].textContent.trim();
          var campoEdicao = document.createElement("input");
          campoEdicao.type = "text";
          campoEdicao.value = valorAtual;
          celulas[i].innerHTML = "";
          celulas[i].appendChild(campoEdicao);
        }
      }
    }
  }
}

function salvarEdicao(botaoSalvar) {
  var linha = botaoSalvar.parentNode.parentNode;
  var celulas = linha.getElementsByTagName("td");

  for (var i = 1; i < celulas.length - 2; i++) {
    var campoEdicao = celulas[i].querySelector("input");
    var novoValor = campoEdicao.value;
    celulas[i].textContent = novoValor;
  }

  var botaoEditar = celulas[4].querySelector("button");
  botaoEditar.textContent = "Editar";
  botaoEditar.onclick = function () {
    editarLinha(botaoSalvar.parentNode.parentNode.rowIndex);
  };
}
