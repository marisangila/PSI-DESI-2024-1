function avalia_vida(dano, vida) {
    let dano = dano()
    let vida = vida()

    vida = vida - dano

    if (vida >= 0) {
        return 1
    }
    else {
        return 0
    }
}

function operacao() {
    if (avalia_vida(parseFloat(document.getElementById("dano").value, parseFloat(document.getElementById("saude").value))) == 0) {
        alert("VIVO")
    }
    else {
        alert("MORTO")
    }
}