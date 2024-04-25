function calculateExponentiation() {
    var base = parseFloat(prompt("Enter the base:"));
    var exponent = parseFloat(prompt("Enter the exponent:"));
    
    var result = base**exponent

    alert("The result is: " + result);
}

calculateExponentiation();