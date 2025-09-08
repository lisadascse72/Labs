// Write a program to check if a given number is divisible by both 5 and 11 using logical operators.

const readline = require("readline-sync");

let n = readline.questionInt("Enter a number: ");

if (n % 5 === 0 && n % 11 === 0)
    console.log(n + " is divisible by both 5 and 11");
else
    console.log(n + " is not divisible by both 5 and 11");
