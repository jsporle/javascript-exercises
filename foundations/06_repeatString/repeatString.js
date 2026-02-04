const repeatString = function(string, num) {
    if (num >= 0) {
        let i = num;
    let result = ""
    while (i > 0) {
    result += string;
    i--}
    return result;
    } else {
        return "ERROR"
    }
    
};

console.log(repeatString('hey', -1))
console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
