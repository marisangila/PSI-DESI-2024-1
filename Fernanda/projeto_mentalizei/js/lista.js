document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(form);
        fetch("../src/cadastrar_pontual.php", {
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

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModalDiario");
    var span = document.getElementsByClassName("close")[0];
    var form = document.querySelector("form");
    var okButton = document.getElementById("ok_modal"); 

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(form);
        fetch("../src/cadastrar_emocao_sintoma.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(() => {
            modal.style.display = "block";
        });
    });

    span.addEventListener("click", closeModal);
    okButton.addEventListener("click", closeModal);

    window.addEventListener("click", function(event) {
        if (event.target !== modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
        location.reload();
    }
});