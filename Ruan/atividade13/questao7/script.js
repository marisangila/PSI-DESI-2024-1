function gerarTabela(){

    var tabela = '<tr><th>Número</th></tr>'

    for (var i=1; i<200; i++) {
        contador = 0

        for (var j=1; j<=i; j++) {
            if (i%j==0) {
                contador += 1
            }
        }
        if (contador == 2) {
            tabela += '<tr><td>'
            tabela += '<b>'
            tabela += i      
            tabela += '</b>'
            tabela += '</td></tr>'
        }else{
            tabela += '<tr><td>' + i + '</td></tr>'
        }
    }
    document.getElementById('insertTable').innerHTML = tabela
}