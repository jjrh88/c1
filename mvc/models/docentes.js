const mongoose = require('mongoose')

var DocentesSchema = new mongoose.Schema
({
    name: { type: String,  lowercase: true, required: true },
    document: {  type: Number, required: true, index: true },
    specialist: [
        {
            name: { String,  lowercase: true },
            university: { type: String,  lowercase: true }
        }
    ],
    /*status: { type: Boolean,  default: false },
    created_at : { type : Date , default : Date.now() },
    updated_at : { type : Date , default : Date.now() },
    cnt_mastery: { type: String,  lowercase: true },
    cnt_specialization: { type: String,  lowercase: true },
    age: { type: Number, require: true },
    nacionality: String,
    experience_years: { type: Number, required: true },
    students_quantity: { type: Number, required: true }*/
})

module.exports =  mongoose.model('mvc_docentes', DocentesSchema )