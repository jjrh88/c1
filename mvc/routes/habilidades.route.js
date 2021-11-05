const express = require("express"),
  router = express.Router(),
  habilidadCtrl = require("../controllers/habilidades.controller");

router.post("/", habilidadCtrl.create);

module.exports = router;
