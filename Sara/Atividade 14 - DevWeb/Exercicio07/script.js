// function contarCaracteres(){
//     var input = document.getElementById("input");
//     var contador = document.getElementById("contador");
    
//     input.addEventListener("input", function(){
//         contador.textContent = input.value.length;
//     });
// }

function contarCaracteres() {
    var valor = document.getElementById('input').value;
    total = valor.length;
    document.getElementById('contador').innerHTML = total;
}