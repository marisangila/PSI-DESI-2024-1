let n1 = Number(prompt('Enter the first number!'))
let n2 = Number(prompt('Enter the second number!'))
let n3 = Number(prompt('Enter the third number!'))

let result = n1 > n2 ? n1 : n2
result = result > n3 ? result : n3
alert(`The greatest number is ${result}`)

