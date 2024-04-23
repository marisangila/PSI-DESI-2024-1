function mostraSituacao(){
    let vida = document.getElementById("vida").value
    let dano = document.getElementById("dano").value
    let situcao = `Vivo(0) ou Morto(1):  ${faleceu(vida, dano)}`   
    document.getElementById("situacao").innerHTML = situcao
}

function faleceu(x, y){
    let morreu = 1
    if(x > y){
        morreu = 0
    }
    return morreu
}