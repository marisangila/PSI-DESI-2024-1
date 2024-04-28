$(document).ready(function(){
    const formRegister = $("#form-register");
    const CPFInput = $("#cpfInput"); 
    const errorCPF = $("#errorCPF").css("color", "red") 
    
    formRegister.on("submit", (event) => {
        if(validateCPF(CPFInput, errorCPF)){
            alert(`User logged!!`)
        }else{
            event.preventDefault()
        }
    })
})

function validateCPF(input, error){
    error.empty()
    if(input.val().trim() === ''){
        error.html(`This field is required!`)
        return false
    }

    else if(!validateText(input.val().trim())){
        error.html(`<p>Type it a correct CPF!!</p> 
                    <p>Correctly format: ###.###.###-##</p>`)
        return false
    }
    return true 
}

function validateText(text, camp) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(text);
}