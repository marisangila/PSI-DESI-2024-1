$("#inputText").on("input", ()=>{
    $("#counter").html($("#inputText").val().length)
})