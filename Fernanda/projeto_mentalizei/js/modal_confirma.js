
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelectorAll(".btn-deletar-pontual");
    var modal = document.getElementById("myModalConfirma");
    var span = document.getElementsByClassName("close")[0];
    
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

    btn.onclick = function(){
        modal.style.display = "block";
    }
});