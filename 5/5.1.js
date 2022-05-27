function askTvSerie() {
    const readlineSync = require("readline-sync");
    let nameOfFavoriteTvSerie = readlineSync.question('Can you give me the name of your favorite Tv Serie ?');
    let productionYearOfFavoriteTvSerie = readlineSync.question(`Can you give me the production's year of your favorite Tv Serie ?`);
    let namesOfTheCastMembersOfFavoriteTvSerie = readlineSync.question(`Can you give me the names of the cast members of your favorite Tv Serie ?`);;

    return {
        "name" : nameOfFavoriteTvSerie,
        "productionYear" : productionYearOfFavoriteTvSerie,
        "namesOfTheCastMembers" : namesOfTheCastMembersOfFavoriteTvSerie, 
    }
}