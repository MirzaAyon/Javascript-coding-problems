function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum; //vitore return kora jabe na evabe bahire return korte hbe 
}

const total = arrayTotal([32, 45, 67]);
console.log('array total', total)
//with function