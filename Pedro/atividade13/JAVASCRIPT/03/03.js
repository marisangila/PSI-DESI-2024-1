function enviar(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)

    let maior=0

    if(a>=b) maior=a;
    else if(b>=c) maior=b;
    else maior=c;

    alert("O maior é: "+maior)
}