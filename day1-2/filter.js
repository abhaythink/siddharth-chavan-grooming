// filter() method : creates a new array with elements from the original array, which passes a test function.

// Syntax : array.filter(callbackFn, thisArg);


let nums = [1,2,3,4,5]

// 1) Basic JavaScript array filter() example

let result = nums.filter((n) => n%2 == 0)
console.log(result)


// 2) Using the filter() method with an array objects

let cities = [
  { name: 'Los Angeles', population: 3_792_621 },
  { name: 'New York', population: 8_175_133 },
  { name: 'Chicago', population: 2_695_598 },
  { name: 'Houston', population: 2_099_451 },
  { name: 'Philadelphia', population: 1_526_006 },
];

let result1 = cities.filter((city) => city.name == 'Los Angeles')
console.log(result1)

let result2 = cities.filter((c) => c.population < 3000000)
console.log(result2)


// 3) Chaining the filter() method with other array methods

cities
    .filter((c) => c.population > 3000000)
    .map((c) => c.name)
    .forEach((c) => console.log(c));




function isInRange(n){
    if (typeof n !== 'number'){
        return false
    }
    return n >= range.lower && n<= range.upper   
}

let range = {lower : 1, upper : 10}

let data = [10,20,'30',1,5,'40',undefined]

let result4 = data.filter(isInRange, range)
console.log(result4)