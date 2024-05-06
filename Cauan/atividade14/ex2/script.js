// Capturando o botão e o menu
const toggleBtn = document.getElementById('toggle-btn');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});