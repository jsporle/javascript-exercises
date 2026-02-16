const add = function(a, b) {
  return(a + b);
};

const subtract = function(a, b) {
  return(a - b);
};

const sum = (numbers) => {
  return numbers.reduce((total, current) => {
    return total + current;
  }, 0);
};

console.log(sum([1, 5, 9, 10]));

const multiply = (numbers) => {
  return numbers.reduce((total, current) => {
    return total * current;
  }, 1); 
};

console.log(multiply([1, 5, 9, 10]));

const power = function(base, exp) {
	return(base**exp);
};

console.log(power(2,3));

const factorial = (input) => {
  if (input === 0 || input === 1) return 1;
  const factorialSequence = Array.from({length : input}, (v, i) => i + 1);
  return factorialSequence.reduce((total, current) => total * current, 1); 
};

console.log(factorial(8));
	

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
