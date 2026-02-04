const leapYears = function(year) {
    if ((year % 4 === 0)) {
        if (year % 100 === 0) {
            if (year % 400 !== 0) {
                return false;
            }
        }
        return true;
    } 
    return false;
};

console.log(leapYears(2000));
console.log(leapYears(1985));

//leap years are every four years
//if years divisible by 100 they are not leap years unless
    //they are divisible by 400
//year must be greater or equal to zero


// Do not edit below this line
module.exports = leapYears;
