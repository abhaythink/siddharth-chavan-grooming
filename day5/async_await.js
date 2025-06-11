// The async keyword allows you to define a function that handles asynchronous operations.

// use the await keyword to wait for a Promise to settle either in a resolved or rejected state. You can use the await keyword only inside an async function

// function createRandom(){
//     return new Promise((resolve, reject) =>{
//         const randomNumber = Math.random();
//         setTimeout(()=>{
//             if (randomNumber < 0.5){
//                 resolve(randomNumber)
//             }
//             else{
//                 reject(new Error("value greater than 0.5"));
//             };
//         },2000)
//     });
// }

// async function getNumber(){
//     try{
//         const result = await createRandom();
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
//     finally{
//         console.log("End")
//     }
// }

// getNumber();

// let Names = ["sid", "varun", "vinil","navin","sid"];
// let seen = [];

// function findName() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			for (let i of Names) {
// 				if (seen.includes(i)) {
// 					reject(i);
// 					return;
// 				} else {
// 					seen.push(i);
// 				}
// 			}
// 			resolve("No duplicate names Found");
// 		}, 2000);
// 	});
// }

// async function displayName() {
//     try {
//         let result = await findName();
//         console.log(result);
//     } catch (error) {
//         console.error("Duplicate found:",  error);
//     } finally {
//         console.log("End of code");
//     }
// }

// displayName();

function delayPrint(value, time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(value);
			resolve();
		}, time);
	});
}

async function printNames() {
	try {
		let names = ["A", "B", "C"];
		for (let i of names) {
			await delayPrint(i, 1000);
		}
	} catch (error) {
		console.log(error);
	} finally {
		console.log("All Names Printed");
	}
}


printNames()