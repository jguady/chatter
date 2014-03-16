//load http module
var http = require('http');

//create http server
http.createServer(function (request, response) {
	//content header
	response.writeHead(200,{'content-type': 'text/plain',
							'accept':'*/*'});
	
	//write message
	response.end("Hello, World!\n");
	


}).listen(8082);

console.log ('Server running on 8082/');