function showSecondField() {
    const firstField = document.getElementById("firstField");
    const secondFieldContainer = document.getElementById("secondFieldContainer");
    if (firstField.value.trim() !== "") {
        secondFieldContainer.style.display = "block";
    } else {
        secondFieldContainer.style.display = "none";
    }
}
