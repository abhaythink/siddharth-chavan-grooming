// Map : Transforms each element and returns a new array.

// Syntax : Array.map(callbackFn, thisArg)

let nums = [1,2,3,4,5]

function square(...args){
    return args[0] * 2
}

let result = nums.map(square)
console.log(result)



let result1 = [7,8,9].map((n) => n*3)
console.log(result1)
