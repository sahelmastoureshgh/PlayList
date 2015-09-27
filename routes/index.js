var express = require('express');
var router = express.Router();
var PlayListController = require('../controller/PlayListController');
var names = PlayListController.getArtistName();
/* GET home page. */
router.get('/', function(req, res, next) {	
   PlayListController.search(req, res, names[0], names);	
});
/* POST */
router.post('/', function(req, res, next) {	
   PlayListController.search(req, res, req.body.selectedArtist,names);	
});

module.exports = router;
