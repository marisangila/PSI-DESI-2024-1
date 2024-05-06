
const caixa1 = document.getElementById('caixa1');

caixa1.addEventListener('click', () => {
    alert('Primeira caixa ativada');
});

const caixa2 = document.getElementById('caixa2');

document.addEventListener('click', (event) => {
    if (event.target !== caixa1 && event.target !== caixa2) {
        alert('Perdeu o foco');
    }
});