let average = 0
let numbers = 3
for(i=0; i<numbers; i++){
    let number = Number(prompt(`Enter the ${i+1}º number!`))
    average += number
}

alert(`The result is ${average/numbers}`)



