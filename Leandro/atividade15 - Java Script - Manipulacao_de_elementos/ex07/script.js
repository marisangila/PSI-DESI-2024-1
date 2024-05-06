function atualizaContador() {
    var textInput = document.getElementById("textInput")
    var characterCount = document.getElementById("characterCount")
    
    var count = textInput.value.length
    characterCount.textContent = count
}