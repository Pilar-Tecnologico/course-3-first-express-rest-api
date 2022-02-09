const express = require('express');
const router = express.Router();
const nasaController = require('../controllers/nasa.controller')

/* GET users listing. */
router.get('/apod', nasaController.getApod);

module.exports = router;
