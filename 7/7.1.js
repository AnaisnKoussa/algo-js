function integer() {
    const readlineSync = require("readline-sync");
    let number = Math.floor((Math.random()*100)-1);
    let keepGoing = true;
    while(keepGoing) {
        let userNumber = readlineSync.question('Guess the number');
        if (userNumber !== number) {
            if (userNumber < number) {
                console.log("Too low");
            } else if (userNumber > number) {
                console.log("Too high");
            } else {
                console.log("Well done !");
                keepGoing = false;
            }
        } else {
            keepGoing = false;
            console.log("Well done !");
        }
    }
}


