const { Router } = require('express'),
router = Router()

router.use('/user', require('../routes/user.route'))  
router.use("/habilidad", require("../routes/habilidades.route"));  

module.exports = router