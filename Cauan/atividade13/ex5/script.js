function calcularMediaAritmetica() {
    let numberA = Number(document.getElementById("number-1").value)
    let numberB = Number(document.getElementById("number-2").value)
    let numberC = Number(document.getElementById("number-3").value)

    alert(`o resultado da média aritmética é: ${(numberA + numberB + numberC)/3}`)
}