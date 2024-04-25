function contarCaracteres(){
    nome = document.getElementById("nome").value;
    contador = document.getElementById("contador");

    contador.textContent = nome.length + " caracteres";
}