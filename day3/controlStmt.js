// if statement

if (true){
    console.log("This will always execute");
}
if (false){
    console.log("This will never execute");
}


let age = 20;
if (age >= 18){
    console.log("You are an adult");
}

// Nested if statement

id = false;

if (age >= 18){
    if (id){
        console.log("you are eligible to vote");
    }
}

// if…else statement
age = 16;
country = "USA";

if (age >=18){
    console.log("You are an adult");
}
else {
    console.log("You are not an adult");
}


if (age == 16 && country == "USA"){
    console.log("you are elligible to vote in the usa")
}
else{
    console.log("you are not elligible to vote in the usa");
}


// if else if statement
let marks = 85;
let grade;

if (marks >= 90){
    grade = "O";
}
else if (marks >= 80){
    grade = "A";
}
else if (marks >= 70){
    grade = "B";
}
else if (marks >= 60){
    grade = "C";
}
else if (marks < 60 && marks >= 35){
    grade = "D";
}
else {
    grade = "F";
}
console.log("Your grade is: " + grade);




let weight = 70;
let height = 1.75;

let bmi = weight / (height * height);

if (bmi < 18.5){
    console.log("You are unerweight");
}
else if (bmi >= 18.5 && bmi < 24.9){
    console.log("You are normal weight");
}
else if (bmi >= 25 && bmi < 29.9){
    
}