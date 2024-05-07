function toggleMenu() {
    var menu = document.getElementById("menu");
    // Se o menu estiver visível, oculta-o; caso contrário, mostra-o
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}