const ftoc = function(TemperaturF) {
  let Celsius = (TemperaturF -32)*5/9
  let CelsiusR = Math.round(Celsius * 10) / 10
  return CelsiusR;
};

const ctof = function(TemperaturC) {
  let Fahrenheit = TemperaturC * 1.8 + 32
  let FahrenheitR = Math.round(Fahrenheit * 10) / 10
  return FahrenheitR;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
