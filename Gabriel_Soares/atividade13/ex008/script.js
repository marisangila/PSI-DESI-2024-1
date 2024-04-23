function ehPrimo(num) {
    if (num <= 1) return false
    if (num <= 3) return true

    if (num % 2 === 0 || num % 3 === 0) return false

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }

    return true
}


function mostraTabela() {
    let table = "<table border='2'><tr><th>Números até 200</th><th>É primo?</th></tr>"

    for (let i = 0; i <= 200; i++) {
        table += "<tr><td>" + i + "</td><td>"
        if (ehPrimo(i)) {
            table += "<span style='color:red;'>Sim</span>"
        } else {
            table += "Não"
        }
        table += "</td></tr>"
    }

    table += "</table>"
    document.getElementById("tabela").innerHTML = table
}

mostraTabela()