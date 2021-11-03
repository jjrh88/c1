const ctrlUser = {},
User = require('../models/user'),
message = require('../config/message')

ctrlUser.create = async(req, res) =>{
  const newUser =  new User({
    name: req.body.name,
    phone: req.body.phone,
    password: req.body.password,
    document: req.body.document,
    addres:{ 
       street: req.body.addres.street,
       kra: req.body.addres.kra,
       number_house: req.body.addres.number_house
    }
  })
  await newUser.save()
  res.json({msg: message.success, status: true })
}

module.exports =  ctrlUser