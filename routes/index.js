const express = require('express')
const router = express.Router()


const ControllerUser = require("../controller/user")
const ControllerNews = require("../controller/news")

const authentication = require('../midleware/authentication')



router.post('/register', ControllerUser.registerUser)
router.post('/login', ControllerUser.loginUser)
router.post("/googlelogin", ControllerUser.googleLogin)

router.use(authentication)


router.get("/news", ControllerNews.getNews)
router.get('/rangkings', ControllerNews.getRangkingPlayer)
router.get('/rangkings/ms', ControllerNews.getRangkingsMs)
router.get('/rangkings/ws', ControllerNews.getRangkingsWs)
router.get('/rangkings/md', ControllerNews.getRangkingsMd)
router.get('/rangkings/wd', ControllerNews.getRangkingsWd)
router.get('/rangkings/xd', ControllerNews.getRangkingsXd)




module.exports = router