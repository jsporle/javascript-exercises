const convertToCelsius = function(inputFahrenheit) {
  // c = (f − 32) × ⁠5/9
  let outputCelsius = (inputFahrenheit - 32) * (5 / 9);
  return +outputCelsius.toFixed(1)
};

const convertToFahrenheit = function(inputCelsius) {
  // f = (⁠9/5c + 32)
  let outputFahrenheit = (inputCelsius * (9 / 5)) + 32;
  return +outputFahrenheit.toFixed(1); 
};

console.log(convertToCelsius(-10))
console.log(convertToFahrenheit(-10))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
