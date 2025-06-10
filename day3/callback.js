
// A callback is a function passed as an argument to another function, which is then invoked (called back) inside that function.

// Synchronous callback is executed during the execution of the high-order function that uses the callback. 

function evenNumber(number){
    return number % 2 != 0;
}

function oddNumber(numbers, fn){
    let result = [];
    for (let i in numbers){
        if (fn(i)){
            result.push(i)
        }
    }
    return result;
}
console.log(oddNumber([1,2,3,4,5,6,7,8,9], evenNumber))


function filter(numbers , callback) {
    let result = [];
    for (let i of numbers){
        if (callback(i)){
            result.push(i);
        }
    }
    return result;
}

let numbers = [1,2,3,4,5,6,7,8,9];
let OddN = filter(numbers , (i)=> i %2 !==0) ;
console.log(OddN)



// Asynchronous callback is executed after the execution of the high-order function that uses the callback.

function greetAsync(name, callback){
    setTimeout(() => {
        console.log("Hello " + name);        
    }, 6000);
    callback();
}

function sayBye(){
    console.log("Bye");
}


greetAsync("Siddharth", sayBye);



// Callback Hell happens when multiple asynchronous operations are nested inside each other using callbacks. This leads to:

// Deeply nested code (like a pyramid or ladder)

// Hard to read

// Hard to debug or maintain

// This usually looks like this:

setTimeout(()=>{
    console.log("Task 1");
    setTimeout(()=>{
        console.log("Task 2");
        setTimeout(()=>{
            console.log("Task 3");
            setTimeout(() => {
                console.log("Task 4");
            }, 1000);
        },1000)
    },1000)
},1000)