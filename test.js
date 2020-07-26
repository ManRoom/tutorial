

var reader = require('./addition');
var util_method = require('util');
var event_method = require('events');

var fs = require('fs');

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {'Content-type' : 'text/plain charset = UTF-8' });
    response.end("Hi, here we again\n");
});

server.listen(8080, '127.0.0.1');
console.log("detecte port: 8080");





















// fs.readFile('common.txt', 'UTF-8', function(err, data) {
//     if(!data) {
//         console.log('file is empty');
//     }
//     console.log(data);
// });

// fs.unlink('common.txt', function() { /// delete file
//     console.log("file is deleted!\n");
// });
// //console.log(file_reader + "\n");


//var write_str = fs.writeFileSync('common.txt', " [" + file_reader + "] // code of additions");



//  var list_accounts = function(name_text) {
//     this.name_text = name_text;
//  };
//
//  util_method.inherits(list_accounts, event_method.EventEmitter);
//
//  var user_one = new list_accounts('user_one');
//
// user_one.on('user_one', function(text) {
//
//   console.log(user_one.list_accounts);
// });
//
// user_one.emit('user_one');
//
//



// var readline = require('readline');
//
// var input_operator = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// input_operator.question(" r ", function(x) {
//   // TODO: Log the answer in a database
//   console.log("r:", x);
//
//   input_operator.close();
// });
//
//










// var events = require('events');
//
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('on_click', function() {
// 	console.log("Это событие сработало!");
// });
//   eventEmitter.emit('on_click');
