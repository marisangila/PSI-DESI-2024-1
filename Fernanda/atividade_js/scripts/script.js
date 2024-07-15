function message_alert() {
    alert("mensagem");
}

function maior_numero(){
    numA = prompt("Digite o 1º número");
    numB = prompt("Digite o 2º número");
    numC = prompt("Digite o 3º número");

    alert(Math.max(numA,numB,numC));
}

function menor_maior_idade(){
    idade=prompt("Digite sua idade");

    if(idade>=18){
        alert("Você é maior de idade!")
    }else{
        alert("Você é menor de idade!")
    }
}

function media_numero(){
    num1 = parseFloat(prompt("Digite o 1º número"));
    num2 = parseFloat(prompt("Digite o 2º número"));
    num3 = parseFloat(prompt("Digite o 3º número"));
    
    alert((num1+num2+num3)/3)
}

function imc(){
    altura = parseFloat(prompt("Digite a sua altura"));
    peso = parseFloat(prompt("Digite o seu peso"));

    alert("IMC: "+(peso/(altura*altura)).toFixed(2))
}

function tags(){
    var peso = document.getElementById("id_peso").value;
    var altura = document.getElementById("id_altura").value;
    alert("IMC: "+(peso/(altura*altura)).toFixed(2));
}

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
    return somaPares;
}

function exibeParesFibonacci(){
    const limite = 50000;
    const somaPares = somaParesFibonacci(limite);
    alert("A soma dos termos pares da sequência de Fibonacci até "+ limite+ " é: "+ somaPares);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  function generatePrimes() {
    const primeTableBody = document.getElementById("primeTableBody");
    primeTableBody.innerHTML = ""; 
  
    for (let i = 0; i <= 200; i++) {
      const row = document.createElement("tr");
      const numCell = document.createElement("td");
      numCell.textContent = i;
  
      if (isPrime(i)) {
        numCell.classList.add("prime");
      }
  
      row.appendChild(numCell);
      primeTableBody.appendChild(row);
    }
  }

  function hideTable(){
    primeTableBody.innerHTML = ""
  }


//   function hideTable() {
//     document.getElementById("primeTable").style.display = "none";
//   }   EXIBA A TABELA
  
//   function showTable() {
//     document.getElementById("primeTable").style.display = "block";
//   }   OCULTE A TABELA


  function potenciacao(){
    base = parseFloat(prompt("Digite a base"));
    expoente = parseFloat(prompt("Digite o expoente"));
    alert("O resultado dessa potenciação é: "+Math.pow(base,expoente))
  }

  function tabuada(){
    var numero = document.getElementById("id_numero").value;
    var tabuada = ''
    tabuada = "Tabuada do"+numero+"\n";
    for(i=0; i<=10; i++){
    tabuada += numero +" x "+i+"= "+numero*i+"\n";
    }
    document.getElementById("id_numero").value = ''
    alert(tabuada);
}

function atacar(){
    var saude = document.getElementById("id_saude").innerHTML
    var dano = 10;
    saude -= dano;
    
    if(saude < 30 && saude>0){
        document.getElementById("id_saude").innerHTML = saude;
        document.getElementById("srbobs").style.backgroundColor = 'orange';
        alert("Sr.Bobs sofreu dano!")
    }else if(saude == 0){
        document.getElementById("srbobs").style.backgroundColor = 'red';
        document.getElementById("id_saude").innerHTML = 0;
        document.getElementById("id_saude").style.color = "red";
        alert("Sr.Bobs morreu!")
    }else if (saude < 0){
        document.getElementById("id_saude").innerHTML = 0;
        document.getElementById("id_saude").style.color = "red";
        alert("Você está chutando corpo morto, Sr.Bobs já se foi!!")
    }else{
        document.getElementById("id_saude").innerHTML = saude;
        alert("Sr.Bobs sofreu dano!")
    }
}

function resetar() {
    saude = 50;
    document.getElementById("id_saude").style.color = "black";
    document.getElementById("id_saude").innerHTML = saude;
    document.getElementById("srbobs").style.backgroundColor = 'greenyellow';
}