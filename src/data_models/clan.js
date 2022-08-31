/**
 *  A class to represent a clan's records.
 */
class Clan{

    /**
     * 
     * @param {Object} clanRecordsObject Object of clan record/result data
     */
    constructor(clanRecordObject){
        this.abb = clanRecordObject.abb;
        this.clanTag = clanRecordObject.clanTag;
        this.conference = clanRecordObject.conference;
        this.wins = 0;
        this.loses = 0;
        this.ties = 0;
        this.perDest = 0;
        this.matchesPlayed = 0;
        this.starsFor = 0;
        this.starsAgainst = 0;
        this.setStats(clanRecordObject.opponent);
    }

    /**
     * Sets values of all properties.
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
                this.perDest += opponent.perDest;
            }
            // console.log(opponent);
        }
        this.averageSD = (this.starsFor - this.starsAgainst)/this.matchesPlayed;
        this.averagePerDest = this.perDest/this.matchesPlayed;
    }
}

module.exports.Clan = Clan;