function verificadorPrimo(){
   var primo = true
   
    for(var j=2; j<=200; j++){
        for(k=2; k<=200; k++){
            if((j % k != 0) && (j != k)){
                primo = false
            }
        }
    }
    return primo
}

function tabular(){
    var table = document.getElementById('tabela')
    for(var i=0; i<200; i++){
        var row = table.insertRow()
        var cell = row.insertCell()
        cell.innerHTML = i+1
        if(verificadorPrimo()){row.classList.add("mudaCor")}
    }
}