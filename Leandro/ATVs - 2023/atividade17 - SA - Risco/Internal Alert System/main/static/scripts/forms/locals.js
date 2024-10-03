function loadLocals() {
    var selectedElement = document.getElementById('planta');
    var selectedOption = selectedElement.options[selectedElement.selectedIndex];
    var selectedId = selectedOption.getAttribute('name');
        
        fetch('/IAS/form/ll/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            },
            body: JSON.stringify({ 'planta_id': selectedId })
        })
            .then(response => {
                if (response.ok) {
                    
                    return response.json();
                }
                throw new Error('Erro no envio');
            })
            .then(data => {
                let locals = data.locals;
                let options = "<option name='0' selected disabled>--</option>\n";
                let contador = 0; 
                locals.forEach(item => {
                    options += "<option id='" + item.id + "' name='" + item.id + "'>" + (contador+=1) + " - " + item.nome_local + "</option>\n";
                });

                // Atualiza o HTML do select 'local' após todas as opções serem geradas
                document.getElementById('local').innerHTML = options;
                loadSituacoes()
            })
            .catch(error => {
                console.error('Erro:', error);
            })
}
