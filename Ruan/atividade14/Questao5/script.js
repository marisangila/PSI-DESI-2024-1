function validarCpf(){
    let cpf = document.getElementById('cpf').value.replace(/\D/g, '')

    if (cpf.length !== 11 || cpf.match(/(\d)\1{10}/)){
        document.getElementById('mensagem').innerHTML = '<label style="color: red;">* CPF inválido.</label>'
    }else{
        document.getElementById('mensagem').innerHTML = '<label style="color: green;">* CPF válido.</label>'
    }
}