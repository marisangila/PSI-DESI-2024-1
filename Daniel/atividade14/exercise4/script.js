$(document).ready(function(){
    const formRegister = $("#form-register");

    const emailInput = $("#email"); 
    const usernameInput = $("#username"); 
    const passwordInput = $("#password"); 
    const confirmPassword = $("#confirmPassword");
    
    const errorEmail = $("#errorEmail").css("color", "red") 
    const errorUsername = $("#errorUsername").css("color", "red") 
    const errorPassword = $("#errorPassword").css("color", "red") 
    const errorConfirmPassword = $("#errorConfirmPassword").css("color", "red") 

    formRegister.on("submit", (event) => {
        

        const promises = [
            validateCamps(emailInput, errorEmail, "email", 'Type it a valid email!'),
            validateCamps(usernameInput, errorUsername, "username", `The username CAN'T have special characers (#@$%...) or numbers`),
            validateCamps(passwordInput, errorPassword, "password", `<p>The password requires:</p>
                                                                   <p>At least one UPPER and one LOWER letter</p>
                                                                   <p>At least one special character (#@$%...)</p>
                                                                   <p>At least one number</p>`),
            validateConfirmPassword(confirmPassword.val().trim(), passwordInput.val().trim(), errorConfirmPassword)
        ]

        if(promises.every(promise => promise === true)){
            let result = [
                emailInput.val().trim(), 
                usernameInput.val().trim(), 
                passwordInput.val().trim(), 
                confirmPassword.val().trim()
            ]

            alert(`User logged in!! ${result}`)
        }else{
            event.preventDefault()
        }
    })
});

function validateCamps(input, error, nameCamp, textInvalidCamp){
    error.empty()
    if(input.val().trim() === ''){
        error.html(`The ${nameCamp} is required!`)
        return false
    }
    else if(!validateText(input.val().trim(), nameCamp)){
        error.html(textInvalidCamp)
        return false
    }
    return true 
}

function validateConfirmPassword(confirmPassword, password, error){
    error.empty()

    if(confirmPassword === ''){
        error.html(`The confirmPassword is required!`)
        return false
    }
    if(confirmPassword !== password){
        error.html("The passwords doesn't equals")
        return false
    }
    return true
}

function validateText(text, camp) {
    let regex = ""
    if(camp === "email"){
        regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }else if(camp === "username"){
        regex = /^[a-zA-Z]+.{3,}$/
    }else if(camp === "password"){
        regex = /^(?=.*[!@#$%^&*()_+}{:;'?/>,.<|\[\]\\=-])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    }
    return regex.test(text);
}