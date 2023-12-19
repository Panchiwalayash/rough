const mongoose = require('mongoose')

const DetailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Detail = mongoose.model('Detail', DetailSchema)
module.exports = Detail