const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')


router.post('/create', typeController.create)
router.post('/getall', typeController.getAll)
router.get('/auth', (req, res) => {
    res.json({message: 'asdfasd'})
})


module.exports = router