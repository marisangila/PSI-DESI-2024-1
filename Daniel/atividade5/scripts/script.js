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
    document.getElementById("popup").style.display = "flex"
})

document.getElementById("input_search").addEventListener("blur", () => {
    document.getElementById("content_input_search").style.border = "none"
    document.getElementById("popup").style.display = "none"
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

///////////////////////////////////////////////////////////////////////
// Galery Images
let GALERY = window.document.getElementById("galery")
for(let i = 0; i < 600; i++){
    //CONTENT_IMAGE
    let content_image = document.createElement('section')
    content_image.setAttribute("class", "img_galery")
    content_image.style.position = "relative"

    
    GALERY.appendChild(content_image)

    //IMAGE
    let img = document.createElement('img')
  
    img.setAttribute("class", "img_galery")
    img.setAttribute("src", "../images/icons/icon_user.png")
    img.setAttribute("alt", `img_${i}`)

    content_image.appendChild(img)

    //OPTIONS_IMAGE
    let content_options_image = document.createElement('div')
    content_options_image.setAttribute("id", `options_${i}`)
    content_options_image.style.backgroundColor = "rgba(0,0,0, .4)"
    content_options_image.style.width = "100%"
    content_options_image.style.height = "93%"
    content_options_image.style.top = "1px"
    content_options_image.style.borderRadius = "20px"
    content_options_image.style.position = "absolute"
    content_options_image.style.zIndex = "10"
    content_options_image.style.display = "none"
    content_options_image.style.flexDirection = "column"
    content_options_image.style.justifyContent = "space-between"
    content_options_image.style.paddingInline = "20px"
    content_options_image.style.paddingBlock = "5px"

    content_image.addEventListener("mouseenter", () => {
        content_options_image.style.display = "flex"
    })

    content_image.addEventListener("mouseleave", () => {
        content_options_image.style.display = "none"
    })

    content_image.appendChild(content_options_image)

    //OPTIONS_TOP_IMAGE
    let options_top_image = document.createElement('div')
    options_top_image.style.height = "30%"
    options_top_image.style.display = "flex"
    options_top_image.style.justifyContent = "space-between"
    options_top_image.style.alignItems = "center"

    //OPTIONS_BOTTOM_IMAGE
    let options_bottom_image = document.createElement('div')
    options_bottom_image.style.height = "17%"
    options_bottom_image.style.paddingBlock = "5px"
    options_bottom_image.style.display = "flex"
    options_bottom_image.style.gap = "5px"
    options_bottom_image.style.justifyContent = "center"

    content_options_image.appendChild(options_top_image)
    content_options_image.appendChild(options_bottom_image)

    //CONTENT_CATEGORRY
    let content_category = document.createElement('div')
    content_category.style.display = "flex"
    content_category.style.cursor = "pointer"
    content_category.style.gap = "5px"

    options_top_image.appendChild(content_category)

    //CATEGORY_TEXT
    let category_text = document.createElement('p')
    category_text.innerText = "Category"
    category_text.style.color = "white"
    category_text.style.fontWeight = "600"

    content_category.appendChild(category_text)

    //CATEGORY_ICON
    let category_icon = document.createElement('img')

    category_icon.setAttribute("src", "../images/icons/arrowDown_white.png")
    category_icon.setAttribute("alt", `img_${i}`)
    category_icon.style.width = "20px"
    
    content_category.appendChild(category_icon)

    //BUTTON_SAVE
    let button_save = document.createElement('input')
    button_save.setAttribute("type", "button")
    button_save.value = "Save"
    button_save.style.color = "white"
    button_save.style.fontWeight = "600"
    button_save.style.backgroundColor = "rgb(255, 0, 55)"
    button_save.style.borderRadius = "20px"
    button_save.style.border = "none"
    button_save.style.paddingInline = "20px"
    button_save.style.paddingBlock = "13px"
    button_save.style.fontSize = "15px"
    button_save.style.cursor = "pointer"
    button_save.addEventListener("mouseenter", () => {
        button_save.style.backgroundColor = "rgb(179, 5, 42)"
    })

    button_save.addEventListener("mouseleave", () => {
        button_save.style.backgroundColor = "rgb(255, 0, 55)"
    })

    options_top_image.appendChild(button_save)

    
    //NAME_ARTIST
    let name_artist = document.createElement('p')
    name_artist.setAttribute("class", "bottom_image_sections")
    name_artist.innerText = "Name of artist"
    name_artist.style.color = "rgb(31, 31, 31)"
    name_artist.style.fontWeight = "500"

    options_bottom_image.appendChild(name_artist)
    
    //CONTENT_SHARE_OPTION
    let content_share_option = document.createElement('div')
    content_share_option.setAttribute("class", "bottom_image_sections")

    options_bottom_image.appendChild(content_share_option)
    //SHARE_OPTION
    let share_option = document.createElement('img')
    share_option.style.width = "25px"

    share_option.setAttribute("src", "../images/icons/share.png")

    content_share_option.appendChild(share_option)

    //CONTENT_MORE_OPTIONS
    let content_more_options = document.createElement('div')
    content_more_options.setAttribute("class", "bottom_image_sections")

    options_bottom_image.appendChild(content_more_options)

    //MORE_OPTIONS
    let more_options = document.createElement('img')

    more_options.style.width = "15px"
    more_options.setAttribute("src", "../images/icons/more_options.png")

    content_more_options.appendChild(more_options)
}

//////////////////////////////////////////////////
// SCROLL HEADER
document.addEventListener('scroll', () => {
    document.getElementsByTagName("header")[0].style.boxShadow = "10px 10px 10px rgba(0,0,0,.2)"
    if(window.scrollY === 0){
        document.getElementsByTagName("header")[0].style.boxShadow = "none"
    }
});