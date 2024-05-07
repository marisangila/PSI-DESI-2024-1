printar = ""
var anterior = 1
var atual = 0
var nova = 0
var soma = 0

for(var i=0; i<25; i++){
    nova = atual + anterior
    anterior = atual
    atual = nova
    if(nova % 2 == 0){soma += nova}
}

console.log(soma)
// TA ERRADO OS CALCULOS 