function tabuada()
{
    let numero = parseFloat(document.getElementById("numero").value)
    let table=document.getElementById("tabela")
    for(i=1;i<=10;i++)
    {
        let resultado=numero*i
        let row= table.insertRow(-1);
        let cell = row.insertCell(-1);
        cell.innerHTML = numero+"*"+i+"="+resultado
    }
}