function openModalContinuo(id_med_continuo) {
    let modal = document.getElementById("myModalEditContinuo");

    modal.style.display = "block";

    fetch("../src/get_med_continuo.php?id=" + id_med_continuo)
   .then(response => response.json())
   .then(data => {
        document.getElementById("descricao_med").value = data.descricao;
        document.getElementById("mg").value = data.mg;
        document.getElementById("tipo_med_cont").value = data.id_tipo_med;
        document.getElementById("quantidade_dia").value = data.quantidade_dia;
        document.getElementById("horario").value = data.horario;
        document.getElementById("dt_inicio").value = data.dt_inicio;
        document.getElementById("id_med_continuo").value = id_med_continuo;
        console.log(data);
    })
   .catch(error => console.error('Error:', error));
}

document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    formData.append("id", document.getElementById("id_med_continuo").value);

    fetch("../src/editar_continuo.php", {
        method: "POST",
        body: formData
    })
       .then(response => response.json())
       .then(result => {
            let modal = document.getElementById("myModalEditContinuo");
            modal.style.display = "none";
        })
       .catch(error => console.error('Error:', error));
    
    return false;
});

function closeModal() {
    let modal = document.getElementById("myModalEditContinuo");
    modal.style.display = "none";
}

function openModalConfirma(id) {
    let modal = document.getElementById("myModalConfirma");
    modal.style.display = "block";
    document.getElementById("id_med_continuo_confirm").value = id;
}

function closeModalConfirma() {
    let modalConfirma = document.getElementById("myModalConfirma");
    modalConfirma.style.display = "none";
}