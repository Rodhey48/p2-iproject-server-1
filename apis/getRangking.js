const axios = require('axios')


const getRangking = async function (req, res, next) {
    try {
        let result = await axios.get("http://api.sportradar.us/badminton/trial/v2/en/rankings.json?api_key=qtg3rkyh5sh8meybzneddem5")
        return result.data
    } catch (err) {
        next(err)
    }
};


const getRangkingMs = async function (req, res, next) {
    try {
        const result = await axios.get("https://www.bwfshuttleapi.com/rankings/api/MS")
        return result.data
    } catch (err) {
        next(err)
    }
};


const getRangkingWs = async function (req, res, next) {
    try {
        const result = await axios.get("https://www.bwfshuttleapi.com/rankings/api/WS")
        return result.data
    } catch (err) {
        next(err)
    }
};

const getRangkingMd = async function (req, res, next) {
    try {
        const result = await axios.get("https://www.bwfshuttleapi.com/rankings/api/MD")
        return result.data
    } catch (err) {
        next(err)
    }
};

const getRangkingWd = async function (req, res, next) {
    try {
        const result = await axios.get("https://www.bwfshuttleapi.com/rankings/api/WD")
        return result.data
    } catch (err) {
        next(err)
    }
};

const getRangkingXd = async function (req, res, next) {
    try {
        const result = await axios.get("https://www.bwfshuttleapi.com/rankings/api/XD")
        return result.data
    } catch (err) {
        next(err)
    }
};


// (async () => {
//     let result = await getRangking()
//     console.log(result)
// })()

module.exports = {
    getRangking,
    getRangkingMs,
    getRangkingWs,
    getRangkingMd,
    getRangkingWd,
    getRangkingXd
}