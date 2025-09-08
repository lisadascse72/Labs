// Write a JavaScript program to input two numbers and display their sum, difference, product, and quotient using arithmetic operators.

// let a = parseInt(("enter first number"))
// let b = parseInt(prompt("enter second number"))

// console.log("sum:"+ (a+b));
// console.log("diff:"+ (a-b));
// console.log("product:"+ (a*b));
// console.log("quotient:"+ (a%b));

const readline = require("readline-sync")
let a = parseInt(readline.question("Enter the first number : "));
let b= parseInt(readline.question("Enter the second number : "));

console.log("Sum : ",a+b);
console.log("Difference : ",a-b);
console.log("Product : ",a*b);
console.log("Quotient : ",a/b);
