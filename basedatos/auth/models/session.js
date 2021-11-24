const mongoose = require('mongoose')

var sessioSchema = new mongoose.Schema
({
    ip:{ type: String, unique: true, required: true },
    device:{ type: String, required: true },
    userID:{ type: String, required: true },
    continente:{ type: String, required: true },
    country:{ type: String, required: true },
    datetime:{ type: Date, default: Date.now() },
    os: { type: String, required: true }
})

module.exports =  mongoose.model('session', sessioSchema )