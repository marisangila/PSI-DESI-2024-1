function incrementar(){
    var incremento = parseInt(document.getElementById('btn_incremento').innerHTML)
    ++incremento

    document.getElementById('btn_incremento').innerHTML = incremento
}
function decrementar(){
    var decremento = parseInt(document.getElementById('btn_decremento').innerHTML)
    --decremento
    
    document.getElementById('btn_decremento').innerHTML = decremento
}
function sumir_aparecer(){
    var x = document.getElementById("palavra_teste");
    var estado = document.getElementById("estado_btn").innerHTML;

    if(estado == "Sumir"){

        estado = "Aparecer"
    }else{
        estado = "Sumir"
    }

    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
    document.getElementById('estado_btn').innerHTML = estado
}
