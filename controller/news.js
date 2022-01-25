const {
    News
} = require('../models/index')


const getRangking = require("../apis/getRangking")


class ControllerNews {
    static async getNews(req, res, next) {
        try {
            const news = await News.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            res.status(200).json(news)
        } catch (err) {
            next(err)
        }
    }

    static async getRangkingPlayer(req, res, next) {
        try {
            const result = await getRangking()
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerNews