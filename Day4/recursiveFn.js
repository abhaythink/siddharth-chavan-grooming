// function countDown(num){
//     while (num > 0){
//         num --;
//         console.log(num)
//     }
// }
// countDown(3)


function countDown2(num){
    console.log(num);

    let nextNum = num - 1;
    if (nextNum > 0){
        countDown2(nextNum);
    }
}
countDown2(3)


function sum(n){  
    if (n <=1){
        return n
    }
    return n + sum(n-1)
}
console.log(sum(5))