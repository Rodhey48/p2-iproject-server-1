const {
    User
} = require("../models/index");
const {
    comparePassword
} = require("../helper/bcrypt");
const {
    createToken
} = require('../helper/jwt')

const transporter = require("../helper/nodemailer")

const {
    OAuth2Client
} = require('google-auth-library');

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

            let notif = {
                from: 'rodheytestmail@gmail.com', // sender address
                to: user.email, // list of receivers
                subject: "Register Success!!", // Subject line
                text: `Hello ${user.username} Thank you for your registration!
                    Welcome in my web Badminton Lover
                    name: ${user.name},
                    email: ${user.email},
                    phoneNumber: ${user.phoneNumber}
                    You have bought these stuff :
                    `
            }

            transporter.sendMail(notif, (err, data) => {
                if (err) {
                    console.log(err)
                    next(err)
                } else {
                    console.log(`Email has been sent`);
                }
            });
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
            }
            token = createToken(token)
            if (!token) {
                throw {
                    name: 'JsonWebTokenError'
                }
            }
            res.status(200).json({
                id: user.id,
                username: user.username,
                access_token: token
            });
        } catch (err) {
            next(err)
        }
    }

    static async googleLogin(req, res, next) {

        try {
            const {
                idToken
            } = req.body
            const client = new OAuth2Client(process.env.GOOGLECLIENTID);
            const ticket = await client.verifyIdToken({
                idToken,
                audience: process.env.GOOGLECLIENTID,
            });
            if (!ticket) throw {
                name: 'Invalid Username/Password'
            }
            const payload = ticket.getPayload();


            let input = {
                username: payload.name,
                password: "darigoogle",
                email: payload.email,
                phoneNumber: "dari google",
            }

            const [user, created] = await User.findOrCreate({
                where: {
                    email: input.email
                },
                defaults: input
            });

            let token = {
                id: user.id,
                username: user.username,
            }
            token = createToken(token)
            if (!token) {
                throw {
                    name: 'JsonWebTokenError'
                }
            }
            res.status(200).json({
                id: user.id,
                username: user.username,
                access_token: token
            });

        } catch (err) {
            console.log(err)
            next(err)
        }
    }

}


module.exports = ControllerUser