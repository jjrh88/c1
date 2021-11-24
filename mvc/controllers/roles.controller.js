const ctrlRoles = {},
Role = require('../models/roles'),
message = require('../config/message')

ctrlRoles.create = async (req, res) => {
    const newRole = new Role({
    role_id: req.body.role_id,
    role_name: req.body.role_name,
    role_activate_status: req.body.role_activate_status,
    role_modules: {
            modules: req.body.role_modules.modules,
        },
  });
  await newRole.save();
  res.json({ msg: message.success, status: true });
};

ctrlRoles.enable = async (req, res) => {
    const {_id, status} = req.body
    await Role.findOneAndUpdate ({_id:_id}, {role_activate_status:status})
    res.json({status: true})
}

ctrlRoles.delete = async (req, res) => {
    console.log(req.params._id);
    const {_id} = req.params;
    const roles = await Role.deleteOne({_id:_id});
    res.json({status: true})
}

module.exports = ctrlRoles