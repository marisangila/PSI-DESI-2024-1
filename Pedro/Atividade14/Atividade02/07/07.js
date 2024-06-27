let texto= document.getElementById("text")
let contador= document.getElementById("contador")

texto.addEventListener("input", function() {
    contador.textContent = texto.value.length;
});