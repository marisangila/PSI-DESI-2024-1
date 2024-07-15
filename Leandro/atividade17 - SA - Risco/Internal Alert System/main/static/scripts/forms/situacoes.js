function loadSituacoes() {
    var selectedElement = document.getElementById('local');
    var selectedOption = selectedElement.options[selectedElement.selectedIndex];
    var selectedId = selectedOption.getAttribute('name');

        fetch('/IAS/form/ls/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            },
            body: JSON.stringify({ 'local_id': selectedId })
        })
            .then(response => {
                if (response.ok) {
                    
                    return response.json();
                }
                throw alert('erro envio');
            })
            .then(data => {
                let situacoes = data.situacoes;
                let options = "<option name='0' selected disabled>--</option>\n";
                let contador=0
            
                situacoes.forEach(function (item) {
                    console.log('nome: ' + item.nome_situacao)
                    options += "<option id='" + item.id + "' name='" + item.id + "' class='"+item.verifica_area_situacao+"'>" + (contador+=1) + " - " + item.nome_situacao + "</option>\n";
                })
                document.getElementById('situacao').innerHTML = options;
                loadRiscos()
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }