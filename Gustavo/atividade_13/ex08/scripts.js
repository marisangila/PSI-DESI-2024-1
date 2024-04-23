printar = ""
var anterior = 0
var atual = 0

for(var i=0; i<25; i++){
    nova = atual + anterior
    anterior = atual
    atual = nova
    console.log(nova + " ")
}
// TA ERRADO OS CALCULOS 