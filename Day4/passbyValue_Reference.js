let a = 10;
let b = a;
console.log("before b is updated a is : ",a)
console.log("before b is updated b is: ",b)
b = b + 1
console.log("after b is updated a is : ",a)
console.log("after b is updated b is : ",b)

let c = [1,2,3]
let d = c
console.log("before d updates c is : ",c)
console.log("before d updates d is : ",d)
d.push(4)
console.log("d is updated c = ",c)
console.log("d is updated d = ",d)