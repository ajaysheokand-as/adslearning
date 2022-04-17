var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const { request } = require('../app');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome');
});


module.exports = router;
