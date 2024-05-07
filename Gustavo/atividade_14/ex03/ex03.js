function apareceInputs(){
    if(document.getElementById('nameInput').value != ''){
        document.getElementById('lastNameInput').hidden=false
    }else{
        document.getElementById('lastNameInput').hidden=true
        document.getElementById('lastNameInput').value = ''
    }
}