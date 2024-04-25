function ehPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function mostrarNumeros() {
    let primeTableBody = document.getElementById("prime-table-body");
    for (let i = 0; i <= 200; i++) {
        let row = primeTableBody.insertRow();
        let numberCell = row.insertCell(0);
        numberCell.textContent = i;
        if (ehPrimo(i)) {
            row.classList.add("primo");
        }
    }
}

mostrarNumeros();