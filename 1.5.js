const readlineSync = require("readline-sync");
let userFirstNumber = readlineSync.question("Give me a decimal number");
let userSecondNumber = readlineSync.question("Give me a second decimal number?");
Math.trunc(userFirstNumber);
console.log(userFirstNumber * userSecondNumber);