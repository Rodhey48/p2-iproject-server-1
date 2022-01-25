const jwt = require("jsonwebtoken")
const key = "INIMASIHDEVELOP"


const createToken = (payload) => {
    return jwt.sign(payload, key)
}

const verifyJwt = (token) => {
    return jwt.verify(token, key)
}

module.exports = {
    createToken,
    verifyJwt
}