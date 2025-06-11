let a = 50;
let b = 20;
sum1(a,b);


function sum1(a,b) {
    let sum = a+b;
    console.log(sum);
}



function greet(name){
    if (name){
    console.log(`Good morning ${name}`);
    }
}
greet()


function compare(a,b){
    if (a>b){
        return "a is bigger";
    }
    else if (a < b) {
        return "b is bigger";
    }
    else{
        return "a equals to b";
    };
};

console.log(compare(5,5));


// Returning Multiple Values from a Function
// we can use Array or Objects

function getnames(s1,s2,s3,s4,s5){

    console.log([s1,s2, s3, s4, s5])
}
getnames("sid","varun","Hello")


function destructuring_array(){
    return [70,80,90]
    
}
let [x,y,z] = destructuring_array()
console.log({x,y,z});


let [v1,v2,v3] = [90,80,70,100];
console.log({v1,v2,v3})



// rest parameter that has a prefix of three dots (...). 
// A rest parameter allows you to represent an indefinite number of arguments as an array
// SyntaxError: Rest parameter must be last formal parameter

function getvalues(...args){
    // return [...args];
    total = 0;
    for (let a of args){
        total += a
    }
    return total
}

console.log(getvalues(1,2,3,4,5));

function add() {
    let sum = 0;
    for (i = 0; i < arguments.length; i++){
        sum += arguments[i]
    };
    return sum;
}
let addition = add(1,2,3,4,5)
console.log(`addition is : ${addition}`);