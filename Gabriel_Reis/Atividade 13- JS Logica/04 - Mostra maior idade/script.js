idade = Number(prompt("Informe sua idade:"))
while(idade<=0 || idade>120){
    idade = Number(prompt("Tente novamente. Informe sua idade:"))
}

if(idade>=18){
    alert("O usuario é maior de idade!")
}else{
    alert("O usuario é menor de idade!")
}
