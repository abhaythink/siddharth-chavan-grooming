
// Two ways for Creation of arrays 
// 1) using Array Constructor

let arr = new Array(3); // array with fixed length
console.log(arr);


let arr1= new Array(1,2,3,4,5); // array with specified elements
console.log(arr1);

let arr2 = new Array('red'); // array with one string
console.log(arr2);


// 2) using array literal notation

let arr3 = ["sid","aditya","nayan","trisha"];
console.log(arr3);



// forEach : Loops through the array, calling the function for each item. Does not return a new array.
let nums = [1,2,3,4,5]
nums.forEach((num) => console.log(num * 2))

