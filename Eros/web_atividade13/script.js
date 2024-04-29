function inicio()
{
    alert("Hello, world!");
}

function clicked()
{
   alert("Button clicked!");
   var a = Number(prompt("Primeiro número:"));
   var b = Number(prompt("Segundo número:"));
   var c = Number(prompt("Terceiro número:"));

   soma(a,b,c);
}

function soma(x,y,z)
{
   d = Number(arguments.length);
   document.getElementById("idMedia").innerHTML = "Média: " + Math.abs((x + y + z)/d);
   imc()
}

function imc()
{
   al = Number(prompt("Altura:"));
   pe = Number(prompt("Peso:"));
   document.getElementById("idImc").innerHTML = "Resultado: " + Math.abs(pe/(al**2));
}
