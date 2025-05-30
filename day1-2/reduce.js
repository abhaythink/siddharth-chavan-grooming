// reduce() method : iterate over an array and reduce their elements to a single value.

// Syntax : array.reduce(callbackFn,initialValue)

let nums = [1,2,3,4,5]

let result = nums.reduce((accumalator,currentValue) => accumalator+currentValue);
console.log(result)

let cart = [
    {
        product : 'phone',
        qty : 1,
        price : 10000
    },
    {
        product : 'screen protector',
        qty : 1,
        price : 500
    },
    {
        product : 'headphones',
        qty : 1,
        price : 1500
    },
];

const TotalCartPrice =(accumalator, item) => accumalator + item.qty * item.price

let total = cart.reduce(TotalCartPrice, 0)

console.log({total});
