//Given an integer n, find the factorial of that integer

function getFactorialOf(n: number): number | null
{
    if(n < 0) return null;
    if(n === 0) return 1;
    let factorial = 1;
    for(let i = 1; i <= n; i++)
        factorial *= i;
    return factorial;
}

console.log(getFactorialOf(5));