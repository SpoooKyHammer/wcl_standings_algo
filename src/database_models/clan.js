/**
 *  A class to represent a clan's records aka result data.
 */
class Clan{

    /**
     * 
     * @param {Object} clanRecordsObject Object of clan record/result data
     */
    constructor(clanRecordObject){
        this.clanRecordObject = clanRecordObject;
        this.abb = this.clanRecordObject.abb;
        this.clanTag = this.clanRecordObject.clanTag;
        this.conference = this.clanRecordObject.conference;
        this.wins = 0;
        this.loses = 0;
        this.ties = 0;
        this.perDest = 0;
        this.matchesPlayed = 0;
        this.starsFor = 0;
        this.starsAgainst = 0;
        this.setStats(this.clanRecordObject.opponent);
    }

    /**
     * Sets wins,loses,ties,matches, perDest, starsFor and Stars Against of the clan.
     * @private
     * @param {Object} opponentObject Opponent Object
     */
    setStats(opponentObject){
        for(let opponent of Object.values(opponentObject)){
            (opponent.status === "W")? this.wins++ : null;
            (opponent.status === "L")? this.loses++ : null;
            (opponent.status === "T")? this.ties++ : null;

            //if opponent.starFor is null means it is a forfeited war, thus it won't get added to matchesPlayed 
            //since it won't be counted towards Average Star Differential
            if(opponent.starFor !== null){
                this.matchesPlayed++;
                this.starsFor += opponent.starFor;
                this.starsAgainst += opponent.starAgainst;
                this.perDest += opponent.perDest
            }
            // console.log(opponent);
        }
    }
}

module.exports.Clan = Clan;

// const r = require("../resources").RECORDS

// const obj = new Clan(r[0])
// console.log(obj.wins)
// console.log(r[0])