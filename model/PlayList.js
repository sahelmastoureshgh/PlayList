var google = require ('googleapis');
google.options ({ auth: 'AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE' });
var youtube = google.youtube ('v3');

/**Call the  API to retrieve the playlist Id by searching author name. 
**/
exports.findPlaylistID = function(query,callback) {
	youtube.search.list({
		q: query,
		maxResults: 20,
		part: 'id'
	}, function(err, response) {
		if (err) {
			displayMessage(response.error.message);
			return;
		}
		if (response.items && response.items.length > 0) {
			//filter out the one has playlistId
			var result=response.items.filter(function(v){ return v['id']['playlistId'] != null; });
            if(result.length>0)
			{
				callback(result[0]['id']['playlistId']);
			}
		}
	});
}
	
