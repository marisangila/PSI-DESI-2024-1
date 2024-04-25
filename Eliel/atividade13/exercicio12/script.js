function verificaMorte(dano, saude) {
    if (saude - dano <= 0) {
        return 1; 
    } else {
        return 0; 
    }
}

var saude = parseFloat(prompt("Informe a quantidade de vida atual do personagem:"))
var dano = parseFloat(prompt("Informe o dano causado ao personagem:"))
var resultado = verificaMorte(dano, saude);
alert("Resultado: " + resultado); 
