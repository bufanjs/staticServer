var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response) {
    fs.readFile(__dirname+"/static/index.html", function(err,data) {
    	if(err){
    		console.log(err);
    		return;
    	}
        response.write(data);
        response.end();
    });
});

server.listen(3000);
console.log("run port 3000");
