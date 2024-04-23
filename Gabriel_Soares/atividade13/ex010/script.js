function mostraTabuada(){
    num = document.getElementById("numero").value
    tabuada = ''
    i=0
    for(i=0; i<=10; i++){
        tabuada += `${num} x ${i} = ${num*i} <br><br>`
    }
    document.getElementById("tabuada").innerHTML = tabuada
}

mostraTabuada()