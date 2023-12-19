const Detail = require("../models/detail")
const User = require("../models/user")

exports.createDetail = async (req, res) => {
    try {
        const { fullName, age } = req.body

        const user = await User.findById(req.user.id)
        if (!user) {
            return res.status(404).send({ error: "valid proper token" })
        }

        const newDetail = await Detail.create({
            userId: req.user.id,
            fullName,
            age
        })

        res.status(200).json(newDetail)

    } catch (error) {
        res.status(500).send("Internal error occured")
    }
}

exports.getDetail = async (req, res) => {
    try {
        const detail = await Detail.findOne({ userId: req.user.id })
        if (!detail) return res.status(200).send("User doesn't exist")
        res.status(200).json(detail)
    } catch (error) {
        res.status(500).send("Internal error occured")
    }
}