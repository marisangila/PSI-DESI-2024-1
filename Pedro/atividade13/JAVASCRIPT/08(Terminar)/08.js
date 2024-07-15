function table(){
    let table = document.getElementById("table");
    for(i=200;i>=0;i--)
    {
        let row= table.insertRow(-1);
        let cell = row.insertCell(-1);
        let str="<b>"+i
        cell.innerHTML =str
    }
}