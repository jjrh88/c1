const { Router } = require('express'),
router = Router()

router.use('/user', require('../routes/user.route'))  
router.use("/habilidad", require("../routes/habilidades.route"));  
router.use('/roles', require('../routes/role.routes'))
router.use('/inventory', require('../routes/inventory.routes'))

module.exports = router