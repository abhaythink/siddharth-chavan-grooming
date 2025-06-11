// Use the JavaScript Promise.any() method to take a list of promises and return a promise that is fulfilled first.


const p1 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("This is resolved p1");       
        }, 2000);
    });
};
const p2 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("this is rejected p2")            
        }, 500);
    })
};
const p3 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("this is rejected p3")            
        }, 200);
    })
};

Promise.any([p1(), p2(), p3()])
    .then(result =>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    });
