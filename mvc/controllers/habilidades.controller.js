const ctrlHabilidad = {},
  mongoose = require("mongoose"),
  Habilidad = require("../models/habilidades"),
  message = require("../config/message");

ctrlHabilidad.create = async (req, res) => {
  const newHabilidad = new Habilidad({
    hour: req.body.hour,
    name: req.body.name,
    description: req.body.description,
    user_created: mongoose.Types.ObjectId(req.body.user_created),
  });
  await newHabilidad.save();
  res.json({ msg: message.success });
};

module.exports = ctrlHabilidad;
