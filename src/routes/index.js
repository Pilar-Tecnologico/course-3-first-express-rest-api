const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('Usuario autenticado y valido');
  next();
},mainController.getMain);

module.exports = router;
