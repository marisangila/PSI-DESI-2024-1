document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModalDiario");
    var span = document.getElementsByClassName("close")[0];

    var formEmocao = document.querySelector("form[action='../src/cadastrar_emocao.php']");
    var formSintoma = document.querySelector("form[action='../src/cadastrar_sintoma.php']");

    formEmocao.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(formEmocao);
        fetch("../src/cadastrar_emocao.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(() => {
            modal.style.display = "block";
        });
    });

    formSintoma.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(formSintoma);
        fetch("../src/cadastrar_sintoma.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(() => {
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
        location.reload();
    }

    window.onclick = function(event) {
        if (modal.contains(event.target)) {
            modal.style.display = "none";
            location.reload();
        }
    }
});