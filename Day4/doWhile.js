const prompt = require('prompt-sync')();

let count = 0;
do {
    console.log(count);
    count ++
}while (count < 5);


const MIN = 1;
const MAX = 10;

let RandomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
console.log(`Random Number is: ${RandomNumber}`);
let guess = 3;
do {
    let input = parseInt(prompt("Guess the number between 1 and 10:"));
    if (input === RandomNumber){
        console.log("correct guess");
        break;
    }
    else{
        guess--;
        if (input < RandomNumber){
            console.log("Too low, try again");
        }
        else{
            console.log("Too high, try again"); 
        }
    }
}while (guess > 0);
console.log("Game Over");
console.log(`The number was: ${RandomNumber}`);