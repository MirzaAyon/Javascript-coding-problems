function largestElement(numbers) {
    let largest = numbers[0];
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
//ekhn number gula pachee
const oldest = largestElement(ages);
const oldest2 = largestElement([-2, -3, -5]); //etake abr same way te debug krbo
console.log('Oldest', oldest);
console.log('Oldest2', oldest2);

//// Task: find the lowest or smallest element of an array
//js array smallest number