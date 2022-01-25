const axios = require('axios')


const getRangking = async function (req, res, next) {
    try {
        let result = await axios.get("http://api.sportradar.us/badminton/trial/v2/en/rankings.json?api_key=qtg3rkyh5sh8meybzneddem5")
        return result.data
    } catch (err) {
        next(err)
    }
};


// (async () => {
//     let result = await getRangking()
//     console.log(result)
// })()

module.exports = getRangking