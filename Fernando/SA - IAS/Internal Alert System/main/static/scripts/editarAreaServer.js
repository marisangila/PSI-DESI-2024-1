var dados = [];

function obterDadosSelects() {
    dados = [];
    let selects = document.querySelectorAll('.select-change');

    selects.forEach(function(select) {
        let idLinha = select.closest('tr').getAttribute('id'); // Melhoria aqui
        let textoSelecionado = select.value;

        // Criar objeto com os dados
        let obj = {
            id: idLinha,
            textoSelecionado: textoSelecionado
        };

        // Adicionar objeto à array
        dados.push(obj);
    });

    atualizarReports();

}


function atualizarReports(){
    fetch('/IAS/main/update/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken()
    },
    body: JSON.stringify({ 'data': dados })
})
    .then(response => {
        if (response.ok) {
            
            return response.json();
        }
        throw new Error('Erro no envio');
    })
    .then(data => {
        window.location.href = "/IAS/main/";
    })
    .catch(error => {
        console.error('Erro:', error);
    });

}
