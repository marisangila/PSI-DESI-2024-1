document.addEventListener("DOMContentLoaded", function() {
    let yes_graduate = document.querySelector("#yes_graduate");
    let no_graduate = document.querySelector("#no_graduate");
    let collage = document.querySelector("#collage");

    yes_graduate.addEventListener("click", function() {  
        if (yes_graduate.checked) {
            collage.style.display = "block" 
        }
    });

    no_graduate.addEventListener("click", function() {  
        if (no_graduate.checked) {
            collage.style.display = "none"   
        }
    });
});