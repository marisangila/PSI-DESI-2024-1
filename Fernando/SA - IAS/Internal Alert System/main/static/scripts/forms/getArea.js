function definirArea(){

    let selectedElement = document.getElementById('situacao');
    let selectedOption = selectedElement.options[selectedElement.selectedIndex];
    let selectedClass = selectedOption.getAttribute('class');

    situacaoVA=selectedClass;

    selectedElement = document.getElementById('risco');
    selectedOption = selectedElement.options[selectedElement.selectedIndex];
    selectedClass = selectedOption.getAttribute('class');

    riscoScore=parseInt(parseInt(situacaoVA)+parseInt(selectedClass));


    let area;
    if(riscoScore==0){
        area='HSE'
        
    }else if(riscoScore==2){
        area='C/AUP'
    }else{
        area='AMBOS'
    }
    document.getElementById('validarArea').value = area;

}


