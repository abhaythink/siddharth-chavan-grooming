// Syntax for creating a promise


// let promise = new promise ((resolve, rejectcl )=>{

//     if (true) {
//         reject("Error occurred");
//     }
//     else{
//         resolve("Success");
//     }
// })



// Once a new Promise object is created, its state is pending. If a promise reaches fulfilled or rejected state, it is resolved.



// function getUser() {
//     return setTimeout(() => {
//         users = [
//             {username: "siddharth", age: 25},
//             {username: "vinil", age: 30},
//         ]
//     }, 1000);
// }

// function findUser(username){
//     const users = getUser();
//     const user = users.find((user) => user.username === username);
//     return user;

// }


// console.log(findUser("siddharth"));

// TypeError: users.find is not a function
// happens because getUser() does not return an array, it returns the result of setTimeout(...), which is just a timer ID, not your users data.

// resolve this using promises

let success = true;

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (success) {
                resolve([
                    {username : 'sid', age:25},
                    {username : 'vinil', age:30}
                ]);
            }
            else {
                reject ("failed to the users list");
            }
        }, 4000);
    })
}
let promise = getUser();
promise.then((users) => {
    for (let user of users)
    {  
        console.log(user);
    }})
promise.catch((error) => console.log(error));
promise.finally(() => console.log("Promise execution completed"));