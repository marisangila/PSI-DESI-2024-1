function openModal(idMedPontual) {
    let modal = document.getElementById("myModalEdit");
    
    modal.style.display = "block";

    var descricaoInput = document.getElementById("descricao");
    var idTipoMedSelect = document.getElementById("tipo_med");
    var idMedPontualInput = document.getElementById("id_med_pontual"); 

    fetch("../src/get_med_pontual.php?id=" + idMedPontual)
       .then(response => response.json())
       .then(data => {
            descricaoInput.value = data.descricao;
            idTipoMedSelect.value = data.id_tipo_med;
            idMedPontualInput.value = idMedPontual; 
        })
       .catch(error => console.error('Error:', error));
}

document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var formData = new FormData(this); 

    fetch("../src/editar_pontual.php", {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData)
    })
   .then(response => response.text())
   .then(result => {
        var modal = document.getElementById("myModalEdit");
        modal.style.display = "none"; 
        location.reload();
    })
   .catch(error => console.error('Error:', error));

    return false;
});

function closeModalEdit() {
    let modal = document.getElementById("myModalEdit");
    modal.style.display = "none";
}