	/** Created by Junghwan Yang on 1/11/2017. ...*/

//first node page to load in a browser

//reference the http library that ships with node
var http = require('http');

//start a http server asynchronously
http.createServer(function(request, response) {
	//send a response
	response.writeHead(200);
	response.write('<h1>Our second node page with noedemon</h1>');
	response.end();
}).listen(3000);

//display a messge to the console
console.log('Server running on port 3000');