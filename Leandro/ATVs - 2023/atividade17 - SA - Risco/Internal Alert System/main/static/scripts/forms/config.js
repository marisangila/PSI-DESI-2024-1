function getCSRFToken() {
    var name = 'csrftoken=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return '';
}

function verificaVitima(){
    let houveVitima = document.getElementById("houveVitimas").value;
    let formDanos = document.getElementById('form-nivel-dano');
    formDanos.classList.remove('d-none');
    if (houveVitima == "nao") {
        formDanos.classList.add('d-none');
    }
}