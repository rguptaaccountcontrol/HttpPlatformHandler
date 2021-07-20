var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello World from app2 TWO\n");
})

var port = process.env.PORT || 3001;
server.listen(port);
console.log('server is running on port: ' + port);