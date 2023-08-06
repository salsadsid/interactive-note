const express = require('express');
const router = express.Router()
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

router.route('/sign').post(userController.signup)
router.route('/login').post(userController.login)
router.route('/auth').get(verifyToken, userController.persist)

module.exports = router;
