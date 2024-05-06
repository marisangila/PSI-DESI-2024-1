function validarForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert("Please, fill all fields");
        return false;
    }
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        alert("Please, insert a valid mail");
        return false;
    }
    if (password.length < 8) {
        alert("your password must be longer than 8 characters");
        return false;
    }
    return true;
}
