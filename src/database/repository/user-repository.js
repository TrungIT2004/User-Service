const Pool = require('../connnection')

module.exports = class User {
    async checkUser(email) {
        const result = await Pool.query(`SELECT * FROM users WHERE EMAIL='${email}'`)

        if (result.rows[0]) return result.rows[0]
        return false
    }

    async createUser(username, email, password) {
        const text = 'INSERT INTO users(username, email, password_hash) VALUES($1, $2, $3) RETURNING *'
        const values = [username, email, password]

        const res = await Pool.query(text, values)
        return res
    }
}