//Emphasis in the current page link
let url = window.parent.location.href
url = url.split("/") 

if(url[url.length-1] === "home.html" ){
    current_page = document.getElementById("initial_page_link")
}else if(url[url.length-1] === "explore.html"){
    current_page = document.getElementById("explore_page_link")
}else{
    current_page = document.getElementById("create_page_link")
}

current_page.style.color = "white"
current_page.style.backgroundColor = "rgb(12, 12, 12)"
current_page.style.fontWeight = "700"

///////////////////////////////////////////////////////////////////////

//Change border of the search input
let popup = document.getElementById("popup")
let content_input_search =  document.getElementById("content_input_search")
let input_search = document.getElementById("input_search")
let content_popup = document.getElementById("content_popup")

input_search.addEventListener("focus", () => {
    content_input_search.style.border = "4px solid rgb(116, 210, 235)"
    popup.style.display = "flex"
})

document.addEventListener("click", (event) => {
    console.log(event.target)
    if(event.target !== content_popup && event.target !== input_search && !content_popup.contains(event.target)){
        content_input_search.style.border = "none"
        popup.style.display = "none"
    }
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

// POPUP
let current_researches_section = document.getElementById("current_researches_section")
for(let i = 0; i < 5; i++){
    let content_current_recomendation = document.createElement('div')
    content_current_recomendation.setAttribute("class", "items_recomendations")
    content_current_recomendation.style.padding = "10px"
    content_current_recomendation.style.gap = "10px"
  
    let text_current_recomendation = document.createElement('div')
    text_current_recomendation.innerHTML = "Draws of characters"
    content_current_recomendation.appendChild(text_current_recomendation)

    let img_current_recomendation = document.createElement('img')
    img_current_recomendation.setAttribute("src", "../images/icons/remove.png")
    img_current_recomendation.style.width = "20px"

    content_current_recomendation.appendChild(img_current_recomendation)

    current_researches_section.appendChild(content_current_recomendation)
}

let ideas_section = document.getElementById("ideas_you")
for(let i = 0; i < 2; i++){
    let content_idea_recomendation = document.createElement('div')
    content_idea_recomendation.setAttribute("class", "items_recomendations")

    ideas_section.appendChild(content_idea_recomendation)

    let img_idea_recomendation = document.createElement('img')
    img_idea_recomendation.setAttribute("class", "img_idea")
    img_idea_recomendation.setAttribute("src", "../images/users/idea.jpeg")

    content_idea_recomendation.appendChild(img_idea_recomendation)

    let text_idea_recomendation = document.createElement('p')
    text_idea_recomendation.setAttribute("class", "text_idea")
    text_idea_recomendation.innerHTML = "Ilustration Ghibli"
    content_idea_recomendation.appendChild(text_idea_recomendation)

}

let popular_section = document.getElementById("popular_idea")
for(let i = 0; i < 4; i++){
    let content_idea_recomendation = document.createElement('div')
    content_idea_recomendation.setAttribute("class", "items_recomendations")

    popular_section.appendChild(content_idea_recomendation)

    let img_idea_recomendation = document.createElement('img')
    img_idea_recomendation.setAttribute("class", "img_idea")
    img_idea_recomendation.setAttribute("src", "../images/users/idea2.jpg")

    content_idea_recomendation.appendChild(img_idea_recomendation)

    let text_idea_recomendation = document.createElement('p')
    text_idea_recomendation.setAttribute("class", "text_idea")
    text_idea_recomendation.innerHTML = "Popular Ilustrations"
    content_idea_recomendation.appendChild(text_idea_recomendation)

}

//////////////////////////////////////////////////
// SCROLL HEADER
document.addEventListener('scroll', () => {
    document.getElementsByTagName("header")[0].style.boxShadow = "none"
 
    if(window.scrollY !== 0 && window.getComputedStyle(document.querySelector("#popup")).getPropertyValue("display") == "none"){
        document.getElementsByTagName("header")[0].style.boxShadow = "1px 1px 10px rgba(0,0,0,.2)"
    }  
});