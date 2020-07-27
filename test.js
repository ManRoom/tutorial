

var reader = require('./addition');
var util_method = require('util');
var event_method = require('events');

var fs = require('fs');

var http = require('http');
//const { stringify } = require('querystring');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {'Content-type' : 'application/json; charset=utf-8' });
    var rf = fs.createReadStream(__dirname + '/main_file.html', 'utf8');
    rf.pipe(response);
   // response.end("Hi, here we again\n");


   var object = {
    name: 'user',
    id: 'id'
};

response.end(JSON.stringify(object));

});




server.listen(8080, '127.0.0.1');
console.log("detecting port: 8080");

// install dependencies:
// nmp install express -save
// npm init