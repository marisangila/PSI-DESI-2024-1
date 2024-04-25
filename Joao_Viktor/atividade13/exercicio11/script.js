function calculateTable() {
    var tableNumbers = document.getElementById("tableNumbers");
    var inputNumber = parseFloat(prompt("Enter the number:"))

    for (var i = 1; i <= 10; i++) {
        result = inputNumber * i
        var row = tableNumbers.insertRow();
        var cellNumber = row.insertCell(0);
        cellNumber.textContent = inputNumber + " * " + i + " = " + result;
        }
    }

calculateTable();