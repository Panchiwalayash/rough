const mongoose = require('mongoose');
require('dotenv').config()

const mongoUrl = process.env.MONGOURL

const connectToMongo = () => {

    mongoose.connect(mongoUrl).then(() => {
        console.log("Connected to Mongo");
    }).catch(() => {
        console.log("Some Error Occured");
    })
}

module.exports = connectToMongo