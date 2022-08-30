const RECORDS = [
    {
        abb: "ABC",
        clanTag: "#ABC",
        opponent: {
                    WK1: {
                            abb: "XYZ",
                            clanTag: "#XYZ",
                            status: "W",
                            starFor: 14,
                            starAgainst: 11,
                            perDest: 90.11
                    },
                    WK2: {
                            status: "L",
                            starFor: 13,
                            starAgainst: 14,
                            perDest: 80.20
                    },
                    WK3: {
                            status: "T",
                            starFor: 14,
                            starAgainst: 14,
                            perDest: 90.50
                    },
                    WK4: {
                        status: "W",
                        starFor: null,
                        starAgainst: null,
                        perDest: null
                    
                },
                    
        },
        conference: "ARCHER"
  },
  {
        abb: "XYZ",
        clanTag: "#XYZ",
        opponent: {
                    WK1: {
                            abb: "ABC",
                            clanTag: "#ABC",
                            status: "W",
                            starFor: 14,
                            starAgainst: 12,
                            perDest: 90.60
                    },
                    WK2: {
                            status: "T",
                            starFor: 12,
                            starAgainst: 12,
                            perDest: 85
                    },
                    WK3: {
                            status: "L",
                            starFor: 14,
                            starAgainst: 15,
                            perDest: 99.90
                    },
        },
        conference: "ARCHER"
  }
];

module.exports.RECORDS = RECORDS;