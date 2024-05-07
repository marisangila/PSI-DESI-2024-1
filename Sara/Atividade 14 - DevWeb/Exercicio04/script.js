function verificarFormulario(){
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var botao = document.getElementById("botao");
    if(lastname != "" && name != ""){
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Todos os campos devem ser preenchidos!"); 
    }
}