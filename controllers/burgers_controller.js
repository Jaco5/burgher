var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  burger.all(function(data) {
    var hbsObject = { burger_name: data };
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function (req, res) {
  burger.create(req.body.burger_name, function() {
    res.render('index');
  });
});

router.put('/api/burgers/:id', function (req, res) {
  burger.update(req.params.id, function() {
    res.render('index');
  });
});



module.exports = router;