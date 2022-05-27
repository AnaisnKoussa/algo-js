function calcSurface (length, width) {
    let surface = length * width; 
    console.log(surface);
}

const readlineSync = require("readline-sync");
let userLength = readlineSync.question('Can you give me the length of the rectangle?');
let userWidth = readlineSync.question('Can you give me the width of the rectangle?');
calcSurface(userLength, userWidth);
