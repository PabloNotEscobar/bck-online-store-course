const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')


router.post('/', deviceController.first);
router.get('/', deviceController.sec)
router.get('/:id', deviceController.getOne)




module.exports = router