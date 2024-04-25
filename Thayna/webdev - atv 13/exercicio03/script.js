function pedirNumeros(){
    um = Number(prompt("Insira o primeiro número:"))
    dois = Number(prompt("Insira o segundo número:"))
    tres = Number(prompt("Insira o terceiro número:"))
}

function numeroMaior(){
    if ((um > dois) && (um > tres)){
        maior = um
    }
 else if ((dois > um) && (dois> tres)){
    maior = dois
}
else {
    maior = tres
}
alert (`O maior número é ${`maior`}`)
}
