function pedirIdade(){
    idade = Number(prompt("Insira sua idade"))
}

function verificarMaioridade(){
    if (idade >= 18) {
        alert(`Maior de idade!`)
    } else {
        alert(`Menor de idade!`)
    }
}