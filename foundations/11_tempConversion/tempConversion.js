const convertToCelsius = function(fahernitTemp) {
  if(fahernitTemp>=0){}
  var celsius=(fahernitTemp-32)*5/9;
  var roundedCelsius=Math.round(celsius*10)/10;
  return roundedCelsius;
};

const convertToFahrenheit = function(celsiusTemp) {
  var fahrenheit=(celsiusTemp*(9/5))+32;
  var roundedFahrenheit=Math.round(fahrenheit*10)/10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
