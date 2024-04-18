function calcularPotenciacao() {
    var nmrbase = document.getElementById("nmrbase").value;
    var nmrexpoente = document.getElementById("nmrexpoente").value;
  
    if (nmrbase === "" || nmrexpoente === "") {
      alert("Por favor, informe o número de base e o expoente.");
      return;
    }
  
    nmrbase = parseFloat(nmrbase);
    nmrexpoente = parseFloat(nmrexpoente);
  
    var resultado = Math.pow(nmrbase, nmrexpoente);
    alert("O resultado da potenciação é: " + resultado);
  }