const axios = require("axios")

const BASE_URL = 'https://denverpremier.ezlinksgolf.com'

module.exports = {
    search: (date, numGolfers, numHoles) => axios.post(BASE_URL+`/api/search/search`, {
        date: date,
        numHoles: numHoles,
        numPlayers: numGolfers,
        startTime: "5:00 AM",
        endTime: "7:00 PM",
        courseIDs: [4923, 4924]
    })
}