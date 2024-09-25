const UserService = require('../../services/user-service')


const userService = new UserService()

const signUp = async (req, res) => {
    const userService = new UserService()
    const { username, email, password } = req.body

    try {
        const newUser = await userService.signUp(username, email, password)

        if (!newUser) {
            res.status(404).json({"msg": "user already existed!"})
        } else {
            res.status(200).json(newUser.rows[0])
        }
    } catch(err) {
        res.status(500).json(err)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const result = await userService.login(email, password)

        if (result === "User not found") {
            res.status(404).json({"msg": result})
        } else if (result === "Password not correct") {
            res.status(401).json({"msg": result})
        } else {
            res.status(200).json({"accessToken": result})
        }
    } catch(err) {
        res.status(500).json(err)
    }
}


module.exports = {
    signUp,
    login
}