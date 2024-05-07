function addRow() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();

    if (name === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!testEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    var table = document.getElementById("table").getElementsByTagName('tbody')[0];

    var row = table.insertRow();
    var columnName = row.insertCell(0);
    var columnEmail = row.insertCell(1);
    var columnActions = row.insertCell(2);

    columnName.innerHTML = name;
    columnEmail.innerHTML = email;
    columnActions.innerHTML = '<button onclick="rowEdit(this)" class="btn btn-info">Editar</button>' +
        '<button onclick="deleteRow(this)" class="btn btn-danger">Excluir</button>';

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
}

function testEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function rowEdit(btnEdit) {
    var row = btnEdit.parentNode.parentNode;
    var columnName = row.cells[0].innerHTML;
    var columnEmail = row.cells[1].innerHTML;

    document.getElementById("name").value = columnName;
    document.getElementById("email").value = columnEmail;

    row.remove();
}

function deleteRow(btnDelete) {
    var row = btnDelete.parentNode.parentNode;
    row.remove();
}

