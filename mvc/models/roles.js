const mongoose = require('mongoose')

var RolesSchema = new mongoose.Schema
({
    role_id: { type: Number, required: true, index: true },
    role_name: { type: String, lowercase: true, required: true },
    role_active_status: { type: Boolean, default: false },
    role_modules:[ 
        {
            modules: {type: String}
        }
    ],
    role_created_at: { type: Date, default: Date.now() },
    role_updated_at: { type: Date, default: Date.now() }
})


module.exports = mongoose.model('mvc_roles', RolesSchema)