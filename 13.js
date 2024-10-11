/**
 * @param {string} s
 * @return {number}
 */

var romanToIntV1 = function(s) {
    var romanDict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "CD": 400,
        "CM": 900,
        "": 0,
        },
        splitS = s.split(""),
        reversedS = [],
        result = 0;

    for (var i = 0; i < splitS.length; i++) {
        reversedS.push(romanDict[splitS[i]]);
    }

    for (var i = reversedS.length - 1; i >= 0; i--) {
        result += reversedS.pop();
    }

    return result;
    
};

// console.log(romanToIntV1("III")) //working
// console.log(romanToIntV1("LVIII")) // working
// console.log(romanToIntV1("MCMXCIV", "1000, (100, 1000), (10, 100), (1, 5)")) // not working

var romanToIntV2 = function(s) {
    var romanDict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
        },
        previousValue = 0,
        result = 0;

        for (let i = 0; i < s.split('').length; i++) {
            var currentValue = romanDict[s[i]]
            if (currentValue > previousValue) {
                // M C -> M X C I V
                // 1000 > 100
                // 1100 (previousValue) + 1000 - 2 * 100 (BODMAS - Bracket, Order, Division, Multiplication, Addition, Subtraction)
                // 1800
                result += currentValue - 2 * previousValue
            } else {
                result += currentValue
            }
            previousValue = currentValue
        }
        
    return result
};

console.log(romanToIntV2("III"))
console.log(romanToIntV2("LVIII"))
console.log(romanToIntV2("MCMXCIV")) // working