let maior = 0

for(let i=0; i<3; i++){
    let pergunta = Number(prompt('Digite um número: '))
    if(pergunta > maior){maior = pergunta}
}

alert(`O maior número é o ${maior}`)