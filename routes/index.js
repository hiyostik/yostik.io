var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yostik' });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Yostik | Privacy Policy' });
});

router.get('/tos', function(req, res, next) {
  res.render('tos', { title: 'Yostik | Terms of Service' });
});

module.exports = router;
