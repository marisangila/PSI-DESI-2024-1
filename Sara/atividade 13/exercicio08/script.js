function verificarPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  function gerarTabela() {
    const tabelaNumeros = document.getElementById("tabelaNumeros");
    tabelaNumeros.innerHTML = "";
  
    for (let i = 0; i <= 200; i++) {
      const tr = document.createElement("tr");
      const tdNumero = document.createElement("td");
      const tdPrimo = document.createElement("td");
  
      tdNumero.textContent = i;
      if (verificarPrimo(i)) {
        tdPrimo.textContent = "Sim";
        tr.classList.add("primo");
      } else {
        tdPrimo.textContent = "Não";
      }
  
      tr.appendChild(tdNumero);
      tr.appendChild(tdPrimo);
      tabelaNumeros.appendChild(tr);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    gerarTabela();
  });