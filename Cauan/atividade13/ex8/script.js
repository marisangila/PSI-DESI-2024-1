function isPrime(num) {
    if (num == 1) return false
    if (num == 2) return true
    if (num == 0) return false

    let cont = 2
    while (cont <= num){
        if (!(num == cont)){
            let resultDivision = num % cont
            if (resultDivision == 0){
                return false
            }
        }
        cont += 1
    }
    return true
}

function displayPrimeTable() {
    const tableBody = document.getElementById('TableBody');
    for (let i = 0; i <= 200; i++) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = i;
        row.appendChild(cell);
        console.log(i)
        if (isPrime(i)){
            row.style.background = "yellow"
        }
        tableBody.appendChild(row)
    }
}

let prime = []
for (i = 0;i <= 100; i++){
    if (isPrime(i)){
        prime.push(i)
    }
}
console.log(prime)
displayPrimeTable();