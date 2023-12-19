const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require('dotenv').config()
const token = process.env.JWTTOKEN

exports.registerUser = async (req, res) => {
    try {
        const findUser = await User.find({ email: req.body.email })
        if (!findUser) {
            return res.status(400).send("Email Id taken")
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        const data = {
            user: {
                id: newUser.id
            }
        }

        const authToken = jwt.sign(data, token)

        res.status(200).json({ newUser, authToken })
    } catch (error) {
        res.status(500).send("Internal error occured")
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const anyUser = await User.findOne({ email });
        if (!anyUser) return res.status(400).send("User doesn't exist")


        const cmpPass = await bcrypt.compare(password, anyUser.password)
        if (!cmpPass) return res.status(400).send("wrong credential")

        const data = {
            user: {
                id: anyUser.id
            }
        }

        const authToken = jwt.sign(data, token);

        res.status(200).json({ authToken })
    } catch (error) {
        res.status(500).send("Internal error occured")
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).send("Internal error occured")
    }
}