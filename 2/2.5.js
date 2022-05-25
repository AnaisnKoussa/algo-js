const readlineSync = require("readline-sync");
let userFavoriteNumber;
while (userFavoriteNumber !== 42) {
    let userFavoriteNumber = readlineSync.question("What are your favorite number ?");
    if (userFavoriteNumber === 42) {
        console.log("Bravo !");
    } else {
        console.log("Are you sure ?");
    } 
}