window.onload = function() {
    calculaPares();

    function calculaPares(){
        let nA = 0
        let nB = 1
        let nC = 0
        let fibonacci = ""
        let somaPares = 0

        fibonacci += nA + " " + nB

        for(contador = 1; contador <=23; contador++){
            nC = nA + nB
            fibonacci += " " + nC
            if(nC % 2 == 0){
                somaPares += nC
            }
            nA = nB
            nB = nC
        }
            msg = fibonacci
        
            document.getElementById("fibonacci").innerHTML = msg;
            document.getElementById("somaPares").innerHTML = somaPares;
    };
}