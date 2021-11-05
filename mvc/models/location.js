const mongoose = require('mongoose'),

var locationSchema = new mongoose.Schema
({
    latitud: String,
    longitud: Number, 
    mtr: Number,
    ip: Number,
    continente: String,
    status : { type: Boolean,  default: false },
    created:{ type:Date, default: Date.now()},
    update: { type:Date, default: Date.now() },
    satelite: "google/aws/azure",
    }
)