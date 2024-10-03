function loadRiscos() {
    
    var selectedElement = document.getElementById('situacao');
    var selectedOption = selectedElement.options[selectedElement.selectedIndex];
    var selectedId = selectedOption.getAttribute('name');

    fetch('/IAS/form/lr/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({ 'situacao_id': selectedId })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw alert('erro envio');
        })
        .then(data => {
            riscos = data.riscos;
            let options = "<option name='0' selected disabled>--</option>\n";
            let contador = 0; 
            riscos.forEach(function (item) {
                console.log('nome: ' + item.nome_risco)

                options += "<option id='" + item.id + "' name='" + item.id + "' class='"+item.verifica_area_risco+"'>" + (contador+=1) + " - " + item.nome_risco + "</option>\n"
            })
            document.getElementById('risco').innerHTML = options;
            document.get
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}