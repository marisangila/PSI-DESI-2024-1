function calcularTabuada() {
    numero = Number(document.getElementById("entrada").value)

    saida = ''

    for (var i=0; i<11; i++) {
        saida += `A mutiplicação de ${i} X ${numero} = ${i*numero}<br>`
    }
    document.getElementById("saida").innerHTML = saida
}