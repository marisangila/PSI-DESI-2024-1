function adicionar() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = '<button onclick="editar(this)" class="btn btn-primary mx-1">Editar</button><button onclick="deletar(this) " class="btn btn-primary mx-1">Excluir</button>';

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

function editar(btn) {
    var row = btn.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    var name = cells[0].innerHTML;
    var age = cells[1].innerHTML;

    document.getElementById("name").value = name;
    document.getElementById("age").value = age;

    row.parentNode.removeChild(row);
}

function deletar(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}