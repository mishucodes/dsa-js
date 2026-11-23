//Given an array of n integers, sort the array:

function insertionSort(unsortedArray: number[]): number[]
{
    let sortedElements: number[] = unsortedArray.slice(0,1);
    for(let i = 1; i < unsortedArray.length; i++)
    {
        const numberToInsert = unsortedArray[i];
        let j = sortedElements.length-1;
        while(numberToInsert < sortedElements[j])
        {
            sortedElements[j+1] = sortedElements[j];
            j--;
        }
        sortedElements[j+1] = numberToInsert;
    }
    return sortedElements;
}

console.log(insertionSort([-6, 20, 8, -2, 4, -10]));