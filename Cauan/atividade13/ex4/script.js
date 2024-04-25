function mostarValidacaoIdade() {
    let age = Number(document.getElementById("age-input").value)

    if (age >= 18){
        alert("Você é de maior")
    }else{
        alert("Você não é de maior")
    }
}