//Given an array of n integers, sort the array:

function insertionSort(unsortedArray: number[]): number[]
{
    let sortedElements: number[] = unsortedArray.slice(0,1);
    for(let i = 0; i < unsortedArray.length - 1; i++)
    {
        const numberToInsert = unsortedArray[sortedElements.length];
        for(let j = sortedElements.length-1; j >= 0; j--)
        {
            if(numberToInsert >= sortedElements[j])
            {
                sortedElements[j+1] = numberToInsert;
                break;
            }
            else
                sortedElements[j+1] = sortedElements[j];
        }
    }
    return sortedElements;
}

console.log(insertionSort([-6, 20, 8, -2, 4]));