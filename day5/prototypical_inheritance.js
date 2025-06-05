let person = {
    firstName : "sid",
    lastName : "chavan",
    greet : function(){
        return "Hello i am " + this.firstName;
    }
}

let teacher = {
    teach : function(Subject){
        return "I can teach "+Subject;
    }
}


teacher.__proto__ = person; // prototypical inheritance

console.log(teacher.firstName)
console.log(teacher.greet())






