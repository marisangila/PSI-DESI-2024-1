function validateCPF() {
    const cpf = document.getElementById('cpf').value;
    const messageElement = document.getElementById('message');
  
    if (!isValidCPF(cpf)) {
      messageElement.textContent = 'Invalid CPF';
    } else {
        messageElement.textContent = 'Valid CPF';
    }
  }
  
  function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    // Eliminate known invalid CPFs
    if (cpf.length!== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999') {
      return false;
    }
    // Validate 1st verification digit
    let add = 0;
    for (let i = 1; i <= 9; i++) {
      add += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev!== parseInt(cpf.charAt(9))) {
      return false;
    }
    // Validate 2nd verification digit
    add = 0;
    for (let i = 1; i <= 10; i++) {
      add += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev!== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }