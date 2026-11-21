//Given a sorted array of n elements & a target element t, find the index of t in the array. Return -1 if not found:

const sortedArr = [1,2,3,4,5];
function binarySearch(sortedArr: number[], target: number): number
{
    if(sortedArr.length === 0) return -1;
    let leftIndex = 0;
    let rightIndex = sortedArr.length-1;
    while(leftIndex < rightIndex)
    {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(sortedArr[middleIndex] === target) return middleIndex;
        if(target < sortedArr[middleIndex]) rightIndex = middleIndex;
        else leftIndex = middleIndex;
    }
    return -1;
}
console.log(binarySearch(sortedArr, 0));