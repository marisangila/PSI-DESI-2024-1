// Função para entrar no modo de edição
function entrarModoEdicao() {
    document.getElementById('excluir').disabled = true;  
    const botaoEdicao = document.getElementById('editar');
    const itensSelect = document.querySelectorAll('.areaSelect');
    const itensText = document.querySelectorAll('.areaText');
    const salvarBtn= document.getElementById("salvarBtn");

    // Altera texto e comportamento do botão
    botaoEdicao.innerText = 'Cancelar';
    botaoEdicao.classList.add('bg-warning');
    botaoEdicao.removeEventListener('click', entrarModoEdicao);
    botaoEdicao.addEventListener('click', cancelarEdicao);
    salvarBtn.disabled = false;
    salvarBtn.classList.remove('invisible');

    // Exibe selects e oculta textos
    itensSelect.forEach(function (item) {
        item.classList.remove('d-none');
    });

    itensText.forEach(function (item) {
        item.classList.add('d-none');
    });
}

// Função para cancelar a edição
function cancelarEdicao() {
    if(checkBoxesIds.length>0){

        document.getElementById('excluir').disabled = false;  
    }
    const botaoEdicao = document.getElementById('editar');
    const itensSelect = document.querySelectorAll('.areaSelect');
    const itensText = document.querySelectorAll('.areaText');
    const salvarBtn= document.getElementById("salvarBtn");
    salvarBtn.disabled = true;
    salvarBtn.classList.add('invisible');

    // Altera texto e comportamento do botão
    botaoEdicao.innerText = 'Editar';
    botaoEdicao.classList.remove('bg-warning');
    botaoEdicao.removeEventListener('click', cancelarEdicao);
    botaoEdicao.addEventListener('click', entrarModoEdicao);

    // Oculta selects e exibe textos
    itensSelect.forEach(function (item) {
        item.classList.add('d-none');
    });

    itensText.forEach(function (item) {
        item.classList.remove('d-none');
    });
}

// Event listener para o botão de edição
document.addEventListener('DOMContentLoaded', function () {
    const botaoEdicao = document.getElementById('editar');
    botaoEdicao.addEventListener('click', entrarModoEdicao);
});
