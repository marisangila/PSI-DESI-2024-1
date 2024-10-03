document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é a tecla "Enter"
    if (event.keyCode === 13) {
        // Cancela o comportamento padrão da tecla "Enter"
        event.preventDefault();
    }
});
