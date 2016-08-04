var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yostik' });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', {
    title: 'Yostik | Privacy Policy',
    product: 'Yostik',
    website: 'www.yostik.io',
    email: 'hi@yostik.io'
  });
});

router.get('/tos', function(req, res, next) {
  res.render('tos', {
    title: 'Yostik | Terms of Service',
    product: 'Yostik',
    website: 'www.yostik.io',
    email: 'hi@yostik.io'
  });
});

router.get('/pokenum/privacy', function(req, res, next) {
  res.render('privacy', {
    title: 'PokéNum | Privacy Policy',
    product: 'PokéNum',
    website: 'www.yostik.io/pokenum',
    email: 'charca@gmail.com'
  });
});

router.get('/pokenum/tos', function(req, res, next) {
  res.render('tos', {
    title: 'PokéNum | Terms of Service',
    product: 'PokéNum',
    website: 'www.yostik.io/pokenum',
    email: 'charca@gmail.com'
  });
});

module.exports = router;
