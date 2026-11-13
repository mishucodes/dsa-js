//Given a natural number, determine if the number is a power of 2 or not

function powerOfTwoOrNot(n: number): boolean | null
{
    if(n < 1) return null;
    if(Math.sqrt(n) > Math.round(Math.sqrt(n))) return false;
    return true;
}

console.log(powerOfTwoOrNot(1));