const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', userController.getUser);
router.post('/new', userController.createUser);

module.exports = router;
