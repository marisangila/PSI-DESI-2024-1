
let body= document.getElementById("bodyTable");

function inserirRow(nome,email)
{
    let nomeValue=nome.value;
    let emailValue=email.value;

    let cell1=document.createElement('td');
    cell1.textContent=nomeValue;
    
    let cell2=document.createElement('td');
    cell2.textContent=emailValue;
 
    let cell3=document.createElement('td');
    
    let btn01 = document.createElement('button');
    let btn02 = document.createElement('button');

    btn01.textContent = "Editar";
    btn02.textContent = "Excluir";
    
    btn01.setAttribute("id", "Editar")
    btn02.setAttribute("id", "Excluir")

    cell3.appendChild(btn01);
    cell3.appendChild(btn02);

    let row=document.createElement('tr');
    row.setAttribute("id", "row")
    
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    body.appendChild(row);
    
    btn02.addEventListener("click",deletarRow);
}

function deletarRow()
{
    let rowDel=this.parentNode.parentNode;
    body.deleteRow(rowDel);
}