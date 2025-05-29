// Passing a function to another function

function sum(...args){
    let total = 0;
    for(let i of [...args]){
        total += i;
    }
    return total
}

function average(sumFn,...args){
    let total = sumFn(...args)
    console.log(total)
    console.log(args.length)
    return(total / args.length)
}
console.log(average(sum,1,2,3,4,5,6,7,8));



function min(...args){
    let min = Infinity;
    for (let i of args){
        if (i < min){
            min = i;
        }
    }
    return min;
}
let minimum_element = min(8,9,10,3,4,5)
console.log(`The minimum element is : ${minimum_element}`);


function secondMin(minFn,...args){
    let sMin = Infinity;
    let min = minFn(...args)
    for (let i of args){
        if (i > min && i < sMin){
            sMin = i;
        }
    }
    return sMin   
}
let secondMinimum = secondMin(min,8,9,10,3,4,5);
console.log(`The second minimum is: ${secondMinimum}`);

console.log(convert.isIdentifier());