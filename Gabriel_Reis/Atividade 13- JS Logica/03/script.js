a = Number(prompt("Informe o primeiro numero:"))
b = Number(prompt("Informe o segundo numero:"))
c = Number(prompt("informe o terceiro numero"))
if (a > b && a > c) {
    alert(`O maior numero é ${a}`)
} else if (b > a && b > c) {
    alert(`O maior numero é ${b}`)
} else if (c > a && c > b) {
    alert(`O maior numero é ${b}`)
}
