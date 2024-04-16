function causarDano(){
    var status = 0
    var hp = Number(document.getElementById('hp').innerHTML)
    hp -= 5
    if (hp <=0){
        status = 1
    } else{
        status = 0
    }
    if(hp <0){
        hp = 0
    }
    document.getElementById('hp').innerHTML = hp
    alert(status)
}