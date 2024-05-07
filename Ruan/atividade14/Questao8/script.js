document.getElementById('texto1').addEventListener('click', function() {
    alert('Primeira caixa ativada');
});

document.addEventListener('click', function(event) {
    if (event.target.id !== 'texto1') {
        alert('Perdeu o foco');
    }
});
