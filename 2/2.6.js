const readlineSync = require("readline-sync");
let userNumber = readlineSync.question("Give me a number between 1 and 7");
switch (userNumber) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default : 
      console.log("Sorry !");
  }
