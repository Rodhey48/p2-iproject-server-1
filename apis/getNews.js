const axios = require('axios')
const {
    News
} = require("../models/index")
const getNews = async function () {
    try {
        let result = await axios.get("http://api.mediastack.com/v1/news?access_key=399f7a1d22a7369134d8cd88d2a06274&keywords=badminton&categories=sports&countries=us")
        if (result) {
            await News.destroy({
                where: {},
                truncate: true,
                restartIdentity: true,
                cascade: true,
            })
            let news = result.data.data
            news.forEach(el => {
                if (!el.image) {
                    el.image = "https://ik.imagekit.io/Rodhey48/badminton_SE0R54cUV.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1643103939794"
                }
                el.publishAt = el.published_at
            })
            await News.bulkCreate(news)
        }
    } catch (error) {
        console.log(error)
    }
};

module.exports = getNews

// (async () => {
//     let result = await getNews()
//     console.log(result)
// })()