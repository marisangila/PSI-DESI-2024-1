let box1Focus = false
let box2Focus = false 

$("#box1").on("click", ()=>{
    alert("BOX 1 ACTIVATED")
    box1Focus = true
})

$("#box2").on("click", ()=>{
    alert("BOX 2 ACTIVATED")
    box2Focus = true
})

$(document).on("click", (event)=>{
    if((!event.target.closest('#box1')) && (!event.target.closest('#box2'))){
        if(box1Focus === true && box2Focus === false){
            alert("BOX 1 MISSED THE FOCUS")
            box1Focus = false
        }else if(box1Focus === false && box2Focus === true){
            alert("BOX 2 MISSED THE FOCUS")
            box2Focus = false
        }else if(box1Focus === true && box2Focus === true){
            alert("BOTH BOXES MISSED THE FOCUS")
            box1Focus = false
            box2Focus = false
        }else{
            alert("Nothing Happened")
        }   
    }
})

