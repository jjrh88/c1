const user = require('../models/user')

exports.createUser = function(){
   var newUser = new user({
    name: "JHONSITO",
    phone: "555555",
    password: "123",
    document: 1111760853,
    //status: true,
    addres:{ 
       street: "calle 26",
       kra: "10 # 345",
       number_house: "370"
    }
   })

   //newUser.save()

   var newUser = new user({
    name: "JORGE ALBERTO",
    phone: "9999",
    password: "456",
    document: 1111760854,
    status: true,
    addres:{ 
       street: "calle 30",
       kra: "20 # 367",
       number_house: "379"
    }
   })

   newUser.save()
}

