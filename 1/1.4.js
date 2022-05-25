const readlineSync = require("readline-sync");
let userFirstName = readlineSync.question("What's your first name?");
let userName = readlineSync.question("What's your name?");
let userCity = readlineSync.question("What's your city?");
console.log(`Your name is${userFirstName} ${userName} and you live in ${userCity}`);