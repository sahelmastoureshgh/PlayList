var express = require('express');
var router = express.Router();
var ArtistListController = require('../controller/ArtistListController');
var PlayListController = require('../controller/PlayListController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { artists:['Best','Hello'] });
});

module.exports = router;
