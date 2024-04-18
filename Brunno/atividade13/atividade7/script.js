window.onload = function() {
    calculaPares();

    function calculaPares(){
        let numA = 0
        let numB = 1
        let numC = 0
        let fibonacci = ""
        let somaPares = 0

        fibonacci += numA + " " + numB

        for(contador = 1; contador <=23; contador++){
            numC = numA + numB
            fibonacci += " " + numC
            if(numC % 2 == 0){
                somaPares += numC
            }
            numA = numB
            numB = numC
        }
            msg = fibonacci
        
            document.getElementById("resultado").innerHTML = msg;
            document.getElementById("somaPares").innerHTML = somaPares;
    };
}
    