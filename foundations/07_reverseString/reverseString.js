const reverseString = function(string) {
    let stringReversed = "";
    let i = string.length - 1;
    while (i >= 0) {
        stringReversed += string[i]
        i--
    }
    return stringReversed;
};

console.log(reverseString("hellothere!"))

// Do not edit below this line
module.exports = reverseString;
