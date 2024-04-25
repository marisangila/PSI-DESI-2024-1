function verifyPrimeNumbers(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function showPrimeNumbers() {
    var tableNumbers = document.getElementById("tableNumbers");
    for (var i = 0; i <= 200; i++) {
        var row = tableNumbers.insertRow();
        var cellNumber = row.insertCell(0);
        var cellPrime = row.insertCell(1);
        cellNumber.textContent = i;
        if (verifyPrimeNumbers(i)) {
            cellPrime.textContent = "Yes";
            row.classList.add("prime");
        } else {
            cellPrime.textContent = "No";
        }
    }
}

showPrimeNumbers();
