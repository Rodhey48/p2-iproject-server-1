const {
    User
} = require("../models/index");
const {
    comparePassword
} = require("../helper/bcrypt");
const {
    createToken
} = require('../helper/jwt')

class ControllerUser {
    static async registerUser(req, res, next) {
        try {
            let input = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
            }
            const user = await User.create(input);
            res.status(201).json({
                id: user.id,
                username: user.username,
                email: user.email,
            })
        } catch (err) {
            next(err)
        }
    }

    static async loginUser(req, res, next) {
        try {
            let input = {
                email: req.body.email,
                password: req.body.password
            }
            if (!input.email) {
                throw {
                    name: "Email is required"
                }
            }
            if (!input.password) {
                throw {
                    name: "Password is required"
                }
            }
            const user = await User.findOne({
                where: {
                    email: input.email
                }
            });
            if (!user) {
                throw {
                    name: 'Invalid Username/Password'
                }
            }
            if (!comparePassword(input.password, user.password)) {
                throw {
                    name: 'Invalid Username/Password'
                }
            }
            let token = {
                id: user.id,
                username: user.username,
                role: user.role
            }
            token = createToken(token)
            if (!token) {
                throw {
                    name: 'JsonWebTokenError'
                }
            }
            res.status(200).json({
                id: user.id,
                role: user.role,
                username: user.username,
                access_token: token
            });
        } catch (err) {
            next(err)
        }
    }

}


module.exports = ControllerUser