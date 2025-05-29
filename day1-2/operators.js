// Arithmatic operators

// +, - , * , / , %
let sum = 10 + 5; 
console.log(`The sum is : ${sum}`)

let difference = 10 - 5; 
console.log(`The difference is: ${difference}`)

let product = 10 * 5; 
console.log(`The product is: ${product}`)

let quotient = 10 / 5;
console.log(`the quotient is : ${quotient}`)

let remainder = 10 % 3;
console.log(`The remainder is: ${remainder}`)




// Assignment Operators

let x = 10;
let y = x
console.log(`y = x : ${y}`)
x += 5; // x = x + 5
console.log(`x += 5 : ${x}`)
x -= 3; // x = x - 3
console.log(`x -= 3 : ${x}`)
x *= y
console.log(`x *= y : ${x}`)
x /= y
console.log(`x /= y : ${x}`)

// unary operators

let value = 100;
console.log(`value is : ${value}`)

// +x	Unary Plus	Convert a value into a number
let posValue = +value;
console.log(`Unary Plus : ${posValue}`);


// -x	Unary Minus	Convert a value into a number and negate it
let negValue = -value;
console.log(`Unary Minus : ${negValue}`)


// ++x	Increment Operator (Prefix)	    Add one to the value
let incValue = ++value;
console.log(`Prefix Increment Value : ${incValue}`);


// --x	Decrement Operator (Prefix)	    Subtract one from the value
let decValue = --value;
console.log(`Prefix Decrement Value: ${decValue}`);


// x++	Increment Operator (Postfix)    Add one to the value
let valueInc = value++;
console.log(`Postfix Increment value : ${valueInc}`);


// x--	Decrement Operator (Postfix)	Subtract one from the value
let valueDec = value--;
console.log(`postfix decrement value : ${valueDec}`);



let weight = 90; 
let newWeight = weight++ +5; 
console.log(newWeight);



// Comparison Operators

// <	less than

// >	greater than
// <=	less than or equal to
// >=	greater than or equal to
// ==	equal to
// !=	not equal to