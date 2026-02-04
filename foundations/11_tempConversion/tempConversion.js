const convertToCelsius = function(inputFahrenheit) {
  // c = (f − 32) × ⁠5/9
  let outputCelsius = ((inputFahrenheit - 32) * (5 / 9));
  if (!Number.isInteger(outputCelsius)) {
    return outputCelsius.toFixed(1);
  }
  return outputCelsius;  
};

const convertToFahrenheit = function(inputCelsius) {
  // f = (⁠9/5c + 32)
  let outputFahrenheit = ((inputCelsius * (9 / 5)) + 32);
  if (!Number.isInteger(outputFahrenheit)) {
    return outputFahrenheit.toFixed(1);
  }
  return outputFahrenheit; 
};

console.log(convertToCelsius(-10))
console.log(convertToFahrenheit(-10))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
