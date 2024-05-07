var tabuada = Number(prompt('Digite a tabuada desejada: '))
let resposta = ""

for(let i=0; i < 10; i++){
    let conta = (i+1) * tabuada
    resposta += `${i+1} x ${tabuada} = ` + conta + "\n"
}

alert(resposta)