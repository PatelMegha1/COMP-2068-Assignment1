var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Megha Patel' });
});
router.get('/home', function(req, res, next) {
  res.render('home', {title: 'Megha Patel'});
});
router.get('./partials/nav', function(req, res, next) {
  res.render('nav', {title: 'Megha Patel'});
});

module.exports = router;
