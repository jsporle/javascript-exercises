const repeatString = function(string, num) {
    let i = num;
    let result = ""
    while (i > 0) {
    result += string;
    i--}
    return result;
};

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
