var primeiraAtivada = false;

document.getElementById("caixa1").addEventListener("focus", function() {
    if (!primeiraAtivada) {
        alert("Primeira caixa ativada");
        primeiraAtivada = true;
    }
});

document.getElementById("caixa2").addEventListener("focus", function() {
        if (!primeiraAtivada) {
            alert("Perdeu o foco");
            primeiraAtivada = true;
        }
});

document.addEventListener("click", function(event) {
    var elementoClicado = event.target;
    var caixa1 = document.getElementById("caixa1");
    var caixa2 = document.getElementById("caixa2");
        
    if (elementoClicado !== caixa1 && elementoClicado !== caixa2 && primeiraAtivada) {
        alert("Perdeu o foco");
        primeiraAtivada = false;
    }
});