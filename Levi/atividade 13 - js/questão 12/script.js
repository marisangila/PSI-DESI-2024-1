function ataquePersonagem (){
var saudeAtual = 50
var danoRecebido = Math.floor(Math.random() * 100 + 1)

saudeAtual -= danoRecebido;

if (saudeAtual <= 0) {
    alert("O personagem morreu. \nDano recebido: " + danoRecebido + "\nSaúde atual: " + saudeAtual);
} else {
    alert("O personagem sobreviveu. \nDano recebido: " + danoRecebido + "\nSaúde atual: " + saudeAtual);

}
}
