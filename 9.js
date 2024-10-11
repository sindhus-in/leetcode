/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if ( Math.sign(x) == -1) {
        return false;
    }

    var copyOfX = x.toString().split(''),
        xLen = copyOfX.length,
        result = [];

    for (i = 0 ; i < xLen; i++) {
        result.push(copyOfX.pop());
    }
    
    if ( x.toString() === result.join('')) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));