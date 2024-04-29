// Exercício 01 - OK!
function alert_01() {
  alert("Olá Mari!");
}

// Exercício 02 - OK!
function alert_02() {
  alert("Olá Mari!");
  var botao = document.getElementById("meuBotao");
  botao.addEventListener("click", alert_02);
}

// Exercício 03 - OK!
function comparaNumeros() {
  var num01 = Number(prompt("Informe o primeiro número:"));
  var num02 = Number(prompt("Informe segundo número:"));
  var num03 = Number(prompt("Informe o terceiro:"));

  if (num01 > num02 && num01 > num03) {
    alert("O primeiro número é maior que os demais!");
  } else if (num02 > num01 && num02 > num03) {
    alert("O segundo número é maior que os demais!");
  } else if (num03 > num01 && num03 > num02) {
    alert("O terceiro número é maior que os demais!");
  }
}

// Exercício 04 - OK!
function verificaIdade() {
  var idade = Number(prompt("Informe sua idade:"));

  if (idade >= 18) {
    alert("Você já atingiu a maioridade!");
  } else {
    alert("Você ainda não atingiu a maioridade!");
  }
}

// Exercício 05 - OK!
function mediaAritmetica() {
  var num01 = Number(prompt("Informe o primeiro número:"));
  var num02 = Number(prompt("Informe o segundo número:"));
  var num03 = Number(prompt("Informe o terceiro número:"));

  var media = (num01 + num02 + num03) / 3;
  media = media.toFixed(2); // Limitando o resultado a duas casas decimais

  alert(`A média aritmética desses números é ${media}`);
}

// Exercício 06 - OK!
function calculoIMC() {
  var peso = Number(prompt("Informe o seu peso:"));
  var altura = Number(prompt("Informe a sua altura"));

  var imc = peso / (altura * altura);
  imc = imc.toFixed(2);

  alert(`O seu IMC é de ${imc}`);
}

// Exercício 07 - OK!
function somaTermosParesFibonacci() {
  var termo1 = 0;
  var termo2 = 1;
  var soma = 0;

  while (termo2 <= 50000) {
    if (termo2 % 2 === 0) {
      // Verifica se o termo atual é par
      soma += termo2;
    }

    // Calcula o próximo termo da sequência de Fibonacci
    var proximoTermo = termo1 + termo2;
    termo1 = termo2;
    termo2 = proximoTermo;
  }

  return soma;
}

function calcularSomaFibonacci() {
  var resultado = somaTermosParesFibonacci();
  console.log(
    "A soma dos termos pares na sequência de Fibonacci é:",
    resultado
  );
}

// Exercício 08 - OK!
function verificarPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;
  if (numero % 2 === 0 || numero % 3 === 0) return false;

  let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function gerarTabela() {
  const tabelaNumeros = document.getElementById("tabelaNumeros");
  tabelaNumeros.innerHTML = "";

  for (let i = 0; i <= 200; i++) {
    const tr = document.createElement("tr");
    const tdNumero = document.createElement("td");
    const tdPrimo = document.createElement("td");

    tdNumero.textContent = i;
    if (verificarPrimo(i)) {
      tdPrimo.textContent = "Sim";
      tr.classList.add("primo");
    } else {
      tdPrimo.textContent = "Não";
    }

    tr.appendChild(tdNumero);
    tr.appendChild(tdPrimo);
    tabelaNumeros.appendChild(tr);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  gerarTabela();
});

// Exercício 09 - OK!
function calcularPotenciacao() {
  var base = document.getElementById("base").value;
  var expoente = document.getElementById("expoente").value;

  if (base === "" || expoente === "") {
    alert("Por favor, informe a base e o expoente.");
    return;
  }

  base = parseFloat(base);
  expoente = parseFloat(expoente);

  var resultado = Math.pow(base, expoente);
  alert("O resultado da potenciação é: " + resultado);
}

// Exercício 10 - OK!
function tabuada() {
  var input = Number(prompt("Insira um número de 1 até 10:"));

  document.write("A tabuada completa de " + input + " é <br>");
  document.write(input + " vezes 1 é " + input * 1 + "<br>");
  document.write(input + " vezes 2 é " + input * 2 + "<br>");
  document.write(input + " vezes 3 é " + input * 3 + "<br>");
  document.write(input + " vezes 4 é " + input * 4 + "<br>");
  document.write(input + " vezes 5 é " + input * 5 + "<br>");
  document.write(input + " vezes 6 é " + input * 6 + "<br>");
  document.write(input + " vezes 7 é " + input * 7 + "<br>");
  document.write(input + " vezes 8 é " + input * 8 + "<br>");
  document.write(input + " vezes 9 é " + input * 9 + "<br>");
  document.write(input + " vezes 10 é " + input * 10 + "<br>");
}

// Exercício 11 - OK!
function calculoIMC_11() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;

  var imc = peso / (altura * altura);
  imc = imc.toFixed(2);

  document.getElementById("resposta").innerText = `O seu IMC é de ${imc}`;
}

// Exercício 12 - OK!
document.addEventListener("DOMContentLoaded", function () {
  function verificarMorte(dano, saude) {
    if (saude - dano <= 0) {
      return 1; // Personagem morreu
    } else {
      return 0; // Personagem ainda vivo
    }
  }

  const formVerificarMorte = document.getElementById("formVerificarMorte");
  const resultado = document.getElementById("resultado");

  formVerificarMorte.addEventListener("submit", function (event) {
    event.preventDefault();

    const dano = parseInt(document.getElementById("dano").value);
    const saude = parseInt(document.getElementById("saude").value);

    const morte = verificarMorte(dano, saude);

    if (morte === 1) {
      resultado.textContent = "O personagem morreu!";
    } else {
      resultado.textContent = "O personagem sobreviveu!";
    }
  });
});
