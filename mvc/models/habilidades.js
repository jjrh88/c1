const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HabilidadesSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now() },
  hour: { type: Date },
  name: { type: String, required: true, lowercase: true },
  description: { type: String, max: 200 },
  status: { type: Boolean, default: false },
  updated_at: { type: Date, default: Date.now() },
  user_created: { type: Schema.Types.ObjectId, ref: "mvc_user" },
});

module.exports = mongoose.model("mvc_habilidades", HabilidadesSchema);
