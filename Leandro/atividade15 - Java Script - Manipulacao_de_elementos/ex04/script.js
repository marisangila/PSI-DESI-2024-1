function validaForm(){
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value

    if (nome != '' && idade != ''){
        view = false
        
    }else{
        view = true
        alert('Dados preenchidos de forma inválida!')
    }
    document.getElementById('par').hidden = view
}