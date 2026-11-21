//Given an array of integers, sort the array:

function bubbleSort(unsortedArray: number[]): number[]
{
    let sortedArray: number[] = [...unsortedArray];
    let wereElementsSwapped: boolean = false;
    do
    {
        wereElementsSwapped = iterateOneTime(sortedArray);
    }
    while(wereElementsSwapped);
    return sortedArray;
}
function iterateOneTime(numbers: number[]): boolean
{
    let wereElementsSwapped: boolean = false;
    for(let one = 0, two = 1; two < numbers.length; one++, two++)
    {
        if(numbers[one] > numbers[two])
        {
            wereElementsSwapped = true;
            const temp = numbers[one];
            numbers[one] = numbers[two];
            numbers[two] = temp;
        }
    }
    return wereElementsSwapped;
}

console.log(bubbleSort([6, 20, 8, 2, 4]));