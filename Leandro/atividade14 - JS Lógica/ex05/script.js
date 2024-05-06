function calculaMedia(){
    var media = 0
    for(var i=1; i<4; i++){
        media += Number(prompt(`Informe o ${i}º`))
    }
    alert(`A média aritmética entre os 3 números é: ${media/3}`)
}
calculaMedia()