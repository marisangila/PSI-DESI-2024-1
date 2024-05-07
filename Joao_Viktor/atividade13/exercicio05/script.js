function calculateAverage() {
    var number1 = parseFloat(prompt("Input the first number:"));
    var number2 = parseFloat(prompt("Input the second number:"));
    var number3 = parseFloat(prompt("Input the third number:"));

    var average = (number1 + number2 + number3) / 3

    alert("The average is: " + average);
}

calculateAverage();