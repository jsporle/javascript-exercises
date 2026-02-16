const palindromes = function (input) {
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    const str = input.toLowerCase().replace(/[^a-z0-9]/g, "");

    let fromStart = 0;
    let fromEnd = str.length -1;
    
    while (fromStart < fromEnd) {
        if (str[fromStart] !== str[fromEnd]) {
            return false;
        }
    fromStart++;
    fromEnd--;
    }
    
    return true;
};

console.log(palindromes("hello!"))
console.log(palindromes("hellolleh"))

// Do not edit below this line
module.exports = palindromes;
