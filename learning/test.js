//require http
var http = require('http');

//http options
var options = {
	host:'localhost',
	port:8082,
	path:'/?file=secondary',
	method:'GET'

};

var processPublicTimeline = function(response) {
	//finished? ok write the data to the file
	console.log('finished');
};


for(var i = 0; i<2000;i++)
{
 // make the request and then end it, to close the conn
	http.request(options,processPublicTimeline).end();
}