
note = [0,0,0,0,0,0]
function showExtraField() {
    var selectedValue = $("#ghibliMovies").val()
    var containerNote = $("#containerNote");

    console.log(selectedValue)
    if (selectedValue === "selected") {
        containerNote.css("display","none")
    }else{
        
        containerNote.css("display","block")
        let index = Number(selectedValue.charAt(selectedValue.length - 1))
        console.log(note[index])
        containerNote.html(`<input type="number" id="userNote" maxlength="1"><label for="userNote" id="note">Note: ${note[index]}</label>`)
       
        $('#userNote').on("input", ()=>{
            $("#note").html(`Note: ${$("#userNote").val()}`)
            note[index] += Number($("#userNote").val())
            console.log(note[index])
        })
    }
}