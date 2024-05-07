function showField(value) {
    const fieldContainer = document.getElementById('dynamic-field');
    fieldContainer.innerHTML = '';
  
    if (value) {
      const input = document.createElement('input');
      input.type = value;
      input.placeholder = 'Type your ' + value;
      input.className = 'm-1';
      fieldContainer.appendChild(input);
    }
  }