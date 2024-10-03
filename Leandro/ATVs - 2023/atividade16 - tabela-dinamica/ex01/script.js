function excludeRow(){
    var row = this.parentNode.parentNode;
    document.getElementById('tBody').removeChild(row);
}

function addInfo(){
    let name = document.getElementById('name-text').value;
    let email = document.getElementById('email-text').value;

    if(name != '' && email != ''){
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const btn1 = document.createElement('button');
        const btn2 = document.createElement('button');

        btn1.textContent = 'Editar'
        btn2.textContent = 'Excluir'
        
        btn2.addEventListener('click', excludeRow)

        btn1.className="btn btn-primary m-2 col-3"
        btn2.className="btn btn-danger m-2 col-3"

    
        td1.textContent = name;
        td2.textContent = email;
        td3.appendChild(btn1);
        td3.appendChild(btn2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        document.getElementById('tBody').append(tr);
    } else{
        alert('Please fill all the fields');
    }
}