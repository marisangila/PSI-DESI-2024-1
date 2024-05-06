function mostraProximoInput(currentInput) {
    if (currentInput.value!== "") {
        const nextFieldContainer = currentInput.nextElementSibling;
        if (nextFieldContainer) {
          nextFieldContainer.style.display = "block";
        }
      }
  }