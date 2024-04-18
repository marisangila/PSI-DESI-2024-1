altura = Number(prompt("Informe o sua altura:"))
peso = Number(prompt("Informe o seu peso:"))


imc= peso/(altura*altura)

if (imc<16) {
    alert(` ${imc}, magreza grave.`)
} else if (imc>=16 && imc>16.9) {
    alert(` ${imc}, magreza moderada.`)
} else if (imc>=17 && imc>18.5) {
    alert(` ${imc}, magreza leve.`)
}else if (imc>=18.6 && imc>24.9) {
    alert(` ${imc}, peso ideal.`)
}else if (imc>=25 && imc>29.9) {
    alert(` ${imc}, sobrepeso.`)
}else if (imc>=30 && imc>34.9) {
    alert(` ${imc}, obesidade grau I.`)
}else if (imc>=35 && imc>39.9) {
    alert(` ${imc}, obesidade grau II.`)
}else if (imc>40) {
    alert(` ${imc}, obesidade grau III ou mórbida.`)
}
