const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rodheytestmail@gmail.com',
        pass: 'Badboy1908',
    },
});





module.exports = transporter