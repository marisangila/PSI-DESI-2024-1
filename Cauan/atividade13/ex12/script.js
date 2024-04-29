document.getElementById("submit").addEventListener("click", function(){
    console.log("entrou")
    let vida = Number(document.getElementById("vida").value)
    let dano = Number(document.getElementById("dano").value)

    if ((vida - dano) <= 0){
        document.getElementById("result").innerHTML = `1 o personagem morerrá`
    }
    else{
        document.getElementById("result").innerHTML = `0 o personagem vai sobreviver`
    }
})