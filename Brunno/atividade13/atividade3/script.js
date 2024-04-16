
    a = Number(prompt("Informe o primeiro número: "))
    b = Number(prompt("Informe o segundo número: "))
    c = Number(prompt("Informe o terceiro número: "))
    
    if(a>b && a>c){
        alert(`O maior número é ${a}`)
    }
    else if (b>a && b>c){
        alert(`O maior número é ${b}`)
    }
    else if (c>a && c>b) {
        alert(`O maior número é ${c}`)
    }
