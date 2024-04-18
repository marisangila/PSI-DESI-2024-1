const userInput = prompt("Digite um número para ver a tabuada:");
const number = parseInt(userInput);

if (!isNaN(number)) {
    let output = "<h2>Tabuada de " + number + ":</h2>";

    output += "<ul>";
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        output += "<li>" + number + " x " + i + " = " + result + "</li>";
    }
    output += "</ul>";

    document.getElementById("resultado").innerHTML = output;
} else {
    alert("Por favor, digite um número válido.");
}