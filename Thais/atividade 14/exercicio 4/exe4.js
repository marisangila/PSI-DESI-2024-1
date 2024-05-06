function validacao(){
   nome = document.getElementById("nome").value.trim();
   sobrenome = document.getElementById("sobrenome").value.trim(); 
   email = document.getElementById("email").value.trim();
   
   if (nome === "" || sobrenome === "" || email ===""){
    alert("Por favor, preencha os campos obrigatóris faltantes!")
    return false;
   }
   
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
       alert("Por favor, insira um endereço de email válido.");
       return false; 
   }
   return true;
}