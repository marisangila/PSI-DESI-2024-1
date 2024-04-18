function morteOuSorte(d,s){
    if (d >= s ) {
        return 1
    } else {
        return 0
    }
}

function mostraSituacao(){
    
    let saude = document.getElementById("saude").value
    let dano = document.getElementById("dano").value

    let situacao= morteOuSorte(dano,saude)

    document.getElementById("resultado").innerHTML = situacao;
}




