const express = require('express'),
router = express.Router(),
roleCtrl = require('../controllers/roles.controller')

router.post('/', roleCtrl.create)

module.exports = router