// Write a program that reads a number and uses the ternary operator to print whether it is positive, negative, or zero.

const readline = require("readline-sync");

let n = parseInt(readline.question("Enter a number : "));

let result = (n > 0) ? "Positive" : (n < 0) ? "Negative" : "Zero";

console.log(n + " is " + result + ".");