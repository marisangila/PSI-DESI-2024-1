let isPrime
let table = document.querySelector("#table")

for(i=0; i<=200; i++){
    isPrime = true
    row = table.insertRow()   
    row.insertCell(0)
    row.textContent = i

    for(j=2; j<i; j++){
        if(i % j === 0 ){
            isPrime = false
        }
    }
    if(isPrime && (i!=0 && i!=1)){
        row.style.background = "rgb(200, 200, 200)"
    }
}


