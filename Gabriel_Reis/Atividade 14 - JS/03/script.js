document.getElementById('campo1').addEventListener('input', function() {
    var campoOculto = document.getElementById('campoOculto');
    if (this.value.trim() !== '') {
      campoOculto.style.display = 'block';
    } else {
      campoOculto.style.display = 'none';
    }
  });