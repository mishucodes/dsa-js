//Given an array of integers, sort the array:

function bubbleSort(unsortedArray: number[]): number[]
{
    let numbers: number[] = [...unsortedArray];
    let wereElementsSwapped: boolean;
    do
    {
        wereElementsSwapped = false;
        for(let one = 0, two = 1; two < numbers.length; one++, two++)
        {
            if(numbers[one] > numbers[two])
            {
                const temp = numbers[one];
                numbers[one] = numbers[two];
                numbers[two] = temp;
                wereElementsSwapped = true;
            }
        }
    }
    while(wereElementsSwapped);
    return numbers;
}

console.log(bubbleSort([6, 20, 8, 2, 4]));