// The Promise.allSettled() method accepts an iterable of promises and returns a new promise that resolves when every input promise has settled with an array of objects that describes the result of each promise in the iterable object.



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

Promise.allSettled([p1(), p2(), p3()])
    .then(result =>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    });
