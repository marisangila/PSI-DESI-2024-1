function primosEntreZeroEDuzentos(){
    var listaPrimos = ''
    for(var i=2;i<200;i++){
        var ehPrimo = true
        for(var j=2;j<200;j++){
            if(i%j == 0 && i!=j){
                ehPrimo = false
            }
        }
        if(ehPrimo){
            listaPrimos += i+','
        }
    }
    alert(listaPrimos)
}
primosEntreZeroEDuzentos()