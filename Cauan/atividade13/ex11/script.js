document.getElementById("submit").addEventListener("click", function(){
    let width = Number(document.getElementById("width").value)
    let weight = Number(document.getElementById("weight").value)

    let imc = weight/width**2
    console.log(document.getElementById("result"))
    document.getElementById("result").innerHTML = `<p>O resultado do seu IMC é: ${imc.toFixed()}</p>`
})