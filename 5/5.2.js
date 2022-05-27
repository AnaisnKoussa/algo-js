function askTvSerie() {
    const readlineSync = require("readline-sync");
    let nameOfFavoriteTvSerie = readlineSync.question('Can you give me the name of your favorite Tv Serie ?');
    let productionYearOfFavoriteTvSerie = readlineSync.question(`Can you give me the production's year of your favorite Tv Serie ?`);
    
    /*let namesOfTheCastMembersOfFavoriteTvSerie = [];
    let n = readlineSync.question('How many cast members of your favorite Tv Serie have you ?');
    for (i = 0; i < n; i++) {
        let castMembers = readlineSync.question(`Can you give me the name of the cast members of your favorite Tv Serie ?`);
        namesOfTheCastMembersOfFavoriteTvSerie.push(castMembers);
    }
    */

    let namesArray = [];
    let keepGoing = true;

    while(keepGoing) {
        let wantAdd;
        if (namesArray.length == 0) {
            wantAdd = readlineSync.question("Do you want to add one favorite member (Yes or No) ? ");
        } else {
            wantAdd = readlineSync.question("Do you want to add another favorite member (Yes or No) ? ");
        }
        
        if (wantAdd == "Yes") {
            let castMember = readlineSync.question("What is the cast favorite member ?")
            if (castMember.length > 0) {
                namesArray.push(castMember);
            } else {
                console.log("WRONG EXIT NOW !!");
                keepGoing = false;
            }
        } else {
            keepGoing = false;
        }
    }

    return {
        "tvSeries": [ 
            {
                "name" : nameOfFavoriteTvSerie,
                "productionYear" : productionYearOfFavoriteTvSerie,
                "namesOfTheCastMembers" : namesArray,
            }
        ],
    };
}

let data = askTvSerie();
console.log(JSON.stringify(data));

function randomizeCast(data) {
    // Récupérer le tableau du casting
    let array = data.tvSeries[0].namesOfTheCastMembers;
    // Inverse l'ordre du tableau
    let reverse = array.sort(() => Math.random() - 0.5);
    // Retourne le tableau
    return reverse;
}
console.log(randomizeCast(data));