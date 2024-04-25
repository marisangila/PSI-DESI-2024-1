function sumFibonacci(max) {
    var number1 = 0;
    var number2 = 1;
    var sum = 0;

    while (number2 <= max) {
        if (number2 % 2 === 0) {
            sum += number2;
        }
        var nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
    }
    return sum;
}

var max = 50000;
var result = sumFibonacci(max);
alert("The sum of the even terms of the Fibonacci sequence up to " + max + " is: " + result);