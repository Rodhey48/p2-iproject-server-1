const errorHandler = (err, req, res, next) => {
    let status = 500
    let message = 'Internal Server Error'

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        status = 400
        message = err.errors[0].message
    } else if (err.name === "Invalid Username/Password") {
        status = 401
        message = 'Invalid Username/Password'
    } else if (err.name === "JsonWebTokenError") {
        status = 400
        message = "Invalid Token"
    } else if (err.name === "Email is required") {
        status = 400
        message = "Email is required"
    } else if (err.name === "Password is required") {
        status = 400
        message = "Password is required"
    } else if (err.name === 'Unauthorize') {
        status = 403
        message = 'Unauthorize - Forbiden to Access'
    } else if (err.name === 'Forbiden to Access') {
        status = 401
        message = 'Forbiden to Access'
    }






    res.status(status).json({
        message
    })
}

module.exports = errorHandler