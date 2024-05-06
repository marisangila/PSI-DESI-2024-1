function verifyAge() {
    var userAge = parseFloat(prompt("Input your age:"));

    if (userAge < 18){
        alert("You're underage")
    }else{
        alert("You're of legal age")
    }
}

verifyAge()