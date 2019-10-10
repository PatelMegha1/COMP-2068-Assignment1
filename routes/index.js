var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Megha Patel' });
});
router.get('/', function(req, res, next) {
  res.render('/home.js');
});

module.exports = router;
