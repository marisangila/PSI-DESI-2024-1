function validarCpf(){
    let cpf = document.getElementById('cpf').value

    if (cpf.length == 11){
        let invalidoNumeros = false
        for (let caractere of cpf) {
            if (typeof caractere != 'number'){
                invalidoNumeros = true
                alert('CPF possui letras!')
                break;
            }
        }
        if (!invalidoNumeros){
            alert('chegou aqui')
        }
    }else{
        alert('CPF com número incorreto de caracteres!')
    }
}