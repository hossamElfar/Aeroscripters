var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});

router.get('/api/data/codes',function(req,res){
  var codes =  require('../airports.json');
  res.json( codes );
});

module.exports = router;
