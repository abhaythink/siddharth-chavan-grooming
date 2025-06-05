// you can label a statement for later use
// Syntax : labelName : statment

outer : for (let i = 0; i <=3; i++){
    inner : for (let j = 0; j<=3; j++){
        if (i === 2 && j === 2){
            console.log("Breaking out of the inner loop");
            break inner; // breaks out of the inner loop only
        }
        console.log(`i: ${i}, j: ${j}`);
    }
    console.log("End of outer loop iteration");
    // break outer; // breaks out of the outer loop
}

// console.log(outer);
// console.log(inner);



let i = 0;
while (i<5){
    i++;
    console.log(i)
    if (i == 3){
        break;
    }
}