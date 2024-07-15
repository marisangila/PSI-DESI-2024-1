function fibonacci()
{
    let aa=0
    let a=1
    let i=0
    let somaPares=0
    while(i<50000)
    {
        i=aa+a
        console.log(i)
        aa=a
        a=i
        if(i%2==0)somaPares+=i
    }
    console.log("A soma dos pares é igual à:"+somaPares)
}