alert("Hello World")
console.log("Hello there!")

document.getElementById("paragrafo").innerHTML = "Hello World"
document.getElementsByName("paragrafo").innerHTML = "Hello World"
document.getElementsByClassName("paragrafo").innerHTML = "Hello World"
document.getElementsByTagName("paragrafo").innerHTML = "Hello World"

function calcularx(){
    alert("Hello World")
    a = prompt("Informe um numero:")
    b = prompt("Informe outro numero:")
}

function habilitarBotao(){
    
}

//criar celula
celula=document.createElement('<td>');
celula.textContent=" ";

//Criar linha
linha=document.createElement('<tr>');
linha.appendChild(celula);

//tabela
tbody.appendChild(linha);

//DOM
var botao = document.getElementById("btn");
botao.addEventListener("click", mostraLog);

document.getElementById("btn").botao.addEventListener("click", mostraLog);
