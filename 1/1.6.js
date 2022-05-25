const readlineSync = require("readline-sync");
let userFirstNumber = readlineSync.question("Give me a integer");
let userSecondNumber = readlineSync.question("Give me a second integer");
console.log(userFirstNumber % userSecondNumber);