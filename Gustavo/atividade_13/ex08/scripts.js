printar = ""
var anterior = 0
var atual = 0

for(var nova=0; nova<300; nova++){
    nova = atual + anterior
    anterior = atual
    atual = nova
    console.log(nova + " ")
}
// TA ERRADO OS CALCULOS 