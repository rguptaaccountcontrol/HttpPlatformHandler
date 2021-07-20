var http = require('http');
var server = http.createServer(function(req, res) {
    const { method, url, headers, rawHeaders  } = req;
    console.log('url: ' + url);
    console.log('method: ' + method);
    console.log('port: ' + process.env.PORT);
    //console.log('headers: ' + rawHeaders);
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello World from app\n");
})

var port = process.env.PORT || 3000;
server.listen(port);
console.log('server is running on port: ' + port);