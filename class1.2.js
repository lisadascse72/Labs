// Write a JavaScript program that takes two numbers as input and checks which one is greater using comparison operators.

const readline = require("readline-sync");
let a = parseInt(readline.question("Enter the first number : "));
let b= parseInt(readline.question("Enter the second number : "));
if (a > b) console.log(a + " is greater");
else if (b > a) console.log(b + " is greater");
else console.log("Both are equal");


