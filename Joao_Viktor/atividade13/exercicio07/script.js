function calculateBMI() {
    var weight = parseFloat(document.getElementById("inputWeight").value);
    var height = parseFloat(document.getElementById("inputHeight").value);
    var calculatedBMI = weight / (height**2)
    
    document.getElementById("resultDiv").innerText = "Your BMI is: " + calculatedBMI.toFixed(2);
}
