function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
            //error dibe karon const variable ke update kora jabena 
        }
        //ekhane return korle hbe na 
        //oldest 12 diyei theme jabe 
    }
    return largest;

}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
//ekhn number gula pachee
console.log('Oldest', oldest);