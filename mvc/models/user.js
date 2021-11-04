const mongoose = require('mongoose'),
bcrypt = require('bcrypt-nodejs')

var UserSchema = new mongoose.Schema
({
    name: { type: String,  lowercase: true },
    phone: { type: String, dropDups: true }, 
    password: String,
    document: {  type: Number, required: true, index: true },
    status: { type: Boolean,  default: false },
    created_at : { type : Date , default : Date.now() },
    addres:{ 
       street: { type: String, uppercase: true },
       kra: String,
       number_house: String
    }
})

// UserSchema.pre('save' , function( next )
// {
//    let user = this
//    if( !user.isModified('password')) 
//      return next()
    
//    bcrypt.genSalt(10, (err , salt) => 
//    {
//        if(err) return next(err)

//        bcrypt.hash(user.password, salt, null, (err, hash) => 
//        {
//            if(err) return next(err)

//            user.password = hash
//            next()
//        })
//    })
// })

module.exports =  mongoose.model('mvc_user', UserSchema )