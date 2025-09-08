// Write a JavaScript program to display the multiplication table of a number entered by the user using a for loop.

const readline = require("readline-sync");

let numTable = readline.questionInt("Enter a number for multiplication table: ");

for (let i = 1; i <= 10; i++) {
    console.log(numTable + " x " + i + " = " + (numTable * i));
}
