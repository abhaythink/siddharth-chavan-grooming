// this keyword reference the current object.
 

let user = {
    username : "siddharth",
    age : 25,
    welcome: function() {
        console.log(`Welcome ${this.username}`);
        console.log(`Your age is ${this}`);
    }
}

user.welcome()
user.username = "vinil"
user.welcome();
console.log(this)

// Arrow functions:

let addTwo = (a,b) => {                             
    return a+b;
};
console.log(addTwo(2,3));


let concat = (x,y) => (x + y)
console.log(concat("sid ", "chavan"));


name = "siddharth"


class person {
    constructor(name){
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log("Arrow :"+this.name);
        }, 100);
    }

    printNameFunction() {
        setTimeout(() => {
            console.log("Function :" + this.name);
        }, 100);
    }
}

let p = new person("siddharth");
p.printNameArrow();
p.printNameFunction();
console.log(this.name)