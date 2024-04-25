let number = 0
let number2 = 1
let number3 = 1

let sumPair = 0

while(number3 < 50000){
    number = number2 + number3       
    number2 = number + number3  
    number3 = number2 + number 
    
    console.log(`${number}, ${number2}, ${number3}`)
    sumPair += number
}

console.log(sumPair)
    







