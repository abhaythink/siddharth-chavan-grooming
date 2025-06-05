let success = true
// const promise = new Promise((resolve, reject) => {
//     //operation
//     if (success) {
//         resolve("this is resolved")
//     }
//     else{
//         reject("this is reject")
//         }
// })

let users = [
            {username : "Siddharth", age : 25},
            {username : "varun", age : 25}
            ]

function getUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(users)
        },2000)
    });
}

function onFulfilled(users){
    console.log(users)
}
function onRejected(error){
    console.log(error)
}

const promise = getUser();
promise.then(onFulfilled, onRejected);
// promise.catch(onRejected);




let success1 = false;

function getPersonDetails(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (success1){
                resolve([
                    {username : "Siddharth"}
                ])
            }
            else{
                reject("Failed to find the person")
            }
        },2000)
    });
}

// function onFullfilled
// function onRejected


getPersonDetails()
    .then((person) => {
            console.log(person)
        })
    .catch(
        (error) => {
        console.log(error)}
        )
    .finally(()=>{
        console.log("this is the finally")
    });