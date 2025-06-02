let p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 3 * 1000);
});

p
.then((result) =>{
    console.log(result);      // 10
    return result * 2;        // 20
})
.then((result)=>{
    console.log(result);      // 20
    return result * 3;        // 60
})
.then((result)=>{
    console.log(result);      // 60
    return result * 4;        // 240
})
.then((finalResult) => {
    console.log("Final Result:", finalResult); // 240
})
.catch((error)=>{
    console.log("Error:", error);
})
.finally(()=>{
    console.log("END"); // Always runs
});
