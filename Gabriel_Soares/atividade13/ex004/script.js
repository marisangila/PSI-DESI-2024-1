idade = Number(prompt("Digite sua idade"))
while(idade < 0 || idade > 120){
    idade = Number(prompt("Digite uma idade valida"))
}

if(idade >= 18){
    alert("Você é maior de idade")
}else{
    alert("Você é menor de idade")
}