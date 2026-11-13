//Given a natural number n, determine if it's a prime number or not

function primeOrNot(n: number): boolean | null
{
    if(n < 1) return null;
    if(n === 1) return false;
    if(n % 2 === 0) return false;
    for(let i = 3; i < n; i+=2)
    {
        if(i/n > 0.5) break;
        if(n % i === 0) return false;
    }
    return true;
}

console.log(primeOrNot(9));