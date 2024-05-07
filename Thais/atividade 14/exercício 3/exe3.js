function mostrarCampo(){
    campoUm = document.getElementById("campoUm").value;
    campoDois = document.getElementById("campoDois");

    if(campoUm.trim() !== ""){
        campoDois.style.display = "block";
    } else {
        campoDois.style.display = "none";
    }
}