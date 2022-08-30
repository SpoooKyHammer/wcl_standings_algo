const records = require("./resources").RECORDS;
const Clan = require("./database_models/clan").Clan;


var standings = []
for(let clanRecord of records){
    var clan = new Clan(clanRecord);
    var message = `
    ${clan.abb} -- ${clan.clanTag}
    wins => ${clan.wins}
    loses => ${clan.loses}
    ties => ${clan.ties}
    matchesPlayed => ${clan.matchesPlayed}
    perDest => ${clan.perDest}
    starsFor => ${clan.starsFor}
    starsAgainst => ${clan.starsAgainst}
    Avg S.D => ${((clan.starsFor - clan.starsAgainst)/clan.matchesPlayed).toFixed(2)}
    `
    // console.log(message);
    standings.push(clan)
}

sortedByWins = standings.sort((a,b) => {
    return a.wins - b.wins;
})
console.log(standings)
console.log("_------------------")
console.log(sortedByWins)

// for(let i of standings){
    // i.averageSD = ((i.starsFor - i.starsAgainst)/i.matchesPlayed)
    // // console.log(i)
// }


// console.log(standings);