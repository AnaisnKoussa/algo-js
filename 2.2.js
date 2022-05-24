const readlineSync = require("readline-sync");
let minAge = readlineSync.question("Give me a min Age ?");
let maxAge = readlineSync.question("Give me a max Age");
let currentAge = readlineSync.question("Give me your current Age ?");
if ((currentAge > minAge) && (currentAge < maxAge)) {
    console.log(currentAge);
} else if (minAge > maxAge) {
    console.log("This is an error !");
} else {
    console.log("alright !");
}