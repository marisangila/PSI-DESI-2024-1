idade = Number(prompt("Informe sua idade: "))
while(idade > 120 || idade < 0){
    alert("Idade não suportada!")
    idade = Number(prompt("Informe sua idade: "))
}
    if(idade > 18){
        alert(`Você é maior de idade!`)
    }
    else if (idade < 18){
        alert(`Você é menor de idade!`)
    }
    

