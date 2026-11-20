//Given an integer n, find the factorial of that integer: fn(5) -> 1x2x3x4x5
function getFactorialOf(n: number): number
{
    if(n < 1) return 0;
    if(n === 1) return 1;
    return n * getFactorialOf(n-1);
}
console.log(getFactorialOf(10));