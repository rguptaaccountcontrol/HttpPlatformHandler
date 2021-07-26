// index.js
//imports express module
let express = require('express');
//initializes express app
let app = express();
var urlp = require('url');
//import routes
let routes = require('./routes.js');
let routes_r = require('./routes_r.js');

///////////////////////
// We can route to different route applications (or controllers as they are called in C#)
// Here we attatch the URL to the routes we need to use for that URL
// In this example we are using two routes called "routes" and "routes_r"
// The Alias for IIS is "routeExpress"
app.use('/routes', routes);  // use (http://localhost:30550/routes) This url does not work with IIS, since the Ailas does not match
app.use('/routeExpress', routes);  // use http://localhost/routeExpress/home for IIS; (http://localhost:30550/routeExpress/home)
app.use('/routeExpress/r', routes_r);  // use http://localhost/routeExpress/r for IIS; (http://localhost:30550/routeExpress/r)
//////////////////////////////

//listens to server at port 3050
var port = process.env.PORT || 30550;
var server = app.listen(port);
console.log('server is running on port: ' + port);
//console.log("Example app listening at http://%s:%s", server.address().address, server.address().port)