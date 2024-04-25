function verificarCpf(){
    var cpf = document.getElementById("cpf").value
    if(cpf != "" && cpf.length == 8){
        alert("Formulário enviado com sucesso!");
    } else {
        alert("O CPF informado não é válido");
    }
}