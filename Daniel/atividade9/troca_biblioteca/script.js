function changeTheme(){
    const card = document.querySelectorAll('.div_card_clara')
    const body = document.querySelector('body')
    const title = document.querySelector('h2')
    const texto = document.querySelectorAll('.text')
    

    console.log(texto)

    if(document.querySelector("#changeValue").value === "dark"){
        body.classList.add('fundo_claro')
        title.classList.add('texto_fonte_escura')

        card.forEach((c) => {
            c.classList.add('div_card_escura')
        })

        texto.forEach((t) => {
            t.classList.add('texto_fonte_clara')
            t.classList.remove('texto_fonte_escura')
        })
   
        
        document.querySelector("#changeValue").value = "white"
    }else{
        body.classList.remove('fundo_claro')
        title.classList.remove('texto_fonte_escura')

        card.forEach((c) => {
            c.classList.remove('div_card_escura')
        })

        texto.forEach((t) => {
            t.classList.add('texto_fonte_escura')
            t.classList.remove('texto_fonte_clara')
        })

        document.querySelector("#changeValue").value = "dark"
    }
}



