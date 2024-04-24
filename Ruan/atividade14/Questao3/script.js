function esconderDiv(){
    for (let i=2; i<=4;i++){
        document.getElementById('campo'+i).hidden = true
    }
}

function mostrarCampo(i){
    let valorInput = document.getElementById('elemento'+i).value
    if (valorInput != null) {
        document.getElementById('campo'+(i+1)).hidden = false
    }
}