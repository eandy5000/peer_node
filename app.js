var http = require('http');
var randomNumber = require('./randomNumber');
var dollars = require('./dollars');
var accountBalance = require('./accountBalance');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(accountBalance());
    response.end();
}).listen(8000);


module.exports = http;