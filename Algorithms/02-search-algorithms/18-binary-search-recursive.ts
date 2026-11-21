//Given a sorted array of n elements & a target element t, find the index of t in the array. Return -1 if not found:

const sortedArr = [1,2,3,4,5];
function binarySearch(sortedArr: number[], target: number): number
{
    return search(sortedArr, target, 0, sortedArr.length-1);
}
function search(sortedArr: number[], target: number, leftPointer: number, rightPointer: number): number
{
    const middleIndex = Math.floor(leftPointer + rightPointer / 2);
    if(target === sortedArr[middleIndex]) return middleIndex;
    if(target < sortedArr[middleIndex]) return search(sortedArr, target, leftPointer, middleIndex);
    return search(sortedArr, target, middleIndex, rightPointer);
}
console.log(binarySearch(sortedArr, 5));