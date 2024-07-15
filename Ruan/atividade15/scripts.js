document.getElementById('submit').addEventListener('click', function  verify_all_fields(){
    let list = [];

    list.push(document.getElementById('name').value);
    list.push(document.getElementById('e-mail').value);
    list.push(document.getElementById('cpf').value);
    list.push(document.getElementById('dateBirth').value);
    
    let empty_fields = false
    for (field in list){
        if (list[field] == ""){
            console.log('aaaaaaaaaaaaaaaaa')
            alert('Error: all fields need to be filled in!');
            empty_fields = !empty_fields;
            break;
        }
    }

    if (!empty_fields){
        let row = document.createElement('tr');

        for (field in list){
            let cell = document.createElement('td');
            cell.textContent = list[field];
            row.appendChild(cell);
        }

        let cellAction = document.createElement('td');
        
        let edit = document.createElement('button');
        edit.className = 'btn btn-primary me-2'
        edit.textContent = 'Edit';
        cellAction.appendChild(edit);

        let exclude = document.createElement('button');
        exclude.className = 'btn btn-danger'
        exclude.textContent = 'Exclude';
        exclude.addEventListener('click', function(){
            row.remove();
        })
        cellAction.appendChild(exclude);

        row.appendChild(cellAction);

        document.getElementById('tableBody').appendChild(row);
    }
})