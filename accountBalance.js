var randomNumber = require('./randomNumber');
var dollars = require('./dollars');

var toDollars = function(){
    return dollars(randomNumber(100, 1000000));
};

var printOut = function(){
    return "Account Balance: \n" + toDollars();
};

module.exports = printOut;
