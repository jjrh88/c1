const ctrlUser = {},
User = require('../models/user'),
message = require('../config/message')

ctrlUser.create = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    phone: req.body.phone,
    password: req.body.password,
    document: req.body.document,
    addres: {
      street: req.body.addres.street,
      kra: req.body.addres.kra,
      number_house: req.body.addres.number_house,
    },
  });
  await newUser.save();
  res.json({ msg: message.success, status: true });
};

ctrlUser.list = async (req, res) => {
  const users = await User.find();
  //console.log("users", users);

  res.json(users);
};

ctrlUser.enable = async (req, res) => {
  const {_id, status} = req.body
  await User.findOneAndUpdate({_id:_id}, {status:status})
  res.json({status: true})
}

ctrlUser.delete = async (req,res) => {
  console.log(req.params._id);
  const {_id} = req.params ;
  const users = await User.deleteOne({_id:_id});
  res.json({status : true});
}




module.exports =  ctrlUser