// a Map object holds key-value pairs. Keys are unique in a Map’s collection. In other words, a key in a Map object only appears once.


// To create a new Map, you use the following syntax:

// let map = new Map([iterable]);



let emp1 = {name : "sid"},
    emp2 = {name : "vinil"},
    emp3 = {name : "varun"};


let userRoles = new Map();
console.log(typeof(userRoles));

console.log(userRoles instanceof Map);

userRoles.set(emp1, 'admin');

userRoles.set(emp2, 'editor')
        .set(emp3 , 'subscriber');


let leads = new Map([
    [emp1 , 'admin'],
    [emp2 , 'editor'],
    [emp3, 'subscriber']
]);

console.log(leads)

let roleOfemp1 = leads.get(emp1);
console.log(roleOfemp1)


console.log(leads.has(emp2));


console.log(leads.size);


for (let user of leads.keys()){
    console.log(user.name)
}


var keys = [...userRoles.keys()];
console.log(keys)


var values = [...userRoles.values()];
console.log(values)


userRoles.delete(emp2);
console.log(userRoles);


userRoles.clear();
console.log(userRoles);