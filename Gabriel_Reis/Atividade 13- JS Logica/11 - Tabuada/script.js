// Solicitar ao usuário que digite um número
const userInput = prompt("Digite um número para ver a tabuada:");

// Converter o input do usuário para um número inteiro
const number = parseInt(userInput);

// Verificar se o número é válido
if (!isNaN(number)) {
    let output = "<h2>Tabuada de " + number + ":</h2>";

    // Calcular e montar a tabuada até 10x
    output += "<ul>";
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        output += "<li>" + number + " x " + i + " = " + result + "</li>";
    }
    output += "</ul>";

    // Exibir a tabuada na div com id="tabuadaOutput"
    document.getElementById("resultado").innerHTML = output;
} else {
    alert("Por favor, digite um número válido.");
}
