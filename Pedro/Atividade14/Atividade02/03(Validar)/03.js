
const idade = document.getElementById("idade")
idade.hidden = true

const sobrenome = document.getElementById("sobrenome")
sobrenome.hidden = true

const nome = document.getElementById("nome")

nome.addEventListener("change", () => sobrenome.hidden = false)

sobrenome.addEventListener("change",()=> idade.hidden = false)