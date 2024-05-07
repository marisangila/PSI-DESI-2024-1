let registros = [];

function adicionarRegistro() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;

  if (nome && idade) {
    const novoRegistro = { nome, idade };
    registros.push(novoRegistro);
    atualizarTabela();
    limparCampos();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function atualizarTabela() {
  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  registros.forEach((registro, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${registro.nome}</td>
      <td>${registro.idade}</td>
      <td>
        <button onclick="editarRegistro(${index})">Editar</button>
        <button onclick="excluirRegistro(${index})">Excluir</button>
      </td>
    `;
    //os botões servem como intermédio, ao clicar, chama a função enviando o index do elemento selecionado
    tbody.appendChild(row);
  });
}

function editarRegistro(index) {
    //recebe o index, seleciona o elemento com mesmos elementos e index, retira-os do array e edita, como se fossem novos elementos
  const registro = registros[index];
  document.getElementById('nome').value = registro.nome;
  document.getElementById('idade').value = registro.idade;
  registros.splice(index, 1);
  //LEMBRETE: splice serve para retirar um elemento do array
  atualizarTabela();
}

function excluirRegistro(index) {
  registros.splice(index, 1);
  atualizarTabela();
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('idade').value = '';
}