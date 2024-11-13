var express = require('express');
var indexController = require('../controllers/indexController.js');

var router = express.Router();

router.get('/.netlify/functions/api', indexController);