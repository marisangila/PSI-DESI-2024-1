let texto= document.getElementById("focotexto")
let foco = document.getElementById("foco")

let sel = document.getElementById("sel")
let selecaotexto = document.getElementById("selecaotexto")
// foco.addEventListener("focus",()=>{
//     texto.textContent="Está com foco!!"
// })

function selecaoInput(){
    selecaotexto.textContent = "primeira caixa ativada"
    console.log("entro")
}

function funcaoFoco(){
    texto.textContent="Está com foco!!"
}

function funcaoSemFoco(){
    texto.textContent="Está Sem com foco!!"
}