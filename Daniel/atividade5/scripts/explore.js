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
}