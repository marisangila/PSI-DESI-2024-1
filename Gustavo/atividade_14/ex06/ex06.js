function InserirOpcoes(){
    let selects = document.getElementById('selects')
    let novaTag = document.createElement('option')
    novaTag.innerHTML = "NovaOpcao"
    selects.append(novaTag)    
}