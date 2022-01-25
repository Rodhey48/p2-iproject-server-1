const express = require('express')
const router = express.Router()


const ControllerUser = require("../controller/user")
const ControllerNews = require("../controller/news")

const authentication = require('../midleware/authentication')



router.post('/register', ControllerUser.registerUser)
router.post('/login', ControllerUser.loginUser)

router.use(authentication)


router.get("/news", ControllerNews.getNews)
router.get('/rangkings', ControllerNews.getRangkingPlayer)




module.exports = router