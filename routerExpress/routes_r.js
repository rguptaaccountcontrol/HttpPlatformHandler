// routes_r.js

var express = require('express');
//initialize router
var router_r = express.Router();

//get request   
router_r.get('/home', function(request, response){
    response.send("Welcome to GET router_r");
});
//post request
router_r.post('/home', function(request, response){
    response.send("Welcome to POST router_r");
});


router_r.get('/', function(request, response){
    response.send("Welcome to GET home of / router_r");
});


//it enables to include this file's code in index.js file
module.exports = router_r;