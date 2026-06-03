const contains = function(object, phrase) {
  if (Number.isNaN(phrase) ? Number.isNaN(object) : object === phrase) return true;
  if (typeof object === 'object' && object !== null) {
    return Object.values(object).some(child => contains(child, phrase))
  }

  return false;
};
  
// Do not edit below this line
module.exports = contains;
