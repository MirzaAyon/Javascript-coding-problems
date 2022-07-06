// for (let i = 0; i < 6; i++) {
//     console.log(i); //ekhane breakpoint dibo
// }


//function
// function consoleNumber(i) {
//     console.log(i);
// }
// consoleNumber(1);


//bar bar korar jnno
// function consoleNumber(i) {
//     console.log(i);
//     consoleNumber(i); //infinity loop e cholte thakbe ekta time por theme jabe 
// }
// consoleNumber(1);

//diff between i++ and ++i google krbo

// function consoleNumber(i) {
//     console.log(i);
//     consoleNumber(i + 1);
// }
// consoleNumber(1); //ekhn ek ek kore barbe 


function consoleNumber(i) {
    if (i > 5) { //ekhane breakpoint hbe 
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
consoleNumber(1);

