//input er validation krbo
function fibonacciSeries(num) {
    // console.log(typeof num);

    if (typeof num != 'number') {
        return 'please give a number';
    } //ekhane ekta break point dibo
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
// const fiboSeries = fibonacciSeries([3]);
const fiboSeries = fibonacciSeries(-23);
//eta -1,1,-15 diye try krbo
//"ayon" diyeo try krbo
//braket er vitore [234] diyeo try krbo
console.log(fiboSeries);