const readlineSync = require("readline-sync");
let userFavoriteNumber = readlineSync.question("What are your favorite number ?");
while (userFavoriteNumber === 42) {
    if (userFavoriteNumber === 42) {
        console.log("Bravo !");
    } else {
        console.log("Are you sure ?");
    } 
    let userFavoriteNumber = readlineSync.question("What are your favorite number ?");
}