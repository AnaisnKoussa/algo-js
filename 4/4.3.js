function rand10(){
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    return randomNumber;
}

function multiRand(n) {
    let arrayRandomNumber = [];
    for (let i = 0; i < n;  i++) {
        arrayRandomNumber.push(rand10());
    }
    return arrayRandomNumber;
}