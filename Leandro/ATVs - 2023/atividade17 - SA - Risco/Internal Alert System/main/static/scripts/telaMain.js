function debugRestantes(){
    rest='restantes: \n\n'
    for(let i = 0; i < checkBoxesIds.length; i++){
        rest+=i+': '+checkBoxesIds[i]+'\n'
}
alert(rest)
}
var checkBoxesIds=[];

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById('tabela-relatorios');
    const checkboxes = table.querySelectorAll('tbody input[type="checkbox"]');
    const checkTodos = document.getElementById('checkTodos');


    // Adicionar evento ao checkbox "Selecionar Todos"
    checkTodos.addEventListener('change', function () {
        checkboxes.forEach(function (checkbox) {
            const row = checkbox.closest('tr');
            if(row.style.display !== 'none'){
            checkbox.checked = checkTodos.checked;
            if(checkbox.checked){
                let existsId= verifica_id(row);
                if(!existsId){
                    row.classList.add('selected');
                    addCheckboxesIds(row);
                }
            } else {
                removeCheckboxesIds(row);
                row.classList.remove('selected');
            }
            
            verificaSelecoes();
        }
        });
    });

    function verifica_id(row){
        for(let i=0;i < checkBoxesIds.length; i++){
            if(checkBoxesIds[i]==row.id){
                return true;
            }
        }
        return false;
    }

  

    // Adicionar eventos para os checkboxes individuais
    for (let i = 0; i < checkboxes.length; i++) {


        checkboxes[i].addEventListener('click', function (event) {
            event.stopPropagation();
            const row = this.closest('tr');
            if (this.checked) {                
                row.classList.add('selected');
                addCheckboxesIds(row)
            } else {
                row.classList.remove('selected');
                removeCheckboxesIds(row)
            }
            verificaSelecoes();
        });
        
        // Adiciona evento de clique na linha para ativar/desativar o checkbox
        checkboxes[i].closest('tr').addEventListener('click', function (event) {
            const checkbox = this.querySelector('input[type="checkbox"]');
            const row = checkbox.closest('tr');
            const td= event.target.closest('td:not([name="area"])');
            
            
            if (td) {   
                checkbox.checked = !checkbox.checked;  
                
                if(checkbox.checked){
                    row.classList.add('selected');
                    addCheckboxesIds(row)
                } else {
                    row.classList.remove('selected');
                    removeCheckboxesIds(row);
                }
            }
            verificaSelecoes();
        });
    }
    function addCheckboxesIds(row){

        checkBoxesIds.push(row.id);
    
    }
    
    function removeCheckboxesIds(row){
        for(let i = 0; i < checkBoxesIds.length; i++){
            if(row.id==checkBoxesIds[i]){
                checkBoxesIds.splice(i,1);
            }
        }      
        
    }
    
    function verificaSelecoes(){

        if(checkBoxesIds.length!=0 && document.getElementById("editar").textContent=='Editar'){
            document.getElementById('excluir').disabled = false;  
        }else{
            document.getElementById('excluir').disabled = true;  
        }
    }

});

// Função para excluir linhas selecionadas
function excluirSelecionados() {
    const checkboxes = document.querySelectorAll('#tabela-relatorios tbody input[type="checkbox"]:checked');
    
    checkboxes.forEach(function (checkbox) {
        checkbox.closest('tr').remove();
    });

    verificaDadosPlanilha();
}
function verificaDadosPlanilha(){
    const table = document.getElementById('tabela-relatorios');
    const tbody = table.querySelector('tbody');
    
    // Verifica se ainda há linhas na tabela
    if (tbody.rows.length === 0) {
        const tableContainer = document.querySelector('.table-container');
        const mensagem = document.createElement('div');
        mensagem.textContent = 'Não há dados na Tabela.';
        mensagem.classList.add('text-center', 'mt-3', 'text-muted');
        tableContainer.replaceWith(mensagem);
    }
}

// Função para filtrar a tabela
function filtrarTabela() {
    const input = document.getElementById('btn-pesquisar');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('tabela-relatorios');
    const trs = table.getElementsByTagName('tr');

    // Loop pelas linhas da tabela
    for (let i = 1; i < trs.length; i++) {
        let matchFound = false;
        const tds = trs[i].getElementsByTagName('td');

        for (let j = 0; j < tds.length; j++) {
            const td = tds[j];
            if (td) {
                let textValue = td.textContent || td.innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    matchFound = true;
                    break;
                }
            }
        }

        if (matchFound) {
            trs[i].style.display = '';
        } else {
            trs[i].style.display = 'none';
        }
    }
}

verificaDadosPlanilha();