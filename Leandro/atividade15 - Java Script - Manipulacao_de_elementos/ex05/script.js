function validaCPF(){
    var cpf = document.getElementById('text').value
    cpf = cpf.toString()

    if(cpf.length == 11){
        for(var i=0; i<10; i++){
            var char = cpf.substring(i,i+1)
            if(char != '1' && char != '2' && char != '3' && char != '4' &&
               char != '5' && char != '6' && char != '7' && char != '8' && char != '9'){
                alert('CPF inválido')
                return
            }
        }
        alert('CPF válido')
    }
}