function addRow(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var btn_edicao = document.createElement("button");
    var btn_exclusao = document.createElement("button");
    btn_edicao.textContent = "Editar";
    btn_exclusao.textContent = "Excluir";


    var tbody = document.getElementById("dataBody");

    cell_name = document.createElement('td');
    cell_name.textContent = name;

    cell_email = document.createElement('td');
    cell_email.textContent = email;
    
    
    var row = document.createElement('tr');
    row.appendChild(cell_name);
    row.appendChild(cell_email);
    row.appendChild(btn_edicao);
    row.appendChild(btn_exclusao);
    tbody.appendChild(row);

    // btn_exclusao.addEventListener("click", function(){
    //     tbody.removeChild(row);
    // });

    btn_exclusao.addEventListener("click", deleteRow);
}

function deleteRow(){
    var row = this.parentNode;
    var tbody = row.parentNode;
    tbody.removeChild(row);
}