function contarCaracteres(){
    let input = document.getElementById('texto');
    let contador = document.getElementById('contador');

    contador.textContent = input.value.length;
}