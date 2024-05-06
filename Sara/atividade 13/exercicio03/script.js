function pedirNumeros(){
    a = Number(prompt("Insira o primeiro número"))
    b = Number(prompt("Insira o segundo número"))
    c = Number(prompt("Insira o terceiro número"))
}

function encontrarMaiorNumero(){
    if ((a > b) && (a >c) ){
        maior = a
    } else if ((b > a) && (b > c)){
        maior = b
    } else {
        maior = c
    }
    alert(`O maior número é ${maior}`)
}