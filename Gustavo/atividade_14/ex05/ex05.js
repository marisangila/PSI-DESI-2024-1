function verificadorCPF(){
    cpf = document.getElementById('cpf').value
    if(cpf.length == 11 && !isNaN(cpf)){
        document.getElementById('msg-erro').hidden = true
        document.getElementById('msg-acerto').hidden = false
    }else{
        document.getElementById('msg-acerto').hidden = true
        document.getElementById('msg-erro').hidden = false
    }
}