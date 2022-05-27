const readlineSync = require("readline-sync");
let userNumber = readlineSync.question("Give me a number between 1 and 7");
switch (userNumber) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
       day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
    default : 
      console.log("Sorry !");
  }

  console.log(day);