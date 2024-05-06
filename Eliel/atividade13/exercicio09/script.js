function ehPrimo(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

var tabelaPrimo = document.getElementById("tabela-numeros");
for (var i = 0; i <= 200; i++) {
    var row = tabelaPrimo.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = i;
    if (ehPrimo(i)) {
        cell.classList.add("numero-primo");
    }
}