//1
alert("Hello World") 

//2
function btn() {
    alert("Hello World")
}

//3
function maiorNum(){
    a = prompt("Insira o primeiro número");
    b = prompt("Insira o segundo número");
    c = prompt("Insira o terceiro número");
   
    if(a>b && a>c){
        alert("O maior número é "+ a)
    }else if(b>a && b>c){
        alert("O maior número é "+ b)
    }else if (c>a && c>b){
        alert("O maior número é "+ c)
    }
}

//4
function idade(){
    idade = prompt("Insira sua idade: ")

    if(idade >= 18){
        alert("Você é maior de idade.")
    }else{
        alert("Você é menor de idade")
    }
}

//5
function media() {
   a = Number (prompt("Insira o primeiro número"));
   b = Number(prompt("Insira o segundo número"));
   c = Number(prompt("Insira o terceiro número"));
    
    soma = (a+b+c)
    mediaAritmetica =soma/3

    alert("A média desses números é "+ mediaAritmetica)
}

//6
function imc(){
    altura = Number(prompt("Insira a sua altura: "))
    peso = Number(prompt("Insira o seu peso: "))

    calculoImc = peso / (altura * altura)

    alert("Seu IMC é: "+ calculoImc)
}

//7
function somaParesFibonacci(n){
    let termoAtual = 0;
    let proximoTermo = 1;
    let somaPares = 0;

    while (termoAtual <= n){
        if(termoAtual % 2 == 0){
            somaPares += termoAtual;
        }

        let temp = termoAtual + proximoTermo;
        termoAtual = proximoTermo;
        proximoTermo = temp;
    }
    return somaPares
    
}
const limite = 50000;
const somaPares = somaParesFibonacci(limite);
alert("A soma dos termos pares da sequência de Fibonacci até "+ limite+ " é: "+ somaPares);

//8
function ehPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function preencherTabela() {
    const tabela = document.getElementById('tabela');

    for (let i = 0; i <= 200; i++) {
        const tr = document.createElement('tr');
        const tdNumero = document.createElement('td');
        tdNumero.textContent = i;
        tr.appendChild(tdNumero);

        const tdPrimo = document.createElement('td');
        if (ehPrimo(i)) {
            tr.classList.add('primo');
            tdPrimo.textContent = 'Sim';
        } else {
            tdPrimo.textContent = 'Não';
        }
        tr.appendChild(tdPrimo);

        tabela.appendChild(tr);
    }
}

preencherTabela();

//9
function calcularPotencia(base, expoente) {
    if (expoente === 0) {
        return 1;
    }

    let resultado = base;

    for (let i = 1; i < Math.abs(expoente); i++) {
        resultado *= base;
    }

    if (expoente < 0) {
        resultado = 1 / resultado;
    }

    return resultado;
}

function exibirResultado() {
    const base = parseFloat(document.getElementById('base').value);
    const expoente = parseFloat(document.getElementById('expoente').value);

    if (isNaN(base) || isNaN(expoente)) {
        alert('Por favor, insira valores numéricos válidos para base e expoente.');
        return;
    }

    const resultado = calcularPotencia(base, expoente);

    alert(`O resultado da potência de ${base} elevado a ${expoente} é: ${resultado}`);
}

//10 
function calcularTabuada(numero) {
    let tabuada = '';
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabuada += `${numero} x ${i} = ${resultado}\n`;
    }
    
    return tabuada;
}

const numero = parseInt(prompt('Digite um número para calcular a tabuada:'));
if (!isNaN(numero)) {
    const tabuada = calcularTabuada(numero);
    alert(`Tabuada de ${numero}:\n\n${tabuada}`);
} else {
    alert('Por favor, insira um número válido.');
}

//11
function tags(){
    var peso = document.getElementById("id_peso").value;
    var altura = document.getElementById("id_altura").value;
    alert("IMC: "+(peso/(altura*altura)).toFixed(2));
}

//12
function verificarMorte(dano, saude) {
    if (saude - dano <= 0) {
        return 1; 
    } else {
        return 0; 
    }
}

const dano = 50;
const saude = 80;

const resultado = verificarMorte(dano, saude);

if (resultado === 1) {
    alert("O personagem morreu.");
} else {
    alert("O personagem sobreviveu.");
}


