const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ACCESS_TOKEN_SECRET } = require('../configs/configs')


// Ultility Functions
module.exports.hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword 
}

module.exports.validatePassword = async (inputPassword, password) => {
    const result = await bcrypt.compare(inputPassword, password)
    return result
}

module.exports.createAccessToken = (email, password) => {
    const accessToken = jwt.sign({email, password}, ACCESS_TOKEN_SECRET, { expiresIn: '30s'})
    return accessToken
}

