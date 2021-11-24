const { Router } = require('express'),
router = Router()

router.use('/auth', require('../routes/auth'))  

module.exports = router