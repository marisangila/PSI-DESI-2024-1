function mostrarCampoExtra() {
    const select = document.getElementById('selecionarOpcao')
    const campo1 = document.getElementById('campoExtra1')
    const campo2 = document.getElementById('campoExtra2')
    const campo3 = document.getElementById('campoExtra3')

    campo1.style.display = 'none'
    campo2.style.display = 'none'
    campo3.style.display = 'none'

    if (select.value === 'opcao1') {
        campo1.style.display = 'block'
    } else if (select.value === 'opcao2') {
        campo2.style.display = 'block'
    } else if (select.value === 'opcao3') {
        campo3.style.display = 'block'
    }
}