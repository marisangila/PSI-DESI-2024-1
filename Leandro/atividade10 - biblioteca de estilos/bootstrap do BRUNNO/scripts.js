function modo_escuro_claro(){
    var modo_atual = document.getElementById('modo_escuro').innerHTML
    if(modo_atual == "modo escuro"){
        modo_atual = "modo claro"
        document.getElementById('div1').style.backgroundColor = 'white'
        document.getElementById('div2').style.backgroundColor = '#00022b'
        document.getElementById('div3').style.backgroundColor = '#00022b'
        document.getElementById('body').style.backgroundColor = 'black'
        document.getElementById('text1').style.color = 'white'
        document.getElementById('text2').style.color = 'white'
        document.getElementById('text3').style.color = 'white'
        document.getElementById('text4').style.color = 'white'
        document.getElementById('text5').style.color = 'white'
        document.getElementById('text6').style.color = 'white'
        document.getElementById('text7').style.color = 'white'
    }else{
        modo_atual = "modo escuro"
        document.getElementById('div1').style.backgroundColor = '#00022b'
        document.getElementById('div1').style.backgroundColor = '#00022b'
        document.getElementById('div2').style.backgroundColor = '#4fa5d8'
        document.getElementById('div3').style.backgroundColor = '#4fa5d8'
        document.getElementById('body').style.backgroundColor = '#8eaebb'
        document.getElementById('text1').style.color = 'black'
        document.getElementById('text2').style.color = 'black'
        document.getElementById('text3').style.color = 'black'
        document.getElementById('text4').style.color = 'black'
        document.getElementById('text5').style.color = 'black'
        document.getElementById('text6').style.color = 'black'
        document.getElementById('text7').style.color = 'black'
    }
    document.getElementById('modo_escuro').innerHTML = modo_atual
}