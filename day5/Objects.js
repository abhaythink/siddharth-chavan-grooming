// Inside a method, the this value references the object that invokes the method. Therefore, you can access a property using the this value as follows

// this.propertyName



let person = {
    firstName : "siddharth",
    lastName : "chavan",
    greet : function(){                 // object Methods
        console.log("Hello ! ")
    },
    getFullName : function(){
      return this.firstName + ' ' + this.lastName
    }
};

console.log(person)
person.greet()
console.log(person.getFullName())





// Constructor Function Object Creation

function Person(firstName , lastName){

    if (!new.target){
        return new Person(firstName,lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
};

let person1 = Person("sid","chavan");  // without using new keyword
let person2 = new Person("vinil","wani");

console.log(person1.getFullName()) // returning output cause of new.target 
console.log(person2.getFullName())

