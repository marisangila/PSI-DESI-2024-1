var numero1 = 0
var numero2 = 0
var numero3 = 1

somaPar = 0

while (numero3 < 50000) {
    numero1 = numero2 + numero3
    numero2 = numero1 + numero3
    numero3 = numero1 + numero2

    somaPar += numero2
    console.log(`${numero1}, ${numero2}, ${numero3}`)
}

console.log("Soma dos números pares: " + somaPar)