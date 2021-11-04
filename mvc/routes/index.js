const { Router } = require('express'),
router = Router()

router.use('/user', require('../routes/user.route'))  
router.use("/habilidad", require("../routes/habilidades.route"));  
router.use('/roles', require('../routes/role.routes'))

module.exports = router