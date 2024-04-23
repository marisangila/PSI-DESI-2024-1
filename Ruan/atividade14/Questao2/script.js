function esconderDiv(){
    document.getElementById('divEscondida').hidden = true
}

function mostrarDiv(){
    let botao = document.getElementById('botao').value

    if (botao === "Mostrar") {
        document.getElementById('divEscondida').hidden = false
        document.getElementById('botao').value = 'Esconder'
    } else{
        document.getElementById('divEscondida').hidden = true
        document.getElementById('botao').value = 'Mostrar'
    }
}