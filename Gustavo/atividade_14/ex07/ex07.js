// function contadorCaracteres(){
//     addEventListener('keyup', () => {
//         this.document.getElementById('qntd-char').innerText = getElementById('inputs').value.length
//     })
// }

function contadorCaracteres(){
    input = document.getElementById('text')
    contador = document.getElementById('contador')

    contador.innerHTML = input.value.length
}