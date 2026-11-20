//Given a number n, find the nth element of the fibonaccci sequence:

function fibonaccci(n: number): number
{
    if(n <= 1) return 0;
    if(n === 2) return 1;
    return fibonaccci(n-1) + fibonaccci(n-2);
}

console.log(fibonaccci(10));