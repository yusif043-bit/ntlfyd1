var express = require('express');
var indexController = require('../controllers/indexController');

var router = express.Router();

router.get('/.netlify/functions/api', indexController.indexGet);

module.exports = router;