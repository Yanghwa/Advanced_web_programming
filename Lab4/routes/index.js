var express = require('express');
var router = express.Router();


router.get('/junghwan', function(req, res, next) {
  res.render('junghwan', { title: 'Junghwan Yang - Me', content: 'This is me. Trying to be professional. Now I\'m a student at Georgian Collge.' });
});
router.get('/sunok', function(req, res, next) {
  res.render('sunok', { title: 'Sunok Kang - Mother', content: 'This is my mother, living in Korea. She is always good when I ask somethig.' });
});
router.get('/younggyu', function(req, res, next) {
  res.render('younggyu', { title: 'Younggyu Yang - Father', content: 'This is my father. He is so kind to everyone.' });
});
router.get('/heena', function(req, res, next) {
  res.render('heena', { title: 'Heena Yang - Sister', content: 'This is my older sister. She is living in Switzerland, and she is very good professional **.' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main Page - Nothing', content: 'Hey Hey Hey' });
});

module.exports = router;
