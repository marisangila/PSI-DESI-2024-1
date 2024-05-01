function mostrarCampo2() {
    var valorCampo1 = document.getElementById('campo1').value;
    if (valorCampo1.trim() !== '') {
        document.getElementById('campo2Container').style.display = 'block';
    } else {
        document.getElementById('campo2Container').style.display = 'none';
    }
}