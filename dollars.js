

var formatDollars = function(number){
    number = parseInt(number);
    number = number.toFixed(2);
    return "$" + number.replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};

module.exports = formatDollars;