// routes.js

var express = require('express');
//initialize router
var router = express.Router();

//get request   
router.get('/home', function(request, response){
    const { method, url, headers, rawHeaders  } = request;
    console.log('url: ' + url);
    console.log('method: ' + method);
    
    var msg = method + ", url:" + url + "<p>";
    response.send(msg + " Welcome to GET");
});
//post request
router.post('/home', function(request, response){
    response.send("Welcome to POST");
});


router.get('/', function(request, response){
    response.send("Welcome to GET home of /");
});


//it enables to include this file's code in index.js file
module.exports = router;