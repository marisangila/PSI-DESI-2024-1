function generateNewRow(){
    // event.preventDefault()
    let name=document.getElementById('input-name').value;
    let email=document.getElementById('input-email').value;

    if (name=='' || email==''){
        return
    }

    var tbody=document.getElementById('tbody');
    var count=tbody.querySelectorAll("tr").length;

    let cellCount=document.createElement('th');
    cellCount.textContent=count+1;

    let cellName=document.createElement('td');
    cellName.textContent=name;

    let cellEmail=document.createElement('td');
    cellEmail.textContent=email;

    let editButton=document.createElement('input');
    editButton.setAttribute('type','button');
    editButton.value='edit';
    editButton.classList.add('btn','btn-primary','p-2','col-11');
    editButton.setAttribute('onclick','editRow(this)')
    
    let actionEdit=document.createElement('td');
    actionEdit.appendChild(editButton);

    let deleteButton=document.createElement('input');
    deleteButton.setAttribute('type','button');
    deleteButton.value='delete';
    deleteButton.classList.add('btn','btn-danger','p-2','col-11');
    deleteButton.setAttribute('onclick','deleteRow(this)')

    let actionDelete=document.createElement('td');
    actionDelete.appendChild(deleteButton);

    let row=document.createElement('tr');
    row.classList.add('align-items-center');

    row.appendChild(cellCount);
    row.appendChild(cellName);
    row.appendChild(cellEmail);
    row.appendChild(actionEdit);
    row.appendChild(actionDelete);

    tbody.appendChild(row)

    document.getElementById('input-name').value='';
    document.getElementById('input-email').value='';
};
function deleteRow(element){
    var parentCell = element.parentNode;
    parentCell.parentNode.remove();
};
function editRow(element) {
    editRow.selectedRow = element.parentNode.parentNode;
    console.log(editRow.selectedRow);
    var name = editRow.selectedRow.getElementsByTagName('td')[0].textContent;
    var email = editRow.selectedRow.getElementsByTagName('td')[1].textContent;
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-email').value = email;
    var modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
    
    document.getElementById('save-changes').addEventListener('click', function(){
        var newName = document.getElementById('edit-name').value;
        var newEmail = document.getElementById('edit-email').value;
        modal.hide();
        if (editRow.selectedRow) {
            editRow.selectedRow.getElementsByTagName('td')[0].textContent = newName;
            editRow.selectedRow.getElementsByTagName('td')[1].textContent = newEmail;
        }
    });
};





