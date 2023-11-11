const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secret

const genToken = (data) => {
    return jwt.sign(data, secret, { expiresIn: 33200 })
}

const verifyToken = (token) => {
    return jwt.verify(token, secret, (error, result) => {
        if (error) return error;
        return result;
    })
}

module.exports = {
    genToken,
    verifyToken
}