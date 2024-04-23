function verificaMaiorDeIdade(){
    var idade = Number(prompt('Informe sua idade: '))
    ehMaior = ''
    if(idade >= 18){
        ehMaior = 'é'
    } else{
        ehMaior = 'não é'
    }
    alert(`Você ${ehMaior} maior de idade`)
}
verificaMaiorDeIdade()