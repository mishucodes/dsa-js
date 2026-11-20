//Given an array of n elements & a target element t, find the index of t in the array. Return -1 if not found:
const arr = [1,2,3,4,5];
function linearSearch(n: number[], t: number): number
{
    for(let i = 0; i < n.length; i++)
        if(n[i] === t) return i;
    return -1;
}
console.log(linearSearch(arr, 3));