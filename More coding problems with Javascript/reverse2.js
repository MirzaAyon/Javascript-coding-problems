const greetings = 'Hello, how are you?';

function reverseString(text) {
    let reverse = ''; //string take ami new arekta string kore banabo
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed);
//eta correct porer ta mistake