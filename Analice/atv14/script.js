// Exercício 01

function openWindow() {
    var btn = document.getElementById("btn-01");
    btn = window. open(" http://google.com.br", "_blank")
}

// Exercício 02

function closeNav() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px";
    } else {
      sidebar.style.left = "0px";
    }
  }

// Exercício 03

function showInput() {
    var input01 = document.getElementById("input01");
    var input02Div = document.getElementById("input02Div");

    if (input01.value.trim() !== "") {
        input02Div.classList.remove("d-none"); // Remove a classe d-none para mostrar o campo
    } else {
        input02Div.classList.add("d-none"); // Adiciona a classe d-none para esconder o campo
    }
}

// Exercício 04  

function verifyInput() {
    var campo1Valor = document.getElementById("campo1").value;
    var campo2Valor = document.getElementById("campo2").value;

    if (campo1Valor.trim() !== "" && campo2Valor.trim() !== "") {
        alert("Formulário enviado com sucesso!");
        return true; 
    }

    alert("Preencha todos os campos!");
    return false;

}

// Exercício 05

function showMessage(mensagem) {
    var mensagemDiv = document.createElement("div");
    mensagemDiv.textContent = mensagem;
    document.body.appendChild(mensagemDiv);
    setTimeout(function() {
        mensagemDiv.remove();
    }, 3000); // Remover mensagem após 3 segundos
}

function validateCPF() {
    var cpf = document.getElementById("cpf").value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) {
        showMessage("O CPF deve conter 11 dígitos.");
        return;
    }

    // Verificação de CPF inválido com todos os dígitos iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        showMessage("CPF inválido.");
        return;
    }

    // Cálculo dos dígitos verificadores
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = soma % 11;
    var digito1 = resto < 2 ? 0 : 11 - resto;

    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    var digito2 = resto < 2 ? 0 : 11 - resto;

    // Verificação dos dígitos verificadores
    if (parseInt(cpf.charAt(9)) !== digito1 || parseInt(cpf.charAt(10)) !== digito2) {
        showMessage("CPF inválido.");
        return;
    }

    // Se o CPF passou por todas as verificações, exibir mensagem de sucesso
    alert("CPF válido!");
}

// Exercício 06

function mostrarCampoCorrespondente() {
    var escolha = document.getElementById("escolha").value;
    var campo1Div = document.getElementById("campo1Div");
    var campo2Div = document.getElementById("campo2Div");
    var campo3Div = document.getElementById("campo3Div");

    // Oculta todos os campos
    campo1Div.style.display = "none";
    campo2Div.style.display = "none";
    campo3Div.style.display = "none";

    // Mostra o campo correspondente à escolha selecionada
    if (escolha === "opcao1") {
        campo1Div.style.display = "block";
    } else if (escolha === "opcao2") {
        campo2Div.style.display = "block";
    } else if (escolha === "opcao3") {
        campo3Div.style.display = "block";
    }
}

