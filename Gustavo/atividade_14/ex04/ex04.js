function teste(){
    var name = document.getElementById('input-name')
    var lastName = document.getElementById('input-lastName')
    var password = document.getElementById('input-password')
    var confirmPassword = document.getElementById('input-confirmPassword')

    if(name.value == ''){
        document.getElementById('name-error').hidden = false
    }
    if(lastName.value == ''){
        document.getElementById('lastName-error').hidden = false
    }
    if(password.value == ''){
        document.getElementById('password-error').hidden = false
    }
    if(confirmPassword.value == ''){
        document.getElementById('confirmPassword-error').hidden = false
    }

    if(name.value != ''){
        document.getElementById('name-error').hidden = true
    }
    if(lastName.value != ''){
        document.getElementById('lastName-error').hidden = true
    }
    if(password.value != ''){
        document.getElementById('password-error').hidden = true
    }
    if(confirmPassword.value != ''){
        document.getElementById('confirmPassword-error').hidden = true
    }
}