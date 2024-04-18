printar = ""
var anterior = 1
var atual = 0
var nova = 0
var soma = 0

while(nova < 50000){
    nova = atual + anterior
    anterior = atual
    atual = nova
    if(nova % 2 == 0){soma += nova}
}

console.log(soma)
// TA ERRADO OS CALCULOS 