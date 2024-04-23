function alteraVisualizacao(){
    var btn = document.getElementById('btn').value

    if(btn == 'Ocultar'){
        btn = 'Exibir'
        quadro = true
    }else{
        btn = 'Ocultar'
        quadro = false
    }
    document.getElementById('btn').value = btn
    document.getElementById('quadro').hidden = quadro
}