const mongoose = require('mongoose')
// db.products.find().pretty()

var UserSchema = new mongoose.Schema
({
    name: { type: String,  lowercase: true },
    phone: { type: String, dropDups: true },
    document: {  type: Number, required: true, index: true },
    status: { type: Boolean,  default: false },
    created_at : { type : Date , default : Date.now() },
    addres:{ //subdocuments
       calle: { type: String, uppercase: true },
       kra: String,
       number_house: String
    }
})

module.exports =  mongoose.model('mvc_user', UserSchema )