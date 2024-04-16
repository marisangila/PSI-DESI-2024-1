retornoValoresPrimos = ""
contador = 0

for (var i=1; i<200; i++) {
    contador = 0
    for (var j=1; j<=i; j++) {
        if (i%j==0) {
            contador += 1
        }
    }
    if (contador == 2) {
        retornoValoresPrimos += `${i}, `
    }
}

alert(`Os números primos são: ${retornoValoresPrimos}`)