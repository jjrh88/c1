const user = require('../models/user')

exports.createUser = function(){
   var newUser = new user({
        user: "jhon",
        password: "jhon"
   })
   newUser.save()
}

