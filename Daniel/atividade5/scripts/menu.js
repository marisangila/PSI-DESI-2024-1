//Emphasis in the current page link 
if(window.parent.location.href === "http://127.0.0.1:5500/Daniel/atividade5/pages/home.html" ){
    current_page = document.getElementById("initial_page_link")
}else if(window.parent.location.href === "http://127.0.0.1:5500/Daniel/atividade5/pages/explore.html"){
    current_page = document.getElementById("explore_page_link")
}else{
    current_page = document.getElementById("create_page_link")
}

current_page.style.color = "white"
current_page.style.backgroundColor = "rgb(12, 12, 12)"
current_page.style.fontWeight = "700"

///////////////////////////////////////////////////////////////////////

//Change border of the search input
document.getElementById("input_search").addEventListener("focus", () => {
    document.getElementById("content_input_search").style.border = "4px solid rgb(116, 210, 235)"
})

document.getElementById("input_search").addEventListener("blur", () => {
    document.getElementById("content_input_search").style.border = "none"
})

///////////////////////////////////////////////////////////////////////

//Focus in menu_hamburguer 
let menu_hamburguer = document.getElementById("menu_hamburguer")
document.addEventListener("click", () => {
    if(menu_hamburguer.contains(event.target)){
        menu_hamburguer.style.color = "white"
        menu_hamburguer.style.backgroundColor = "rgb(12, 12, 12)"
        menu_hamburguer.style.fontWeight = "700"
    }else{
        menu_hamburguer.style.color = "black"
        menu_hamburguer.style.backgroundColor = "transparent"
        menu_hamburguer.style.fontWeight = "300"
    }
})

///////////////////////////////////////////////////////////////////////

