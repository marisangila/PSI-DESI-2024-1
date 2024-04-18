function morrerOuGanhar(d,s){
    if (d >= s ) {
        return 1
    } else {
        return 0
    }
}

function mostrarResultado(){
    
    let vida = document.getElementById("vida").value
    let dano = document.getElementById("dano").value

    let situacao= morrerOuGanhar(dano,vida)

    document.getElementById("resultado").innerHTML = situacao;
}