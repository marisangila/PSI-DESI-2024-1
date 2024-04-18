window.onload = function() {
    oque();

    function oque(){
        let numA = 0
        let numB = 1
        let numC = 0
        let fibonacci = ""

        fibonacci += numA + " " + numB

        for(contador = 1; contador <=23; contador++){
            numC = numA + numB
            fibonacci += " " + numC
            numA = numB
            numB = numC
        }
            msg = fibonacci
        
            document.getElementById("resultado").innerHTML = msg;
    };
}
    