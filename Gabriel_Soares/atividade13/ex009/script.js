function mostraPot(){
    base = document.getElementById("base").value
    exp = document.getElementById("expoente").value
    resultado = Number(base**exp)
    alert(`${base} elevado a ${exp} é igual a ${resultado}`)
}