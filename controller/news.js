const {
    News
} = require('../models/index')

const axios = require('axios')


const {
    getRangking,
    getRangkingMs,
    getRangkingWs,
    getRangkingMd,
    getRangkingWd,
    getRangkingXd
} = require("../apis/getRangking")


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

    static async getRangkingsMs(req, res, next) {
        try {
            const result = await getRangkingMs()
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async getRangkingsWs(req, res, next) {
        try {
            const result = await getRangkingWs()
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async getRangkingsMd(req, res, next) {
        try {
            const result = await getRangkingMd()
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async getRangkingsWd(req, res, next) {
        try {
            const result = await getRangkingWd()
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async getRangkingsXd(req, res, next) {
        try {
            const result = await getRangkingXd()
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

}

module.exports = ControllerNews