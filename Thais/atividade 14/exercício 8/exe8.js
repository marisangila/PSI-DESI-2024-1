function msgAtivacao() {
    alert("Primeira caixa ativada!");
}

function msgPerdeuFoco(){
    alert("Perdeu o foco!")
}

document.addEventListener("click", function(event) {
    var clicadoForaDaCaixa1 = event.target.id !== "caixa1";
    var clicadoForaDaCaixa2 = event.target.id !== "caixa2";
    
    if (clicadoForaDaCaixa1 && clicadoForaDaCaixa2) {
        alert("Perdeu o foco!");
    }
});