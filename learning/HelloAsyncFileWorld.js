//load http module
var http = require('http');
var fs = require('fs');

var counter = 0;

//write out some numbers
function writeNumbers(response) {
	
	// increment global, write to client
	for(var i = 0;i<100;i++) {
		counter++;
		response.write(counter.toString() + '\n');
	}


}

//create http server
http.createServer(function (request, response) {
	var query = require('url').parse(request.url).query;
	 app = require('querystring').parse(query).file+".txt";

	//content header
	response.writeHead(200,{'content-type': 'text/plain',
							'accept':'*/*'});
							
	// write out nums
	writeNumbers(response);
	
	setTimeout(function() {
		console.log('opening stuff in '+ app);
		//open and read in file contents
		fs.readFile(app,'utf8', function(err,data) {
			if(err)
				response.write('Could not find or open file');
			else
				response.write(data);
		response.end();
		});
	
	}
	, 2000);

}).listen(8082);

console.log ('Server running on 8082/');