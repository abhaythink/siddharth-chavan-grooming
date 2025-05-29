let person = {
    firstName : "siddharth",
    lastName : "Chavan"
}

console.log(person.firstName);
console.log(person.lastName)

person.age = 25;

console.log(person)

delete person.age;

console.log(person) ? age in person : console.log("age not found")


let member = person;

member.lastName = "Jadhav"

console.log(member)
console.log(person)
