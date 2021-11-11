const express = require('express'),
router = express.Router(),
roleCtrl = require('../controllers/roles.controller')

router.post('/', roleCtrl.create)
router.post('/status', roleCtrl.enable)
router.delete('/:_id', roleCtrl.delete)

module.exports = router