
//imports express module
let express = require('express');
//initializes express app
let app = express();
//initialize router
var router = express.Router();


//creates all function with request and response parameters
app.get('/', function(req, res){

    console.log('reached');
    //sends response to client or browser
    res.send("Welcome to Home again");

});

// for HttpPlatformHandler we need to give the website Alis in IIS to reach the home page.
// The IIS website alias is passed as a URL.
// To test the code in express without IIS, use the url http://localhost:3000/RoutingExpress instead of http://localhost:3000/
app.get('/RoutingExpress/', function(req, res){

    console.log('reached RoutingExpress');
    //sends response to client or browser
    res.send("Welcome to RoutingExpress Home");

});

// To test the code in express without IIS, use the url http://localhost:3000/RoutingExpress/read instead of http://localhost:3000/read
app.get('/RoutingExpress/read', function(req, res){

    console.log('reached RoutingExpress/read');
    //sends response to client or browser
    res.send("Welcome to RoutingExpress/read");

});

//listens to server at port 3000
var port = process.env.PORT || 3000;
app.listen(port);
console.log('server is running on port: ' + port);
