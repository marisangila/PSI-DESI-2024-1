window.onload = function() {
    var campo1 = document.getElementById('campo1');
    var campo2 = document.getElementById('container-input');

    campo1.addEventListener('input', function() {
        if (campo1.value.trim() !== '') {
            campo2.style.display = 'block';
        } else {
            campo2.style.display = 'none';
        }
    });
};
