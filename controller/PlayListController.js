var PlayList = require('../model/PlayList');
/**
 * Handle search 
 */

exports.search = function(req, res){
	"use strict";
	var query = 'Elton John';
	PlayList.findPlaylistID(query,function(returnValue) {
          res.render('player', { listId: returnValue })
    });

}