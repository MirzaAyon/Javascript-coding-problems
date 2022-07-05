const greetings = 'Hello, how are you?';

function reverseString(text) {
    let reverse = ''; //string take ami new arekta string kore banabo
    for (const letter of text) {
        reverse = reverse + letter; //ekhane debug and watch e dbo reverse and letter
    }
    return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed);