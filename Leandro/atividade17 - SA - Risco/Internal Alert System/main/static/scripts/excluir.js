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

function deleteReports(){


fetch('/IAS/main/del/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken()
    },
    body: JSON.stringify({ 'data': checkBoxesIds })
})
    .then(response => {
        if (response.ok) {
            
            return response.json();
        }
        throw new Error('Erro no envio');
    })
    .then(data => {
        alert('deletando...')
        window.location.href = "/IAS/main/";
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}