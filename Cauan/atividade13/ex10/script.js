var num = Number(prompt("Enter the number for the program return his multiplication table "))
var multTable = "\n=========================================\n"

for (i=0;i<=10;i++){
    multTable += `                               ||${num} * ${i} = ${num*i}||\n=========================================\n`
}

alert(`=-=-=-=-=-=-=-=-=-multiplication table-=-=-=-=-=-=-=-=-= \n${multTable}\n=========================================`)