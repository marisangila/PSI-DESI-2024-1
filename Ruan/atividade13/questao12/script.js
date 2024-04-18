var vidaMario 

function iniciarVidaMario(){
    vidaMario = 5
    document.getElementById("vidaMario").innerHTML = vidaMario
}

function alterarVidaMario(alteraVidaMario){

    if (vidaMario == 0 && alteraVidaMario){
        alert('O Mário já está morto!!!')
    }else if (vidaMario == 5 && !alteraVidaMario){
        alert('A vida do Mário está cheia!!!')
    }else{
        if (alteraVidaMario){
            vidaMario -= 1
            document.getElementById("vidaMario").innerHTML = vidaMario
        }else{
            vidaMario += 1
            document.getElementById("vidaMario").innerHTML = vidaMario
        }
        if (vidaMario == 1 && alteraVidaMario){
            alert('O Mário morrerá no próximo ataque!!!')
        }else if(vidaMario == 1 && !alteraVidaMario){
            alert('O Mário Ressuscitou!!!')
        }
    }
}