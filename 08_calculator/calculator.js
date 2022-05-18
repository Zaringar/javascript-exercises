const add = function(number,number2) {
	summe = number + number2;
  return summe;
};

const subtract = function(number, number2) {
	summe = number - number2;
  return summe;
};
const sum = function(numbers) {
  var x = numbers.reduce(function(prev,curr){
    return curr + prev;
  },0);
    return x;
};

const multiply = function(numbers) {
 let Produkt = numbers.reduce((a, b) => a * b);
    return Produkt;
};

const power = function(number, exponent) {
	var Produkt = Math.pow(number, exponent)
  return Produkt;
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
