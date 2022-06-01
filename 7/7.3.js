const readlineSync = require("readline-sync");
function divisor() {
    let userNumber = readlineSync.question('Give a positive integer please');
        for (i = 1; i < userNumber; i ++){
            let division = userNumber/i;
            if ((division != 1) && (division == Math.trunc(division) && (division != userNumber))) {
                console.log(i);
            } 
        }  
    }
console.log(divisor());


// 10/2 -> 5
// 10/5 -> 2