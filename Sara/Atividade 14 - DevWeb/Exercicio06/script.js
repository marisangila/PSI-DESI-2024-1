function pedirCampus(){
    var universidade = document.getElementById("universidade").value;
    var campus = document.getElementById("div_campus")
    if(universidade == "UDESC"){
        campus.style.display = "block";
    } else {
        campus.style.display = "none";
    }
}