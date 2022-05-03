var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_xx/index', { id: '123456789', name: 'Hsingtai Chung' });
});

module.exports = router;