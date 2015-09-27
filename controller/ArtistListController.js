var ArtistList = require('../model/ArtisList');
var PlayList = require('../model/PlayList');
/**
 * Render pick list and the first playlist video for the first item
 */

exports.pickList = function(req, res){
	var names= ArtistList.artistName();
	
	
	PlayList.findPlaylistID(names[0],function(returnValue) {
		  res.render('index', { artists:names , listId: returnValue });
    });

}