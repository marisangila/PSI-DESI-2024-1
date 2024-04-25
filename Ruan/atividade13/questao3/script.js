var num1 = Number(prompt("Insira o 1º número"))
var num2 = Number(prompt("Insira o 2º número"))
var num3 = Number(prompt("Insira o 3º número"))

if (num1>num2 && num1>num3) {
    alert(`O número ${num1} é o maior entre os outros.`)
}else if (num2>num1 && num2>num3){
    alert(`O número ${num2} é o maior entre os outros.`)
}else {
    alert(`O número ${num3} é o maior entre os outros.`)
}