
function queueTime(customers, n) {
    let totalTime = 0;
    for (let customer of customers) {
        totalTime += customer;
    }
    if (n === 1) {
        return console.log(totalTime); 
    } else {
        if (Math.max(...customers) > customers[customers.length-1]) {
            console.log(Math.max(...customers));
        } else {
            console.log(Math.max(...customers) + Math.min(...customers));
        }
    }
}

queueTime([5,3,4], 1);
queueTime([10,2,3,3], 2);
queueTime([2,3,10], 2);


/*
function(currentTills,)
let currentTills = [];
*/