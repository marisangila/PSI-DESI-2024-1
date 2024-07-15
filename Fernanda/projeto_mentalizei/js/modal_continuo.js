document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(form);
        fetch("../src/cadastrar_continuo.php", {
            method: "POST",
            body: formData
        })
       .then(response => response.text())
       .then(() => {
            modal.style.display = "block";
        })
       .catch(error => console.error('Error:', error));
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