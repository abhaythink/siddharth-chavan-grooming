const resolvedPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("resolved Promise")
        resolve(10)
    },1000)
})

const rejectedPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("rejected")
    }, 2000);
})

Promise.race([
    resolvedPromise,
    rejectedPromise
])
.then(value=>console.log(value))
.catch(reason => console.log(reason));