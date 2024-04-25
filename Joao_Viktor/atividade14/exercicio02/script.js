// Função para mostrar ou ocultar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    // Verifica se o menu está visível
    if (menu.style.display === "none") {
        // Se estiver oculto, torna-o visível
        menu.style.display = "block";
    } else {
        // Se estiver visível, oculta-o
        menu.style.display = "none";
    }
}
