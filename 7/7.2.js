function fibonacci(n) {
    if (n >= 2) {
        return (fibonacci(n-1) + fibonacci(n-2));
    } else if (n === 1) {
        return 1;
    } else {
        return 0;
    }
}

function askFibonacci() {
    const readlineSync = require("readline-sync");
    let userNumber = readlineSync.question('Give a number please');
    for (i=0; i <= userNumber; i++) {
        console.log(fibonacci(i));
    }
    return arrayFibonacci();   
}