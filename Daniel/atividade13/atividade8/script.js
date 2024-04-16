number = 0
number2 = 1
number3 = 1

somaPar = 0

for(i=0;i<50000;i++){
    number = number2 + number3      
    number2 = number + number3  
    number3 = number2 + number 

    somaPar += number
}

console.log(somaPar)







