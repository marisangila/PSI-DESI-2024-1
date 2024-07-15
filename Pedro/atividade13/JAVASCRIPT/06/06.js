function enviar(){
    let altura = parseInt(document.getElementById("altura").value)
    let peso = parseInt(document.getElementById("peso").value)
    
    alert("O imc é de: "+(peso/(altura*altura)))
}