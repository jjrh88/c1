const mongoose = require('mongoose'),
bcrypt = require('bcrypt-nodejs')

var UserSchema = new mongoose.Schema
({
    user: String,
    password: String
})

UserSchema.pre('save' , function( next )
{
   let user = this
   if( !user.isModified('password')) 
     return next()
    
   bcrypt.genSalt(10, (err , salt) => 
   {
       if(err) return next(err)

       bcrypt.hash(user.password, salt, null, (err, hash) => 
       {
           if(err) return next(err)

           user.password = hash
           next()
       })
   })
})

module.exports =  mongoose.model('user', UserSchema )