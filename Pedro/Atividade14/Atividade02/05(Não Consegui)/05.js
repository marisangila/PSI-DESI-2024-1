/*
    link comando do regex para verificar cpf e a logica que utilizei no meu codigo
    https://federalcubatao.com.br/javascript/validacao-de-cpf-em-javascript-como-garantir-dados-precisos-em-seu-site/
*/

let cpfvalido= /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/
let cpf = document.getElementById("cpf")
let button = document.getElementById("enviar")

console.log(cpf.value)
console.log(button.value)
console.log(typeof(cpf.value))

button.addEventListener("click",()=> {
    if(cpfvalido.test(cpf))
    {
        alert("Sucesso cpf válido")
        console.log("if")
    }
    else
    {
        document.createElement("label").innerHTML = "CPF INVÁLIDO!!"
        console.log("else")
    }
})

    
    