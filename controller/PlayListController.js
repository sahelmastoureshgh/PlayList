var ArtistList = require('../model/ArtisList');
var PlayList = require('../model/PlayList');
/**
 * Seach playlist id for chosen artist  
 */

exports.search = function(req, res, query, names){
	var selectedOne = query;
	PlayList.findPlaylistID(query,function(returnValue) {
		  res.render('index', { artists:names , listId: returnValue, selectedOne: selectedOne});
    });

}
exports.getArtistName=function()
{
	return ArtistList.artistName();
}
