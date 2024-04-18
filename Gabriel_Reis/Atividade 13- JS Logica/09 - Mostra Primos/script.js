
function ehPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}


function mostraTable() {
    let table = "<table border='1'><tr><th>Número</th><th>Eh número primo?</th></tr>";

    for (let i = 0; i <= 200; i++) {
        table += "<tr><td>" + i + "</td><td>";
        if (ehPrimo(i)) {
            table += "<span style='color:red;'>Sim</span>";
        } else {
            table += "Não";
        }
        table += "</td></tr>";
    }

    table += "</table>";
    document.getElementById("table").innerHTML = table;
}


mostraTable();
