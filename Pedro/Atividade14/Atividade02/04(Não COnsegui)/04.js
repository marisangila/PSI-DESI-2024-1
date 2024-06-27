let erroNome = document.getElementById("erroNome")
let erroSobrenome = document.getElementById("erroSobrenome")
let erroIdade = document.getElementById("erroIdade")
let myform  = document.getElementById("myform")
let enviar = document.getElementById("enviar")
let nome = document.getElementById("nome").value
let sobrenome = document.getElementById("sobrenome").value
let idade = document.getElementById("idade").value

erroNome.hidden = true
erroSobrenome.hidden = true
erroIdade.hidden = true

function validaNome(nome)
{   
    console.log(nome)
    if(nome == "" || nome == null)
    {
        erroNome.hidden = true
        return false
    } 
    else erroNome.hidden = false
    return true
}
function validaSobrenome(sobrenome)
{
    console.log(sobrenome)
    if(sobrenome == "" || sobrenome == null)
    {
        erroSobrenome.hidden = false
        return false
    } 
    else erroSobrenome.hidden = true
    return true
}
function validaIdade(idade)
{
    console.log(idade)
    let number = 1
    if(idade == "" || idade == null||idade<=0|| typeof(idade)==typeof(number))
    {
        erroIdade.hidden = false
        return false
    } 
    else erroIdade.hidden = true
    return true
}

function validaTudo()
{
    let nomeValido = validaNome(nome)
    let sobrenomeValido =validaSobrenome(sobrenome)
    let idadeValida = validaIdade(idade)
    if(nomeValido == false||sobrenomeValido == false || idadeValida == false) return false
    return true
}

enviar.addEventListener("click", ()=> {
    if (validaTudo() == false) console.log("Inválido!!")
    else {
        console.log("Válido!!")
    }
})
