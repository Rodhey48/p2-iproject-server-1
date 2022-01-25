const express = require('express')
const router = express.Router()


const ControllerUser = require("../controller/user")



router.post('/register', ControllerUser.registerUser)
router.post('/login', ControllerUser.loginUser)






module.exports = router