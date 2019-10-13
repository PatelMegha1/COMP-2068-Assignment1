var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Megha Patel' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Hello World' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Hello World' });
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Hello World' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Hello World' });
});
module.exports = router;
