function enviar(){
    let idade = parseInt(document.getElementById("idade").value)

    if(idade<18)alert("Menor de idade!")
    else alert("Maior de idade!")
}