function q1Alert(){
    alert('uma informação qualquer')
}

function q2Msg(params) {
    alert('uma mensagem qualquer')
}

function q3Mnputs(){
    n1 = Number(prompt('Insira o primeiro número:'))
    n2 = Number(prompt('Insira o segundo número:'))
    n3 = Number(prompt('Insira o terceiro número:'))

    q3Maior(n1,n2,n3)
}

function q3Maior(n1,n2,n3){
    res=''

    if(n1>n2&&n1>n3){
        res='PRIMEIRO'
    }else if(n2>n1&&n2>n3){
        res='SEGUNDO'
    }else{
        res='TERCEIRO'
    }

    alert('o maior número é o '+res)
}

function q4Medeidade() {
    idd=Number(prompt('INFORME SUA IDADE:'))

    if(idd>=18){
        alert('VOCÊ É MAIOR DE IDADE')
    }else{
        alert('VOCÊ NÃO É MAIOR DE IDADE')
    }
}

function q5Inputs(){
    n1 = Number(prompt('Insira o primeiro número:'))
    n2 = Number(prompt('Insira o segundo número:'))
    n3 = Number(prompt('Insira o terceiro número:'))

    q5MediaNumeros(n1,n2,n3)
}

function q5MediaNumeros(n1,n2,n3){
    res = (n1+n2+n3)/3

    alert('A MÉDIA ARITMÉTICA É: '+res)
}

function q6inputs() {
    altura=Number(prompt('Informe sua altura: '))
    peso=Number(prompt('Informe seu peso: '))

    q6Imc(altura,peso)
}

function q6Imc(altura,peso){
    imc=peso/(altura**2)

    alert('seu IMC é: '+imc)
}

function q7Imc(){
    altura=Number(document.getElementById('altura').value)
    peso=Number(document.getElementById('peso').value)

    imc=peso/(altura**2)

    document.getElementById('result').innerHTML=imc
}

function q8Fib(){
    b=0
    a=1
    r=0
    somPar=0

    while(r<50000){
        r=b+a
        b=a
        a=r

        if(r%2==0){
            somPar=somPar+r
        }
            
    }
    
    alert(somPar)

}

function q9Inputs(){
    base = Number(prompt('Insira o número base:'))
    expoente = Number(prompt('Insira o número expoente:'))

    alert('resultado: '+(base**expoente))

}

function q10Inputs(){
    num = Number(prompt('Insira o número :'))
    tabuada = ""

    for(var i=0;i<=10;i++){
        tabuada+=num+" X "+i+" = "+(num*i)+"\n"
    }
    alert(tabuada)
    
}

function q11Tabela() {
    tabela = document.getElementById('ntabela');
    tabelaBody = tabela.getElementsByTagName('tbody')[0];
    for (let i = 0; i <= 200; i++) {
        linha = document.createElement('tr');
        celula = document.createElement('td');
        celula.textContent = i;
        if (ehPrimo(i)) {
            celula.style.fontWeight = 'bold';
            celula.style.color = 'red';
        }
        linha.appendChild(celula);
        tabelaBody.appendChild(linha);
    }
}

function ehPrimo(num) {
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