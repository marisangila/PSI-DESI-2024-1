function searchHighest() {
    var number1 = parseFloat(prompt("Input the first number:"));
    var number2 = parseFloat(prompt("Input the second number:"));
    var number3 = parseFloat(prompt("Input the third number:"));

    var highestNumber = number1;

    if (number2 > highestNumber){
        highestNumber = number2;
    }
    if (number3 > highestNumber){
        highestNumber = number3;
    }

    alert("The highest number is: " + highestNumber);
}

searchHighest();