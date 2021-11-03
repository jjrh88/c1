const express = require('express'),
router =  express.Router(),
userCtrl = require('../controllers/user.controller')

router.post('/', userCtrl.create)
//router.put('/', userCtrl.update)


module.exports = router
