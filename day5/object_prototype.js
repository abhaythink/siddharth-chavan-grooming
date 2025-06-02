let person = {'name' : "siddharth"};
console.log(person)

console.log(Object.prototype)


console.log(Object.prototype.constructor === Object);



function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    return "Hi I am " + this.name + "!"
}

let p1 = new Person("sid")
console.log(p1.greet())


let s = p1.toString();
console.log(s)

let p2 = new Person("vinil");
p2.draw = function(){
    return this.name + " can draw"
}

console.log(p2)
console.log(p2.draw())
// console.log(p1.draw()) // error cause draw method is assign only with p2 object

console.log(__proto__)
console.log(p1.__proto__ === Person.prototype)
// The  p1.__proto__ exposes the [[Prototype]] that references the Person.prototype object.

console.log(p1.constructor.prototype)