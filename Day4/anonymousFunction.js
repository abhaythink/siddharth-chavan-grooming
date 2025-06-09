let show = function(){
    console.log("This is anonymous function")
}
show();

setTimeout(function(){
    console.log("timestamp of 2 seconds")
},2000);

(function(){
    console.log("parenthesis anonymous function")
    console.log("for calling this functions need to specify the trailling empty parenthesis")
})();


// Arrow Functions are shorthand for anonymous function
let show1 = () => console.log("this is arrow function");
show1()

let add = function(a,b){
    console.log("The Addition is : ",(a+b))
}
add(10,20)
let add2 =
(a,b)=> console.log("Addition is: ",(a+b));
add2(20,40)