function largestElement(numbers) {
    const largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
            //error dibe karon const variable ke update kora jabena 
        }
    }

}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
//ekhn number gula pachee