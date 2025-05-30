// The Promise.all() method accepts a list of promises and returns a new promise that resolves to an array of results of the input promises if all the input promises are resolved, or rejected with an error of the first rejected promise.

// Use the Promise.all() method to aggregate results from multiple zasynchronous operations.


const p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log("This is first promise");
        resolve(10);
    },2000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("This is second promise");
        resolve(20);
    },2000);
});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("This is third promise");
        resolve(30);
    },2000);
});

Promise.all([p1,p2,p3]).then((result)=>{
    const total = result.reduce((p,c)=> p + c);

    console.log(result)
    console.log(total)
})




const np1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("1st")
        resolve(10)
    },1000)
});
const np2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("2nd")
        resolve(10)
    },2000)
});
const np3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("3rd")
        resolve(10)
    },3000)
});

Promise.all([np1,np2,np2])
    .then(console.log)
    .catch(console.log);