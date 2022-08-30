const start = new Date()
const records = require("./resources").RECORDS;

for(let clan of records){
    console.log(`Printing opp for ${clan.abb}`);
    console.log("-------------------------------");
    
    var totalWins = 0;
    var totalLoses = 0;
    var totalTies = 0;
    var totalStarsFor = 0;
    var totalStarAgainst = 0;
    var totalPerDest = 0;
    var totalMatchesPlayed = 0;

    for(let opponent of Object.values(clan.opponent)){
        (opponent.status === "W")? totalWins++ : null;
        (opponent.status === "L")? totalLoses++ : null;
        (opponent.status === "T")? totalTies++ : null;

        if(opponent.starFor !== null){
            totalMatchesPlayed++;
            totalStarsFor += opponent.starFor;
            totalStarAgainst += opponent.starAgainst;
            totalPerDest += opponent.perDest
        }
        // console.log(opponent);
    };

    var message = `
    Wins => ${totalWins}
    Loses => ${totalLoses}
    Ties => ${totalTies}
    StarsFor => ${totalStarsFor}
    StarsAgainst => ${totalStarAgainst}
    PerDest => ${totalPerDest}
    MatchesPlayed => ${totalMatchesPlayed}
    `
    console.log(message)
    console.log("-------------------------------");
};

console.log(`Execution Time: ${(new Date()-start)/1000} Seconds`)