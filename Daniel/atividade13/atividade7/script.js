function send(){
    let weight = Number(document.getElementById('weight').value)
    let height = Number(document.getElementById('height').value)

    IMC = weight/(height ** 2)

    let paragraph = document.getElementById('paragraph')
    paragraph.innerHTML = IMC.toFixed(2).toString()
}






