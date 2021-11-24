const express = require('express'),
router =  express.Router(),
userCtrl = require('../controllers/user.controller')

router.post('/', userCtrl.create)
router.get("/", userCtrl.list);
//router.put('/', userCtrl.update)
router.post('/status', userCtrl.enable)
router.delete('/:_id', userCtrl.delete)


module.exports = router