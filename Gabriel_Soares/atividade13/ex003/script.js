a = Number(prompt("Digite o numero 1"))
b = Number(prompt("Digite o numero 2"))
c = Number(prompt("Digite o numero 3"))

if(a>=b && a>=c) {
    alert(`O maior número é ${a}`)
}else if(b>=c && b>=a){
    alert(`O maior número é ${b}`)
}else if(c>=a && c>=b){
    alert(`O maior número é ${c}`)
}