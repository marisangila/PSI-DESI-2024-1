function verificarMorte(dano, saude) {
        if (dano >= saude) {
            return 1;
        } else {
            return 0;
        }
    }

function verificarEExibirResultado() {
    var dano = parseInt(document.getElementById("dano").value);
    var saude = parseInt(document.getElementById("saude").value);

    var resultado = verificarMorte(dano, saude);

    var mensagem;
    if (resultado === 1) {
        mensagem = "O personagem morreu!";
    } else {
        mensagem = "O personagem sobreviveu!";
    }
    alert(mensagem);
}