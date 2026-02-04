const sumAll = function(a, b) {
    if (a === b) {
        return a + b;
    }
    if ((a < 0) || (b < 0) ||
        (typeof a !== "number") || (typeof b !== "number") || 
        (!Number.isInteger(a)) || (!Number.isInteger(b))) { 
        return "ERROR";
    } 
    if (a > b) {
        let temp = a
        a = b
        b = temp
    }

    let sum = 0
    while (a <= b) {
        sum += a;
        a++;
    }

    return sum
};

console.log(sumAll(1,3))




// Do not edit below this line
module.exports = sumAll;
