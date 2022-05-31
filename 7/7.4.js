const readlineSync = require("readline-sync");
function favoritePizzaFlavors() {
    let keepGoing = true;
    let arrayPizzaFlavors = [];
    while(keepGoing){
        let userNumber = readlineSync.question(`
        Hello! Welcome to the Pizza Flavors Manager.
    
        Please choose your actions:
        
        1 - List all the pizza flavors
        2 - Add a new pizza flavor
        3 - Remove a pizza flavor
        4 - Exit this program
        
        Enter your action's number :`)
        switch(userNumber) {
            case "1" :
                console.log("This is the list of the pizza flavors : " + arrayPizzaFlavors);
            break; 
            case "2" :
                let addFlavor = readlineSync.question("Please add a new Pizza flavor :");
                arrayPizzaFlavors.push(addFlavor);
            break;
            case "3" : 
                let numberRemoveFlavor = readlineSync.question("What's the number of the pizza flavor in the list you want to remove :");
                delete arrayPizzaFlavors[(numberRemoveFlavor) - 1];
            break;
            case "4" :
            keepGoing = false;
            break;
            default : 
            console.log("Error !");  
        }
    }
}
console.log(favoritePizzaFlavors());