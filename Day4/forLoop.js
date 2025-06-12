// Syntax for creating a for loop:
// for (initializer; condition; iterator) {
//     // statements
// }


for (let i = 1; i < 3; i++){
    console.log(i)
}


// Using the JavaScript for loop without the initializer example

let j = 1;
for (; j<3; j++){
    console.log(j);
}


// using the JavaScript for loop without the iterator example
let k = 1;
for (;k<3;){
    console.log(k);
    k++;
}

// Using the JavaScript for loop statement without any expression example
let l = 1;
for (;;){
    if (l>=3){
        break;
    }
    else{
        console.log(l);
        l++;
    }
}


for (let m = 1; m<=5; m++){
    if (m % 2 === 0){
        console.log(`${m} is even`);
    }
    else{
        console.log(`${m} is odd`);
    }
}



// Using the JavaScript for loop without the loop body example

let sum = 0;
for(let n = 0; n<5; n++, sum += n){
    console.log(`Current number is: ${n}`);
    console.log(`Current sum is: ${sum}`);
}
console.log(`Sum of first 5 natural numbers is: ${sum}`);