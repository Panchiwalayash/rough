require('dotenv').config();
const jwt = require('jsonwebtoken')

const fetchUser = (req, res, next) => {
    const token = req.header('token')
    if (!token) {
        res.status(404).send({ error: "please authenticate a valid token" })
    }
    const data = jwt.verify(token, process.env.JWTTOKEN)
    req.user = data.user
    next()
}

module.exports = fetchUser