const { Router } = require('express'),
router = Router()

router.use('/user', require('../routes/user.route'))  

module.exports = router