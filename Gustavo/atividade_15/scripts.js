function excluirLinha(){
    var roww = this.parentNode.parentNode;
    document.getElementById("body_table").removeChild(roww);
}

function inputInformations(){
    let nameText = document.getElementById('nameInput');
    let emailText = document.getElementById('emailInput');

    let nameSquare = document.createElement('td');
    nameSquare.textContent = nameText.value;
    let emailSquare = document.createElement('td');
    emailSquare.textContent = emailText.value;
    let actionBtns = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.textContent = "Editar";
    editBtn.className = "btn btn-secondary";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Excluir";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.addEventListener('click', excluirLinha)

    actionBtns.appendChild(editBtn);
    actionBtns.appendChild(deleteBtn);

    const row = document.createElement('tr');
    row.appendChild(nameSquare);
    row.appendChild(emailSquare);
    row.appendChild(actionBtns);

    let body = document.getElementById('body_table');
    body.appendChild(row);
}