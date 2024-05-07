document.getElementById('campo1').addEventListener('input', function() {
    var campo1Value = this.value;
    var campo2Div = document.getElementById('campo2Div');

    if (campo1Value.trim() !== '') {
        campo2Div.classList.remove('hidden');
    } else {
        campo2Div.classList.add('hidden');
    }
});