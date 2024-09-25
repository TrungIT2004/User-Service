const User = require('../database/repository/user-repository')
const { hashPassword, validatePassword, createAccessToken } = require('../utils/index')

module.exports = class UserService {
    constructor() {
        this.user = new User()
    }

    async signUp(username, email, password) {
        const result = await this.user.checkUser(email)

        if (result) return false

        const hashedPassword = await hashPassword(password)
        const res = await this.user.createUser(username, email, hashedPassword)

        console.log(hashedPassword, res)

        return res 
    }

    async login(email, inputPassword) {
        const result = await this.user.checkUser(email)

        if (!result) return "User not found"
    
        const validate = await validatePassword(inputPassword, result?.password_hash.trimEnd())
        console.log(validate)

        if (!validate) return "Password not correct"

        if (validate) {
            const accessToken = createAccessToken(email, inputPassword)
            return accessToken
        }
    }
}