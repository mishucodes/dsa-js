//Given a number n, find the nth element of the fibonaccci sequence:
function fibonaccci(n: number): number
{
    if(n <= 1) return 0;
    if(n === 2) return 1;
    return fibonaccci(n-1) + fibonaccci(n-2);
}
console.log(fibonaccci(10));


//Given a number n, find the first n elements of the fibonaccci sequence:
function fibonaccciArray(n: number): number[]
{
    if(n <= 0) return [];
    if(n === 1) return [0];
    if(n === 2) return [0,1];
    const previousArray = fibonaccciArray(n-1);
    return [...previousArray, previousArray[previousArray.length-2] + previousArray[previousArray.length-1]];
}
console.log(fibonaccciArray(10));