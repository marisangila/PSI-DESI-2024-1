function calculateBMI() {
    var weight = parseFloat(prompt("Enter your weight (Ex: 60.26):"));
    var height = parseFloat(prompt("Enter your height (Ex: 1.72):"));    
    var calculatedBMI = weight / (height**2)

    alert("Your BMI is: "+calculatedBMI);
}

calculateBMI();