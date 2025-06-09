let arr = [1,2,3,4,5]
console.log(arr)

console.log(arr.length);

// deleting complete array elements
arr.length= 0;

console.log(arr.length)

arr = [1,2,3,4,5]
console.log(arr.length)


// adding empty spaces in array 
arr.length=7
console.log(arr)
console.log(arr.length)

// Removing the elements from array
arr.length = 3;
console.log(arr)


// push() : appending the element at the last
arr.push(6);
console.log(arr);


// unshift() : insert element at the beginnining
arr.unshift(0);
console.log(arr);


// shift() : removing element from beginning
arr.shift();
console.log(arr);

// pop() : removing element from last
arr.pop()
console.log(arr)

// indexof() : find the index of element
console.log(arr.indexOf(5));


console.log(Array.isArray(arr));

arr.push("siddharth")
console.log(arr);

arr.forEach(num => console.log(num**2));

arr.push(4)
console.log(arr)

let arr1 = [5,6,7,8,9,10]

arr.push(...arr1)
console.log(arr)

for (let i of arr1){
    arr.push(i)
}
console.log(arr)


let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

days.unshift(...weekends)
console.log(days)

for (let day of weekends){
    days.unshift(day)
}
console.log(days)


// days.pop()

console.log(days)

// deleting elements from end using splice
week = days.splice(days.length-6);
console.log(days)
console.log(week)

// deleting elements from start using splice
let nums = [1,2,3,4,5,6,7,8]
let nums2 = nums.splice(0,4)
console.log(nums2)

// inserting element using splice

// syntax  : Array.splice(starting index, No. of delete Elements, values to add)

console.log(nums)
nums.splice(2,0,40,30,10);
console.log(nums)


nums.splice(2,3)
console.log(nums);

// Replacing elements using splice method

console.log(nums)
nums.splice(2,1,70)
console.log(nums)

// Replacing elements using splice method

console.log(nums)
nums.splice(0,4,50,60,70,80)
console.log(nums)



// creating subarrays using slice method

//Syntax : Array.slice(startIndex, EndIndex + 1)

let subarr = nums.slice(0,2)
console.log(nums)
console.log(subarr)

let subarr2 = nums.slice(0,4)
console.log(subarr2)


// includes : checks if the values is present in array or not and returns the boolean value
console.log([1,2,3,4].includes(5))

// indexOf : returns the first index of given element from array
console.log([1,2,3,4,5,6,4,5,6].indexOf(4))

// lastIndexOf : return the last index of element from array
console.log([1,4,6,2,4,5].lastIndexOf(4))
