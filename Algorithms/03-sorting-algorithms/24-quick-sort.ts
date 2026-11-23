//Given an array of integers (n), sort the array:

function quickSort(unsortedArray: number[]): number[]
{
    if(unsortedArray.length <= 1) return unsortedArray;

    const pivot = unsortedArray[unsortedArray.length-1];
    const leftArray: number[] = [];
    const rightArray: number[] = [];
    for(let i = 0; i < unsortedArray.length-1; i++)
    {
        if(unsortedArray[i] < pivot) leftArray.push(unsortedArray[i]);
        else rightArray.push(unsortedArray[i]);
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort([-6, 20, 8, -2, 4]));