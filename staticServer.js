var http = require('http');
var server = http.createServer();

server.on('request',function(request,response){
	response.write('hello world');
	response.end();
});

server.listen(3000);