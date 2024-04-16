function mostrarMaiorValor() {
    let numeroA = Number(document.getElementById("number-1").value)
    let numeroB = Number(document.getElementById("number-2").value)
    let numeroC = Number(document.getElementById("number-3").value)

    if (numeroA > numeroB && numeroA > numeroC){
        alert("Numero 1 é o maior!")
    }else if(numeroB > numeroA && numeroB > numeroC){
        alert("Numero 2 é o maior!")
    }else{
        alert("Numero 3 é o maior!")
    }
}



