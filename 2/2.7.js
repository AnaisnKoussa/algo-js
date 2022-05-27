const readlineSync = require("readline-sync");
let n = readlineSync.question("Give me a number");
let sum = 0;
for (let i = 0; i < n; i++) {
    let number = readlineSync.question("Give me a number");
    sum += number;
}
console.log(sum);