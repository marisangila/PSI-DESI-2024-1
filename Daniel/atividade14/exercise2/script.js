let menu_hamburguer = document.querySelector("#menu_hamburguer_button")
let eh_menu =  false 

menu_hamburguer.addEventListener("click", () =>{
    let menu_items_container = document.querySelector("#menu_items_container")
    if(eh_menu){      
        menu_items_container.style.display = "none"
    }else{
        menu_items_container.style.display = "block"
    }
    eh_menu =  !eh_menu 
})