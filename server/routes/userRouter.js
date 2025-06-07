const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const {User} = require("../modules/modules");
const {use} = require("express/lib/application");


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

module.exports = router