//Given a number n, find the first n elements of the fibonaccci sequence:

function fibonaccci(n: number): number[] | null
{
    if(n < 2) return null;
    let sequence = [0, 1];
    for(let i = 2; i < n; i++)
    {
        let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }
    return sequence;
}

console.log(fibonaccci(10));