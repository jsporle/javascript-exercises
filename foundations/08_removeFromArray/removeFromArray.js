const removeFromArray = function(array, ...itemtoRemove) {
    return array.filter(item => !itemtoRemove.includes(item))
};

console.log(removeFromArray([1, 2, 3, 4], 2))

// Do not edit below this line
module.exports = removeFromArray;
