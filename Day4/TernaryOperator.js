// Syntax of the ternary operator:

// condition ? expressionIfTrue : expressionIfFalse;



let age = 20;

let isVoter = (age >= 18) ? "Eligible to vote" : "Not eligible to Vote";

console.log(isVoter)


// ternary operator to perform multiple statements

let authenticated = true;
let nextUrl = authenticated 
? (("Redirect to dashboard"),'/dashboard')
: (("Redirect to login"),"/login");
console.log(nextUrl);



// Using multiple ternary operators

let speed = 39;
let msg = 
(speed >= 120) ? "Too Fast" 
: (speed >= 80 && speed < 120) ? "Fast" 
: (speed >=40 && speed < 80) ? "slow" : "Too Slow";

console.log(msg);