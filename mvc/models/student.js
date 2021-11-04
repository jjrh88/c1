const mongoose = require('mongoose')


var StudentSchema = new mongoose.Schema
({
    id: {type: String, require: true, index: true},
    school_id: {type: String, require: true},
    name: {type: String, require: true, lowercase: true},
    age: {type: Number, require: true},
    address: {type: String, require: true},
    tutor:[
        {
            priority: {type: Number, require: true},
            name: {type: String, require: true, lowercase: true},
            age: {type: Number, require: true},
            relationship: {type: String, require: true, lowercase: true},
            phone: {type: Number, require: true},
            address: String,
            status: {type: Boolean, default: true}
        }
    ],
    grade: {type: Number, require: true},
    classroom: {type: String, require: true},
    teacher: {type: String, require: true, lowercase: true},
    start_date: {type: Date, default: Date.now()},
    end_date: {type: Date, default: Date.now()},
    bus_service: {type: Boolean, default: false},
    lunch_service: {type: Boolean, default: false},
    status: {type: Boolean, default: true}, 
    created: { type : Date , default : Date.now()},
    update: {type: Date, default: Date.now()}
})

module.exports =  mongoose.model('mvc_student', StudentSchema )