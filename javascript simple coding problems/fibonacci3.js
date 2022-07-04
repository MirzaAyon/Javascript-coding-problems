function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(13); //eta -1,1,-15 diye try krbo
//"ayon" diyeo try krbo
//braket er vitore [234] diyeo try krbo
console.log(fiboSeries);