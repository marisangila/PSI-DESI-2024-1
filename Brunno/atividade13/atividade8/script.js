function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}


function mostrarTabela() {
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
    document.getElementById("tabela").innerHTML = table;
}


mostrarTabela();