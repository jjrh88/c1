const ctrlRoles = {},
Role = require('../models/roles'),
message = require('../config/message')

ctrlRoles.create = async (req, res) => {
    const newRole = new Role({
    role_id: req.body.role_id,
    role_name: req.body.role_name,
    role_activate_status: req.body.role_activate_status,
    role_modules: [
        {
            modules: req.body.role_modules.modules,
        }
    ],
  });
  await newRole.save();
  res.json({ msg: message.success, status: true });
};

module.exports = ctrlRoles