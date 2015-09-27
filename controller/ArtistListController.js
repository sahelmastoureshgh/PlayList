var ArtistList = require('../model/ArtisList');
/**
 * Render pick list and the first playlist video for the first item
 */

exports.pickList = function(req, res){
	//var names =ArtistList.artistName();
	res.render('index');
	//PlayList.findPlaylistID(names[0],function(returnValue) {
         // res.render('player', { listId: returnValue })
   // });

}