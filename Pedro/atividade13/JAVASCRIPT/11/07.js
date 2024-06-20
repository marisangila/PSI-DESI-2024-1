function enviar(){
    let altura = parseInt(document.getElementById("altura").value)
    let peso = parseInt(document.getElementById("peso").value)
    
    document.getElementById("div").innerHTML = "O seu imc é de:"+(peso/(altura*altura))
}