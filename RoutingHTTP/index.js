var http = require('http');
var urlp = require('url');

var server = http.createServer(function(req, res) {
    const { method, url, headers, rawHeaders  } = req;
    console.log('url: ' + url);
    console.log('method: ' + method);
    console.log('port: ' + process.env.PORT);
    console.log('time: ' + 1);

    //get url infomation
    var urlParts = urlp.parse(req.url);
    console.log(req.url, urlParts);
    ////////////////////////////////////////////
    //direct the request to appropriate function to be processed based on the url pathname
    console.log(urlParts.pathname.replace('/RoutingHTTP', ''));
    urlParts.pathname = urlParts.pathname.replace('/RoutingHTTP', '');
    console.log(req.url, urlParts);

    switch(urlParts.pathname) {
        case "/":
            var msg = homepage(req, res);
            res.writeHead(200, {"Content-Type":"text/plain"});
            res.write(JSON.stringify(msg));
            res.end(JSON.stringify(urlParts));
            break;
        case "/read":
            read(req, res);
            break;
        case "/svc/update":
            update(req, res);
            break;
        default:
            res.writeHead(200, {"Content-Type":"text/plain"});
            res.write("reached default\n");
            res.end(JSON.stringify(urlParts));
            break;
    }
    ////////////////////////////////////////////
    //res.writeHead(200, {"Content-Type":"text/plain"});
    //res.end("Hello World from app routinghttps\n");
})

//functions to process incoming requests
function homepage(req, res) {
    return "Hello, this is the home page 1 :)\n"; 
}
 
function read(req, res) {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello, there is no data for reading yet.");    
}
 
function update(req, res) {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello, there is no data to update.");  
}

var port = process.env.PORT || 3000;
server.listen(port);
console.log('server is running on port: ' + port);