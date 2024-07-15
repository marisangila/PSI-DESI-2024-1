function redirecionar(){
  var my_window = window.open("http://google.com.br","_blank");
}

function ocultarMenu(){
  var menu = document.getElementById("id_menu");
  if(menu.style.display ==="none" || menu.style.display ===""){
    menu.style.display = "block";
  }else{
    menu.style.display="none";
  }
}

function mostrarCampo2() {
  var campo1Value = document.getElementById("campo1").value;
  var campo2Container = document.getElementById("campo2Container");

  // Verifica se o campo1 tem algum valor
  if (campo1Value.trim() !== "") {
      campo2Container.style.display = "block"; // Mostra o campo2
  } else {
      campo2Container.style.display = "none"; // Oculta o campo2
  }
}

function formularioValido(){
  var nome = document.getElementById("id_nome").value;
  var email = document.getElementById("id_email").value;
  var nome_erro = document.getElementById("nome_erro");
  var email_erro = document.getElementById("email_erro");
  var isValid = true;

  nome_erro.textContent="";
  email_erro.textContent="";

  if (nome ===""){
    nome_erro.textContent = "Preencha o campo!";
    isValid = false;
  }
  if(email ===""){
    email_erro.textContent="Preenche este campo!";
    isValid = false;
  }
  else if(!isValidEmail(email)){
    email_erro.textContent = "Digite um e-mail válido!";
    isValid = false;
  }
  return isValid
}


function isValidEmail(email){
  var emailCaracteres = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCaracteres.test(email);
}

function validar_cpf(){
  var cpf = document.getElementById("id_cpf").value;
  var cpf_erro = document.getElementById("cpf_erro");


  if (!/^\d{11}$/.test(cpf)) {
    cpf_erro.textContent = "O CPF deve conter exatamente 11 números.";
    return false;
}

  cpf = cpf.replace(/[^\d]/g, ''); //replace(/[^\d]/g, '') remove caractere não numerico

  if(cpf === ""){
    cpf_erro.textContent = "Campo obrigatório"
    return false;
  }
  else if (!isCPFValido(cpf)){
    cpf_erro.textContent = "CPF inválido!";
    return false; //para impedir o envio do formulário
  }else {
    alert("Sucesso!")
    cpf_erro.textContent ="";
    return true;
  }
}

function isCPFValido(cpf) {
  // Algoritmo para validar CPF
  var soma = 0;
  var resto;

  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false;

  for (var i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (var i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
} //função pronta
function mostrarCampoCorrespondente() {
  var selecionarOpcao = document.getElementById("selecionarOpcao").value;
  var campoCorrespondenteOpcao1 = document.getElementById("campoCorrespondenteOpcao1");
  var campoCorrespondenteOpcao2 = document.getElementById("campoCorrespondenteOpcao2");
  var campoCorrespondenteOpcao3 = document.getElementById("campoCorrespondenteOpcao3");

  // Oculta todos os campos correspondentes
  campoCorrespondenteOpcao1.style.display = "none";
  campoCorrespondenteOpcao2.style.display = "none";
  campoCorrespondenteOpcao3.style.display = "none";

  // Mostra o campo correspondente com base na opção selecionada
  if (selecionarOpcao === "opcao1") {
      campoCorrespondenteOpcao1.style.display = "block";
  } else if (selecionarOpcao === "opcao2") {
      campoCorrespondenteOpcao2.style.display = "block";
  } else if (selecionarOpcao === "opcao3") {
      campoCorrespondenteOpcao3.style.display = "block";
  }
}

function contar_caracteres(){
  var campo_texto = document.getElementById("campo_texto");
  var contar_caracteres = document.getElementById("id_contador");

  contar_caracteres.textContent = campo_texto.value.length;
}