const convertToCelsius = function(temp1) {
  let conversion=(temp1-32)*5/9
  return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function(temp2) {
  let conversion2=temp2*(9/5)+32
  return Math.round(conversion2 * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
