function calculaIMC(){
    var altura = Number(document.getElementById('altura').value)
    var peso = Number(document.getElementById('peso').value)
    var imc = peso/(altura**2)
    document.getElementById('imc').innerHTML = `IMC: ${imc}`
}