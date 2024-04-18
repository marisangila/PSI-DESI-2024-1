document.addEventListener("DOMContentLoaded", function () {
    function verificarMorte(dano, saude) {
      if (saude - dano <= 0) {
        return 1;
      } else {
        return 0;
      }
    }
  
    const formVerificarMorte = document.getElementById("formVerificarMorte");
    const resultado = document.getElementById("resultado");
  
    formVerificarMorte.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const dano = parseInt(document.getElementById("dano").value);
      const saude = parseInt(document.getElementById("saude").value);
  
      const morte = verificarMorte(dano, saude);
  
      if (morte === 1) {
        resultado.textContent = "O personagem morreu!";
      } else {
        resultado.textContent = "O personagem sobreviveu!";
      }
    });
  });