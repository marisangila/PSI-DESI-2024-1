function salvarDados() {
    let verificaInsercaoDados = false
    for (var i=1; i<=3; i++) {
        let input = document.getElementById('campo'+i).value
        if(input == ''){
            verificaInsercaoDados = true
            document.getElementById('alerta'+i).innerHTML = '<label style="color:red;">* Campo não preenchido</label>'
        } else {
            document.getElementById('alerta'+i).innerHTML = '<label style="color:green;">* Campo preenchido</label>'
        }
    }
    if(verificaInsercaoDados){
        alert('Nem todos os campos foram preenchidos!!')
    }
}